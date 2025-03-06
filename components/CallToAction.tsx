"use client";

import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  // Handle scroll to hide CTA when near footer
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const footerHeight = 450; // Approximate footer height

      // Hide CTA when within footer height from bottom
      setIsVisible(documentHeight - (scrollTop + windowHeight) > footerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get phone number based on current page
  const getPhoneNumber = useCallback(() => {
    const phoneNumber = '1-833-581-1133';
    let label = 'Pest Control';

    // Check if the URL contains any service-related slugs
    if (pathname?.includes('residential')) {
      label = 'Residential';
    } else if (pathname?.includes('commercial')) {
      label = 'Commercial';
    } else if (pathname?.includes('rodent')) {
      label = 'Rodent Control';
    } else if (pathname?.includes('insect')) {
      label = 'Insect Control';
    }

    return { label, number: phoneNumber };
  }, [pathname]);

  const phoneInfo = getPhoneNumber();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white z-50 sm:hidden shadow-lg shadow-blue-950/20 border-t border-blue-800/30 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-3 py-2">
        <div className="grid grid-cols-1">
          <a 
            href={`tel:${phoneInfo.number}`} 
            className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl font-medium transition-colors duration-200"
          >
            <Phone className="h-5 w-5 animate-pulse" />
            <span className="text-lg">{phoneInfo.label}: {phoneInfo.number}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;