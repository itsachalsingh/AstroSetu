import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from 'react-router-dom';


// Enhanced FAQ data with Western astrology focus
const faqs = [
  {
    q: "How accurate are your Western astrology calculations?",
    a: "Our API uses NASA's JPL ephemeris data for precise planetary positions, with calculations accurate to within 0.01 degrees. We account for precession and use topocentric house systems for the most accurate chart calculations possible."
  },
  {
    q: "What house system does your Natal API use?",
    a: "Our Natal API supports all major house systems including Placidus (default), Koch, Equal, Whole Sign, Campanus, Regiomontanus, and more. You can specify your preferred house system in the API request parameters."
  },
  {
    q: "Can I get historical transit data?",
    a: "Yes, our Transit API provides historical transit data going back to 1900 and forward projections to 2050. You can analyze past planetary transits to specific natal chart points or future transits for predictive astrology."
  },
  {
    q: "What aspects are included in the Synastry API?",
    a: "Our Synastry API analyzes all major aspects (conjunction, sextile, square, trine, opposition) between two charts, plus minor aspects like quincunx, semi-sextile, and sesquiquadrate. We provide orb calculations and aspect strength scoring for comprehensive relationship analysis."
  },
  {
    q: "How does the Composite Chart API work?",
    a: "The Composite Chart API calculates the midpoint between two individuals' planetary positions to create a combined relationship chart. We provide full interpretation of the composite Sun, Moon, Ascendant, and planetary aspects that define the relationship's energy and purpose."
  },
  {
    q: "What time periods do your Progression API cover?",
    a: "Our Progression API supports secondary progressions (day-for-a-year), solar arc directions, and tertiary progressions. You can get progressed charts for any date range with interpretations of significant progressed aspects to natal positions."
  }
];

const PricingCard = ({ title, price, features, popular, cta }) => (
  <div className={`relative rounded-xl shadow-xl p-8 flex flex-col border-2 transition-all hover:scale-105 ${popular ? "border-purple-500 bg-gradient-to-b from-purple-50 to-white" : "border-gray-200 bg-white"}`}>
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
    <p className="text-4xl font-extrabold mb-6 text-center">
      ${price} <span className="text-lg font-normal text-gray-600">/mo</span>
    </p>
    <ul className="flex-1 mb-8 space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-start">
          <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-gray-700">{f}</span>
        </li>
      ))}
    </ul>
    <button className={`py-3 rounded-lg font-semibold transition ${popular ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg" : "bg-gray-800 hover:bg-gray-900 text-white"}`}>
      {cta}
    </button>
  </div>
);

