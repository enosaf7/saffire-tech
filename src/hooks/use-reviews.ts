
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, ReviewRecord, isUsingDefaultCredentials, exportReviewsToCSV, importReviewsFromCSV, LOCAL_STORAGE_KEY } from '@/lib/supabase';
import { toast } from "sonner";
import { fallbackReviews } from '@/components/ReviewsSection';

// Function to fetch all reviews
export const fetchReviews = async (): Promise<ReviewRecord[]> => {
  // If using default credentials, return fallback data immediately
  if (isUsingDefaultCredentials) {
    console.log('Using fallback reviews data due to missing Supabase credentials');
    return getFallbackReviewsWithLocal();
  }

  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reviews:', error);
      toast.error('Failed to load reviews. Using fallback data.');
      return getFallbackReviewsWithLocal();
    }

    return data || getFallbackReviewsWithLocal();
  } catch (error) {
    console.error('Exception fetching reviews:', error);
    toast.error('Failed to load reviews. Using fallback data.');
    return getFallbackReviewsWithLocal();
  }
};

// Function to add a new review
export const addReview = async (review: Omit<ReviewRecord, 'id' | 'created_at'>): Promise<ReviewRecord> => {
  // If using default credentials, simulate adding to local storage and return
  if (isUsingDefaultCredentials) {
    console.log('Simulating review addition with fallback mechanism');
    
    // Create a "fake" review with an ID
    const storedReviews = getFallbackReviewsWithLocal();
    const newId = storedReviews.length > 0 
      ? Math.max(...storedReviews.map(r => r.id)) + 1 
      : 1;
      
    const newReview: ReviewRecord = {
      ...review,
      id: newId,
      date: new Date().toISOString().split('T')[0],
    };
    
    // Add to local storage to persist across page refreshes
    storedReviews.unshift(newReview);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedReviews));
    
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
    const storedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedReviews ? JSON.parse(storedReviews) : fallbackReviews;
  } catch (e) {
    return fallbackReviews;
  }
};

// Export reviews to CSV file for download
export const downloadReviewsAsCSV = (reviews: ReviewRecord[]): void => {
  const csvContent = exportReviewsToCSV(reviews);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'reviews.csv');
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  toast.success("Reviews exported successfully");
};

// Import reviews from a CSV file
export const importReviewsFromFile = (file: File): Promise<ReviewRecord[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const csvContent = event.target?.result as string;
        const importedReviews = importReviewsFromCSV(csvContent);
        
        // Save to local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(importedReviews));
        toast.success(`${importedReviews.length} reviews imported successfully`);
        resolve(importedReviews);
      } catch (error) {
        toast.error("Failed to import reviews. Invalid file format.");
        reject(error);
      }
    };
    
    reader.onerror = () => {
      toast.error("Failed to read the file");
      reject(new Error("Failed to read the file"));
    };
    
    reader.readAsText(file);
  });
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

  // Mutation for importing reviews
  const importReviewsMutation = useMutation({
    mutationFn: importReviewsFromFile,
    onSuccess: (importedReviews) => {
      queryClient.setQueryData(['reviews'], importedReviews);
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (error) => {
      console.error('Error importing reviews:', error);
    }
  });

  return {
    reviews,
    isLoading,
    error,
    addReview: (review: Omit<ReviewRecord, 'id' | 'created_at'>) => addReviewMutation.mutate(review),
    isSubmitting: addReviewMutation.isPending,
    exportReviews: () => downloadReviewsAsCSV(reviews),
    importReviews: (file: File) => importReviewsMutation.mutate(file),
    isImporting: importReviewsMutation.isPending
  };
};
