
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, Clock, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Booking request submitted successfully! I'll be in touch soon.");
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="section-heading mb-6">Contact & Booking</h1>
          <p className="section-subheading mx-auto">
            Get in touch to book a service or ask any questions
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex gap-12">
            <div className="md:w-2/3 mb-12 md:mb-0 animate-fade-in-right">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Book a Service</CardTitle>
                  <CardDescription>
                    Fill out the form below to request a service appointment. I'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select onValueChange={handleServiceChange} value={formData.service}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="educational-software">Educational Software Installation</SelectItem>
                            <SelectItem value="windows-office">Windows & Office Installation</SelectItem>
                            <SelectItem value="website-creation">Website Creation</SelectItem>
                            <SelectItem value="other">Other (Please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <div className="relative">
                          <Input 
                            id="date" 
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required 
                          />
                          <CalendarIcon className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <div className="relative">
                          <Input 
                            id="time" 
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            required 
                          />
                          <Clock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide any additional details about your service needs" 
                        rows={5} 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-hover" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Book Service'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:w-1/3 animate-fade-in-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">contact@techhelp.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Campus Location</h3>
                        <p className="text-muted-foreground">University Campus, CA 94000</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-secondary rounded-lg shadow-inner">
                  <h2 className="text-xl font-bold mb-4">Service Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    * Hours may vary during exam periods and holidays
                  </div>
                </div>
                
                <div className="p-6 bg-primary/10 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Rush Service</h2>
                  <p className="text-muted-foreground mb-4">
                    Need urgent help? I offer rush services for time-sensitive situations at an additional fee.
                  </p>
                  <p className="text-sm font-medium">
                    Contact me directly for immediate assistance.
                  </p>
                </div>
                
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* Replace with an actual map or image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-gray-500">Campus Map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Booking FAQ</h2>
            <p className="section-subheading mx-auto">
              Quick answers to common questions about booking and appointments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly will you respond to my booking request?",
                answer: "I respond to all booking requests within 24 hours. For urgent needs, please call or text the phone number listed above."
              },
              {
                question: "What payment methods do you accept?",
                answer: "I accept cash, Venmo, PayPal, and most major credit cards. Payment is typically due at the time of service unless otherwise arranged."
              },
              {
                question: "Do you offer remote assistance?",
                answer: "Yes! Many services can be provided remotely via screen sharing. We can discuss whether remote assistance is appropriate for your specific needs."
              },
              {
                question: "What if I need to cancel or reschedule?",
                answer: "Please provide at least 24 hours notice for cancellations or rescheduling. Late cancellations may incur a small fee to cover reserved time."
              },
              {
                question: "How long do appointments typically last?",
                answer: "Service duration varies based on the type of assistance needed. Software installations typically take 1-2 hours, while website consultations are usually 30-60 minutes."
              },
              {
                question: "Do you offer discounts for multiple services?",
                answer: "Yes! If you need multiple services (e.g., Windows installation and educational software setup), I offer package deals. Just mention all needed services in your booking request."
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Student Testimonials</h2>
            <p className="section-subheading mx-auto">
              See what other students are saying about my services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The MATLAB installation was flawless. I was struggling for days before getting help, and now everything works perfectly!",
                author: "Jessica M.",
                program: "Engineering Student",
              },
              {
                quote: "My small business website looks amazing and was delivered ahead of schedule. Very professional service and great communication.",
                author: "Marcus T.",
                program: "Business Major",
              },
              {
                quote: "Fixed my Windows issues and got Office set up perfectly. Would definitely recommend to other students.",
                author: "Aiden K.",
                program: "Computer Science Student",
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-secondary rounded-lg p-8 shadow-inner animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-accent text-4xl font-serif mt-2 mb-4">"</div>
                <p className="italic mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl mb-8 text-primary-foreground/90">
            Book your service today and experience hassle-free tech support designed for students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary">
              <a href="#top">Book Now</a>
            </Button>
            <Button asChild size="lg" variant="link" className="text-white">
              <Link to="/">Learn More About Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
