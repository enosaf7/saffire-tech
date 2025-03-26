
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, ReviewRecord, isUsingDefaultCredentials } from '@/lib/supabase';
import { toast } from "sonner";
import { fallbackReviews } from '@/components/ReviewsSection';

// Function to fetch all reviews
export const fetchReviews = async (): Promise<ReviewRecord[]> => {
  // If using default credentials, return fallback data immediately
  if (isUsingDefaultCredentials) {
    console.log('Using fallback reviews data due to missing Supabase credentials');
    return fallbackReviews;
  }

  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reviews:', error);
      toast.error('Failed to load reviews. Using fallback data.');
      return fallbackReviews;
    }

    return data || fallbackReviews;
  } catch (error) {
    console.error('Exception fetching reviews:', error);
    toast.error('Failed to load reviews. Using fallback data.');
    return fallbackReviews;
  }
};

// Function to add a new review
export const addReview = async (review: Omit<ReviewRecord, 'id' | 'created_at'>): Promise<ReviewRecord> => {
  // If using default credentials, simulate adding to local storage and return
  if (isUsingDefaultCredentials) {
    console.log('Simulating review addition with fallback mechanism');
    
    // Create a "fake" review with an ID
    const newReview: ReviewRecord = {
      ...review,
      id: fallbackReviews.length + 1,
      date: new Date().toISOString().split('T')[0],
    };
    
    // Add to local storage to persist across page refreshes
    const storedReviews = JSON.parse(localStorage.getItem('fallbackReviews') || JSON.stringify(fallbackReviews));
    storedReviews.unshift(newReview);
    localStorage.setItem('fallbackReviews', JSON.stringify(storedReviews));
    
    return newReview;
  }

  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([review])
      .select()
      .single();

    if (error) {
      console.error('Error adding review:', error);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Exception adding review:', error);
    throw error;
  }
};

// Function to get fallback reviews with any locally saved ones
export const getFallbackReviewsWithLocal = (): ReviewRecord[] => {
  try {
    const storedReviews = localStorage.getItem('fallbackReviews');
    return storedReviews ? JSON.parse(storedReviews) : fallbackReviews;
  } catch (e) {
    return fallbackReviews;
  }
};

// Custom hook for reviews management
export const useReviews = () => {
  const queryClient = useQueryClient();

  // Query for fetching reviews
  const { data: reviews = [], isLoading, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
    staleTime: 1000 * 60 * 5, // 5 minutes
    initialData: getFallbackReviewsWithLocal, // Use local storage + fallback as initial data
  });

  // Mutation for adding a new review
  const addReviewMutation = useMutation({
    mutationFn: addReview,
    onSuccess: (newReview) => {
      // Optimistically update the UI
      queryClient.setQueryData(['reviews'], (oldData: ReviewRecord[] = []) => {
        return [newReview, ...oldData.filter(review => review.id !== newReview.id)];
      });
      
      // Then invalidate to refetch (if not using fallback)
      if (!isUsingDefaultCredentials) {
        queryClient.invalidateQueries({ queryKey: ['reviews'] });
      }
      
      toast.success("Thank you for your review! It has been added to the testimonials.");
    },
    onError: (error) => {
      console.error('Error adding review:', error);
      toast.error("Failed to submit review. Please try again.");
    },
  });

  return {
    reviews,
    isLoading,
    error,
    addReview: (review: Omit<ReviewRecord, 'id' | 'created_at'>) => addReviewMutation.mutate(review),
    isSubmitting: addReviewMutation.isPending,
  };
};
