import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { DesktopNav } from './DesktopNav';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Car className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} aria-hidden="true" />
            <span className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              AutoWash Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu */}
          <MobileMenu 
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </header>
  );
}