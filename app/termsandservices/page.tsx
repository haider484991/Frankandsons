import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Services | Frank And Sons Exterminators',
  description: 'Terms and services for Frank And Sons Exterminators. Read our service agreement and policies.',
  openGraph: {
    title: 'Terms and Services | Frank And Sons Exterminators',
    description: 'Terms and services for Frank And Sons Exterminators. Read our service agreement and policies.',
    url: 'https://frankandsonsexterminators.com/termsandservices',
    siteName: 'Frank And Sons Exterminators',
  },
};

export default function TermsAndServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/40">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-blue">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Terms and Services</h1>
          
          <p className="text-gray-600 mb-8">Last updated: March 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">1. Service Agreement</h2>
            <p>
              By engaging Frank And Sons Exterminators ("we," "our," or "us"), you agree to these terms and conditions. We provide pest control services through our network of professional exterminators in California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">2. Service Scope</h2>
            <p>Our services include but are not limited to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Residential pest control</li>
              <li>Commercial pest management</li>
              <li>Insect control and extermination</li>
              <li>Rodent control and prevention</li>
              <li>Preventive pest treatments</li>
              <li>Emergency pest services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">3. Service Scheduling</h2>
            <p>
              Appointments are scheduled based on availability and urgency. We strive to provide prompt service, especially for emergency situations. Cancellations must be made at least 24 hours before the scheduled service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">4. Pricing and Payment</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Pricing varies based on service type and infestation severity</li>
              <li>Payment is required upon service completion</li>
              <li>We accept major credit cards and electronic payments</li>
              <li>Additional charges may apply for emergency or after-hours services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">5. Service Guarantee</h2>
            <p>
              We stand behind our work with our satisfaction guarantee. If you're not satisfied with our service, we'll work to resolve the issue promptly. Specific guarantees vary by service type and will be detailed in your service agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">6. Customer Responsibilities</h2>
            <p>Customers agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information about pest problems</li>
              <li>Grant access to treatment areas</li>
              <li>Follow preparation instructions before treatment</li>
              <li>Implement recommended prevention measures</li>
              <li>Report any issues promptly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">7. Safety and Compliance</h2>
            <p>
              We follow all applicable laws and regulations regarding pest control. Our technicians are licensed and use approved products and methods. Customers will be informed of any safety precautions needed during treatment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">8. Liability</h2>
            <p>
              While we take all reasonable precautions, we are not liable for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pre-existing property damage</li>
              <li>Issues arising from customer non-compliance</li>
              <li>Circumstances beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">9. Service Area</h2>
            <p>
              We provide services throughout California. Coverage areas may vary by location and service type. Contact us to confirm service availability in your area.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">10. Contact Information</h2>
            <p>For questions or concerns about our services, contact us at:</p>
            <p className="mt-4">
              <strong>Frank And Sons Exterminators</strong><br />
              Phone: 1-833-581-1133<br />
              Email: service@frankandsonsexterminators.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}