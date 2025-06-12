import React, { useState } from 'react';

const tabData = [
  {
    title: 'Western Astrology',
    key: 'western',
    image: '/assets/western.png',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Western Astrology API</h2>
        <p className="mb-3">
          Western Astrology, also known as tropical astrology, is a modern approach to understanding personality, compatibility, and forecasts through zodiac signs.
        </p>
        <p className="mb-3">
          Our APIs offer natal charts, synastry reports, solar returns, and daily to yearly predictions—perfect for apps or platforms seeking personalized content.
        </p>
        <p>Enhance your user experience with rich astrology insights.</p>
      </>
    ),
    button: 'Explore Western Astrology API',
  },
  {
    title: 'Vedic Astrology',
    key: 'vedic',
    image: '/assets/vedic.png',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Vedic Astrology API</h2>
        <p className="mb-3">
          Dive deep into Jyotish with accurate planetary positions, dasha timelines, Kundli generation, and marriage compatibility reports.
        </p>
        <p className="mb-3">
          Our Vedic APIs are ideal for astrologers and spiritual platforms seeking precise traditional calculations powered by Swiss Ephemeris.
        </p>
        <p>Build trust with detailed and authentic predictions.</p>
      </>
    ),
    button: 'Explore Vedic Astrology API',
  },
  {
    title: 'Horoscopes',
    key: 'horoscopes',
    image: '/assets/horoscope.png',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Horoscope API</h2>
        <p className="mb-3">
          Get personalized and general horoscopes delivered daily, weekly, monthly, and yearly. Categories include love, money, health, and career.
        </p>
        <p className="mb-3">
          Drive traffic with highly engaging, SEO-optimized horoscope content that keeps users coming back.
        </p>
        <p>Ideal for lifestyle blogs, wellness apps, and content creators.</p>
      </>
    ),
    button: 'Start with Horoscope API',
  },
  {
    title: 'PDFs',
    key: 'pdfs',
    image: '/assets/pdf.png',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Astrology PDF Reports API</h2>
        <p className="mb-3">
          Generate professional astrology reports in PDF format, including Janam Kundli, compatibility, numerology, and transit predictions.
        </p>
        <p className="mb-3">
          Perfect for monetization, consultation, and customer reports—available in multiple languages and layouts.
        </p>
        <p>Start offering premium downloadable content instantly.</p>
      </>
    ),
    button: 'Try PDF Report Generator API',
  },
];


