
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, MessageCircle, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-2/5">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Gem className="h-6 w-6 text-sapphire-500" />
              <span className="text-2xl font-bold text-gradient">Saffire Tech</span>
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              Professional tech services for students. Get help with software installation,
              Windows & Office setup, website creation, and data analysis for your projects.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-sapphire-500" />
              <a href="mailto:enosaf7@gmail.com" className="text-sm hover:text-sapphire-600 transition-colors">
                enosaf7@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-sapphire-500" />
              <a href="tel:+233596760174" className="text-sm hover:text-sapphire-600 transition-colors">
                +233 596 760 174
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-sapphire-500" />
              <span className="text-sm">University of Mines and Technology (Tarkwa)</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/enosaf7" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sapphire-500 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://wa.me/qr/LNJVYTYMBQ5SK1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sapphire-500 transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
              <Link to="/" className="text-sm leading-6 text-gray-600 hover:text-sapphire-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm leading-6 text-gray-600 hover:text-sapphire-600 transition-colors">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/educational-software" className="text-sm leading-6 text-gray-600 hover:text-sapphire-600 transition-colors">
                Educational Software
              </Link>
            </li>
            <li>
              <Link to="/windows-office" className="text-sm leading-6 text-gray-600 hover:text-sapphire-600 transition-colors">
                Windows & Office
              </Link>
            </li>
            <li>
              <Link to="/website-creation" className="text-sm leading-6 text-gray-600 hover:text-sapphire-600 transition-colors">
                Website Creation
              </Link>
            </li>
            <li>
              <Link to="/data-analysis" className="text-sm leading-6 text-gray-600 hover:text-sapphire-600 transition-colors">
                Data Analysis
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm leading-6 text-gray-600 hover:text-sapphire-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Need Help?</h3>
          <div className="mt-6">
            <Button asChild className="btn-hover bg-sapphire-600 hover:bg-sapphire-700">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-900/10 pt-8 pb-12">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Saffire Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
