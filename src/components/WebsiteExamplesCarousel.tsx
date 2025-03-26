
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Website = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
};

const websiteExamples: Website[] = [
  {
    id: 1,
    name: 'Portfolio Site',
    type: 'Personal Portfolio',
    imageUrl: '/website-examples/portfolio.jpg'
  },
  {
    id: 2,
    name: 'EduTech Platform',
    type: 'Educational Website',
    imageUrl: '/website-examples/education.jpg'
  },
  {
    id: 3,
    name: 'Student Shop',
    type: 'E-commerce',
    imageUrl: '/website-examples/ecommerce.jpg'
  },
  {
    id: 4,
    name: 'Research Project',
    type: 'Academic Showcase',
    imageUrl: '/website-examples/research.jpg'
  },
  {
    id: 5,
    name: 'Club Events',
    type: 'Student Organization',
    imageUrl: '/website-examples/events.jpg'
  },
  {
    id: 6,
    name: 'Tech Blog',
    type: 'Content Website',
    imageUrl: '/website-examples/blog.jpg'
  },
];

interface WebsiteExamplesCarouselProps {
  className?: string;
}

const WebsiteExamplesCarousel = ({ className }: WebsiteExamplesCarouselProps) => {
  return (
    <div className={cn("w-full", className)}>
      <Carousel 
        opts={{ 
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {websiteExamples.map((website) => (
            <CarouselItem key={website.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-sapphire-200 dark:border-sapphire-800">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div 
                        className="w-full h-full bg-sapphire-100 dark:bg-sapphire-900 animate-pulse"
                        style={{
                          backgroundImage: `url(${website.imageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white font-semibold text-lg">{website.name}</h3>
                        <p className="text-white/80 text-sm">{website.type}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 lg:-left-12 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70" />
        <CarouselNext className="right-1 lg:-right-12 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70" />
      </Carousel>
    </div>
  );
};

export default WebsiteExamplesCarousel;
