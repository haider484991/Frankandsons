"use client";

import Link from 'next/link';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Shield, Star, Warehouse, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data/services';
import type { City, State } from '@/lib/types';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  // Memoize path segments processing
  const { pathSegments, cityId, stateId, currentService } = useMemo(() => {
    const segments = pathname?.split('/') || [];
    return {
      pathSegments: segments,
      cityId: segments[2] || null,
      stateId: segments[1] || null,
      currentService: segments[segments.length - 1]
    };
  }, [pathname]);

  // Check if current page is a service page
  const isServicePage = useMemo(() => 
    services.some(service => service.slug === currentService),
    [currentService]
  );

  // Get location data from URL
  const [locationData, setLocationData] = useState<{
    city?: City;
    state?: State;
  }>({});

  // Memoize location data processing
  const processLocationData = useCallback(async () => {
    if (cityId && stateId) {
      const formatWord = (word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1);

      const cityName = cityId.split('-').map(formatWord).join(' ');
      const stateName = stateId.split('-').map(formatWord).join(' ');

      setLocationData({
        city: { 
          id: cityId,
          name: cityName,
          stateId: stateId,
          stateAbbr: stateName,
          population: 0,
          description: '',
          coordinates: {
            lat: 0,
            lng: 0
          },
          weatherData: {
            annualRainfall: 0,
            rainyDays: 0
          }
        },
        state: { 
          id: stateId,
          name: stateName,
          abbreviation: stateName,
          majorCities: [],
          neighboringStates: [],
          population: 0,
          description: ''
        }
      });
    } else {
      setLocationData({});
    }
  }, [cityId, stateId]);

  useEffect(() => {
    processLocationData();
  }, [processLocationData]);

  // Get service link based on current path
  const getServiceLink = useCallback((serviceSlug: string) => {
    if (stateId && cityId) {
      if (isServicePage) {
        const segments = pathname?.split('/');
        segments[segments.length - 1] = serviceSlug;
        return segments.join('/');
      }
      return `/${stateId}/${cityId}/${serviceSlug}`;
    }
    return `/services/${serviceSlug}`;
  }, [stateId, cityId, isServicePage, pathname]);

  // Get phone number based on current page
  const getPhoneNumber = useCallback(() => {
    return { label: 'Call Now:', number: '1-833-581-1133' };
  }, []);

  // Toggle functions
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleServices = () => setIsServicesOpen(prev => !prev);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm">
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path 
                  d="M8 16L24 4L40 16V36L24 44L8 36V16Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">Frank And Sons</div>
              <div className="text-xs text-gray-600">Exterminators</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative text-gray-600 hover:text-blue-600 font-medium group transition-colors">
              <span>Home</span>
              <span className="absolute inset-x-0 bottom-0 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <div 
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="relative"
            >
              <button
                className="flex items-center text-gray-600 group hover:text-blue-600 transition-colors focus:outline-none font-medium"
                onClick={toggleServices}
              >
                <span className="mr-1">Services</span>
                <motion.svg
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ fill: 'currentColor', height: 24, width: 24 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </motion.svg>
                <span className="absolute inset-x-0 bottom-0 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{ 
                      position: 'absolute',
                      left: '50%',
                      top: 'calc(100% + 0.5rem)',
                      transform: 'translateX(-50%)',
                      zIndex: 50,
                      width: '20rem',
                      transformOrigin: 'top'
                    }}
                  >
                    <div className="bg-blue-900/95 backdrop-blur-sm rounded-xl border border-blue-700/30 shadow-lg">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          style={{ display: 'flex' }}
                        >
                          <Link
                            href={getServiceLink(service.slug)}
                            className="block px-4 py-3 hover:bg-blue-800/50 transition-colors"
                          >
                            <div className="text-sm text-white font-medium">
                              {service.name}
                            </div>
                            <div className="text-xs text-blue-300 mt-0.5 line-clamp-2">
                              {service.description}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/about" className="relative text-gray-600 hover:text-blue-600 font-medium group transition-colors">
              <span>About</span>
              <span className="absolute inset-x-0 bottom-0 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/locations" className="relative text-gray-600 hover:text-blue-600 font-medium group transition-colors">
              <span>Locations</span>
              <span className="absolute inset-x-0 bottom-0 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/contact" className="relative text-gray-600 hover:text-blue-600 font-medium group transition-colors">
              <span>Contact</span>
              <span className="absolute inset-x-0 bottom-0 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${getPhoneNumber().number}`}
              className="flex items-center space-x-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-500 hover:to-blue-600 transition-colors duration-200 border border-blue-500/20 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>{getPhoneNumber().label} {getPhoneNumber().number}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{ 
                overflow: 'hidden',
                display: isMobileMenuOpen ? 'block' : 'none'
              }}
            >
              <div className="border-t border-blue-700/30 py-4 md:hidden">
                <ul className="space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ display: 'flex' }}
                  >
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-600 transition-colors block"
                      onClick={toggleMobileMenu}
                    >
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex' }}
                  >
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-blue-600 transition-colors block"
                      onClick={toggleMobileMenu}
                    >
                      About
                    </Link>
                  </motion.li>
                  
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    style={{ display: 'flex' }}
                  >
                    <Link
                      href="/locations"
                      className="text-gray-600 hover:text-blue-600 transition-colors block"
                      onClick={toggleMobileMenu}
                    >
                      Locations
                    </Link>
                  </motion.li>
                  
                  {/* Mobile Services Menu */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ display: 'flex' }}
                  >
                    <div className="space-y-2">
                      <span className="text-gray-600 font-semibold block">Services</span>
                      <ul className="pl-4 space-y-3">
                        {services.map((service, index) => (
                          <motion.li
                            key={service.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            style={{ display: 'flex' }}
                          >
                            <Link
                              href={getServiceLink(service.slug)}
                              className="text-gray-600 hover:text-blue-600 transition-colors block text-sm"
                              onClick={toggleMobileMenu}
                            >
                              {service.name}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'flex' }}
                  >
                    <Link
                      href={`tel:${getPhoneNumber().number}`}
                      className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-2 rounded-xl transition-colors duration-200 border border-blue-500/20 hover:shadow-lg"
                      onClick={toggleMobileMenu}
                    >
                      <Phone size={16} />
                      <span className="font-medium">{getPhoneNumber().label} {getPhoneNumber().number}</span>
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}