
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebsiteExamplesCarousel from '@/components/WebsiteExamplesCarousel';
import { Code, CheckCircle, ArrowRight, Layers, Layout, Globe, Smartphone, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const WebsiteCreation = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="section-heading mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Website Creation for Students
          </motion.h1>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Custom websites to showcase your projects, launch your business, or build your personal brand
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Button asChild size="lg" className="bg-sapphire-600 hover:bg-sapphire-700 btn-hover">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Website Examples Section */}
      <section className="py-16 px-6 bg-secondary dark:bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="section-heading mb-4">Example Websites</h2>
            <p className="section-subheading mx-auto">
              Browse through some of my previous student website projects
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <WebsiteExamplesCarousel className="mb-8" />
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-start gap-12">
            <motion.div 
              className="md:w-3/5 mb-10 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Websites for Student Success</h2>
              <p className="text-muted-foreground mb-6">
                In today's digital world, having a website can set you apart, whether you're building a portfolio,
                launching a small business, or showcasing academic projects. I create affordable, 
                professional websites specifically designed for student needs.
              </p>
              
              <motion.div 
                className="grid md:grid-cols-2 gap-8 mb-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div variants={fadeIn} className="bg-secondary dark:bg-secondary/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Portfolio Websites</h3>
                  <p className="text-muted-foreground mb-4">
                    Showcase your academic achievements, projects, and skills to potential employers or graduate schools.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional design that highlights your work</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Easy-to-update content management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mobile-friendly and responsive</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-secondary dark:bg-secondary/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Business Websites</h3>
                  <p className="text-muted-foreground mb-4">
                    Launch your student business or side hustle with a professional online presence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Conversion-focused design that attracts customers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contact forms and booking functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Social media integration</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-secondary dark:bg-secondary/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Project Websites</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a dedicated site for your research projects, case studies, or academic work.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Clear presentation of complex information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Document/file downloads and sharing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Interactive elements for engagement</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-secondary dark:bg-secondary/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Landing Pages</h3>
                  <p className="text-muted-foreground mb-4">
                    Quick, focused pages to promote your event, product, or student organization.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>High-conversion design focused on one goal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Call-to-action optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Analytics to track performance</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">Why Students Need Websites</h3>
                <p className="text-muted-foreground mb-6">
                  A professional website can provide numerous benefits for students:
                </p>
              </motion.div>
              
              <motion.div 
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div variants={fadeIn} className="flex items-start p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Stand out to employers</span>
                    <p className="text-muted-foreground">A portfolio site showcases your work beyond what fits on a resume.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Launch student businesses</span>
                    <p className="text-muted-foreground">Establish credibility and attract customers for your side hustle.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Showcase academic projects</span>
                    <p className="text-muted-foreground">Create a dedicated space for research projects and coursework.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Build your personal brand</span>
                    <p className="text-muted-foreground">Start establishing your professional identity while still in school.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-sapphire-200 dark:border-sapphire-800 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center p-3 bg-sapphire-100 dark:bg-sapphire-900/50 rounded-full mb-4">
                    <Sparkles className="h-6 w-6 text-sapphire-600 dark:text-sapphire-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">My Website Service Includes:</h3>
                  
                  <div className="space-y-4">
                    {[
                      "Custom design tailored to your specific needs",
                      "Mobile-responsive layout that works on all devices",
                      "Content management system (if needed)",
                      "Domain name & hosting setup assistance",
                      "Search engine optimization basics",
                      "Training on how to update your site",
                      "Post-launch support and troubleshooting",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 transition-transform group-hover:scale-110" />
                        <span className="group-hover:text-sapphire-600 dark:group-hover:text-sapphire-400 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Website Examples */}
              <Card className="border-sapphire-200 dark:border-sapphire-800 shadow-lg overflow-hidden mb-8">
                <CardContent className="p-0">
                  <div className="p-6 bg-gradient-to-br from-sapphire-500/10 to-sapphire-700/10 dark:from-sapphire-600/20 dark:to-sapphire-900/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="h-5 w-5 text-sapphire-600 dark:text-sapphire-400" />
                      <h3 className="text-xl font-bold">Featured Work</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-video rounded-lg overflow-hidden shadow-md hover-lift">
                        <img 
                          src="/website-examples/portfolio-detail.jpg" 
                          alt="Student portfolio website" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-video rounded-lg overflow-hidden shadow-md hover-lift">
                        <img 
                          src="/website-examples/blog-detail.jpg" 
                          alt="Student blog website" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-video rounded-lg overflow-hidden shadow-md hover-lift">
                        <img 
                          src="/website-examples/project-detail.jpg" 
                          alt="Academic project website" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-video rounded-lg overflow-hidden shadow-md hover-lift">
                        <img 
                          src="/website-examples/shop-detail.jpg" 
                          alt="Student e-commerce website" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-4">
                      These are examples of previous student websites I've created.
                      Your website will be custom designed to meet your specific needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-sapphire-600 text-white dark:bg-sapphire-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Ready to Build Your Website?</h3>
                  <p className="text-sapphire-100 mb-6">
                    Let's discuss your website needs and create a professional online presence that helps you achieve your goals.
                  </p>
                  
                  <Button asChild variant="secondary" size="lg" className="w-full font-medium">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Schedule a Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-6 bg-secondary dark:bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">My Website Creation Process</h2>
            <p className="section-subheading mx-auto">
              A collaborative approach to building your perfect website
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We'll discuss your goals, preferences, and requirements for the website.",
              },
              {
                step: "02",
                title: "Planning",
                description: "I'll create a site plan outlining structure, features, and content needs.",
              },
              {
                step: "03",
                title: "Design",
                description: "You'll review design concepts and provide feedback for refinement.",
              },
              {
                step: "04",
                title: "Development",
                description: "I'll build your site with responsive design and all requested features.",
              },
              {
                step: "05",
                title: "Launch",
                description: "Your site goes live with training on how to maintain and update it.",
              },
            ].map((step, index) => (
              <motion.div 
                key={step.step} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-background rounded-full h-16 w-16 shadow-md mb-5 hover:shadow-lg transition-all transform hover:scale-105">
                  <span className="text-xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">Common Questions</h2>
            <p className="section-subheading mx-auto">
              Answers to frequently asked questions about website creation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How much does a student website cost?",
                answer: "I offer student-friendly pricing based on the complexity of your project. Basic portfolio sites start at $X, while more complex business sites with advanced features start at $Y. I'll provide a detailed quote after our initial consultation."
              },
              {
                question: "How long does it take to build a website?",
                answer: "Most student websites take 2-4 weeks from start to finish, depending on complexity and how quickly you provide content and feedback. Simple landing pages can be completed in as little as 1 week."
              },
              {
                question: "Do I need to purchase hosting and a domain name?",
                answer: "Yes, you'll need hosting and a domain name for your website. I can recommend student-friendly, affordable options and help you set everything up as part of my service."
              },
              {
                question: "Will I be able to update the website myself?",
                answer: "Absolutely! I build sites with user-friendly content management systems that make updates easy, even with no technical experience. I also provide training on how to maintain your site."
              },
              {
                question: "Can you help with content creation?",
                answer: "While you'll need to provide the core content, I can help with layout suggestions, basic SEO optimization, and formatting to ensure your content looks great on the site."
              },
              {
                question: "What happens if I need changes after the site launches?",
                answer: "I provide 30 days of support after launch for any issues or small adjustments. Beyond that, I offer affordable maintenance packages or hourly rates for updates you can't handle yourself."
              },
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-secondary dark:bg-secondary/50 rounded-lg p-6 shadow-inner hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your online presence?</h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl mb-8 text-primary-foreground/90">
              Let's create a website that showcases your skills, projects, or business to the world.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary">
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WebsiteCreation;
