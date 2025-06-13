import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const chineseZodiacs = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

// FAQ data
const faqs = [
  {
    q: "What is AstroAPIHub?",
    a: "AstroAPIHub provides astrology APIs including Western Zodiac, Chinese Zodiac, Numeroscope, and Panchang data for easy integration."
  },
  {
    q: "How often are the horoscopes updated?",
    a: "All predictions and numeroscope data are updated daily to ensure freshness."
  },
  {
    q: "Is there a free plan available?",
    a: "Yes! We offer a generous free tier for developers to get started."
  },
  {
    q: "Can I integrate this with my mobile app?",
    a: "Absolutely, our REST APIs and SDKs work seamlessly with web and mobile platforms."
  }
];

const PricingCard = ({ title, price, features, popular }) => (
  <div className={`rounded-xl shadow-lg p-8 flex flex-col border ${popular ? "border-yellow-400 bg-yellow-50" : "border-gray-200"}`}>
    {popular && <div className="text-yellow-600 font-bold mb-4 uppercase text-center">Most Popular</div>}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-extrabold mb-6">${price}</p>
    <ul className="flex-1 mb-6 space-y-2">
      {features.map((f, i) => <li key={i} className="text-gray-700">• {f}</li>)}
    </ul>
    <button className={`py-3 rounded-lg font-semibold transition ${popular ? "bg-yellow-400 hover:bg-yellow-500 text-white" : "bg-gray-800 hover:bg-gray-900 text-white"}`}>
      Choose Plan
    </button>
  </div>
);

