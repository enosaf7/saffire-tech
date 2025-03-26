
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, ReviewRecord } from '@/lib/supabase';
import { toast } from "sonner";

// Function to fetch all reviews
export const fetchReviews = async (): Promise<ReviewRecord[]> => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching reviews:', error);
    throw new Error(error.message);
  }

  return data || [];
};

// Function to add a new review
export const addReview = async (review: Omit<ReviewRecord, 'id' | 'created_at'>): Promise<ReviewRecord> => {
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
};

// Custom hook for reviews management
export const useReviews = () => {
  const queryClient = useQueryClient();

  // Query for fetching reviews
  const { data: reviews = [], isLoading, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
  });

  // Mutation for adding a new review
  const addReviewMutation = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      // Invalidate the reviews query to refetch the data
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
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
