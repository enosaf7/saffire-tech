
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export interface Review {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: string;
  featured?: boolean;
  date?: string;
}

// This will be our centralized reviews data that can be imported by other components
export const reviews: Review[] = [
  {
    id: 1,
    quote: "The software installation service saved me hours of frustration. Everything works perfectly now!",
    author: "Alex J.",
    role: "Engineering Student",
    rating: 5,
    featured: true,
    date: "2023-03-15"
  },
  {
    id: 2,
    quote: "My new business website looks amazing and was delivered right on schedule. Highly recommend!",
    author: "Michelle T.",
    role: "Business Major",
    rating: 5,
    featured: true,
    date: "2023-04-22"
  },
  {
    id: 3,
    quote: "Windows and Office work flawlessly now. The setup was quick and professional.",
    author: "David L.",
    role: "Computer Science Student",
    rating: 5,
    featured: true,
    date: "2023-05-10"
  },
  {
    id: 4,
    quote: "The data analysis for my project was exactly what I needed. The visualizations made my presentation stand out.",
    author: "Sarah K.",
    role: "Mathematics Student",
    rating: 5,
    featured: true,
    date: "2023-06-05"
  },
  {
    id: 5,
    quote: "Incredibly responsive and knowledgeable. Got my MATLAB running perfectly when I was on a tight deadline.",
    author: "James R.",
    role: "Physics Student",
    rating: 4,
    featured: true,
    date: "2023-07-12"
  },
  {
    id: 6,
    quote: "Very professional service. Made the process of setting up my academic software painless.",
    author: "Emma P.",
    role: "Chemistry Student",
    rating: 5,
    featured: false,
    date: "2023-08-20"
  },
  {
    id: 7,
    quote: "The website created for my small business has already brought in new customers. Worth every penny!",
    author: "Thomas W.",
    role: "Business Administration Student",
    rating: 5,
    featured: false,
    date: "2023-09-15"
  },
];

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

const ReviewsSection = ({ limit = 5, showViewAllButton = true }: { limit?: number, showViewAllButton?: boolean }) => {
  // Sort reviews by date (newest first)
  const sortedReviews = [...reviews]
    .sort((a, b) => {
      // Sort by date (newest first)
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, limit);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading sapphire-heading">What Students Say</h2>
          <p className="section-subheading mx-auto">
            Real experiences from fellow students who've used my services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedReviews.map((review) => (
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
                </div>
              </div>
              
              <StarRating rating={review.rating} />
              
              <p className="text-muted-foreground text-sm italic">"{review.quote}"</p>
            </div>
          ))}
        </div>

        {showViewAllButton && reviews.length > limit && (
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="group border-sapphire-500 text-sapphire-700">
              <Link to="/reviews">
                View All Reviews
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
