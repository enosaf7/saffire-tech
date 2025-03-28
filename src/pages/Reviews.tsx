
import React, { useState, useMemo, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fallbackReviews } from '@/components/ReviewsSection';
import { Star, Download, Upload, AlertCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useReviews } from '@/hooks/use-reviews';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  const [sortOption, setSortOption] = useState("newest");
  const [filterRating, setFilterRating] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { 
    reviews: supabaseReviews, 
    isLoading, 
    error, 
    exportReviews,
    importReviews,
    isImporting
  } = useReviews();
  
  // Use Supabase reviews if available, otherwise fallback to hardcoded reviews
  const allReviews = supabaseReviews.length > 0 ? supabaseReviews : fallbackReviews;

  const filteredReviews = useMemo(() => {
    let result = [...allReviews];
    
    if (filterRating !== "all") {
      result = result.filter(review => review.rating === parseInt(filterRating));
    }
    
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(review => 
        review.quote.toLowerCase().includes(searchLower) || 
        review.author.toLowerCase().includes(searchLower) ||
        review.role.toLowerCase().includes(searchLower)
      );
    }
    
    switch(sortOption) {
      case "newest":
        result.sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateB - dateA;
        });
        break;
      case "oldest":
        result.sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateA - dateB;
        });
        break;
      case "highest":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        result.sort((a, b) => a.rating - b.rating);
        break;
    }
    
    return result;
  }, [allReviews, filterRating, searchTerm, sortOption]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importReviews(file);
    }
    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="section-heading mb-6">Student Reviews</h1>
          <p className="section-subheading mx-auto">
            See what students are saying about my tech services
          </p>
        </div>
      </section>
      
      <section className="py-10 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-end justify-between">
            <div className="w-full md:w-auto">
              <h2 className="text-2xl font-bold mb-6">All Reviews ({filteredReviews.length})</h2>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 w-full md:w-auto">
              <div className="w-full sm:w-auto">
                <Label htmlFor="search" className="mb-2">Search</Label>
                <Input 
                  id="search" 
                  placeholder="Search reviews..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-[200px]"
                />
              </div>
              
              <div className="w-full sm:w-auto">
                <Label htmlFor="rating-filter" className="mb-2">Rating</Label>
                <Select value={filterRating} onValueChange={setFilterRating}>
                  <SelectTrigger id="rating-filter" className="w-full sm:w-[120px]">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                    <SelectItem value="4">4 Stars</SelectItem>
                    <SelectItem value="3">3 Stars</SelectItem>
                    <SelectItem value="2">2 Stars</SelectItem>
                    <SelectItem value="1">1 Star</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto">
                <Label htmlFor="sort-by" className="mb-2">Sort By</Label>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger id="sort-by" className="w-full sm:w-[140px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="highest">Highest Rating</SelectItem>
                    <SelectItem value="lowest">Lowest Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-6 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-end gap-4 mb-8">
            <input
              type="file"
              ref={fileInputRef}
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button 
              variant="outline" 
              onClick={handleImportClick}
              disabled={isImporting}
              className="flex items-center gap-2"
            >
              <Upload size={16} />
              Import Reviews (CSV)
            </Button>
            <Button 
              variant="outline" 
              onClick={() => exportReviews()}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Export Reviews (CSV)
            </Button>
          </div>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Error loading reviews. Using fallback data.
              </AlertDescription>
            </Alert>
          )}
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-secondary rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Skeleton className="h-10 w-10 rounded-full mr-3" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[60%]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="bg-secondary rounded-lg p-6 shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in"
                  >
                    <div className="flex items-start mb-4">
                      <Avatar className="h-10 w-10 mr-3">
                        {review.avatar ? (
                          <AvatarImage src={review.avatar} alt={review.author} />
                        ) : (
                          <AvatarFallback className="bg-sapphire-200 text-sapphire-700">
                            {review.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <div className="font-bold text-sapphire-800">{review.author}</div>
                        <div className="text-xs text-muted-foreground">{review.role}</div>
                        {review.date && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {new Date(review.date).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <StarRating rating={review.rating} />
                    
                    <p className="text-muted-foreground text-sm italic">"{review.quote}"</p>
                  </div>
                ))}
              </div>
              
              {filteredReviews.length === 0 && (
                <div className="text-center py-10 px-6">
                  <p className="text-lg text-muted-foreground">
                    No reviews match your search criteria. Try adjusting your filters.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Reviews;
