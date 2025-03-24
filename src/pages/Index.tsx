
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Laptop, 
  Code, 
  BookOpen, 
  Monitor, 
  Settings, 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Calendar,
  Gem,
  Diamond,
  Database,
  ChartBar
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';

const services = [
  {
    id: 1,
    name: 'Educational Software Installation',
    description: 'Get MATLAB, Maple, Minitab, SPSS, and other academic software installed properly.',
    icon: BookOpen,
    link: '/educational-software',
  },
  {
    id: 2,
    name: 'Windows & Office Installation',
    description: 'Professional Windows and Microsoft Office installations with full activation.',
    icon: Monitor,
    link: '/windows-office',
  },
  {
    id: 3,
    name: 'Website Creation',
    description: 'Custom websites for student entrepreneurs, projects, and portfolios.',
    icon: Code,
    link: '/website-creation',
  },
  {
    id: 4,
    name: 'Data Analysis',
    description: 'Statistical analysis, data visualization, and mathematical modeling for academic projects.',
    icon: ChartBar,
    link: '/data-analysis',
  }
];

const testimonials = [
  {
    id: 1,
    quote: "The software installation service saved me hours of frustration. Everything works perfectly!",
    author: "Alex J.",
    role: "Engineering Student",
  },
  {
    id: 2,
    quote: "My new business website looks amazing and was delivered right on schedule. Highly recommend!",
    author: "Michelle T.",
    role: "Business Major",
  },
  {
    id: 3,
    quote: "Windows and Office work flawlessly now. The setup was quick and professional.",
    author: "David L.",
    role: "Computer Science Student",
  },
];

const benefits = [
  {
    title: "Save Time",
    description: "Focus on your studies while I handle the technical stuff",
    icon: Clock,
  },
  {
    title: "Expert Support",
    description: "Get help from someone who knows university tech needs",
    icon: Settings,
  },
  {
    title: "Student Friendly",
    description: "Services designed specifically for student requirements",
    icon: Users,
  },
];

const BookingCTA = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
    <Button asChild size="lg" className="btn-hover bg-sapphire-600 hover:bg-sapphire-700 shadow-lg">
      <Link to="/contact">Book a Service</Link>
    </Button>
    <Button asChild variant="outline" size="lg" className="group border-sapphire-500 text-sapphire-700">
      <Link to="/about" className="flex items-center">
        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  </div>
);

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <Diamond className="h-16 w-16 text-sapphire-500 animate-float" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block font-playfair">Tech Support</span>
              <span className="block text-gradient mt-1 sapphire-heading">For Students, By Students</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-8 text-muted-foreground">
              Professional tech services to help you focus on what matters most - your education.
              Software installation, Windows & Office setup, website creation, and data analysis.
            </p>
            <BookingCTA />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading sapphire-heading">My Services</h2>
            <p className="section-subheading mx-auto">
              Professional technical support to enhance your academic experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`sapphire-card rounded-lg p-8 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center p-2 bg-sapphire-100 rounded-lg mb-5">
                  <service.icon className="h-6 w-6 text-sapphire-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sapphire-800">{service.name}</h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>
                <Button asChild variant="outline" className="group mt-auto w-full border-sapphire-200 text-sapphire-700 hover:bg-sapphire-50">
                  <Link to={service.link} className="flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading sapphire-heading">How It Works</h2>
            <p className="section-subheading mx-auto">
              A simple 3-step process to get the tech help you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Book an Appointment",
                description: "Use the online form to request your service and select a time that works for you.",
                icon: Calendar,
              },
              {
                step: "02",
                title: "Consultation",
                description: "We'll discuss your specific needs and the best approach for your situation.",
                icon: Laptop,
              },
              {
                step: "03",
                title: "Implementation",
                description: "I'll set everything up for you, ensuring it works perfectly before we're done.",
                icon: CheckCircle,
              }
            ].map((step, index) => (
              <div 
                key={step.step} 
                className={`text-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-full h-16 w-16 shadow-md mb-5 animate-float border border-sapphire-100">
                  <step.icon className="h-8 w-8 text-sapphire-600" />
                </div>
                <div className="text-sm font-medium text-sapphire-600 mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold mb-3 text-sapphire-800">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Benefits Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-right">
              <h2 className="section-heading mb-6 sapphire-heading">Why Students Choose My Services</h2>
              <p className="text-muted-foreground mb-8">
                I understand the unique challenges students face with technology. My services are designed to be:
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-sapphire-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-sapphire-800">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="btn-hover bg-sapphire-600 hover:bg-sapphire-700">
                  <Link to="/about">More About Me</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-fade-in-left">
              <div className="bg-secondary rounded-lg p-8 shadow-inner">
                <h3 className="text-xl font-semibold mb-6 text-sapphire-800">What Students Say</h3>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id} 
                      className="bg-white rounded-lg p-6 shadow-md border border-sapphire-100"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <p className="mb-4">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-medium text-sapphire-800">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-sapphire-600 text-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <Gem className="h-12 w-12 mx-auto mb-6 text-white/80 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to simplify your tech experience?</h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl mb-8 text-sapphire-100">
            Book a service today and focus on what matters most - your studies and projects.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-sapphire-600 border-white">
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
