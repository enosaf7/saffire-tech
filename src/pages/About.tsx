
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Briefcase, Award, ArrowRight, Code, SlidersHorizontal } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Header with tech-inspired animation */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sapphire-900 to-sapphire-700 z-0"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(30deg)',
          }}></div>
        </div>
        
        {/* Glowing circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto text-center animate-fade-in relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white text-shadow">
            About Me
          </h1>
          <p className="section-subheading mx-auto text-white/80">
            A fellow student dedicated to helping others navigate tech challenges
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20 px-6 bg-white relative">
        {/* Tech pattern background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="h-full w-full" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center gap-12">
            <div className="md:w-2/5 mb-10 md:mb-0 animate-fade-in-right relative">
              <div className="aspect-square rounded-lg overflow-hidden border-4 border-sapphire-200 shadow-lg relative">
                {/* Neon effect outline */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <img 
                  src="/lovable-uploads/9be97b4c-7c86-4d6b-917f-ad2f7597453a.png" 
                  alt="Enoch Agyei Osafo" 
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>
            
            <div className="md:w-3/5 animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sapphire-600 to-purple-600 bg-clip-text text-transparent">Hi, I'm Enoch Agyei Osafo</h2>
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
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sapphire-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-3">BSc. Mathematical Science Student at University of Mines and Technology</span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sapphire-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-3">12 Years of Experience in Tech Support</span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sapphire-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-3">Helped 70+ Students with Tech Solutions</span>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-sapphire-600 to-purple-600 text-white hover:from-sapphire-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                <Link to="/contact">Work With Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Expertise with tech-inspired design */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Tech circuit board pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="h-full w-full" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading bg-gradient-to-r from-sapphire-600 to-purple-600 bg-clip-text text-transparent">My Expertise</h2>
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
                area: "Windows Operating System",
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
                className="group relative"
              >
                {/* Neon glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <div 
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-4 text-sapphire-800">{expertise.area}</h3>
                  <ul className="space-y-2">
                    {expertise.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-sapphire-500 to-purple-500 rounded-full mr-2"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Philosophy with tech aesthetic */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-sapphire-900 text-white relative overflow-hidden">
        {/* Animated floating tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-20 w-20 rounded-full bg-blue-500/20 top-20 left-[10%] animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute h-32 w-32 rounded-full bg-purple-500/10 bottom-40 right-[15%] animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute h-16 w-16 rounded-full bg-teal-500/15 top-1/3 right-[30%] animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute h-24 w-24 rounded-full bg-blue-500/10 bottom-20 left-[25%] animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Code-like pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full flex flex-col justify-between py-10">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-2 bg-white/20 rounded" style={{ width: `${Math.random() * 30 + 10}%`, marginLeft: `${Math.random() * 60}%` }}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6 text-white">My Approach</h2>
              <p className="text-white/80 mb-4">
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
                  <div key={index} className="group relative">
                    {/* Neon border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 relative">
                      <h3 className="text-lg font-semibold mb-2 text-white">{principle.title}</h3>
                      <p className="text-white/70">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-white text-sapphire-800 hover:bg-white/90 group shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <Link to="/contact" className="flex items-center">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/2 animate-fade-in-left">
              <div className="backdrop-blur-md bg-white/5 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-white/10">
                <div className="w-full p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  <ul className="space-y-5 w-full">
                    <li className="flex items-center group">
                      <span className="font-semibold w-24 text-white/70">Email:</span>
                      <a href="mailto:enosaf7@gmail.com" className="text-white group-hover:text-blue-300 transition-colors">
                        enosaf7@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center group">
                      <span className="font-semibold w-24 text-white/70">Phone:</span>
                      <a href="tel:+233596760174" className="text-white group-hover:text-blue-300 transition-colors">
                        +233 596 760 174
                      </a>
                    </li>
                    <li className="flex items-center group">
                      <span className="font-semibold w-24 text-white/70">Location:</span>
                      <span className="text-white">University of Mines and Technology (Tarkwa)</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="font-semibold w-24 text-white/70">WhatsApp:</span>
                      <a href="https://wa.me/qr/LNJVYTYMBQ5SK1" target="_blank" rel="noopener noreferrer" 
                         className="text-white group-hover:text-blue-300 transition-colors">
                        Connect on WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 backdrop-blur-md bg-white/5 rounded-lg p-6 border border-white/10 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                <h3 className="text-xl font-bold mb-4 text-white">Ready to Get Started?</h3>
                <p className="mb-6 text-white/80">
                  Whether you need help with software installation, Windows setup, or a new website,
                  I'm here to help you succeed in your academic journey.
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
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
