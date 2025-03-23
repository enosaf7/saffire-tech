
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, CheckCircle, AlertCircle, ArrowRight, Clock, Download, Shield } from 'lucide-react';

const EducationalSoftware = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="section-heading mb-6">Educational Software Installation</h1>
          <p className="section-subheading mx-auto">
            Professional installation of essential academic software to power your studies
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-start gap-12">
            <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6">Essential Software for Academic Success</h2>
              <p className="text-muted-foreground mb-6">
                Having the right software tools is crucial for academic success. I specialize in installing 
                and configuring academic software that students commonly need, including:
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    name: "MATLAB",
                    description: "Essential for engineering, mathematics, and scientific computing. I'll ensure it's properly installed with all the toolboxes you need for your courses.",
                    icon: BookOpen,
                  },
                  {
                    name: "Maple",
                    description: "Advanced mathematics software for symbolic and numeric computation. Get it set up correctly for your math and engineering coursework.",
                    icon: BookOpen,
                  },
                  {
                    name: "Minitab",
                    description: "Statistical software for data analysis in research and statistics courses. I'll configure it to match your specific academic needs.",
                    icon: BookOpen,
                  },
                  {
                    name: "SPSS",
                    description: "Comprehensive statistical analysis tool widely used in social sciences and business research. Let me handle the installation and setup.",
                    icon: BookOpen,
                  },
                  {
                    name: "Other Academic Software",
                    description: "Need something else? I can help with a wide range of specialized academic software, including programming IDEs, design tools, and more.",
                    icon: BookOpen,
                  },
                ].map((software, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <software.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">{software.name}</h3>
                      <p className="text-muted-foreground">{software.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Why Proper Installation Matters</h3>
              <p className="text-muted-foreground mb-6">
                Many students struggle with software installation issues that can lead to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Missing critical features or toolboxes",
                  "Compatibility issues with your operating system",
                  "Performance problems that slow your work",
                  "File corruption and data loss risks",
                  "License activation problems",
                  "Difficulty connecting to university systems",
                ].map((issue, index) => (
                  <div key={index} className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-destructive mr-2 flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-8">
                Professional installation ensures your software is set up correctly from the start,
                saving you time and frustration during the semester when deadlines matter most.
              </p>
            </div>
            
            <div className="md:w-2/5 animate-fade-in-left">
              <div className="bg-secondary rounded-lg p-8 shadow-inner mb-8">
                <h3 className="text-xl font-bold mb-6">My Installation Service Includes:</h3>
                
                <div className="space-y-4">
                  {[
                    "Proper software download from official sources",
                    "Complete installation with all necessary components",
                    "Configuration optimized for your specific courses",
                    "License activation and validation",
                    "Integration with your existing workflow",
                    "Basic usage tutorial to get you started",
                    "Troubleshooting common issues",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md">
                <h3 className="text-xl font-bold mb-4">Ready to Get Your Software Set Up?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a service now and have your educational software properly installed and ready to use.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>Most installations take 1-2 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-5 w-5 text-primary mr-2" />
                    <span>Available remotely or in-person</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <span>Satisfaction guaranteed</span>
                  </div>
                </div>
                
                <Button asChild className="w-full btn-hover">
                  <Link to="/contact">Book Installation Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Common Questions</h2>
            <p className="section-subheading mx-auto">
              Answers to frequently asked questions about software installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Do I need to purchase the software before our appointment?",
                answer: "No, I can help you obtain the appropriate student versions or free alternatives. Many universities provide software to students at no cost, and I can guide you through accessing these resources."
              },
              {
                question: "How long does a typical installation take?",
                answer: "Most installations take 1-2 hours depending on the software and your computer's specifications. I'll provide a more specific estimate based on your needs during our initial consultation."
              },
              {
                question: "Can you install software that's not listed above?",
                answer: "Absolutely! I can help with a wide range of academic and productivity software. Just let me know what you need when booking your appointment."
              },
              {
                question: "What if I have problems with the software after installation?",
                answer: "I provide follow-up support for any installation-related issues. If you encounter problems, simply reach out and I'll help resolve them promptly."
              },
              {
                question: "Can you help if I'm not a student at your university?",
                answer: "Yes, I provide services to students from any educational institution. The process might vary slightly depending on your school's resources, but I can work with you regardless of where you study."
              },
              {
                question: "Do you offer remote installation services?",
                answer: "Yes, many software installations can be done remotely using screen sharing tools. This is often more convenient and just as effective as in-person assistance."
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
      
      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to supercharge your academic toolkit?</h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl mb-8 text-primary-foreground/90">
            Stop struggling with software installations and start focusing on what matters - your coursework.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary">
            <Link to="/contact">Book Installation Service</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default EducationalSoftware;
