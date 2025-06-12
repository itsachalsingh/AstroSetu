import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function MatrimonialPage() {
  const features = [
    {
      title: 'Matchmaking Compatibility',
      desc: 'Get accurate love and marriage compatibility reports based on Vedic and Western astrology.',
    },
    {
      title: 'Kundli Milan (Ashtakoot & Dashakoot)',
      desc: 'Traditional Hindu matchmaking systems with Gun Milan scoring and dosha detection.',
    },
    {
      title: 'Love & Relationship Forecasts',
      desc: 'Daily/weekly insights for your users’ love life, with predictive analysis.',
    },
    {
      title: 'Mangal Dosha & Remedies',
      desc: 'Detect Manglik Dosha and suggest astrological remedies directly in your app.',
    },
    {
      title: 'Numerology Partner Matching',
      desc: 'Get numerology compatibility reports using name and birthdate.',
    },
    {
      title: 'PDF Reports for Matches',
      desc: 'Deliver beautifully designed, personalized match reports in branded PDF format.',
    },
  ];

  const steps = [
    'Integrate our Matchmaking & Love APIs',
    'Collect basic user data (DOB, TOB, location)',
    'Generate compatibility scores & insights',
    'Display results or generate downloadable reports',
  ];

  const testimonials = [
    {
      name: 'ShaadiTech',
      quote: 'AstroAPIHub’s Kundli Milan and Mangal Dosha tools helped us boost our match accuracy and engagement rates.',
    },
    {
      name: 'TwinFlames',
      quote: 'Our love compatibility reports saw a 60% increase in downloads after using their APIs.',
    },
    {
      name: 'ZodiacMatch',
      quote: 'The API is fast, accurate, and easy to integrate. Perfect for dating platforms with a spiritual twist.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dating & Matrimonial Astrology API | AstroAPIHub</title>
        <meta
          name="description"
          content="Integrate Kundli Milan, Love Compatibility, and Mangal Dosha analysis into your dating or matrimonial app. Build better matches with AstroAPIHub."
        />
        <meta
          name="keywords"
          content="kundli matching, matchmaking API, dating compatibility, manglik dosha, vedic love astrology, matrimonial kundli"
        />
        <link rel="canonical" href="https://astroapihub.com/use-case/dating-matrimonial" />
      </Helmet>

      <div className="font-sans text-gray-800">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-700 to-red-600 text-white py-20">
          <div className="container mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Power Your Dating & Matrimonial Platform with Astrology</h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg">
              Use Vedic and Numerology-based matchmaking tools to deliver better compatibility results and increase trust in your platform.
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

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Features Tailored for Matchmaking</h2>
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

        {/* How it Works Section */}
        <section className="bg-pink-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">How to Use It in Your App</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all">
                  <span className="block text-red-500 text-4xl font-bold mb-4">{i + 1}</span>
                  <p className="text-gray-700">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Why Developers Love It</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-6 shadow-md">
                  <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                  <span className="block font-semibold text-red-700">— {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-red-600 to-pink-700 text-white py-16">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">Start Building a Smarter Matchmaking Platform</h2>
            <p className="mb-6">With real-time compatibility scores and astro logic your users will trust.</p>
            <Link to="/signup" className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-all">
              Get Started Free
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
