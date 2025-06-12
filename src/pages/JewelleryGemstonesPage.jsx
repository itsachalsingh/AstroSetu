import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function JewelleryGemstonesPage() {
  const gemstoneBenefits = [
    {
      title: 'Personalized Gem Suggestions',
      desc: 'Recommend gemstones based on birth chart analysis and planetary strengths.',
    },
    {
      title: 'Dosha Remedies',
      desc: 'Gemstone-based solutions for Mangal, Shani, Rahu, Ketu, and other doshas.',
    },
    {
      title: 'Color & Metal Suitability',
      desc: 'Provide insights into ideal gemstone colors and the best metals to wear them in.',
    },
    {
      title: 'PDF Recommendations',
      desc: 'Offer branded, downloadable gemstone reports with recommendations.',
    },
    {
      title: 'Birthstone Matching',
      desc: 'Recommend traditional and modern birthstones based on date of birth.',
    },
    {
      title: 'Gemstone Wearing Muhurta',
      desc: 'Suggest auspicious days and time windows to wear new gemstones.',
    },
  ];

  const steps = [
    'Collect birth details (DOB, TOB, location)',
    'Fetch gemstone suggestions using API',
    'Display with benefit + metal info',
    'Offer upsells like certified gemstone orders',
  ];

  return (
    <>
      <Helmet>
        <title>Jewellery & Gemstone Recommendation API | AstroAPIHub</title>
        <meta
          name="description"
          content="Integrate Vedic gemstone recommendations, birthstone matching, and dosha remedies into your astrology or jewellery store with AstroAPIHub."
        />
        <meta
          name="keywords"
          content="gemstone API, vedic astrology, jewellery recommendation, birthstone, planetary remedies, gemstone report"
        />
        <link rel="canonical" href="https://astroapihub.com/use-case/jewellery-gemstones" />
      </Helmet>

      <div className="text-gray-800 font-sans">

        {/* Hero */}
        <section className="bg-gradient-to-tr from-yellow-200 via-white to-pink-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-4">
              Gemstone Recommendation Powered by Astrology
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
              Offer your users scientifically-backed, astrologically-aligned gemstone suggestions for health, wealth, and harmony.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/signup"
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all"
              >
                Try It Free
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-yellow-500 text-yellow-700 rounded-lg hover:bg-yellow-500 hover:text-white transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What You Can Offer with Our Gemstone API</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {gemstoneBenefits.map((feature, i) => (
                <div key={i} className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow / Steps */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Integrate in 4 Simple Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
                  <div className="text-yellow-600 text-3xl font-bold mb-4">{i + 1}</div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-tr from-yellow-500 to-pink-400 py-16 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Jewellery Store or Astrology App</h2>
            <p className="mb-6">Let your users make informed decisions backed by ancient wisdom and modern API power.</p>
            <Link
              to="/signup"
              className="px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-yellow-100 transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
