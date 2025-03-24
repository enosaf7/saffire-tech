
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Review {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    quote: "The software installation service saved me hours of frustration. Everything works perfectly now!",
    author: "Alex J.",
    role: "Engineering Student",
    rating: 5,
  },
  {
    id: 2,
    quote: "My new business website looks amazing and was delivered right on schedule. Highly recommend!",
    author: "Michelle T.",
    role: "Business Major",
    rating: 5,
  },
  {
    id: 3,
    quote: "Windows and Office work flawlessly now. The setup was quick and professional.",
    author: "David L.",
    role: "Computer Science Student",
    rating: 5,
  },
  {
    id: 4,
    quote: "The data analysis for my project was exactly what I needed. The visualizations made my presentation stand out.",
    author: "Sarah K.",
    role: "Mathematics Student",
    rating: 5,
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

const ReviewsSection = () => {
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
          {reviews.map((review) => (
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
      </div>
    </section>
  );
};

export default ReviewsSection;
