'use client';

import { states, generateCityData } from '@/lib/data/locations';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { MapPin, ChevronRight, Bug, ShieldCheck, Clock } from 'lucide-react';
import { useState } from 'react';
import { ServicePopup } from '@/components/ui/ServicePopup';
import Image from 'next/image';

export default function LocationsPage() {
  const [selectedCity, setSelectedCity] = useState<{
    stateId: string;
    cityId: string;
    cityName: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Frank And Sons Exterminators Service Areas in California</h1>
        <p className="text-lg text-gray-700 mb-8">
          Find professional pest control services in your area. We connect you with trusted exterminators across California who specialize in comprehensive pest control solutions for both residential and commercial properties. From insect infestations to rodent control, we've got you covered.
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          {states.map(state => {
            const cities = generateCityData(state);
            
            return (
              <Card key={state.id} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-green-900">
                      {state.name} Pest Control Services
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Professional pest control and extermination services available throughout {state.name}. We handle all types of pests including bed bugs, ants, roaches, spiders, and rodents.
                    </p>
                  </div>
                  <MapPin className="h-6 w-6 text-green-600 flex-shrink-0" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  {cities.slice(0, 6).map(city => (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity({
                        stateId: state.id,
                        cityId: city.id,
                        cityName: city.name
                      })}
                      className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all border border-green-100 text-left"
                    >
                      <div className="flex items-center space-x-2">
                        <Bug className="h-5 w-5 text-green-600" />
                        <h3 className="font-medium text-green-900">{city.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Professional pest control services in {city.name}</p>
                    </button>
                  ))}
                </div>

                {cities.length > 6 && (
                  <Link
                    href={`/${state.id}`}
                    className="inline-block mt-6 text-green-600 hover:text-green-800 font-medium"
                  >
                    View all {state.name} service locations ({cities.length} cities) →
                  </Link>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-900 to-green-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8">Why Choose Frank And Sons Exterminators?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-green-300 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-100">Fast response times for urgent pest control needs, available day or night.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <ShieldCheck className="h-8 w-8 text-green-300 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Service</h3>
                <p className="text-gray-100">Professional pest control services with proven methods and guaranteed results.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Bug className="h-8 w-8 text-green-300 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Complete Solutions</h3>
                <p className="text-gray-100">Comprehensive pest control services for all types of infestations, big or small.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100">
            <h2 className="text-2xl font-bold mb-6 text-green-900">Our Service Guarantee</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <ChevronRight className="h-5 w-5 text-green-600" />
                <span>100% Satisfaction Guaranteed</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChevronRight className="h-5 w-5 text-green-600" />
                <span>Eco-friendly Treatment Options</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChevronRight className="h-5 w-5 text-green-600" />
                <span>Free Inspection & Estimates</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChevronRight className="h-5 w-5 text-green-600" />
                <span>Long-term Prevention Plans</span>
              </li>
            </ul>
          </div>

          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/pest-control-california.webp"
              alt="Professional Pest Control Services in California"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </main>

      {selectedCity && (
        <ServicePopup
          isOpen={!!selectedCity}
          onClose={() => setSelectedCity(null)}
          stateId={selectedCity.stateId}
          cityId={selectedCity.cityId}
          cityName={selectedCity.cityName}
        />
      )}
    </div>
  );
}