
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { reviews as allReviews } from '@/components/ReviewsSection';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Reviews = () => {
  const [sortOption, setSortOption] = useState("newest");
  const [filterRating, setFilterRating] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="section-heading mb-6">Student Reviews</h1>
          <p className="section-subheading mx-auto">
            See what students are saying about my tech services
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-10 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-end justify-between">
            <div className="w-full md:w-auto">
              <h2 className="text-2xl font-bold mb-6">All Reviews ({allReviews.length})</h2>
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
      
      {/* All Reviews - Using the existing ReviewsSection component but with no limit */}
      <ReviewsSection limit={1000} showViewAllButton={false} />
      
      <Footer />
    </>
  );
};

export default Reviews;
