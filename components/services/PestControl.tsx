"use client";

import { City, State } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SchemaOrg from "@/components/schema-org";
import ImageCarousel from '@/components/ImageCarousel';
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ServiceProps {
  city: City;
  state: State;
}

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

const carouselImages: CarouselImage[] = [
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

export default function PestControl({ city, state }: ServiceProps) {
  return (
    <>
      <SchemaOrg
        name={`${city.name} ${state.abbreviation} Pest Control and Exterminators`}
        description={`Pest control ${city.name} ${state.abbreviation}. For insects, rodents, bed bugs, fleas, ants, roaches, spiders, yellow jackets, wasps, mosquitoes, flies, etc. Call today!`}
        city={city}
        state={state}
        service="Pest Control"
      />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Comprehensive Pest Control Services in {city.name} {state.abbreviation}
              </h1>
              <p className="text-lg sm:text-xl mb-8">
                Unwanted pests can turn your home or business into an uncomfortable, unsanitary, and even dangerous environment. At Frank And Sons Exterminators, we specialize in connecting property owners in {city.name} {state.abbreviation} with experienced pest control experts who provide reliable solutions for all types of infestations. Whether you're dealing with insects, rodents, or other pests, our network of professionals is ready to help.
              </p>
              <a
                href="tel:1-833-581-1133"
                className="inline-flex items-center justify-center bg-white text-blue-700 font-bold px-8 py-4 rounded-md text-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Call Now: 1-833-581-1133
              </a>
            </div>
          </div>
        </section>

        {/* Image Carousel */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-xl">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Why Choose Frank And Sons Exterminators in {city.name} {state.abbreviation}?
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Finding the right pest control provider is essential for effective and long-lasting results. When you choose Frank And Sons Exterminators, you benefit from:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Full-Service Solutions</h3>
                <p className="text-gray-700">Full-service pest control solutions tailored to residential and commercial properties.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Expert Treatment</h3>
                <p className="text-gray-700">Expert treatment for all types of pests, including insects and rodents.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Customized Prevention</h3>
                <p className="text-gray-700">Customized pest prevention plans to protect your home or business in {city.name} {state.abbreviation}.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Timely Service</h3>
                <p className="text-gray-700">Timely and effective pest removal that minimizes disruption to your daily routine.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Local Coverage</h3>
                <p className="text-gray-700">Serving the entire {city.name} {state.abbreviation} area with professional, results-driven service.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our Pest Control Services in {city.name} {state.abbreviation}
            </h2>

            {/* Insect Control */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Insect Control</h3>
              <p className="text-lg text-gray-700 mb-8">
                Insects can spread disease, damage property, and create an unpleasant environment. Our pest control specialists in {city.name} {state.abbreviation} offer targeted treatments for a variety of insects, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Bed Bug Extermination</h4>
                  <p className="text-gray-700">These pests hide in mattresses, furniture, and cracks, making them difficult to eliminate without professional intervention.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Ant Control</h4>
                  <p className="text-gray-700">Whether you're dealing with carpenter ants, fire ants, or common household ants, we have effective solutions to stop infestations.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Cockroach Removal</h4>
                  <p className="text-gray-700">Cockroaches are resilient and can quickly multiply. Our experts apply advanced treatments to eliminate them and prevent future outbreaks.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Spider Control</h4>
                  <p className="text-gray-700">From harmless house spiders to venomous species, we provide treatments to keep your property spider-free.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Yellow Jackets & Wasp Nest Removal</h4>
                  <p className="text-gray-700">Nesting around homes and businesses, these aggressive stinging insects require safe and professional removal.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Mosquito & Fly Control</h4>
                  <p className="text-gray-700">Mosquitoes carry diseases, and flies can contaminate food. Our pest control professionals implement effective control measures to reduce their presence.</p>
                </Card>
              </div>
            </div>

            {/* Rodent Control */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Rodent Control & Prevention</h3>
              <p className="text-lg text-gray-700 mb-8">
                Rodents such as mice and rats can cause structural damage and spread harmful bacteria. Our rodent control services in {city.name} {state.abbreviation} include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Entry Point Sealing</h4>
                  <p className="text-gray-700">Identifying and sealing rodent entry points.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Safe Removal</h4>
                  <p className="text-gray-700">Safe and effective rodent removal solutions.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Prevention Strategies</h4>
                  <p className="text-gray-700">Implementing prevention strategies to keep rodents from returning.</p>
                </Card>
              </div>
            </div>

            {/* Residential & Commercial */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Residential Pest Control in {city.name} {state.abbreviation}</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Your home should be a safe and comfortable place, free from the threat of pests. Our network of pest control experts specializes in:
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li>• Treating infestations in kitchens, basements, attics, and outdoor areas.</li>
                  <li>• Providing proactive pest control solutions for ongoing protection.</li>
                  <li>• Customizing treatment plans to fit the unique needs of your home.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Commercial Pest Control in {city.name} {state.abbreviation}</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Businesses in {city.name} {state.abbreviation} face unique pest control challenges that require professional attention. We connect businesses with pest control experts who specialize in:
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li>• Restaurant & Food Service Pest Management – Keeping dining areas and kitchens pest-free to comply with health regulations.</li>
                  <li>• Retail & Office Pest Control – Ensuring a clean and comfortable environment for employees and customers.</li>
                  <li>• Hotel & Hospitality Pest Extermination – Eliminating bed bugs and other pests that can disrupt guest satisfaction.</li>
                  <li>• Warehouse & Industrial Pest Solutions – Preventing pests from damaging inventory and contaminating workspaces.</li>
                </ul>
              </div>
            </div>

            {/* Preventive Pest Control */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Preventive Pest Control & Long-Term Maintenance Plans</h3>
              <p className="text-lg text-gray-700 mb-8">
                While eliminating existing pests is essential, preventing future infestations is just as important. Our experts in {city.name} {state.abbreviation} provide long-term pest management strategies, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Routine Inspections</h4>
                  <p className="text-gray-700">Routine pest inspections to detect early signs of pest activity.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Access Point Sealing</h4>
                  <p className="text-gray-700">Sealing access points to prevent insects and rodents from entering.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Ongoing Monitoring</h4>
                  <p className="text-gray-700">Ongoing pest monitoring and proactive treatments tailored to your property.</p>
                </Card>
              </div>
            </div>

            {/* Service Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">How Our Pest Control Process Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <Card className="p-6">
                  <div className="text-2xl font-bold text-blue-700 mb-4">Step 1</div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Contact Us</h4>
                  <p className="text-gray-700">Call 1-833-581-1133 to discuss your pest control needs in {city.name} {state.abbreviation}. Our team will connect you with a trusted professional in your area.</p>
                </Card>
                <Card className="p-6">
                  <div className="text-2xl font-bold text-blue-700 mb-4">Step 2</div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Thorough Pest Inspection</h4>
                  <p className="text-gray-700">A pest control specialist will assess your home or business, identifying signs of infestation and entry points.</p>
                </Card>
                <Card className="p-6">
                  <div className="text-2xl font-bold text-blue-700 mb-4">Step 3</div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Customized Pest Treatment Plan</h4>
                  <p className="text-gray-700">Based on the inspection findings, a customized pest control treatment plan will be developed to address your specific pest problem.</p>
                </Card>
                <Card className="p-6">
                  <div className="text-2xl font-bold text-blue-700 mb-4">Step 4</div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Safe & Effective Pest Removal</h4>
                  <p className="text-gray-700">Our network of professionals in {city.name} {state.abbreviation} uses environmentally responsible and highly effective methods to eliminate pests from your property.</p>
                </Card>
                <Card className="p-6">
                  <div className="text-2xl font-bold text-blue-700 mb-4">Step 5</div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Ongoing Prevention & Follow-Up</h4>
                  <p className="text-gray-700">To ensure long-term protection, our experts provide prevention strategies and ongoing maintenance recommendations.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Call Us Today for Expert Pest Control in {city.name} {state.abbreviation}
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Don't let pests take over your home or business. Whether you need immediate pest control services or a long-term prevention plan, Frank And Sons Exterminators is ready to help.
            </p>
            <div className="mb-8">
              <a
                href="tel:1-833-581-1133"
                className="inline-flex items-center justify-center bg-white text-blue-700 font-bold px-8 py-4 rounded-md text-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Call Now: 1-833-581-1133
              </a>
            </div>
            <p className="text-lg font-medium">
              Take the first step toward a pest-free property in {city.name} {state.abbreviation} today!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
