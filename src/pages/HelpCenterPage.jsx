import { Helmet } from 'react-helmet';

export default function HelpCenterPage() {
  const faqs = [
    {
      q: 'How do I get started with the Astrology API?',
      a: 'Simply register on our platform to get your free API key. Once registered, you can access all available modules and start integrating them into your apps or websites.',
    },
    {
      q: 'What astrology systems are supported?',
      a: 'We support Vedic, Western, KP, Lal Kitab, and Numerology systems, along with Panchang and Festival data modules.',
    },
    {
      q: 'Do you offer free trials?',
      a: 'Yes! We offer a free plan to help you evaluate the API. Upgrade anytime for higher request limits and premium modules.',
    },
    {
      q: 'Where can I find API documentation?',
      a: 'API documentation is available in our Developer Portal. You’ll find usage examples, endpoint explanations, and response samples there.',
    },
    {
      q: 'How do I report a bug or issue?',
      a: 'You can contact us via email or use the support form to log an issue. We aim to resolve bugs quickly and effectively.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Help Center | AstroAPIHub</title>
        <meta
          name="description"
          content="Get help with Astrology API integration, account setup, pricing, and technical support. Explore FAQs and contact support."
        />
        <meta
          name="keywords"
          content="astrology api help, faq, support, astroapihub contact, documentation, astrology support"
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">

        {/* Header */}
        <section className="text-center py-20 bg-white shadow-sm">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Help Center</h1>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Find answers to common questions and get help with using our Astrology API services.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-900">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-indigo-800">{faq.q}</h3>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-indigo-900 text-white py-16 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-6">Our support team is here to help. Reach out and we'll respond as soon as possible.</p>
            <a
              href="/contact"
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
