import React, { useState, useEffect } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { getDynamicLink } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const link = getDynamicLink();

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-4 md:px-12 py-4 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E50914] text-2xl md:text-4xl font-black tracking-tighter cursor-pointer hover:scale-105 transition-transform decoration-0 no-underline"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
          >
            FODE-FLIX
          </a>
          
          <ul className="hidden md:flex gap-6 text-sm text-gray-200">
            <li><a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-gray-400 transition">Vazados</a></li>
            <li><a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-gray-400 transition">Mais Vistos</a></li>
            <li><a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-gray-400 transition">Amadoras</a></li>
            <li><a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-gray-400 transition">Safadas</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-4 text-white">
          <a href={link} target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:text-gray-300"><Search className="w-5 h-5" /></a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><Bell className="w-5 h-5" /></a>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center overflow-hidden border border-transparent group-hover:border-white transition-all">
              <User className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;