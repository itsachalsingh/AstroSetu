import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function AstrologyAppsPage() {
  const features = [
    { title: 'Horoscope Reports', desc: 'Daily, weekly, monthly, yearly forecasts tailored to your user\'s sign.' },
    { title: 'Kundli & Panchang', desc: 'Generate Janam Kundli, Dosha checks, and Panchang with real-time data.' },
    { title: 'Numerology Insights', desc: 'Calculate Destiny, Expression, Soul Urge and Karmic numbers with accuracy.' },
    { title: 'Compatibility Charts', desc: 'Matchmaking for love, marriage, and business relationships based on astrological data.' },
    { title: 'PDF Report Generator', desc: 'Generate branded astrology reports in PDF with a single API call.' },
    { title: 'Lifestyle Predictions', desc: 'Health, finance, career and personality insights powered by astro-data.' },
  ];

  const steps = [
    'Register and get your free API key',
    'Choose desired astrology modules (Vedic, Western, Numerology)',
    'Integrate APIs via JSON or PDF endpoints',
    'Launch your platform with stellar astro features!',
  ];

  const testimonials = [
    { name: 'Nebula Dev Team', quote: 'We scaled our app to 1M+ users using their powerful astrology engine.' },
    { name: 'CoStar Integrator', quote: 'PDF reports and Vedic modules were a game-changer for our monetization.' },
    { name: 'Spiritual API Hub', quote: 'Setup was lightning fast, and support is top-notch!' },
  ];

  return (
    <>
      <Helmet>
        <title>Astrology API Use Case | Build Powerful Astrology Apps</title>
        <meta
          name="description"
          content="Discover how you can build high-performance astrology apps and websites using AstroAPIHub. Integrate Vedic, Western, Numerology APIs with ease."
        />
        <meta
          name="keywords"
          content="astrology app, vedic astrology, western astrology, horoscope api, kundli, panchang, numerology api"
        />
        <link rel="canonical" href="https://astroapihub.com/use-case/astrology-apps" />
      </Helmet>

      <div className="font-sans text-gray-800">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 to-purple-700 text-white py-20">
          <div className="container mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Stellar Astrology Apps & Websites</h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg">
              Integrate Western, Vedic, Numerology & Lifestyle APIs with expert interpretations—no astrological background required.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/signup" className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-all">
                Start Free Trial
              </Link>
              <Link to="/demo" className="px-6 py-3 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all">
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Astrology API Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-yellow-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all">
                  <span className="block text-yellow-500 text-4xl font-bold mb-4">{i + 1}</span>
                  <p className="text-gray-700">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">What Developers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-6 shadow-md">
                  <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                  <span className="block font-semibold text-yellow-700">— {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white py-16">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">Start Building with Astrology APIs Today</h2>
            <p className="mb-6">Fast, scalable, and accurate astrology tools for modern apps and websites.</p>
            <Link to="/signup" className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-all">
              Get Started Free
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
