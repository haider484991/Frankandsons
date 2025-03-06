import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { states, generateCityData } from '@/lib/data/locations';
import { ChevronRight, Bug, Shield, Clock } from 'lucide-react';
import CitiesGrid from '@/components/CitiesGrid';
import Image from 'next/image';

interface StatePageProps {
  params: {
    state: string;
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff'
};

export const dynamicParams = true;

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const state = states.find(s => s.id === params.state);

  if (!state) {
    return {
      title: 'State Not Found',
      description: 'The requested state could not be found.',
    };
  }

  const title = `Professional Pest Control Services in ${state.name} | Frank And Sons Exterminators`;
  const description = `Expert pest control and extermination services in ${state.name}. Frank And Sons Exterminators provides professional pest control for residential and commercial properties throughout ${state.name}. We handle all types of pests including bed bugs, ants, roaches, spiders, and rodents.`;
  const url = `https://www.frankandsonsexterminators.com/${state.id}`;

  const keywords = [
    'pest control',
    'exterminators',
    'pest removal',
    'bed bug control',
    'ant control',
    'roach control',
    'spider control',
    'rodent control',
    `${state.name} pest control`,
    `${state.abbreviation} pest control`,
    `${state.name} exterminators`,
    'residential pest control',
    'commercial pest control',
    'pest prevention',
    'emergency pest control',
    ...generateCityData(state).map(city => `${city.name} pest control`)
  ].join(', ');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    authors: [{ name: 'Frank And Sons Exterminators' }],
    category: 'Pest Control Services',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'Frank And Sons Exterminators',
      images: [
        {
          url: '/images/pest-control-california.webp',
          width: 1200,
          height: 630,
          alt: `Professional Pest Control Services in ${state.name}`,
          type: 'image/webp',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@frankandsons',
      site: '@frankandsons',
      images: ['/images/pest-control-california.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': `US-${state.abbreviation}`,
      'geo.placename': state.name,
      'og:region': state.abbreviation,
      'og:country-name': 'United States'
    }
  };
}

export default function StatePage({ params }: StatePageProps) {
  const state = states.find(s => s.id === params.state);
  
  if (!state) {
    notFound();
  }

  const cities = generateCityData(state);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div>
          <nav className="flex items-center space-x-2 text-sm text-blue-900 mb-8">
            <Link href="/" className="hover:text-blue-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-blue-900" />
            <Link href="/locations" className="hover:text-blue-700 transition-colors">
              Locations
            </Link>
            <ChevronRight className="h-4 w-4 text-blue-900" />
            <span className="text-blue-900">{state.name}</span>
          </nav>

          <h1 className="text-5xl font-bold mb-6 text-blue-900 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Professional Pest Control in {state.name}
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Welcome to Frank And Sons Exterminators, your trusted pest control provider in {state.name}. 
              We offer comprehensive pest control services, providing expert inspection, treatment, 
              and prevention for both residential and commercial properties throughout {state.name}.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Insect Control</h3>
                <p className="text-gray-600 mb-4">Expert control for all types of insects.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Bed Bugs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Ants & Roaches
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Spiders & Wasps
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Rodent Control</h3>
                <p className="text-gray-600 mb-4">Complete rodent elimination solutions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Mice Control
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Rat Removal
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Entry Prevention
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Commercial Services</h3>
                <p className="text-gray-600 mb-4">Business pest control solutions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Restaurants
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Office Buildings
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-600">✓</span> Retail Spaces
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-xl shadow-lg mb-12 text-white">
              <h2 className="text-2xl font-bold mb-6">
                Why Choose Frank And Sons Exterminators in {state.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Emergency Service</h3>
                    <p className="text-sm">Immediate response for urgent pest problems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bug className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">All Pests Covered</h3>
                    <p className="text-sm">Solutions for every type of pest problem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Expert Service</h3>
                    <p className="text-sm">Professional pest control with proven results</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/pest-control-california.webp"
                alt={`Professional Pest Control Services in ${state.name}`}
                width={1200}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Serving All Major Cities in {state.name}
                  </h2>
                  <p className="text-white/90 text-lg">
                    Find expert pest control services in your area
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-blue-900">
              Service Areas in {state.name}
            </h2>

            <CitiesGrid 
              cities={cities} 
              stateId={state.id}
              stateName={state.name}
            />
          </div>
        </div>
      </main>
    </div>
  );
}