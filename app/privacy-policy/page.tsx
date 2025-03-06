import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Frank And Sons Exterminators',
  description: 'Privacy policy for Frank And Sons Exterminators. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Frank And Sons Exterminators',
    description: 'Privacy policy for Frank And Sons Exterminators. Learn how we collect, use, and protect your personal information.',
    url: 'https://frankandsonsexterminators.com/privacy-policy',
    siteName: 'Frank And Sons Exterminators',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/40">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-blue">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">Last updated: March 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Introduction</h2>
            <p>
              Frank And Sons Exterminators ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your information when you use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Service location address</li>
              <li>Phone number and email address</li>
              <li>Service preferences and history</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our pest control services</li>
              <li>Communicate with you about appointments and services</li>
              <li>Send you important updates and notifications</li>
              <li>Process your payments</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisers and insurers</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Frank And Sons Exterminators</strong><br />
              Phone: 1-833-581-1133<br />
              Email: privacy@frankandsonsexterminators.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}