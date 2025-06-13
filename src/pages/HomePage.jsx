import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const tabData = [
  {
    title: 'Tarot',
    key: 'tarot',
    image: '../assets/images/tarot.png',
    slug:'/tarot-card',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Tarot Card Reading API</h2>
        <p className="mb-3">
          Tap into the mystical world of Tarot with our accurate and AI-powered Tarot API. Get daily, love, career, and health readings using classic spreads like Celtic Cross and Three-Card Draw.
        </p>
        <p className="mb-3">
          Perfect for spiritual apps, lifestyle platforms, and wellness services looking to provide intuitive, engaging Tarot experiences to users.
        </p>
        <p>Offer real-time Tarot predictions that keep users engaged and returning for more insights.</p>
      </>
    ),
    button: 'Explore Tarot Card API',
  },
  {
    title: 'Chaldean Numerology',
    key: 'chaldennumerology',
    image: '../assets/images/chaldennumerology.webp',
    slug:'/numerology',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Chaldean Numerology API</h2>
        <p className="mb-3">
          Unlock ancient number wisdom with our Chaldean Numerology API. Discover core numbers like Destiny, Soul Urge, Expression, Maturity, and Karmic Lessons.
        </p>
        <p className="mb-3">
          Designed for astrology apps, numerology platforms, and coaches who need precise name and birthdate-based insights using the time-tested Chaldean system.
        </p>
        <p>Deliver meaningful numerological guidance that helps users make better life decisions.</p>
      </>
    ),
    button: 'Try Chaldean Numerology API',
  },
  {
    title: 'Astrological Living',
    key: 'astrologicalliving',
    image: '../assets/images/cosmiclifestyle.webp',
    slug:'/lifestyle',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Astrological Living Horoscope API</h2>
        <p className="mb-3">
          Align your audience with cosmic rhythms using daily, weekly, and monthly horoscopes tailored to love, finance, health, and personal growth.
        </p>
        <p className="mb-3">
          This API is ideal for wellness brands, lifestyle portals, and astrology enthusiasts wanting to integrate dynamic, shareable astrological content.
        </p>
        <p>Boost engagement and retention with relatable, beautifully written horoscope updates.</p>
      </>
    ),
    button: 'Launch Horoscope API Now',
  },
  {
    title: 'Indian Festival',
    key: 'indianfestival',
    image: '../assets/images/indianfestival.webp',
    slug:'/festival',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Indian Festival & Panchang API</h2>
        <p className="mb-3">
          Access authentic Hindu festival dates, Tithi, Muhurat, and Panchang data powered by Swiss Ephemeris. Support for Ekadashi, Purnima, Amavasya, and regional calendars.
        </p>
        <p className="mb-3">
          Perfect for puja booking apps, cultural calendars, and spiritual platforms looking to display accurate religious timings and festival insights.
        </p>
        <p>Deliver culturally rich, time-sensitive data with precision and trust.</p>
      </>
    ),
    button: 'Get Festival & Panchang API',
  },
];