export default function WesternAstrologyPage() {
  const [tab, setTab] = useState(0);
 
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [birthData, setBirthData] = useState({
    date: "",
    time: "",
    location: "",
    lat: "",
    lng: ""
  });

  const handleBirthDataChange = (e) => {
    const { name, value } = e.target;
    setBirthData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-indigo-50 min-h-screen">
      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "AstroSetuAPI - Western Astrology API",
          "description": "Professional Western astrology API offering natal charts, transits, synastry, composite charts, solar returns and progressions for developers.",
          "applicationCategory": "DeveloperAPI",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free tier available with premium plans for advanced features"
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Western Astrology API</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Integrate comprehensive Western astrology calculations including natal charts, transits, synastry, and progressions into your applications with our developer-friendly API.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Started - Free Trial
            </Link>
            <Link href="#demo" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-md border border-gray-200 transition transform hover:-translate-y-1">
              Live Demo
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold">Natal Charts</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-bold">Transits</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">💑</div>
            <h3 className="font-bold">Synastry</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">☀️</div>
            <h3 className="font-bold">Solar Returns</h3>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-6">Trusted by astrology professionals and developers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-xl font-bold text-gray-700">AstroApp</div>
            <div className="text-xl font-bold text-gray-700">CosmicInsight</div>
            <div className="text-xl font-bold text-gray-700">ZodiacConnect</div>
            <div className="text-xl font-bold text-gray-700">StarLabs</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Comprehensive Western Astrology Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for professional-grade astrology calculations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Natal Chart API</h3>
              <p className="text-gray-700 mb-4">
                Calculate complete natal charts with planetary positions, houses, aspects, and interpretations. Supports all major house systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Planetary positions & aspects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>House cusps & planetary house positions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Chart interpretations & aspect analyses</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Transit API</h3>
              <p className="text-gray-700 mb-4">
                Analyze current and future planetary transits to natal chart positions with detailed interpretations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Current transits to natal positions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Transit-to-transit aspects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Historical and future transit data</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💑</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Synastry API</h3>
              <p className="text-gray-700 mb-4">
                Compare two natal charts for relationship compatibility analysis with detailed aspect interpretations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Planetary aspects between charts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Composite chart calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Compatibility scoring & analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Solar Return API</h3>
              <p className="text-gray-700 mb-4">
                Calculate solar return charts for any year with interpretations of the year's themes and influences.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Solar return chart calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Solar return to natal chart comparison</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Yearly forecast interpretations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Progression API</h3>
              <p className="text-gray-700 mb-4">
                Calculate secondary progressions, solar arc directions, and other predictive techniques.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Secondary progressions (day-for-a-year)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Solar arc directions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Progressed-to-natal aspect interpretations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Developer Friendly</h3>
              <p className="text-gray-700 mb-4">
                Easy integration with comprehensive documentation and support for all major platforms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>RESTful JSON API</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>SDKs for major languages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Webhooks support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Response Example Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Simple Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean, well-documented JSON responses that are easy to work with
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gray-900 px-6 py-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400">POST /api/v1/natal-chart</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                {`{
  "success": true,
  "data": {
    "chart": {
      "date": "1990-06-15T08:30:00-05:00",
      "location": {
        "name": "New York, NY",
        "latitude": 40.7128,
        "longitude": -74.0060,
        "timezone": "America/New_York"
      },
      "house_system": "Placidus",
      "planets": {
        "sun": { "sign": "Gemini", "degree": 23.45, "house": 10 },
        "moon": { "sign": "Aquarius", "degree": 12.3, "house": 6 },
        "mercury": { "sign": "Gemini", "degree": 18.2, "house": 9 },
        "venus": { "sign": "Taurus", "degree": 5.67, "house": 8 },
        "mars": { "sign": "Scorpio", "degree": 29.8, "house": 4 },
        "jupiter": { "sign": "Cancer", "degree": 14.5, "house": 11 },
        "saturn": { "sign": "Capricorn", "degree": 8.9, "house": 5 },
        "uranus": { "sign": "Capricorn", "degree": 3.2, "house": 5 },
        "neptune": { "sign": "Capricorn", "degree": 11.7, "house": 5 },
        "pluto": { "sign": "Scorpio", "degree": 15.3, "house": 3 },
        "ascendant": { "sign": "Virgo", "degree": 12.8 },
        "midheaven": { "sign": "Gemini", "degree": 22.1 }
      },
      "houses": [
        { "sign": "Virgo", "degree": 12.8, "house": 1 },
        { "sign": "Libra", "degree": 15.2, "house": 2 },
        { "sign": "Scorpio", "degree": 20.5, "house": 3 },
        { "sign": "Sagittarius", "degree": 25.7, "house": 4 },
        { "sign": "Capricorn", "degree": 27.3, "house": 5 },
        { "sign": "Aquarius", "degree": 25.9, "house": 6 },
        { "sign": "Pisces", "degree": 22.1, "house": 7 },
        { "sign": "Aries", "degree": 15.2, "house": 8 },
        { "sign": "Taurus", "degree": 12.8, "house": 9 },
        { "sign": "Gemini", "degree": 22.1, "house": 10 },
        { "sign": "Cancer", "degree": 15.2, "house": 11 },
        { "sign": "Leo", "degree": 12.8, "house": 12 }
      ],
      "aspects": [
        {
          "planet1": "sun",
          "planet2": "moon",
          "aspect": "square",
          "orb": 1.2,
          "exact": false,
          "interpretation": "Tension between conscious will and emotional needs..."
        },
        {
          "planet1": "venus",
          "planet2": "mars",
          "aspect": "trine",
          "orb": 0.8,
          "exact": true,
          "interpretation": "Harmony between love nature and assertive energy..."
        }
      ]
    },
    "interpretation": {
      "summary": "This natal chart shows a strong emphasis on...",
      "sun_sign": "With your Sun in Gemini in the 10th house...",
      "moon_sign": "Your Moon in Aquarius in the 6th house suggests..."
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-4">Interactive Demo</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Try our Western astrology APIs right in your browser. See how easy it is to get professional astrological calculations.
        </p>
        
        <Tabs 
          value={tab} 
          onChange={(e, val) => setTab(val)} 
          centered 
          className="mb-8"
          TabIndicatorProps={{ style: { background: '#7c3aed', height: '4px' } }}
          textColor="inherit"
        >
          <Tab label={<span className="font-semibold">Natal Chart</span>} />
          <Tab label={<span className="font-semibold">Transits</span>} />
          <Tab label={<span className="font-semibold">Synastry</span>} />
        </Tabs>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          {tab === 0 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Natal Chart Calculator</h3>
                <p className="text-gray-600">Enter birth details to calculate a complete natal chart</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="birth-date" className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
                    <input
                      type="date"
                      id="birth-date"
                      name="date"
                      value={birthData.date}
                      onChange={handleBirthDataChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="birth-time" className="block text-sm font-medium text-gray-700 mb-1">Birth Time</label>
                    <input
                      type="time"
                      id="birth-time"
                      name="time"
                      value={birthData.time}
                      onChange={handleBirthDataChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="birth-location" className="block text-sm font-medium text-gray-700 mb-1">Birth Location</label>
                    <input
                      type="text"
                      id="birth-location"
                      name="location"
                      value={birthData.location}
                      onChange={handleBirthDataChange}
                      placeholder="City, Country"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                      <input
                        type="text"
                        id="latitude"
                        name="lat"
                        value={birthData.lat}
                        onChange={handleBirthDataChange}
                        placeholder="40.7128"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                      <input
                        type="text"
                        id="longitude"
                        name="lng"
                        value={birthData.lng}
                        onChange={handleBirthDataChange}
                        placeholder="-74.0060"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
                    Calculate Natal Chart
                  </button>
                </div>
              </div>
              {birthData.date && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4">Sample Natal Chart Interpretation</h4>
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-purple-100">
                    <h5 className="text-lg font-semibold mb-3 text-purple-700">Planetary Positions</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium">Sun</div>
                        <div className="text-sm text-gray-600">23°45' Gemini - 10th House</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium">Moon</div>
                        <div className="text-sm text-gray-600">12°30' Aquarius - 6th House</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium">Ascendant</div>
                        <div className="text-sm text-gray-600">12°48' Virgo</div>
                      </div>
                    </div>
                    
                    <h5 className="text-lg font-semibold mb-3 text-purple-700">Key Aspects</h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">□</span>
                        </div>
                        <div>
                          <span className="font-medium">Sun square Moon (1°15' orb):</span> 
                          <p className="text-gray-700">This aspect suggests tension between your conscious will (Sun) and emotional needs (Moon). You may feel pulled between your public persona and private emotional life.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">△</span>
                        </div>
                        <div>
                          <span className="font-medium">Venus trine Mars (0°45' orb):</span> 
                          <p className="text-gray-700">This harmonious aspect indicates an easy flow between your love nature (Venus) and assertive energy (Mars). You likely have natural charm and the ability to pursue what you desire.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <h5 className="text-lg font-semibold mb-3 text-purple-700">Chart Interpretation</h5>
                    <div className="space-y-4">
                      <div>
                        <h6 className="font-medium mb-1">Sun in Gemini (10th House)</h6>
                        <p className="text-gray-700">
                          With your Sun in Gemini in the 10th house of career and public image, you likely thrive in communication-based professions. Your quick mind and adaptability serve you well in the public eye. You may have multiple career paths or wear many hats in your professional life.
                        </p>
                      </div>
                      <div>
                        <h6 className="font-medium mb-1">Moon in Aquarius (6th House)</h6>
                        <p className="text-gray-700">
                          Your Moon in Aquarius in the 6th house suggests you need intellectual stimulation in your daily work. You may approach emotions objectively and value friendships highly. Your emotional well-being benefits from helping others or working toward humanitarian goals.
                        </p>
                      </div>
                      <div>
                        <h6 className="font-medium mb-1">Ascendant in Virgo</h6>
                        <p className="text-gray-700">
                          With Virgo rising, you present yourself as analytical, service-oriented, and detail-focused. Others may perceive you as practical and efficient. You likely have a keen eye for improving systems and processes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === 1 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Transit Calculator</h3>
                <p className="text-gray-600">Calculate current transits to a natal chart</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">Natal Chart Details</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="transit-birth-date" className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
                      <input
                        type="date"
                        id="transit-birth-date"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transit-birth-time" className="block text-sm font-medium text-gray-700 mb-1">Birth Time</label>
                      <input
                        type="time"
                        id="transit-birth-time"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">Transit Date</h4>
                  <div className="max-w-xs">
                    <label htmlFor="transit-date" className="block text-sm font-medium text-gray-700 mb-1">Date for Transits</label>
                    <input
                      type="date"
                      id="transit-date"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
                    Calculate Transits
                  </button>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-4">Sample Transit Interpretation</h4>
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-purple-100">
                  <h5 className="text-lg font-semibold mb-3 text-purple-700">Current Significant Transits</h5>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-purple-600">♃</span>
                      </div>
                      <div>
                        <span className="font-medium">Jupiter conjunct Natal Sun (1°10' orb):</span> 
                        <p className="text-gray-700">
                          This is a period of expansion and opportunity in your career and public life. You may experience recognition, promotions, or new professional opportunities. Your confidence and optimism are high - take calculated risks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-purple-600">♄</span>
                      </div>
                      <div>
                        <span className="font-medium">Saturn square Natal Moon (0°45' orb):</span> 
                        <p className="text-gray-700">
                          This transit brings tests around emotional security and daily routines. You may feel restricted in expressing your feelings or face responsibilities that limit your freedom. The lesson is to establish healthy emotional boundaries.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-purple-600">♅</span>
                      </div>
                      <div>
                        <span className="font-medium">Uranus trine Natal Mercury (1°30' orb):</span> 
                        <p className="text-gray-700">
                          Sudden insights and innovative ideas come easily now. Your thinking is unconventional and progressive. This is an excellent time for study, writing, or any mental activity that benefits from originality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h5 className="text-lg font-semibold mb-3 text-purple-700">Transit Overview</h5>
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-medium mb-1">Current Themes</h6>
                      <p className="text-gray-700">
                        This is a significant period for career development (Jupiter-Sun) while simultaneously dealing with emotional responsibilities (Saturn-Moon). The key is to balance your professional ambitions with self-care and emotional processing.
                      </p>
                    </div>
                    <div>
                      <h6 className="font-medium mb-1">Duration of Influences</h6>
                      <p className="text-gray-700">
                        The Jupiter influence will be strongest for about 3 months as it forms an exact conjunction. Saturn's square will be within 1° orb for about 6 weeks. Uranus' trine is wide but its innovative energy may be felt for several months.
                      </p>
                    </div>
                    <div>
                      <h6 className="font-medium mb-1">Recommended Actions</h6>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Pursue career opportunities that align with your authentic self</li>
                        <li>Establish healthy routines for emotional stability</li>
                        <li>Document innovative ideas that come during this period</li>
                        <li>Balance professional growth with personal needs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Synastry Calculator</h3>
                <p className="text-gray-600">Compare two natal charts for relationship compatibility</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Person 1</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="person1-date" className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
                        <input
                          type="date"
                          id="person1-date"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="person1-time" className="block text-sm font-medium text-gray-700 mb-1">Birth Time</label>
                        <input
                          type="time"
                          id="person1-time"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Person 2</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="person2-date" className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
                        <input
                          type="date"
                          id="person2-date"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="person2-time" className="block text-sm font-medium text-gray-700 mb-1">Birth Time</label>
                        <input
                          type="time"
                          id="person2-time"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
                    Calculate Synastry
                  </button>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-4">Sample Synastry Interpretation</h4>
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-purple-100">
                  <h5 className="text-lg font-semibold mb-3 text-purple-700">Key Aspects Between Charts</h5>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-purple-600">☌</span>
                      </div>
                      <div>
                        <span className="font-medium">Person 1's Sun conjunct Person 2's Moon (0°30' orb):</span> 
                        <p className="text-gray-700">
                          This is one of the strongest compatibility aspects. Person 1's identity and vitality (Sun) perfectly aligns with Person 2's emotional needs (Moon). There's natural understanding and emotional support in this relationship.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-purple-600">⚹</span>
                      </div>
                      <div>
                        <span className="font-medium">Person 1's Venus sextile Person 2's Mars (1°15' orb):</span> 
                        <p className="text-gray-700">
                          Harmonious sexual chemistry and romantic attraction. Person 1's love nature (Venus) works well with Person 2's assertive energy (Mars). There's mutual appreciation and balanced give-and-take.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-purple-600">□</span>
                      </div>
                      <div>
                        <span className="font-medium">Person 1's Saturn square Person 2's Sun (0°50' orb):</span> 
                        <p className="text-gray-700">
                          This challenging aspect may create tension where Person 1's restrictions (Saturn) limit Person 2's self-expression (Sun). However, it can also provide structure and growth opportunities if handled consciously.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h5 className="text-lg font-semibold mb-3 text-purple-700">Composite Chart Highlights</h5>
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-medium mb-1">Composite Sun in Libra (7th House)</h6>
                      <p className="text-gray-700">
                        The relationship's core purpose revolves around partnership, balance, and harmony. There's strong emphasis on fairness, cooperation, and mutual appreciation in how you present yourselves as a couple.
                      </p>
                    </div>
                    <div>
                      <h6 className="font-medium mb-1">Composite Moon in Taurus (2nd House)</h6>
                      <p className="text-gray-700">
                        The emotional foundation of your relationship is stable, sensual, and security-oriented. You likely build emotional bonds through shared values, physical comforts, and reliable routines.
                      </p>
                    </div>
                    <div>
                      <h6 className="font-medium mb-1">Composite Venus trine Neptune</h6>
                      <p className="text-gray-700">
                        This aspect indicates idealistic love and romantic potential in the relationship. There may be strong artistic or spiritual connections, though be mindful of unrealistic expectations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-6">
                  <h5 className="text-lg font-semibold mb-3 text-purple-700">Compatibility Summary</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-medium text-green-800 mb-1">Strengths</div>
                      <ul className="list-disc pl-5 text-sm text-green-700 space-y-1">
                        <li>Strong emotional understanding</li>
                        <li>Good romantic chemistry</li>
                        <li>Shared values</li>
                        <li>Natural partnership energy</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="font-medium text-yellow-800 mb-1">Challenges</div>
                      <ul className="list-disc pl-5 text-sm text-yellow-700 space-y-1">
                        <li>Authority vs. self-expression</li>
                        <li>Different communication styles</li>
                        <li>Financial priorities</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-medium text-blue-800 mb-1">Growth Areas</div>
                      <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                        <li>Balancing independence</li>
                        <li>Handling responsibilities</li>
                        <li>Creative collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Simple Integration Process</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Get started with AstroSetuAPI in just a few minutes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="relative">
              <div className="absolute -left-2 top-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">1</div>
              <div className="pl-12">
                <h3 className="text-2xl font-bold mb-3">Get Your API Key</h3>
                <p className="text-purple-200">
                  Sign up for free and instantly receive your unique API key. No credit card required to start with our generous free tier.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-2 top-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">2</div>
              <div className="pl-12">
                <h3 className="text-2xl font-bold mb-3">Integrate with Your App</h3>
                <p className="text-purple-200">
                  Use our well-documented REST API or SDKs to fetch astrology data. We provide code samples in JavaScript, Python, PHP, and more.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-2 top-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">3</div>
              <div className="pl-12">
                <h3 className="text-2xl font-bold mb-3">Deliver Astrology Insights</h3>
                <p className="text-purple-200">
                  Show professional astrology content to your users. Our accurate calculations and interpretations help you build engaging features.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link href="/pricing" className="inline-block bg-white hover:bg-gray-100 text-purple-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Trusted by Astrology Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what our customers say about AstroSetuAPI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">PS</div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">Professional Astrologer</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "I've integrated AstroSetuAPI into my astrology practice for natal chart calculations. The accuracy is exceptional, saving me hours of manual calculations. My clients appreciate the detailed interpretations."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">RK</div>
                <div>
                  <h4 className="font-bold">Ramesh Kumar</h4>
                  <p className="text-gray-600 text-sm">Developer, CosmicInsight</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "The documentation is the best I've seen for any API. We integrated the synastry and composite chart features in just a few days. The relationship analysis is incredibly detailed and accurate."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">AM</div>
                <div>
                  <h4 className="font-bold">Anjali Mehta</h4>
                  <p className="text-gray-600 text-sm">Founder, ZodiacConnect</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★☆</div>
              <p className="text-gray-700">
                "Our users love the transit and progression features - they add depth to our app. The only reason I didn't give 5 stars is that I'd love to see even more predictive techniques added."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Professional Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AstroSetuAPI can enhance your astrology services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v11a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Astrology Apps</h3>
              <p className="text-gray-700">
                Add professional natal chart calculations, transit analysis, and compatibility features to your astrology app.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dating Platforms</h3>
              <p className="text-gray-700">
                Offer zodiac compatibility insights and synastry reports to help users find better matches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wellness Platforms</h3>
              <p className="text-gray-700">
                Combine astrology with health recommendations for a holistic approach to wellbeing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Event Planning</h3>
              <p className="text-gray-700">
                Use transit data to suggest auspicious dates for weddings, business launches, and other important events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content Creation</h3>
              <p className="text-gray-700">
                Generate personalized astrology content at scale for blogs, social media, and newsletters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Astrology</h3>
              <p className="text-gray-700">
                Enhance your astrology practice with accurate calculations and detailed interpretations for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about AstroSetuAPI
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition"
                onClick={() => setFaqOpenIndex(faqOpenIndex === i ? null : i)}
              >
                <h3 className="text-lg font-semibold">{q}</h3>
                <svg 
                  className={`w-5 h-5 text-purple-600 transition-transform ${faqOpenIndex === i ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {faqOpenIndex === i && (
                <div className="px-6 pb-5 pt-0 bg-gray-50">
                  <p className="text-gray-700">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="#" className="text-purple-600 font-semibold hover:text-purple-800">
            Contact our support team →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Integrate Western Astrology?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join professional astrologers and developers using AstroSetuAPI to deliver accurate astrological calculations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="inline-block bg-white hover:bg-gray-100 text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Started for Free
            </Link>
            <Link to="#demo" className="inline-block bg-transparent hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white transition transform hover:-translate-y-1">
              Try Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}