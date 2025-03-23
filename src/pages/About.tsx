
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="section-heading mb-6">About Me</h1>
          <p className="section-subheading mx-auto">
            A fellow student dedicated to helping others navigate tech challenges
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center gap-12">
            <div className="md:w-2/5 mb-10 md:mb-0 animate-fade-in-right">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/9be97b4c-7c86-4d6b-917f-ad2f7597453a.png" 
                  alt="Enoch Agyei Osafo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/5 animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6">Hi, I'm Enoch Agyei Osafo</h2>
              <p className="text-muted-foreground mb-4">
                I'm a BSc. Mathematical Science student at University of Mines and Technology (Tarkwa) with a passion for technology
                and helping fellow students overcome technical challenges that can get in the way
                of academic success.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey began when I noticed many of my peers struggling with software installations,
                computer setup, and creating websites for their projects. What started as helping friends
                quickly grew into a service I'm proud to offer to the wider student community.
              </p>
              <p className="text-muted-foreground mb-6">
                I believe that technology should enable education, not impede it. That's why I've made it
                my mission to provide affordable, student-focused tech services that solve real problems.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <span>BSc. Mathematical Science Student at University of Mines and Technology</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  <span>12 Years of Experience in Tech Support</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <span>Helped 70+ Students with Tech Solutions</span>
                </div>
              </div>
              
              <Button asChild className="btn-hover">
                <Link to="/contact">Work With Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Expertise */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">My Expertise</h2>
            <p className="section-subheading mx-auto">
              Areas where I can help you succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                area: "Software Installation",
                skills: ["MATLAB", "Maple", "Minitab", "SPSS", "Programming IDEs", "Design Software"],
              },
              {
                area: "Operating Systems",
                skills: ["Windows 10/11 Installation", "Windows System Optimization", "Windows Driver Management", "Windows Security Setup", "Windows Recovery", "Windows Troubleshooting"],
              },
              {
                area: "Microsoft Office",
                skills: ["Office 365 Setup", "Word, Excel, PowerPoint", "OneDrive Configuration", "Outlook Email Setup", "Teams Installation", "Access & Publisher"],
              },
              {
                area: "Web Development",
                skills: ["Portfolio Websites", "Project Showcases", "Small Business Sites", "Landing Pages", "Basic E-Commerce", "Content Management"],
              },
              {
                area: "Troubleshooting",
                skills: ["Software Conflicts", "Performance Issues", "Connectivity Problems", "Error Resolution", "Data Recovery", "Security Concerns"],
              },
              {
                area: "Academic Support",
                skills: ["Research Software", "Citation Tools", "Academic Databases", "Cloud Backups", "Collaboration Tools", "Presentation Tech"],
              },
            ].map((expertise, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4">{expertise.area}</h3>
                <ul className="space-y-2">
                  {expertise.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-right">
              <h2 className="section-heading mb-6">My Approach</h2>
              <p className="text-muted-foreground mb-4">
                I believe in providing more than just technical solutions. My approach is built 
                around these core principles:
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Education-First Mindset",
                    description: "I don't just fix problems; I help you understand them so you can handle similar situations in the future."
                  },
                  {
                    title: "Student-Friendly Service",
                    description: "Flexible scheduling around your classes and fair pricing that respects student budgets."
                  },
                  {
                    title: "Quality Over Quick Fixes",
                    description: "I take the time to implement proper solutions that will continue working long after our session ends."
                  },
                  {
                    title: "Privacy & Respect",
                    description: "Your data and privacy are always respected. I maintain strict confidentiality with all client information."
                  },
                ].map((principle, index) => (
                  <div key={index} className="bg-secondary p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                ))}
              </div>
              
              <Button asChild className="group">
                <Link to="/contact" className="flex items-center">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/2 animate-fade-in-left">
              <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-lg border border-sapphire-100">
                <div className="w-full h-full flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-sapphire-800 mb-4">Contact Information</h3>
                  <ul className="space-y-3 w-full">
                    <li className="flex items-center">
                      <span className="font-semibold w-24">Email:</span>
                      <a href="mailto:enosaf7@gmail.com" className="text-sapphire-600 hover:text-sapphire-800 transition-colors">
                        enosaf7@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold w-24">Phone:</span>
                      <a href="tel:+233596760174" className="text-sapphire-600 hover:text-sapphire-800 transition-colors">
                        +233 596 760 174
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold w-24">Location:</span>
                      <span>University of Mines and Technology (Tarkwa)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold w-24">WhatsApp:</span>
                      <a href="https://wa.me/qr/LNJVYTYMBQ5SK1" target="_blank" rel="noopener noreferrer" 
                         className="text-sapphire-600 hover:text-sapphire-800 transition-colors">
                        Connect on WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Whether you need help with software installation, Windows setup, or a new website,
                  I'm here to help you succeed in your academic journey.
                </p>
                <Button asChild className="w-full btn-hover">
                  <Link to="/contact">Book a Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
