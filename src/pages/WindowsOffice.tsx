
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, CheckCircle, AlertCircle, ArrowRight, Clock, Shield, Lock } from 'lucide-react';

const WindowsOffice = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="section-heading mb-6">Windows & Office Installation</h1>
          <p className="section-subheading mx-auto">
            Professional setup and activation of Windows and Microsoft Office for optimal performance
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-start gap-12">
            <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6">Essential Software for Every Student</h2>
              <p className="text-muted-foreground mb-6">
                Windows and Microsoft Office are the backbone of most academic work. Having them properly
                installed and activated ensures you can focus on your studies without technical issues.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-secondary p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Windows Installation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Clean installation of Windows 10/11</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>All necessary drivers installed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Security updates and patches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data migration (if needed)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Proper activation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Office Installation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Microsoft Office 365 or 2021/2019</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Word, Excel, PowerPoint, Outlook</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>OneDrive setup and integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Email account configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Templates and preferences setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full activation and verification</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Why Professional Installation Matters</h3>
              <p className="text-muted-foreground mb-6">
                Many students encounter these common issues with DIY installations:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Incomplete or corrupted installations",
                  "Missing drivers and compatibility issues",
                  "Performance problems and slow startups",
                  "Activation errors and license problems",
                  "Security vulnerabilities from outdated software",
                  "Data loss during migrations or upgrades",
                ].map((issue, index) => (
                  <div key={index} className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-destructive mr-2 flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-8">
                A professional installation ensures your system is optimized, secure, and fully functional,
                allowing you to focus on your studies rather than technical problems.
              </p>
            </div>
            
            <div className="md:w-2/5 animate-fade-in-left">
              <div className="bg-secondary rounded-lg p-8 shadow-inner mb-8">
                <h3 className="text-xl font-bold mb-6">Benefits of Professional Setup:</h3>
                
                <div className="space-y-4">
                  {[
                    "System optimized for academic work",
                    "Faster performance for research and assignments",
                    "Seamless integration with university systems",
                    "Reliable software that works when you need it",
                    "Protection from common security threats",
                    "Proper activation that won't expire mid-semester",
                    "Technical guidance on effective usage",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md">
                <h3 className="text-xl font-bold mb-4">Ready for a Reliable System?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a Windows & Office installation service and get your computer properly set up for academic success.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>Installation typically takes 2-3 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Lock className="h-5 w-5 text-primary mr-2" />
                    <span>Privacy guaranteed - your data stays safe</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <span>Includes post-installation support</span>
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
      
      {/* Process Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">My Installation Process</h2>
            <p className="section-subheading mx-auto">
              A streamlined approach to get your system up and running
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "I'll evaluate your current system and discuss your specific needs for Windows and Office usage.",
                },
                {
                  step: "02",
                  title: "Backup & Preparation",
                  description: "I'll help back up your important files and prepare your system for a clean installation.",
                },
                {
                  step: "03",
                  title: "Installation & Configuration",
                  description: "I'll install Windows and Office with all necessary drivers and updates, optimized for performance.",
                },
                {
                  step: "04",
                  title: "Activation & Verification",
                  description: "I'll properly activate your software and verify everything is working correctly.",
                },
                {
                  step: "05",
                  title: "Data Migration & Setup",
                  description: "I'll restore your data and configure your settings for optimal productivity.",
                },
              ].map((step, index) => (
                <div 
                  key={step.step} 
                  className={`relative md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-sm font-medium text-primary mb-2">STEP {step.step}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Common Questions</h2>
            <p className="section-subheading mx-auto">
              Answers to frequently asked questions about Windows & Office installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Do I need to purchase Windows and Office before our appointment?",
                answer: "Not necessarily. Many universities provide Windows and Office licenses to students at no cost. I can help you access these resources or discuss affordable options if needed."
              },
              {
                question: "Will I lose my files during a Windows installation?",
                answer: "I take great care to back up all your important files before installation. If you're getting a clean installation, we'll safely transfer your data back after the setup is complete."
              },
              {
                question: "How long does the installation process take?",
                answer: "A typical Windows and Office installation takes 2-3 hours, depending on your computer's specifications and the amount of data to be migrated."
              },
              {
                question: "Can you help with other software installations at the same time?",
                answer: "Absolutely! I can help install other essential software during the same session. Just let me know what you need when booking."
              },
              {
                question: "What happens if I have issues after the installation?",
                answer: "I provide follow-up support for any installation-related issues. If you encounter problems, simply reach out and I'll help resolve them promptly."
              },
              {
                question: "Can you help set up my university email and cloud storage?",
                answer: "Yes, I can help configure your university email account in Outlook and set up OneDrive or other cloud storage solutions for your academic work."
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-secondary rounded-lg p-6 shadow-inner animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a reliable, optimized system?</h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl mb-8 text-primary-foreground/90">
            Book your Windows & Office installation today and start your semester with the right tools.
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

export default WindowsOffice;