export default function HomePage() {

  const [activeTab, setActiveTab] = useState('tarot');
  const currentTab = tabData.find(tab => tab.key === activeTab);

  return (

    <>

    <Helmet>
        <title>AstroSetu - Accurate Online Kundli & Daily Horoscopes</title>
        <meta name="description" content="Get free Vedic astrology, daily horoscopes, kundli, and personalized predictions with AstroSetu's advanced AI engine." />
        <meta
          name="keywords"
          content="kundli matching, matchmaking API, dating compatibility, manglik dosha, vedic love astrology, matrimonial kundli"
        />
        <link rel="canonical" href="/" />
    </Helmet>
     <div className="bg-customBg flex items-center justify-center p-4 sm:p-8">
      {/* Card Container */}
      <div className="max-w-7xl w-full mx-auto overflow-hidden">
        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-6 p-8 md:p-10 flex flex-col justify-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            All-in-One Astrology API for Horoscope, Tarot, Kundli, Panchang, Numerology & Vedic Insights
          </h1>
          <p className="text-white text-base sm:text-lg">
            AstroAPIHub provides real-time Horoscope, Kundli, Tarot, Panchang & Numerology APIs. Fast, accurate, and scalable — perfect for apps, websites, and spiritual platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
            <Link to="/pricing" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors">
              Get Started
            </Link>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
              View Docs
            </button>
          </div>
        </div>
      </div>
    </div>
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-yellow-500">AstroAPIHub</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Built for developers and businesses looking for fast, scalable, and personalized astrology experiences—without the complexity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {/* Feature 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg text-gray-900">Lightning-Fast APIs</h3>
            <p className="text-gray-600 mt-2">
              Optimized endpoints with low-latency response for real-time astrology integrations across the globe.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">🧩</div>
            <h3 className="font-semibold text-lg text-gray-900">Modular & Flexible</h3>
            <p className="text-gray-600 mt-2">
              Plug only the features you need—from Panchang to Tarot—to create customized astrology solutions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="font-semibold text-lg text-gray-900">Enterprise-Grade Security</h3>
            <p className="text-gray-600 mt-2">
              Secure API access with authentication, encryption, and rate-limiting to keep your data safe.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="font-semibold text-lg text-gray-900">Built for Developers</h3>
            <p className="text-gray-600 mt-2">
              Clean documentation, code samples, and sandbox testing environment—ready for production use.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-pink-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="font-semibold text-lg text-gray-900">Multi-Cultural Support</h3>
            <p className="text-gray-600 mt-2">
              Vedic, Western, Chinese astrology and more—cater to diverse spiritual and cultural user bases globally.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-semibold text-lg text-gray-900">24/7 Developer Support</h3>
            <p className="text-gray-600 mt-2">
              Get help anytime with a dedicated technical team, live chat, and detailed knowledge base.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-customBg py-16 px-4">
      <div className="bg-pink-50 rounded-3xl p-8 max-w-6xl mx-auto shadow-lg">
            {/* Tabs */}
            <div className="flex gap-6 mb-6">
              {tabData.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-2 px-4 text-sm font-semibold rounded-md border-b-2 ${
                    activeTab === tab.key
                      ? 'text-white bg-pink-500 border-pink-700'
                      : 'text-gray-700 bg-white border-transparent hover:bg-pink-100'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            { console.log(currentTab.content)}

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-800">{currentTab.content}</div>
              <div>
                <img src={currentTab.image} alt={currentTab.title} className="w-80 rounded-xl m-auto" />
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Link to={currentTab.slug} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl shadow-md transition">
                {currentTab.button}
              </Link>
            </div>
          </div>
    </section>
    
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Horoscope API
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Developer Friendly. Astrologically Accurate. Business Oriented.
          Deliver astrological precision to your audience with our user-friendly, integrated API.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-14 bg-white">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            Multi-System Horoscope API – Vedic, Chinese & Numerology Insights
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0 mb-6">
            Unlock personalized daily, weekly, monthly, and yearly predictions with our unified Horoscope API. Deliver accurate insights from **Vedic Astrology**, **Chinese Zodiac**, and **Numerology**, all in real time. Cover love, career, health, emotions, finance, and more – across all 12 zodiac signs and numerological paths.
          </p>
          <p className="text-sm text-gray-500">Perfect for apps, websites, and digital platforms looking to engage users with deeply personalized astrological experiences.</p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img 
            src="../assets/images/horoscope.webp"
            alt="Astrology API - Horoscope, Chinese Zodiac, Numerology" 
            className="w-80 h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Match Making API
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Power your apps with advanced astrological matchmaking. Our developer-friendly API delivers high-precision compatibility results based on traditional Vedic and modern astrological algorithms.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-6 leading-tight">
            Accurate Matchmaking Powered by Astrology
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Whether you're building a dating platform, a wedding portal, or a spiritual guidance app—our Match Making API provides authentic compatibility analysis based on planetary positions, gunas, and doshas.
          </p>
          <ul className="text-left text-gray-700 mb-6 list-disc pl-5 space-y-2">
            <li>Kundli matching based on Ashtakoot & Dashakoot systems</li>
            <li>Manglik, Nadi, Bhakoot, and planetary dosha checks</li>
            <li>Support for birth time, place, and timezone adjustments</li>
            <li>JSON-based fast, scalable, and secure API structure</li>
          </ul>
          <a
            href="#get-started"
            className="inline-block mt-4 bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
          >
            Get Started with Match Making API
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="../assets/images/kundalimatching.webp"
            alt="Match Making API Illustration"
            className="w-[320px] h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Natal Chart API
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Developer-First. Astrologically Rich. Perfect for Businesses.
          Generate accurate birth charts using our easy-to-integrate API, designed to deliver deep astrological insights based on real-time astronomical calculations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Content Block */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6 leading-tight">
            Generate Accurate Natal Charts Instantly
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Power your astrology app, website, or platform with real-time natal chart generation. Our API computes planetary positions, house placements, and astrological aspects using advanced algorithms.
          </p>
          <ul className="text-left text-gray-700 mb-6 list-disc pl-5 space-y-2">
            <li>Supports tropical and sidereal zodiac systems</li>
            <li>Returns planets, houses, aspects, and Nakshatras</li>
            <li>Ideal for personality, compatibility & life purpose analysis</li>
          </ul>
          <a
            href="#get-started"
            className="inline-block mt-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
          >
            Start with Natal Chart API
          </a>
        </div>

        {/* Image Block */}
        <div className="flex justify-center md:justify-end">
          <img
            src="../assets/images/natal.webp"
            alt="Natal Chart API Illustration"
            className="w-[320px] h-auto rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
    <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Daily Panchang API
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Developer Friendly. Astrologically Accurate. Business Oriented.
          Deliver astrological precision to your audience with our user-friendly, integrated API.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Content Block */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6 leading-tight">
            Accurate Daily Panchang API for Auspicious Timing
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Power your astrology apps with real-time daily Panchang data. Our Panchang API provides sunrise, tithi, nakshatra, yoga, karana, and muhurta for any date and location.
          </p>
          <ul className="text-left text-gray-700 mb-6 list-disc pl-5 space-y-2">
            <li>Accurate sunrise and sunset times</li>
            <li>Tithi, Nakshatra, Yoga, and Karana details</li>
            <li>Auspicious and Inauspicious Muhurta timings</li>
            <li>Supports location-based customization</li>
          </ul>
          <a
            href="#get-started"
            className="inline-block mt-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
          >
            Start with Panchang API
          </a>
        </div>

        {/* Image Block */}
        <div className="flex justify-center md:justify-end">
          <img
            src="../assets/images/panchang.webp"
            alt="Panchang Calendar API Illustration"
            className="w-[320px] h-auto rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Kundli API
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Precision meets performance. Deliver astrologically rich insights with real-time birth chart generation. Developer-friendly, scalable, and accurate down to the degree.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Content Block */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6 leading-tight">
            Generate Accurate Kundli Charts in Seconds
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our Kundli API delivers Vedic birth charts with precision—calculating planetary positions, houses, aspects, and nakshatras based on birth date, time, and place.
          </p>
          <ul className="text-left text-gray-700 mb-6 list-disc pl-5 space-y-2">
            <li>Choose between Sidereal (Lahiri) and Tropical systems</li>
            <li>Returns detailed birth chart data: planets, lagnas, aspects & more</li>
            <li>Perfect for astrology apps, kundli match-making, career predictions</li>
          </ul>
          <a
            href="#get-started"
            className="inline-block mt-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
          >
            Start with Kundli API
          </a>
        </div>

        {/* Image Block */}
        <div className="flex justify-center md:justify-end">
          <img
            src="../assets/images/kundali.webp"
            alt="Kundli API Illustration"
            className="w-[320px] h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50 py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Experience the Power of <span className="text-yellow-500">AstroAPIHub</span>
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Book a personalized demo to explore how our Astrology APIs – including Horoscope, Tarot, Numerology, and Panchang – can elevate your app or website.
        </p>
        <p className="text-sm text-gray-500 mt-6 max-w-xl mx-auto">
          Our Astrology-as-a-Service platform supports custom integrations, multi-language output, and real-time calculations – perfect for apps in astrology, wellness, matchmaking, spirituality, and more.
        </p>
        <form className="bg-white rounded-xl shadow-lg px-6 py-8 max-w-xl mx-auto space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <input
            type="text"
            placeholder="Company / Project Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            rows="4"
            placeholder="What would you like to explore in the demo?"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            Schedule Your Demo
          </button>
        </form>
      </div>
    </section>

    </>
    
   


  )
}