export default function AstroLandingPage() {
  const [tab, setTab] = useState(0);
  const [selectedSign, setSelectedSign] = useState("Aries");
  const [selectedChinese, setSelectedChinese] = useState("Rat");
  const [dob, setDob] = useState("");
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  // Numerology calculation
  const calculateLifePathNumber = (dob) => {
    if (!dob) return null;
    const digits = dob.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const getNumeroscopeMessage = (number) => {
    switch (number) {
      case 1: return { insight: "Leader and independent.", career: "Aim for management or innovation roles." };
      case 2: return { insight: "Cooperative and sensitive.", career: "Ideal for diplomacy and teamwork." };
      case 3: return { insight: "Creative and expressive.", career: "Flourishes in arts or media." };
      case 4: return { insight: "Practical and hardworking.", career: "Suited for engineering and organization." };
      case 5: return { insight: "Adventurous and adaptable.", career: "Travel and communication are your strengths." };
      case 6: return { insight: "Nurturing and responsible.", career: "Ideal for caregiving or community work." };
      case 7: return { insight: "Analytical and spiritual.", career: "Good for research or metaphysical studies." };
      case 8: return { insight: "Ambitious and goal-oriented.", career: "Business and finance are favorable." };
      case 9: return { insight: "Compassionate and humanitarian.", career: "Suited for healing or global missions." };
      case 11: return { insight: "Visionary and intuitive.", career: "Inspire others through art or leadership." };
      case 22: return { insight: "Master builder and leader.", career: "Capable of major accomplishments." };
      case 33: return { insight: "Master teacher and nurturer.", career: "Work involving spiritual or global care." };
      default: return null;
    }
  };

  const lifePathNumber = calculateLifePathNumber(dob);
  const numeroscope = getNumeroscopeMessage(lifePathNumber);

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-indigo-50 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Discover Your Destiny with <span className="text-indigo-600">AstroAPIHub</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          All-in-One Astrology API for Western Zodiac, Chinese Zodiac, Numeroscope & Panchang Data. 
          Power your apps, websites & services with accurate daily insights.
        </p>
        <a href="#demo" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition">
          Try Live Demo
        </a>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Accurate Predictions</h3>
            <p>Powered by advanced astrology algorithms and verified databases to give you trustworthy daily readings.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">All-in-One Dashboard</h3>
            <p>Western, Chinese & Numeroscope—everything you need to provide engaging user experiences.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Free Daily Updates</h3>
            <p>Fresh predictions delivered every day, keeping your users coming back for more.</p>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12">Live Interactive Demo</h2>
        <Tabs value={tab} onChange={(e, val) => setTab(val)} centered className="mb-8">
          <Tab label="Western Horoscope" />
          <Tab label="Chinese Horoscope" />
          <Tab label="Numeroscope" />
        </Tabs>

        <div>
          {tab === 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6">Select Your Western Zodiac Sign</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
                {zodiacSigns.map(sign => (
                  <button
                    key={sign}
                    onClick={() => setSelectedSign(sign)}
                    className={`py-3 rounded-xl border transition-shadow
                      ${selectedSign === sign ? "bg-indigo-100 border-indigo-400 shadow-md" : "bg-white border-gray-300 hover:shadow-lg"}`}
                  >
                    {sign}
                  </button>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold mb-3">Today's Horoscope for {selectedSign}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>💖 Love: Excellent time for bonding.</li>
                  <li>💼 Career: Big opportunity ahead.</li>
                  <li>💪 Health: Stay hydrated and get rest.</li>
                  <li>🌍 Travel: Ideal for short getaways.</li>
                  <li>🎯 Luck: Wear something green for extra fortune.</li>
                </ul>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6">Select Your Chinese Zodiac</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
                {chineseZodiacs.map(animal => (
                  <button
                    key={animal}
                    onClick={() => setSelectedChinese(animal)}
                    className={`py-3 rounded-xl border transition-shadow
                      ${selectedChinese === animal ? "bg-indigo-100 border-indigo-400 shadow-md" : "bg-white border-gray-300 hover:shadow-lg"}`}
                  >
                    {animal}
                  </button>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold mb-3">{selectedChinese} Daily Insight</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>🧘‍♂️ Health: Take time to meditate and relax.</li>
                  <li>📈 Fortune: A financial gain may be coming your way.</li>
                  <li>💬 Relationships: Honesty is key to smooth communication.</li>
                </ul>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6">Enter Your Birth Date for Numeroscope</h3>
              <input
                type="date"
                value={dob}
                onChange={e => setDob(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 mb-6 w-full max-w-sm"
                aria-label="Date of Birth"
              />
              {lifePathNumber && numeroscope ? (
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold mb-3">Your Numeroscope Reading</h4>
                  <p>🔢 Life Path Number: <strong>{lifePathNumber}</strong></p>
                  <p>🧠 Personality Insight: {numeroscope.insight}</p>
                  <p>💼 Career Tip: {numeroscope.career}</p>
                </div>
              ) : (
                <p className="text-gray-500">Please enter a valid date of birth to see your numeroscope.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-3">1. Sign Up & Get API Key</h3>
              <p>Create your free account and get a unique API key to start making requests.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">2. Integrate API</h3>
              <p>Use our RESTful endpoints to fetch horoscope, numerology, and Panchang data.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">3. Display & Engage</h3>
              <p>Show daily predictions on your app or website and keep your users coming back for more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-extrabold">Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Choose the plan that fits your needs. Start free and upgrade anytime.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Free"
            price="0"
            features={[
              "100 API calls/day",
              "Western & Chinese Zodiac",
              "Basic Numeroscope",
              "Email Support"
            ]}
          />
          <PricingCard
            title="Pro"
            price="29"
            features={[
              "10,000 API calls/day",
              "All Zodiac types & Numeroscope",
              "Priority Email Support",
              "Access to Panchang data"
            ]}
            popular
          />
          <PricingCard
            title="Business"
            price="99"
            features={[
              "Unlimited API calls",
              "Dedicated Support",
              "Custom Integrations",
              "SLAs & Uptime Guarantee"
            ]}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="p-6 bg-white rounded-xl shadow-md">
              <p className="mb-4">"AstroAPIHub transformed our app with daily personalized horoscopes. The API is fast and reliable!"</p>
              <cite className="font-semibold">– Priya S.</cite>
            </blockquote>
            <blockquote className="p-6 bg-white rounded-xl shadow-md">
              <p className="mb-4">"Easy to integrate and the documentation is top-notch. Support team is very responsive."</p>
              <cite className="font-semibold">– Ramesh K.</cite>
            </blockquote>
            <blockquote className="p-6 bg-white rounded-xl shadow-md">
              <p className="mb-4">"I love the numeroscope feature — it adds a unique touch to our wellness app."</p>
              <cite className="font-semibold">– Anjali M.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-gray-300 rounded-lg p-5 cursor-pointer"
              onClick={() => setFaqOpenIndex(faqOpenIndex === i ? null : i)}>
              <h3 className="text-xl font-semibold flex justify-between items-center">
                {q}
                <span className="ml-4 text-indigo-600 font-bold">{faqOpenIndex === i ? "-" : "+"}</span>
              </h3>
              {faqOpenIndex === i && <p className="mt-4 text-gray-700">{a}</p>}
            </div>
          ))}
        </div>
      </section>

   
    </div>
  );
}
