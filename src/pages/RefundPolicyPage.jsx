import { Helmet } from 'react-helmet';

export default function RefundPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Astrology API Hub</title>
        <meta
          name="description"
          content="Read Astrology API Hub's refund policy to understand how we handle cancellations, refunds, and customer satisfaction for our astrology API services."
        />
      </Helmet>

      <div className="min-h-screen font-sans text-gray-900 bg-gray-50">

        {/* Header */}
        <section className="py-24 px-6 sm:px-12 md:px-20 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-indigo-900">
            Refund Policy
          </h1>
          <p className="text-lg text-indigo-700 max-w-3xl mx-auto leading-relaxed">
            We strive to provide exceptional astrology API services. This Refund Policy outlines the terms under which refunds are granted.
          </p>
        </section>

        {/* 1. General Policy */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">1. General Policy</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            All sales of our astrology API services are final. We do not provide refunds except in exceptional cases as described below.
          </p>
        </section>

        {/* 2. Eligibility for Refund */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">2. Eligibility for Refund</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            Refunds may be considered if:
          </p>
          <ul className="list-disc list-inside text-indigo-700 text-lg mt-4 space-y-2">
            <li>The service was unavailable for more than 72 continuous hours without prior notice.</li>
            <li>There was a technical error on our end preventing you from accessing the service.</li>
            <li>Billing errors or duplicate charges occur.</li>
          </ul>
        </section>

        {/* 3. Requesting a Refund */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">3. Requesting a Refund</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            To request a refund, please contact our support team at <a href="mailto:support@astroapihub.com" className="text-indigo-600 underline">support@astroapihub.com</a> within 14 days of the incident with relevant details.
          </p>
        </section>

        {/* 4. Processing Refunds */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">4. Processing Refunds</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            Once approved, refunds will be processed within 7 business days. The refund will be issued to the original payment method. Please note that it may take additional time for your bank or payment provider to reflect the refund.
          </p>
        </section>

        {/* 5. Non-Refundable Items */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">5. Non-Refundable Items</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            The following are non-refundable:
          </p>
          <ul className="list-disc list-inside text-indigo-700 text-lg mt-4 space-y-2">
            <li>Subscriptions or licenses that have been fully delivered and accessed.</li>
            <li>Services declined or cancelled by the user after API key issuance.</li>
            <li>Refund requests made after the 14-day window.</li>
          </ul>
        </section>

        {/* 6. Changes to This Policy */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 rounded-xl shadow-md bg-white border border-gray-200 mt-12 mb-24">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-900">6. Changes to This Policy</h2>
          <p className="text-indigo-700 leading-relaxed text-lg">
            We reserve the right to update or modify this Refund Policy at any time. Updates will be posted here with an updated effective date.
          </p>
        </section>

      </div>
    </>
  );
}
