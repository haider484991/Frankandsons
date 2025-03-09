import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { FaBug, FaHome, FaShieldAlt, FaSpider, FaPhoneAlt, FaClock, FaBolt, FaCheck } from 'react-icons/fa';
import type { Metadata } from 'next';
import ImageCarousel from '@/components/ImageCarousel';

const carouselImages = [
  {
    src: "/images/pest-control-california.webp",
    alt: "Professional pest control services in California",
    title: "Expert pest control technicians at work",
    width: 800,
    height: 600
  },
  {
    src: "/images/exterminator-pest-control-california.webp",
    alt: "Licensed exterminators in California",
    title: "Residential pest control treatment",
    width: 800,
    height: 600
  },
  {
    src: "/images/roaches-control.webp",
    alt: "Roach control and elimination services",
    title: "Effective roach control solutions",
    width: 800,
    height: 600
  },
  {
    src: "/images/spider-control-ca.webp",
    alt: "Spider control services in California",
    title: "Professional spider removal",
    width: 800,
    height: 600
  }
];

export const metadata: Metadata = {
  title: 'California Pest Control Service | Frank And Sons Exterminators',
  description: 'Frank And Sons Exterminators connects California home and business owners with top pest control experts. We handle all types of insects and rodents, including bed bugs, ants, roaches, and more. Call 1-833-581-1133 today!',
  keywords: 'pest control, California pest control, bed bugs, ants, roaches, rodent control, pest extermination, pest prevention',
  openGraph: {
    title: 'California Pest Control Service | Frank And Sons Exterminators',
    description: 'Frank And Sons Exterminators connects California home and business owners with top pest control experts. We handle all types of insects and rodents, including bed bugs, ants, roaches, and more.',
    url: 'https://www.frankandsonsexterminators.com',
    siteName: 'Frank And Sons Exterminators',
    images: [
      {
        url: 'https://www.frankandsonsexterminators.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frank And Sons Exterminators | Professional Services',
    description: 'Expert pest control services across California. Fast, reliable solutions for all pest problems.',
    images: ['https://www.frankandsonsexterminators.com/images/twitter-card.jpg'],
    creator: '@FrankAndSons',
  },
  alternates: {
    canonical: 'https://www.frankandsonsexterminators.com',
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section with improved padding and spacing */}
        <section className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/pest-control-california.webp"
              alt="Professional Pest Control Services"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
          </div>

          {/* Hero content with improved padding */}
          <div className="relative container mx-auto px-4 py-16 md:py-20 lg:py-24 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main heading with animation */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white animate-fade-in-up">
                Frank And Sons Exterminators – Your Trusted Pest Control Experts in California
              </h1>

              {/* Subheading */}
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white/90 animate-fade-in-up delay-100">
                Reliable, Effective Pest Control Services
              </h2>

              {/* Description with improved readability and spacing */}
              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                Unwanted pests can cause severe damage to homes, businesses, and overall peace of mind. At Frank And Sons Exterminators, we connect you with comprehensive pest control experts in California, helping homeowners and companies eliminate infestations and prevent future problems. Whether you're dealing with bed bugs, ants, roaches, spiders, yellow jackets, wasps, mosquitoes, flies, or rodents, our network of pest control experts is ready to deliver practical, long-term solutions.
              </p>

              {/* CTA button with enhanced design and spacing */}
              <div className="flex justify-center mb-6 animate-fade-in-up delay-300">
                <a
                  href="tel:1-833-581-1133"
                  className="group inline-flex items-center bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-xl"
                >
                  <FaPhoneAlt className="mr-3 animate-pulse text-blue-500" />
                  <span>Call 1-833-581-1133</span>
                </a>
              </div>

              {/* Emergency service indicator with improved spacing */}
              <div className="text-white/90 animate-fade-in-up delay-400">
                <div className="flex items-center justify-center">
                  <FaClock className="w-5 h-5 mr-2" />
                  <span>24/7 Emergency Service Available in most areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Pest Control Services in Action
            </h2>
            <ImageCarousel images={carouselImages} />
          </div>
        </section>

        {/* Why Choose Us Section with improved design */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Why Choose Frank And Sons Exterminators?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Finding the right pest control service is crucial for protecting your property and ensuring a safe, pest-free environment. At Frank And Sons Exterminators, we stand out because we:
                </p>
              </div>

              {/* Features grid with hover effects */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Feature cards */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaShieldAlt className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Full-Service Solutions</h3>
                      <p className="text-gray-600">Offer full-service pest control solutions for residential and commercial properties</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaBug className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                      <p className="text-gray-600">Tackle all types of pests, from common insects to more aggressive infestations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
                      <p className="text-gray-600">Provide professional, efficient, and thorough services tailored to your specific pest problems</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaBolt className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Long-Term Prevention</h3>
                      <p className="text-gray-600">Focus on long-term prevention, not just immediate extermination</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 md:col-span-2">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <FaHome className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">California Coverage</h3>
                      <p className="text-gray-600">Serve customers across California, connecting them with trusted pest control specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Pest Control Solutions Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Comprehensive Pest Control Solutions
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Pests come in all shapes and sizes, but our professionals have the experience and tools to handle them. Our services include:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Insect Control Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8" />
                  
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <FaBug className="text-blue-600 mr-3 w-6 h-6" />
                    Insect Control
                  </h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-3 mr-4 mt-1">
                        <FaSpider className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Bed Bugs</h4>
                        <p className="text-gray-600">These tiny pests are a nightmare, hiding in mattresses, furniture, and walls. Our professionals use proven treatments to eradicate them completely.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-3 mr-4 mt-1">
                        <FaBug className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Ants</h4>
                        <p className="text-gray-600">Whether it's carpenter ants damaging wood structures or an army of sugar ants invading your kitchen, we have solutions to stop them in their tracks.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-3 mr-4 mt-1">
                        <FaBug className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Roaches</h4>
                        <p className="text-gray-600">Cockroaches spread bacteria and multiply quickly. Our exterminators implement advanced methods to remove them and prevent their return.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-3 mr-4 mt-1">
                        <FaSpider className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Spiders</h4>
                        <p className="text-gray-600">While some spiders are harmless, others can be dangerous. We help eliminate infestations and keep your home or business safe.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-3 mr-4 mt-1">
                        <FaBug className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Yellow Jackets & Wasps</h4>
                        <p className="text-gray-600">These stinging insects can pose serious risks. Our experts safely remove nests and prevent future infestations.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-3 mr-4 mt-1">
                        <FaBug className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Mosquitoes & Flies</h4>
                        <p className="text-gray-600">Mosquitoes carry diseases, and flies are a nuisance. We implement effective control strategies to keep them away from your property.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Rodent Control Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden h-fit">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8" />
                  
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <FaHome className="text-blue-600 mr-3 w-6 h-6" />
                    Rodent Control
                  </h3>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-lg p-3 mr-4 mt-1">
                      <FaShieldAlt className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Mice & Rats</h4>
                      <p className="text-gray-600">Rodents can cause structural damage and spread disease. Our exterminators use humane and effective removal methods to rid your property of these pests.</p>
                    </div>
                  </div>

                  {/* Additional Rodent Control Features */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Prevention</h5>
                      <p className="text-sm text-gray-600">Seal entry points and implement preventive measures</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Inspection</h5>
                      <p className="text-sm text-gray-600">Thorough property assessment and monitoring</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Removal</h5>
                      <p className="text-sm text-gray-600">Safe and humane removal techniques</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Clean-up</h5>
                      <p className="text-sm text-gray-600">Sanitization and damage repair services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preventive Pest Control Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Preventive Pest Control: The Key to Long-Term Protection
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Extermination is only half the battle. Preventing future infestations is just as important. Our pest control specialists implement comprehensive preventive strategies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <FaShieldAlt className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Entry Point Sealing</h3>
                  <p className="text-gray-600">Comprehensive inspection and sealing of all potential pest entry points</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <FaCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Regular Inspections</h3>
                  <p className="text-gray-600">Scheduled inspections to detect and address issues before they become problems</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <FaBolt className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Custom Treatment</h3>
                  <p className="text-gray-600">Tailored treatment plans designed specifically for your property's needs</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <FaHome className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Eco-Friendly</h3>
                  <p className="text-gray-600">Safe, environmentally conscious solutions for lasting pest control</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Residential Services */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Residential Pest Control Services
                  </h2>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Your home should be a safe haven, not a breeding ground for pests. Our residential pest control services include:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <FaHome className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Home Inspections</h3>
                    <p className="text-gray-600">Thorough inspections to identify entry points, nesting areas, and signs of infestation</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <FaShieldAlt className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Treatment Plans</h3>
                    <p className="text-gray-600">Customized treatment plans based on your specific pest problems and home layout</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <FaBolt className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Preventive Measures</h3>
                    <p className="text-gray-600">Implementation of preventive strategies to stop future infestations</p>
                  </div>
                </div>
              </div>

              {/* Commercial Services */}
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Commercial Pest Control Services
                  </h2>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Protect your business's reputation and maintain a pest-free environment with our commercial pest control solutions:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -mr-12 -mt-12" />
                    <h3 className="text-2xl font-bold mb-6">Regular Maintenance Programs</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <FaCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">Scheduled inspections and treatments</span>
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">Documentation for compliance requirements</span>
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">Emergency response services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -mr-12 -mt-12" />
                    <h3 className="text-2xl font-bold mb-6">Industry-Specific Solutions</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <FaCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">Restaurants and food service facilities</span>
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">Healthcare and medical facilities</span>
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">Warehouses and storage facilities</span>
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">Office buildings and retail spaces</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Improved for mobile */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  How It Works
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                  Our process is designed to be simple, effective, and hassle-free. Here's how we help you get rid of pests:
                </p>
              </div>

              {/* Steps - Redesigned for better mobile experience */}
              <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
                {/* Step 1 */}
                <div className="bg-blue-50 rounded-2xl p-6 md:p-8 relative">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      1
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Contact Us</h3>
                  </div>
                  <p className="text-gray-600 ml-14">
                    Call our number or fill out our online form. We'll connect you with a pest control expert who will discuss your needs.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-blue-50 rounded-2xl p-6 md:p-8 relative">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      2
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Inspection</h3>
                  </div>
                  <p className="text-gray-600 ml-14">
                    A professional will visit your property to assess the situation and identify the type and extent of the pest problem.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-blue-50 rounded-2xl p-6 md:p-8 relative">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      3
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Treatment Plan</h3>
                  </div>
                  <p className="text-gray-600 ml-14">
                    We'll develop a customized treatment plan based on the inspection findings and your specific needs.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-blue-50 rounded-2xl p-6 md:p-8 relative">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      4
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Implementation</h3>
                  </div>
                  <p className="text-gray-600 ml-14">
                    Our experts will implement the treatment plan, ensuring thorough pest elimination while keeping your property safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Satisfaction Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional Pest Control Services
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  We take pride in delivering exceptional pest control services across California. Our commitment to quality and customer satisfaction sets us apart.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center transform hover:-translate-y-1 transition-all">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaBolt className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Fast Response Time</h3>
                  <p className="text-white/80">Quick and efficient service when you need it most</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center transform hover:-translate-y-1 transition-all">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaHome className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Serving California</h3>
                  <p className="text-white/80">Providing expert pest control services throughout California</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
                  <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
                    Don't let pests take over your property. Contact Frank And Sons Exterminators today for professional pest control services you can trust.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:1-833-581-1133"
                      className="group flex items-center bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105 w-full justify-center"
                    >
                      <FaPhoneAlt className="mr-3 animate-pulse" />
                      <span>Call 1-833-581-1133</span>
                    </a>
                    <p className="text-center text-gray-500">
                      Available 24/7 for Emergency Services in most areas
                    </p>
                  </div>
                </div>
                <div className="relative h-48 md:h-full">
                  <Image
                    src="/images/exterminator-pest-control-california.webp"
                    alt="Professional Pest Control Services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serving California Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Serving California Communities
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Frank And Sons Exterminators is proud to serve communities across California. Our network of pest control experts ensures that no matter where you are in the state, you have access to professional pest control services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/pest-control-california.webp"
                    alt="California Service Areas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <FaHome className="text-blue-600 mr-3 w-6 h-6" />
                      Local Expertise
                    </h3>
                    <p className="text-gray-600">
                      Our pest control experts understand the unique challenges of California's diverse climate and pest populations. This local knowledge ensures effective treatment strategies tailored to your specific region.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <FaBolt className="text-blue-600 mr-3 w-6 h-6" />
                      Quick Response Times
                    </h3>
                    <p className="text-gray-600">
                      With our extensive network of professionals throughout California, we can quickly connect you with a pest control expert in your area, ensuring fast response times for both emergency and routine services.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <FaShieldAlt className="text-blue-600 mr-3 w-6 h-6" />
                      State Regulations Compliance
                    </h3>
                    <p className="text-gray-600">
                      All our pest control services comply with California state regulations and environmental guidelines, ensuring safe and legal pest control practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us Today!</h2>
              <p className="text-xl mb-12 text-white/90">
                Don't let pests take over your home or business. Whether you need immediate pest control or a long-term prevention plan, Frank And Sons Exterminators is ready to help.
              </p>
              <div className="mb-8">
                <p className="text-2xl font-bold">📞 Call Now: 1-833-581-1133</p>
              </div>
              <p className="text-xl mb-12 text-white/90">
                Take the first step toward a pest-free property today!
              </p>
              <a
                href="tel:1-833-581-1133"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-medium shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <FaPhoneAlt className="mr-3 animate-pulse" />
                <span>Call 1-833-581-1133</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}