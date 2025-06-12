import { Helmet } from 'react-helmet';

export default function TermsAndConditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Astrology API Hub</title>
        <meta
          name="description"
          content="Read the Terms and Conditions of Astrology API Hub. Learn about our policies regarding API usage, data privacy, liability, and more."
        />
      </Helmet>

      <div className="min-h-screen font-sans text-gray-900 bg-gray-50">

        {/* Header */}
        <section className="py-24 px-6 sm:px-12 md:px-20 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-indigo-900">
            Terms and Conditions
          </h1>
          <p className="text-lg text-indigo-700 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions ("terms", "terms and conditions") carefully before using the Astrology API Hub services.
          </p>
        </section>

        {/* 1. Acceptance of Terms */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">1. Acceptance of Terms</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            By accessing and using Astrology API Hub services, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of the terms, please do not use our services.
          </p>
        </section>

        {/* 2. Use of API Services */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">2. Use of API Services</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            Astrology API Hub provides astrology data and calculations via API endpoints for integration into your applications and websites. You agree to use these services only for lawful purposes and in compliance with all applicable laws.
          </p>
          <p className="text-indigo-700 leading-relaxed text-lg mt-4">
            Unauthorized use, reproduction, or distribution of API data is strictly prohibited.
          </p>
        </section>

        {/* 3. Account Registration & Security */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">3. Account Registration & Security</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            Users registering for API access are responsible for maintaining the confidentiality of their API keys and account information. You agree to notify us immediately of any unauthorized use or breach of security.
          </p>
        </section>

        {/* 4. Data Privacy & Usage */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">4. Data Privacy & Usage</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            Astrology API Hub respects your privacy. We do not sell your data to third parties. Any data collected during API usage will be handled according to our Privacy Policy.
          </p>
        </section>

        {/* 5. Disclaimer & Limitation of Liability */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">5. Disclaimer & Limitation of Liability</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            The astrology data and services are provided “as is” without warranties of any kind. Astrology API Hub is not responsible for any decisions or actions taken based on the API data. Use at your own risk.
          </p>
        </section>

        {/* 6. Changes to Terms */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12 mb-24">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">6. Changes to Terms</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            Astrology API Hub reserves the right to modify or update these Terms and Conditions at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
          </p>
        </section>

      </div>
    </>
  );
}