export default function HomePage() {

  const [activeTab, setActiveTab] = useState('western');
  const currentTab = tabData.find(tab => tab.key === activeTab);

  return (

    <>
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
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors">
              Get Started
            </button>
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

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-800">{currentTab.content}</div>
              <div>
                <img src={currentTab.image} alt={currentTab.title} className="w-full rounded-xl" />
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl shadow-md transition">
                {currentTab.button}
              </button>
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
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC1nK6eAAABP1BMVEXMzMyAgID///8AAADv7++UlJTMzMzX19f4+PjT09Pp6ens7Ozm5ubm5ubS0tLw8PDEwsKlpaXq6uqgoKDd3d2Tk5PT09Pa2trc3Ny2trbz8/OTk5OKiorq6uqcnJza2trZ2dnNzc38/Px0dHReXl7Ly8tJSUm3t7dVVVWvr6+kpKSTk5N6enpkZGRvb28qKirBwcHn5+fU1NS9vb2RkZFHR0dISEhaWlpeXl7Ozs7Pz8/U1NSMjIy4uLiFhYWQkJCJiYmPj4+YmJiEhIRbW1uXl5eCgoKlpaWIiIh7e3sZGRk1NTXAwMB2dnZBQUEmJiZHR0eAgIBaWlptbW3Z2dn+/v5VVVVNTU1CQkI6OjoeHh7q6uqhoaE/Pz+ioqJ0dHSUlJSZmZmlpaWeP2xhAAAHbElEQVR4nO2d63aiOhCGKYmGUqIGY0FgVi2QiViJdf//jJTYCdoIq4oU85Zb/tsN8ydXKTh1prS0hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISGhv8+T5Kk3T1Nr+N3uqz8aL95Z59N5S77jbyRPfOJ2+2df6Jx+oTv+9zY1XD3Wa49xtbON3ncT9+9YhPDPJqPmrW3Z3npWmpvOLddfb1vP3aDmqPvD1vofjb7dGfx2qGvv5KnklzzB9n8NN9T0i+Ha1zGnvuc18vzR9d8cs4p3/Zrw69+r9S+vbeS3jO/jm+/W13jvUO5HXzTy0/H36bxd3iHn93A9Nr9O/LhPR8+Nx3/NuN3crHc9voIptf69X85fk9uOH9nvM/eHq/mzfT3LMsL1Gvfeu1Pek4OXcC5M2Y39fe3V9Tq+j+U7aT4aek9NH2H4snzz1XteXwrYf+AHdvPfyv5P3wKvuw+T++n7Z+HoWyx+7P0F+v/tQP3ZxD95eml/ePoN3Jz+7P0B9+v2QPfX3l/wevz5/57H96N37/sA90/0Xfz0R/TyF7+vrP+tdsPb72B+h1u+PvD9uODrft7U7xd3H7XPdbN33Z8H53vZ/Gxdv/s0+vJ8+vrfPH47+nC+/vkb+N73l8efK1dUX++fQ//KjPv9ZXz+/Zvb+z8D5zeLr2dUfP69+Pv9n+Orqnj7vX9en//lAf3u07rJxbKHEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEH7B/94zXeb3NgEtAAAAAElFTkSuQmCC' 
            alt="Astrology API - Horoscope, Chinese Zodiac, Numerology" 
            className="w-80 h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Tarot API
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Developer Friendly. Astrologically Accurate. Business Oriented.
          Deliver astrological precision to your audience with our user-friendly, integrated API.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-6 leading-tight">
            Unlock Mystical Insights with Our Tarot API
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Power your app or website with accurate Tarot card readings. Get love, career, and life path insights with real-time card pulls and interpretation – all via our easy-to-use developer API.
          </p>
          <ul className="text-left text-gray-700 mb-6 list-disc pl-5 space-y-2">
            <li>3-card, 5-card & Celtic Cross spreads</li>
            <li>Card-wise meanings and reversed readings</li>
            <li>Daily Tarot, Yes/No, and Thematic spreads</li>
          </ul>
          <a
            href="#get-started"
            className="inline-block mt-4 bg-purple-700  text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
          >
            Get Started with Tarot API
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC1nK6eAAABP1BMVEX////MzMyAgID///8AAADv7++UlJTMzMzX19f4+PjT09Pp6ens7Ozm5ubm5ubS0tLw8PDEwsKlpaXq6uqgoKDd3d2Tk5PT09Pa2trc3Ny2trbz8/OTk5OKiorq6uqcnJza2trZ2dnNzc38/Px0dHReXl7Ly8tJSUm3t7dVVVWvr6+kpKSTk5N6enpkZGRvb28qKirBwcHn5+fU1NS9vb2RkZFHR0dISEhaWlpeXl7Ozs7Pz8/U1NSMjIy4uLiFhYWQkJCJiYmPj4+YmJiEhIRbW1uXl5eCgoKlpaWIiIh7e3sZGRk1NTXAwMB2dnZBQUEmJiZHR0eAgIBaWlptbW3Z2dn+/v5VVVVNTU1CQkI6OjoeHh7q6uqhoaE/Pz+ioqJ0dHSUlJSZmZmlpaWeP2xhAAAHbElEQVR4nO2d63aiOhCGKYmGUqIGY0FgVi2QiViJdf//jJTYCdoIq4oU85Zb/tsN8ydXKTh1prS0hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISGhv8+T5Kk3T1Nr+N3uqz8aL95Z59N5S77jbyRPfOJ2+2df6Jx+oTv+9zY1XD3Wa49xtbON3ncT9+9YhPDPJqPmrW3Z3npWmpvOLddfb1vP3aDmqPvD1vofjb7dGfx2qGvv5KnklzzB9n8NN9T0i+Ha1zGnvuc18vzR9d8cs4p3/Zrw69+r9S+vbeS3jO/jm+/W13jvUO5HXzTy0/H36bxd3iHn93A9Nr9O/LhPR8+Nx3/NuN3crHc9voIptf69X85fk9uOH9nvM/eHq/mzfT3LMsL1Gvfeu1Pek4OXcC5M2Y39fe3V9Tq+j+U7aT4aek9NH2H4snzz1XteXwrYf+AHdvPfyv5P3wKvuw+T++n7Z+HoWyx+7P0F+v/tQP3ZxD95eml/ePoN3Jz+7P0B9+v2QPfX3l/wevz5/57H96N37/sA90/0Xfz0R/TyF7+vrP+tdsPb72B+h1u+PvD9uODrft7U7xd3H7XPdbN33Z8H53vZ/Gxdv/s0+vJ8+vrfPH47+nC+/vkb+N73l8efK1dUX++fQ//KjPv9ZXz+/Zvb+z8D5zeLr2dUfP69+Pv9n+Orqnj7vX9en//lAf3u07rJxbKHEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEH7B/94zXeb3NgEtAAAAAElFTkSuQmCC"
            alt="Tarot API Illustration"
            className="w-[320px] h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
    <section className="bg-white  py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Natal API
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
            Accurate Natal Chart API for Birth Insights
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Power your astrology app with precise natal chart generation. Our Birth Chart API delivers real-time planetary positions, house divisions, and celestial angles – based on date, time, and location of birth.
          </p>
          <ul className="text-left text-gray-700 mb-6 list-disc pl-5 space-y-2">
            <li>Supports tropical and sidereal calculations</li>
            <li>Delivers planets, houses, aspects, and nakshatras</li>
            <li>Ideal for compatibility, career, and life predictions</li>
          </ul>
          <a
            href="#get-started"
            className="inline-block mt-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
          >
            Start with Natal API
          </a>
        </div>

        {/* Image Block */}
        <div className="flex justify-center md:justify-end">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC1nK6eAAAAulBMVEX///8AAAD19fX4+Pjv7++srKzY2Nju7u7V1dWzs7PV1dXd3d35+fnZ2dn09PTn5+fMzMyUlJT8/PxkZGTu7u729vba2trh4eHKysrQ0NDU1NTX19ehoaHd3d3c3Nzk5OTIyMjj4+OXl5eRkZF2dnZOTk5paWkSEhIQEBAnJycYGBgkJCRJSUnmCRm3AAAGnElEQVR4nO2d23KiMBBFQQkQJCBEwhkKMUL//9XyIuQAyyhvQ9XtxvbvsNWGUSbb1sSlrbq7PfJKYQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQv5HXzyFbR71J+1nvK//ON6jBeu+1rnvprqpV1qlN5+X5hR9RfRaBrfcIPab8rY2B8Ur1rIdtv0cfabmEf+jW9X0UffKPsRsd+ni9d/m+bV3re0Ut4u9T+m17Kb+V+91W9M/XX4zVf7NXLpWfNeXY90z3aOe2z1SuOzXx+ul1/pj+X+0vvqrfkP79XeiXz19MZuu19ta/3P6xX3+K8rXb2X1xX3z8y+rPqv/Vffuvc31c9mfvZ/r9oFq1r+9X6ndW/V29f1C1r/r9db1ffTf12Qbvqb9a/nZ9dl8pb5vPn1fKty9rq8u3fOZ9mfa/rrs1ft6+Uv3+3L+W3/f9vnW7t73q7oXpfv9P9zr9f+sdv79dvzT2+33bW3t9f2y/vP/uvb7srz2f1jf76/Xb9fTzXX/R+Wn9+3qt/XeuvfqX99vn97r7+r0ffqJ9vfXfP+fuvxfyXb9v37n+r3T/c7r/U7fr9d79+7P+0vK+9++r7tv3+9rP6vW8ff67e/rP1+39v9B7fS/r29sX8zfbp9+v//kF///2W6kEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQggh5C+KfA82db8GRFMAAAAASUVORK5CYII="
            alt="Natal Chart API Illustration"
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