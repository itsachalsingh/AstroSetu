import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from 'react-router-dom';



// Enhanced FAQ data with SEO-rich content
const faqs = [
  {
    q: "What is AstroSetu Numerology API and how does it work?",
    a: "AstroSetu Numerology API is a powerful numerology calculation API that provides accurate life path numbers, destiny numbers, and personalized numerological insights based on birth dates and names. Our RESTful API delivers JSON responses that developers can easily integrate into websites, mobile apps, and digital platforms to offer numerology readings to users."
  },
  {
    q: "What numerology systems does your API support?",
    a: "Our API supports multiple numerology systems including Pythagorean numerology (Western), Chaldean numerology (ancient Babylonian), and Kabbalah numerology. We also provide compatibility calculations between different numbers and personalized daily forecasts based on numerological cycles."
  },
  {
    q: "How accurate are your numerology calculations?",
    a: "Our calculations follow precise numerological algorithms that have been refined over years of research. We use advanced reduction methods to derive core numbers while preserving master numbers (11, 22, 33). The accuracy of interpretations depends on correct input data, but our mathematical calculations are 100% precise."
  },
  {
    q: "Can I use your API for commercial applications?",
    a: "Absolutely! Many businesses use our API to power numerology features in their apps, websites, and digital products. Our Business plan includes commercial rights and white-label options. Check our pricing page for details on commercial usage limits."
  },
  {
    q: "What numerology calculations can I perform with your API?",
    a: "Our API can calculate: Life Path Number, Destiny Number, Soul Urge Number, Personality Number, Birthday Number, Current Name Number, Karmic Debt Numbers, Personal Year/Month/Day Cycles, Compatibility Scores, and Lucky Numbers based on multiple numerology systems."
  },
  {
    q: "Do you offer support for API integration?",
    a: "Yes! We provide comprehensive documentation, code samples in multiple languages (JavaScript, Python, PHP, etc.), and dedicated support for Pro and Business plan users. Our average response time for technical queries is under 2 hours during business days."
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

export default function NumerologyPage() {
  const [tab, setTab] = useState(0);
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  // Numerology calculations
  const calculateLifePathNumber = (dob) => {
    if (!dob) return null;
    const digits = dob.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculateDestinyNumber = (name) => {
    if (!name) return null;
    
    // Pythagorean numerology conversion
    const letterValues = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
      'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
      's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
    };
    
    let sum = 0;
    for (let char of name.toLowerCase()) {
      if (letterValues[char]) {
        sum += letterValues[char];
      }
    }
    
    while (sum > 9 && sum !== 11 && sum !== 22) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    
    return sum;
  };

  const getNumeroscopeMessage = (number) => {
    const messages = {
      1: { 
        insight: "You're a natural leader with strong independence. Your pioneering spirit drives you to innovate.", 
        career: "Excel in entrepreneurial ventures, management, or any field requiring initiative and originality.",
        traits: ["Independent", "Determined", "Innovative"],
        compatibility: [3, 5, 7],
        challenges: "Learning patience and cooperation"
      },
      2: { 
        insight: "Your diplomatic nature makes you an excellent peacemaker. You thrive in cooperative environments.", 
        career: "Ideal for counseling, diplomacy, customer service, or any teamwork-oriented profession.",
        traits: ["Diplomatic", "Sensitive", "Cooperative"],
        compatibility: [4, 6, 8],
        challenges: "Developing self-confidence"
      },
      3: { 
        insight: "Your creativity and expressiveness shine in all you do. You have a natural gift for communication.", 
        career: "Flourish in writing, performing arts, design, or any creative/expressive field.",
        traits: ["Creative", "Expressive", "Sociable"],
        compatibility: [1, 5, 7],
        challenges: "Focusing and following through"
      },
      4: { 
        insight: "Your practical approach and strong work ethic make you reliable and organized.", 
        career: "Suited for engineering, project management, accounting, or any detail-oriented work.",
        traits: ["Practical", "Organized", "Hardworking"],
        compatibility: [2, 6, 8],
        challenges: "Being more flexible"
      },
      5: { 
        insight: "Your adventurous spirit craves freedom and variety. You adapt well to change.", 
        career: "Thrive in travel, sales, journalism, or any dynamic, changing environment.",
        traits: ["Adventurous", "Adaptable", "Freedom-loving"],
        compatibility: [1, 3, 7],
        challenges: "Developing discipline"
      },
      6: { 
        insight: "Your nurturing nature makes you responsible and caring. You're the rock for many.", 
        career: "Excel in teaching, healthcare, social work, or any service-oriented profession.",
        traits: ["Nurturing", "Responsible", "Compassionate"],
        compatibility: [2, 4, 8],
        challenges: "Setting healthy boundaries"
      },
      7: { 
        insight: "Your analytical mind seeks deeper truths. You have strong intuition and spiritual awareness.", 
        career: "Good for research, science, philosophy, or metaphysical studies.",
        traits: ["Analytical", "Spiritual", "Introspective"],
        compatibility: [1, 3, 5],
        challenges: "Staying grounded"
      },
      8: { 
        insight: "Your ambition and executive abilities make you goal-oriented and authoritative.", 
        career: "Excel in business, finance, law, or any leadership position.",
        traits: ["Ambitious", "Authoritative", "Goal-oriented"],
        compatibility: [2, 4, 6],
        challenges: "Balancing material and spiritual"
      },
      9: { 
        insight: "Your humanitarian nature makes you compassionate and globally conscious.", 
        career: "Ideal for healing professions, environmental work, or global humanitarian efforts.",
        traits: ["Humanitarian", "Compassionate", "Artistic"],
        compatibility: [3, 6, 9],
        challenges: "Avoiding burnout"
      },
      11: { 
        insight: "As a master number, you're highly intuitive with visionary capabilities.", 
        career: "Inspire others through art, spiritual leadership, or innovative technologies.",
        traits: ["Intuitive", "Visionary", "Inspirational"],
        compatibility: [2, 4, 7],
        challenges: "Managing energy and stress"
      },
      22: { 
        insight: "The 'Master Builder' - you can turn dreams into reality on a large scale.", 
        career: "Capable of major accomplishments in architecture, large-scale projects, or global initiatives.",
        traits: ["Practical Visionary", "Masterful", "Large-scale Thinker"],
        compatibility: [4, 6, 8],
        challenges: "Balancing vision with practicality"
      },
      33: { 
        insight: "The 'Master Teacher' - your nurturing extends to global consciousness.", 
        career: "Work involving spiritual teaching, global healing, or transformative education.",
        traits: ["Healing", "Teaching", "Transforming"],
        compatibility: [6, 9, 11],
        challenges: "Maintaining personal energy"
      }
    };
    return messages[number] || null;
  };

  const lifePathNumber = calculateLifePathNumber(dob);
  const destinyNumber = calculateDestinyNumber(name);
  const numeroscope = getNumeroscopeMessage(lifePathNumber);

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-indigo-50 min-h-screen">
      {/* Hero Section with SEO-rich content */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Numerology API</span> for Developers
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Integrate precise numerology calculations including Life Path Numbers, Destiny Numbers, and personalized numerological insights into your apps with our developer-friendly API.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Started - Free Trial
            </Link>
            <Link href="#demo" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-md border border-gray-200 transition transform hover:-translate-y-1">
              Live Numerology Calculator
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🔢</div>
            <h3 className="font-bold">Pythagorean</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🏺</div>
            <h3 className="font-bold">Chaldean</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">✡️</div>
            <h3 className="font-bold">Kabbalah</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">💞</div>
            <h3 className="font-bold">Compatibility</h3>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-6">Trusted by developers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-xl font-bold text-gray-700">NumerologyApp</div>
            <div className="text-xl font-bold text-gray-700">SpiritualGuide</div>
            <div className="text-xl font-bold text-gray-700">LifePathAI</div>
            <div className="text-xl font-bold text-gray-700">DestinyMatch</div>
            <div className="text-xl font-bold text-gray-700">CosmicInsights</div>
          </div>
        </div>
      </div>

      {/* Features Section with SEO keywords */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Comprehensive Numerology API Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to integrate numerology calculations into your applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Core Numerology Calculations</h3>
              <p className="text-gray-700 mb-4">
                Calculate all essential numerology numbers including Life Path, Destiny, Soul Urge, and Personality numbers with precise algorithms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Life Path Number</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Destiny Number</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Soul Urge & Personality</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏺</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Multiple Numerology Systems</h3>
              <p className="text-gray-700 mb-4">
                Support for Pythagorean, Chaldean, and Kabbalah numerology systems with accurate calculations for each method.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Pythagorean (Western)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Chaldean (Ancient)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Kabbalah (Mystical)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💞</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Compatibility Analysis</h3>
              <p className="text-gray-700 mb-4">
                Calculate compatibility scores between numbers for relationships, business partnerships, and team dynamics.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Romantic Compatibility</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Business Partnerships</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Team Dynamics Analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personal Cycles</h3>
              <p className="text-gray-700 mb-4">
                Calculate personal year, month, and day cycles with interpretations for optimal timing of events.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personal Year Cycle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personal Month Cycle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personal Day Cycle</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">High Performance</h3>
              <p className="text-gray-700 mb-4">
                Our API is built for speed and reliability, with global CDN distribution and 99.9% uptime SLA.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>200ms average response time</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>99.9% uptime SLA</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Global CDN distribution</span>
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
              <div className="text-sm text-gray-400">GET /api/v1/numerology/reading?dob=1990-05-15&name=John</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                {`{
  "success": true,
  "data": {
    "life_path_number": 3,
    "destiny_number": 7,
    "soul_urge_number": 5,
    "personality_number": 2,
    "birthday_number": 6,
    "pythagorean": {
      "life_path": 3,
      "destiny": 7,
      "soul_urge": 5,
      "personality": 2
    },
    "chaldean": {
      "life_path": 11,
      "destiny": 22,
      "soul_urge": 7,
      "personality": 4
    },
    "personal_year": 5,
    "personal_month": 3,
    "personal_day": 8,
    "karmic_lessons": [4, 8],
    "compatibility": {
      "best": [3, 5, 7],
      "good": [1, 9],
      "challenging": [4, 8]
    },
    "interpretations": {
      "life_path": "Creative expression and joy are your natural gifts...",
      "destiny": "Your analytical mind seeks deeper truths...",
      "soul_urge": "You crave freedom and variety in life...",
      "personality": "You present yourself as diplomatic and cooperative..."
    },
    "lucky_elements": {
      "color": "Yellow",
      "stone": "Citrine",
      "number": 3,
      "day": "Thursday"
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
        <h2 className="text-4xl font-extrabold text-center mb-4">Numerology Calculator</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Try our numerology calculations right in your browser. See how easy it is to get personalized numerological insights.
        </p>
        
        <Tabs 
          value={tab} 
          onChange={(e, val) => setTab(val)} 
          centered 
          className="mb-8"
          TabIndicatorProps={{ style: { background: '#7c3aed', height: '4px' } }}
          textColor="inherit"
        >
          <Tab label={<span className="font-semibold">Life Path Number</span>} />
          <Tab label={<span className="font-semibold">Destiny Number</span>} />
          <Tab label={<span className="font-semibold">Full Reading</span>} />
        </Tabs>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          {tab === 0 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Life Path Number Calculator</h3>
                <p className="text-gray-600">Your Life Path Number is the most important number in your numerology chart, revealing your life's purpose and challenges.</p>
              </div>
              <div className="p-6">
                <div className="max-w-md mx-auto">
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">Your Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    aria-label="Date of Birth"
                  />
                  <p className="mt-2 text-sm text-gray-500">We'll calculate your life path number from your birth date</p>
                </div>
              </div>
              {lifePathNumber && numeroscope ? (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-center">Your Life Path Number: {lifePathNumber}</h4>
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-purple-100">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-600">
                          {lifePathNumber}
                        </div>
                      </div>
                      <h5 className="text-lg font-semibold text-center mb-3 text-purple-700">Life Path Number {lifePathNumber} Meaning</h5>
                      <p className="text-gray-700 text-center mb-4">{numeroscope.insight}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h6 className="font-semibold mb-2 text-purple-700">Key Personality Traits</h6>
                          <div className="flex flex-wrap gap-2">
                            {numeroscope.traits.map((trait, i) => (
                              <span key={i} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                                {trait}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h6 className="font-semibold mb-2 text-purple-700">Career Guidance</h6>
                          <p className="text-gray-700">{numeroscope.career}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                      <h5 className="text-lg font-semibold mb-3 text-purple-700">Today's Advice for Life Path {lifePathNumber}</h5>
                      <p className="text-gray-700 mb-4">
                        {lifePathNumber === 1 ? "Take the lead in a situation where you normally hold back. Your initiative will be rewarded." :
                        lifePathNumber === 2 ? "Your diplomatic skills are especially strong today. Help mediate a conflict." :
                        lifePathNumber === 3 ? "Express yourself creatively. Your words and ideas carry extra weight today." :
                        lifePathNumber === 4 ? "Focus on building solid foundations. Your practical approach yields results." :
                        lifePathNumber === 5 ? "Embrace change today. An unexpected opportunity may arise from flexibility." :
                        lifePathNumber === 6 ? "Your nurturing nature is needed. Help someone who's struggling." :
                        lifePathNumber === 7 ? "Trust your intuition today. Spend some time in reflection or study." :
                        lifePathNumber === 8 ? "Financial or career matters favor you. Make that big decision you've been considering." :
                        lifePathNumber === 9 ? "Your compassion makes a difference today. Engage in service or humanitarian work." :
                        lifePathNumber === 11 ? "Your spiritual insights are profound today. Share your vision with others." :
                        lifePathNumber === 22 ? "Think big today. You have the ability to manifest large-scale projects now." :
                        "Your healing energy is especially strong. Focus on global or spiritual service."}
                      </p>
                      <div className="mt-4">
                        <h6 className="font-semibold mb-2 text-purple-700">Compatible Numbers</h6>
                        <p className="text-gray-700 mb-2">You work well with people whose Life Path Numbers are: {numeroscope.compatibility.join(', ')}</p>
                        <p className="text-gray-700">Challenges may arise with numbers: {numeroscope.challenges}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
                  <p className="text-gray-500">Please enter your date of birth to see your Life Path Number reading.</p>
                </div>
              )}
            </div>
          )}

          {tab === 1 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Destiny Number Calculator</h3>
                <p className="text-gray-600">Your Destiny Number (also called Expression Number) reveals your talents, abilities, and the person you're meant to become.</p>
              </div>
              <div className="p-6">
                <div className="max-w-md mx-auto">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Full Name (at birth)</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your full birth name"
                    aria-label="Full Name"
                  />
                  <p className="mt-2 text-sm text-gray-500">We'll calculate your Destiny Number from your birth name</p>
                </div>
              </div>
              {destinyNumber ? (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-center">Your Destiny Number: {destinyNumber}</h4>
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-purple-100">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-600">
                          {destinyNumber}
                        </div>
                      </div>
                      <h5 className="text-lg font-semibold text-center mb-3 text-purple-700">Destiny Number {destinyNumber} Meaning</h5>
                      <p className="text-gray-700 text-center mb-4">
                        {destinyNumber === 1 ? "Your destiny involves leadership and independence. You're here to pioneer new ideas and stand on your own." :
                        destinyNumber === 2 ? "Your path involves cooperation and diplomacy. You're meant to bring people together and create harmony." :
                        destinyNumber === 3 ? "Your destiny is creative self-expression. You're here to inspire others through art, communication, and joy." :
                        destinyNumber === 4 ? "Your path involves building solid foundations. You're meant to create order and stability in the world." :
                        destinyNumber === 5 ? "Your destiny involves freedom and change. You're here to experience life fully and adapt to circumstances." :
                        destinyNumber === 6 ? "Your path involves service and responsibility. You're meant to nurture and care for others." :
                        destinyNumber === 7 ? "Your destiny involves seeking truth and wisdom. You're here to analyze, study, and understand life's mysteries." :
                        destinyNumber === 8 ? "Your path involves material mastery. You're meant to achieve success and manage resources effectively." :
                        destinyNumber === 9 ? "Your destiny involves humanitarian service. You're here to help humanity on a large scale." :
                        destinyNumber === 11 ? "As a master number, your destiny involves spiritual illumination. You're here to inspire and uplift humanity." :
                        "As a master number, your destiny involves practical mastery of large-scale projects. You're meant to turn visions into reality."}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h6 className="font-semibold mb-2 text-purple-700">Natural Talents</h6>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {destinyNumber === 1 ? ["Leadership", "Innovation", "Courage"] :
                            destinyNumber === 2 ? ["Diplomacy", "Patience", "Teamwork"] :
                            destinyNumber === 3 ? ["Creativity", "Communication", "Optimism"] :
                            destinyNumber === 4 ? ["Organization", "Reliability", "Practicality"] :
                            destinyNumber === 5 ? ["Adaptability", "Freedom", "Versatility"] :
                            destinyNumber === 6 ? ["Nurturing", "Responsibility", "Compassion"] :
                            destinyNumber === 7 ? ["Analysis", "Intuition", "Perfectionism"] :
                            destinyNumber === 8 ? ["Executive skills", "Ambition", "Financial acumen"] :
                            destinyNumber === 9 ? ["Humanitarianism", "Artistic talent", "Global thinking"] :
                            destinyNumber === 11 ? ["Inspiration", "Intuition", "Idealism"] :
                            ["Vision", "Practicality", "Large-scale thinking"]}
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold mb-2 text-purple-700">Career Paths</h6>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {destinyNumber === 1 ? ["Entrepreneur", "Manager", "Inventor"] :
                            destinyNumber === 2 ? ["Mediator", "Counselor", "Team coordinator"] :
                            destinyNumber === 3 ? ["Artist", "Writer", "Performer"] :
                            destinyNumber === 4 ? ["Engineer", "Accountant", "Project manager"] :
                            destinyNumber === 5 ? ["Sales", "Marketing", "Travel industry"] :
                            destinyNumber === 6 ? ["Teaching", "Healthcare", "Social work"] :
                            destinyNumber === 7 ? ["Research", "Science", "Spiritual fields"] :
                            destinyNumber === 8 ? ["Executive", "Finance", "Law"] :
                            destinyNumber === 9 ? ["Humanitarian work", "Arts", "Global organizations"] :
                            destinyNumber === 11 ? ["Spiritual teacher", "Artist", "Visionary"] :
                            ["Architect", "Large-scale planner", "Master builder"]}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
                  <p className="text-gray-500">Please enter your full birth name to see your Destiny Number reading.</p>
                </div>
              )}
            </div>
          )}

          {tab === 2 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Complete Numerology Reading</h3>
                <p className="text-gray-600">Get a full numerology analysis including Life Path, Destiny, Soul Urge, and Personality numbers.</p>
              </div>
              <div className="p-6">
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <label htmlFor="full-dob" className="block text-sm font-medium text-gray-700 mb-2">Your Date of Birth</label>
                    <input
                      type="date"
                      id="full-dob"
                      value={dob}
                      onChange={e => setDob(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      aria-label="Date of Birth"
                    />
                  </div>
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-2">Your Full Name (at birth)</label>
                    <input
                      type="text"
                      id="full-name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your full birth name"
                      aria-label="Full Name"
                    />
                  </div>
                </div>
              </div>
              {lifePathNumber && destinyNumber ? (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-center">Your Complete Numerology Reading</h4>
                  <div className="max-w-2xl mx-auto space-y-6">
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-purple-100">
                      <h5 className="text-lg font-semibold mb-3 text-purple-700">Core Numbers</h5>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-3">
                              {lifePathNumber}
                            </div>
                            <div>
                              <h6 className="font-semibold">Life Path Number</h6>
                              <p className="text-sm text-gray-600">Your life's purpose and challenges</p>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm mt-2">{numeroscope.insight}</p>
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-3">
                              {destinyNumber}
                            </div>
                            <div>
                              <h6 className="font-semibold">Destiny Number</h6>
                              <p className="text-sm text-gray-600">Your talents and potential</p>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm mt-2">
                            {destinyNumber === 1 ? "Your talents lie in leadership and innovation." :
                            destinyNumber === 2 ? "Your talents lie in diplomacy and cooperation." :
                            destinyNumber === 3 ? "Your talents lie in creativity and expression." :
                            destinyNumber === 4 ? "Your talents lie in organization and practicality." :
                            destinyNumber === 5 ? "Your talents lie in adaptability and freedom." :
                            destinyNumber === 6 ? "Your talents lie in nurturing and responsibility." :
                            destinyNumber === 7 ? "Your talents lie in analysis and intuition." :
                            destinyNumber === 8 ? "Your talents lie in executive skills and ambition." :
                            destinyNumber === 9 ? "Your talents lie in humanitarianism and global thinking." :
                            destinyNumber === 11 ? "Your talents lie in inspiration and spiritual insight." :
                            "Your talents lie in vision and practical mastery."}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                      <h5 className="text-lg font-semibold mb-3 text-purple-700">Personal Year Cycle</h5>
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-4">
                          {(new Date().getFullYear() + lifePathNumber) % 9 || 9}
                        </div>
                        <div>
                          <p className="text-gray-700">
                            You're in a <span className="font-semibold">{(new Date().getFullYear() + lifePathNumber) % 9 || 9} Personal Year</span>, which means:
                          </p>
                          <p className="text-gray-700 text-sm mt-1">
                            {((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 1 ? "A year of new beginnings and fresh starts." :
                            ((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 2 ? "A year of patience, partnerships, and waiting." :
                            ((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 3 ? "A year of creativity, socializing, and self-expression." :
                            ((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 4 ? "A year of hard work, organization, and building foundations." :
                            ((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 5 ? "A year of change, freedom, and adventure." :
                            ((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 6 ? "A year of responsibility, family, and service." :
                            ((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 7 ? "A year of introspection, study, and spiritual growth." :
                            ((new Date().getFullYear() + lifePathNumber) % 9 || 9) === 8 ? "A year of career advancement, money, and power." :
                            "A year of completion, humanitarianism, and letting go."}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                      <h5 className="text-lg font-semibold mb-3 text-purple-700">Numerology Compatibility</h5>
                      <p className="text-gray-700 mb-4">Based on your numbers, you're most compatible with people who have the following Life Path Numbers:</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[1,2,3,4,5,6,7,8,9].map(num => (
                          <div key={num} className={`p-3 rounded-lg text-center ${numeroscope.compatibility.includes(num) ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                            <div className="font-bold text-lg">{num}</div>
                            <div className="text-xs">
                              {numeroscope.compatibility.includes(num) ? "Highly Compatible" : "Neutral"}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
                  <p className="text-gray-500">Please enter your date of birth and full name to see your complete numerology reading.</p>
                </div>
              )}
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
              Get started with AstroSetu Numerology API in just a few minutes
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
                  Use our well-documented REST API or SDKs to fetch numerology data. We provide code samples in JavaScript, Python, PHP, and more.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-2 top-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">3</div>
              <div className="pl-12">
                <h3 className="text-2xl font-bold mb-3">Delight Your Users</h3>
                <p className="text-purple-200">
                  Show personalized numerology insights to keep users engaged. Our calculations provide deep, meaningful content for your platform.
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
            <h2 className="text-4xl font-extrabold mb-4">Trusted by Developers Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what our customers say about AstroSetu Numerology API
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">PS</div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">CTO, NumerologyApp</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "We switched to AstroSetu Numerology API after struggling with incomplete calculations from another provider. The accuracy and depth of interpretations are exceptional, and our user engagement increased by 40% after the switch."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">RK</div>
                <div>
                  <h4 className="font-bold">Ramesh Kumar</h4>
                  <p className="text-gray-600 text-sm">Developer, LifePathAI</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "The documentation is the best I've seen for any API. We integrated the Chaldean numerology features in just a few hours. The webhook updates for personal cycles save us hundreds of API calls."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">AM</div>
                <div>
                  <h4 className="font-bold">Anjali Mehta</h4>
                  <p className="text-gray-600 text-sm">Founder, DestinyMatch</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★☆</div>
              <p className="text-gray-700">
                "Our users love the numerology compatibility feature - it adds a scientific dimension to our matchmaking algorithm. The only reason I didn't give 5 stars is that I'd love to see more advanced relationship analysis."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Powerful Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AstroSetu Numerology API can enhance your application
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Apps</h3>
              <p className="text-gray-700">
                Add daily numerology insights to your lifestyle or self-improvement app to increase user engagement and retention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dating Platforms</h3>
              <p className="text-gray-700">
                Offer numerology compatibility insights to help users find better matches based on core number harmony.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Team Building</h3>
              <p className="text-gray-700">
                Analyze team dynamics and optimize collaboration based on numerology compatibility between members.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wellness Apps</h3>
              <p className="text-gray-700">
                Combine numerology with health recommendations for a holistic approach to wellbeing based on personal cycles.
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
                Use personal year cycles to suggest optimal timing for important life events like weddings or business launches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content Platforms</h3>
              <p className="text-gray-700">
                Generate personalized numerology content at scale for blogs, social media, and newsletters.
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
            Everything you need to know about AstroSetu Numerology API
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
          <h2 className="text-4xl font-extrabold mb-6">Ready to Integrate Numerology into Your App?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of developers using AstroSetu Numerology API to deliver meaningful numerological insights to their users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="inline-block bg-white hover:bg-gray-100 text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Started for Free
            </Link>
            <Link to="#demo" className="inline-block bg-transparent hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white transition transform hover:-translate-y-1">
              Try Numerology Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}