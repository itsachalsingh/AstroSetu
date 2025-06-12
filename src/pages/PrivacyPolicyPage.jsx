import { Helmet } from 'react-helmet';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Astrology API Hub</title>
        <meta
          name="description"
          content="Learn about Astrology API Hub's commitment to your privacy, how we collect, use, and protect your data when you use our astrology APIs and services."
        />
      </Helmet>

      <div className="min-h-screen font-sans text-gray-900 bg-gray-50">

        {/* Header */}
        <section className="py-24 px-6 sm:px-12 md:px-20 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-indigo-900">
            Privacy Policy
          </h1>
          <p className="text-lg text-indigo-700 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how Astrology API Hub collects, uses, and safeguards your information.
          </p>
        </section>

        {/* 1. Information Collection */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">1. Information We Collect</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            We collect information you provide when registering for API access, such as your name, email address, and billing details. We also collect usage data, including API request logs and technical data to improve service quality.
          </p>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">2. How We Use Your Information</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            Your information is used to provide, maintain, and improve our API services, communicate important updates, process payments, and ensure security. We do not sell or rent your personal information to third parties.
          </p>
        </section>

        {/* 3. Cookies and Tracking Technologies */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">3. Cookies and Tracking Technologies</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our website functionality. You can control cookies through your browser settings.
          </p>
        </section>

        {/* 4. Data Security */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">4. Data Security</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        {/* 5. Your Rights */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">5. Your Rights</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time by contacting us or using unsubscribe links in emails.
          </p>
        </section>

        {/* 6. Third-Party Services */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">6. Third-Party Services</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            We may use trusted third-party providers for analytics, payment processing, and other services. These providers have access only to the data necessary to perform their functions and are obligated to keep it confidential.
          </p>
        </section>

        {/* 7. Changes to This Policy */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12 mb-24">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">7. Changes to This Policy</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            We reserve the right to update this Privacy Policy as needed. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>
        </section>

      </div>
    </>
  );
}
