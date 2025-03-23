
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-2/5">
          <div>
            <Link to="/" className="text-2xl font-bold text-gradient">
              TechHelp
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              Professional tech services for students. Get help with software installation,
              Windows & Office setup, and website creation for your projects.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">contact@techhelp.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">University Campus, CA 94000</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
              <Link to="/" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/educational-software" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Educational Software
              </Link>
            </li>
            <li>
              <Link to="/windows-office" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Windows & Office
              </Link>
            </li>
            <li>
              <Link to="/website-creation" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Website Creation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Need Help?</h3>
          <div className="mt-6">
            <Button asChild className="btn-hover">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-900/10 pt-8 pb-12">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} TechHelp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
