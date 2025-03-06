import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Bug, Clock, Target, CheckCircle2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Frank And Sons Exterminators | California Pest Control Experts',
  description: 'Learn more about Frank And Sons Exterminators, connecting California home and business owners with expert pest control services. Call 1-833-581-1133 today!',
  keywords: 'pest control California, exterminators California, pest removal, bed bug control, ant control, roach control, spider control, rodent control, residential pest control, commercial pest control',
  openGraph: {
    title: 'About Frank And Sons Exterminators | California Pest Control Experts',
    description: 'Learn more about Frank And Sons Exterminators, connecting California home and business owners with expert pest control services.',
    type: 'website',
    url: 'https://www.frankandsonsexterminators.com/about',
    siteName: 'Frank And Sons Exterminators',
    images: [
      {
        url: '/images/pest-control-california.webp',
        width: 1200,
        height: 630,
        alt: 'Frank And Sons Exterminators - Professional Pest Control Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Frank And Sons Exterminators | California Pest Control',
    description: 'Professional pest control services across California',
    images: ['/images/pest-control-california.webp'],
  },
  alternates: {
    canonical: 'https://www.frankandsonsexterminators.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-blue-900">
            About Frank And Sons Exterminators
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-700">
            Connecting California with Trusted Pest Control Experts
          </h2>

          <div className="space-y-12 text-gray-700">
            {/* Introduction Section */}
            <section className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl leading-relaxed">
                At Frank And Sons Exterminators, we understand how disruptive and damaging pest infestations can be. That's why we are dedicated to connecting homeowners and business owners across California with experienced pest control professionals who specialize in removing and preventing all types of pests. Whether you're dealing with insects like bed bugs, fleas, ants, roaches, spiders, yellow jackets, wasps, mosquitoes, and flies, or facing a rodent problem, we ensure you have access to reliable and effective pest control solutions.
              </p>
            </section>

            {/* Our Mission */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">Our Mission</h2>
              <p className="text-lg md:text-xl">
                Our goal is simple: to help California residents and businesses maintain clean, pest-free environments. We recognize that every infestation is unique, which is why we work with a network of professionals who tailor their approach to the specific needs of each client. Through our connections, we provide solutions that address immediate infestations while implementing preventative strategies to stop future problems.
              </p>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Why Choose Frank And Sons Exterminators?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Bug className="h-8 w-8 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Solutions</h3>
                    <p>Our network of experts handles a wide variety of pests, from common household insects to more complex infestations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Experienced Professionals</h3>
                    <p>We connect you with highly trained and knowledgeable pest control specialists.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Tailored Management Plans</h3>
                    <p>Each service is customized based on the severity of the infestation and your property's unique characteristics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="h-8 w-8 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Statewide Coverage</h3>
                    <p>No matter where you are in California, we help you find reliable pest control solutions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">
                Pest Control for Residential and Commercial Properties
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Residential Pest Control</h3>
                  <p className="text-gray-700">
                    Your home is your sanctuary, but pests can quickly turn it into a source of stress and discomfort. Through our trusted network, we ensure that homeowners receive safe, effective pest control treatments that eliminate current infestations and prevent future ones. Our experts address all areas of the home, including kitchens, basements, attics, and outdoor spaces, ensuring thorough protection.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Commercial Pest Control</h3>
                  <p className="text-gray-700">
                    Businesses can suffer significant consequences from pest infestations, including damage to reputation and financial loss. We connect business owners with pest control professionals who provide discreet, efficient, and effective solutions. From restaurants and retail spaces to hotels and warehouses, we help businesses across various industries maintain clean and compliant environments.
                  </p>
                </div>
              </div>
            </section>

            {/* Prevention Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">Long-Term Pest Prevention</h2>
              <p className="text-lg mb-6">
                While eliminating pests is crucial, preventing their return is just as important. That's why we emphasize long-term pest management strategies that include:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span>Identifying and sealing entry points</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span>Routine inspections to detect early signs of infestation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span>Custom treatment plans for ongoing protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span>Environmentally responsible methods for effective pest control</span>
                </li>
              </ul>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">How It Works</h2>
              <p className="text-lg mb-4">Getting the right pest control service through Frank And Sons Exterminators is easy:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">1. Contact Us</h3>
                  <p>Call 1-833-581-1133 to discuss your pest control needs.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">2. Connect with a Professional</h3>
                  <p>We match you with a trusted pest control expert in your area.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">3. Schedule a Service</h3>
                  <p>Get timely, effective pest control solutions tailored to your situation.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">4. Enjoy a Pest-Free Space</h3>
                  <p>With expert help, you can maintain a clean, safe environment.</p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-50 p-8 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">Contact Us Today</h2>
              <p className="text-lg mb-6">
                If pests are invading your home or business, don't wait for the problem to get worse. Call Frank And Sons Exterminators today and let us connect you with the pest control experts you need.
              </p>
              <a
                href="tel:1-833-581-1133"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Clock className="w-5 h-5 mr-2" />
                Call Now: 1-833-581-1133
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}