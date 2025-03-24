import React, { useState, useEffect } from 'react';
import { Menu, X, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Educational Software', href: '/educational-software' },
  { name: 'Windows & Office', href: '/windows-office' },
  { name: 'Website Creation', href: '/website-creation' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'glass py-2 shadow-md' : 'bg-transparent py-4'
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-sapphire-500"
            >
              <path 
                d="M6 3L18 3L22 9L12 21L2 9L6 3Z" 
                fill="currentColor" 
                fillOpacity="0.2" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 21L12 9L2 9L12 21Z" 
                fill="currentColor" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 9L22 9L12 21L12 9Z" 
                fill="currentColor" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold text-gradient">Saffire Tech</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sapphire-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="btn-hover bg-sapphire-600 hover:bg-sapphire-700">
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </nav>
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 glass transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}
        style={{ top: '60px' }}
      >
        <div className="mt-6 flow-root">
          <div className="divide-y divide-gray-200">
            <div className="space-y-2 py-6 px-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-sapphire-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 px-8">
              <Button asChild className="w-full btn-hover bg-sapphire-600 hover:bg-sapphire-700">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
