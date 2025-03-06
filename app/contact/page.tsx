import { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Frank And Sons Exterminators',
  description: 'Contact Frank And Sons Exterminators for professional pest control services in California. Available 24/7 for emergency pest control. Call 1-833-581-1133.',
  openGraph: {
    title: 'Contact Us | Frank And Sons Exterminators',
    description: 'Contact Frank And Sons Exterminators for professional pest control services in California. Available 24/7 for emergency pest control.',
    url: 'https://frankandsonsexterminators.com/contact',
    siteName: 'Frank And Sons Exterminators',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/40">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
            Contact Us
          </h1>
          
          <p className="text-xl text-center text-gray-600 mb-12">
            Need pest control services? We're here to help 24/7.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">Call Us</h2>
              <p className="text-gray-600 mb-4">Available 24/7 for emergency service</p>
              <a
                href="tel:1-833-581-1133"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                1-833-581-1133
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">Email Us</h2>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <a
                href="mailto:info@frankandsonsexterminators.com"
                className="text-xl font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                info@frankandsonsexterminators.com
              </a>
            </div>
          </div>

          {/* Service Information */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-300" />
                  Service Hours
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>24/7 Emergency Service</li>
                  <li>Regular Hours: Mon-Sat, 7am-7pm</li>
                  <li>Sunday: By appointment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-300" />
                  Service Areas
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>All major cities in California</li>
                  <li>Residential & Commercial Properties</li>
                  <li>Emergency Response Available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">How quickly can you respond to a pest emergency?</h3>
                <p className="text-gray-600">
                  We offer 24/7 emergency response for urgent pest issues. In most cases, we can have a technician at your location within 2-4 hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">What areas do you service?</h3>
                <p className="text-gray-600">
                  We provide pest control services throughout California, including all major cities and surrounding areas. Contact us to confirm service availability in your location.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Do you offer free inspections?</h3>
                <p className="text-gray-600">
                  Yes, we offer free initial inspections for most pest control services. This helps us accurately assess the situation and provide you with the most effective solution.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Are your pest control methods safe?</h3>
                <p className="text-gray-600">
                  Yes, we use EPA-approved products and environmentally responsible methods that are safe for your family and pets when used as directed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}