import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from 'react-router-dom';

const zodiacSigns = [
  { name: "Aries", icon: "♈", date: "Mar 21 - Apr 19" },
  { name: "Taurus", icon: "♉", date: "Apr 20 - May 20" },
  { name: "Gemini", icon: "♊", date: "May 21 - Jun 20" },
  { name: "Cancer", icon: "♋", date: "Jun 21 - Jul 22" },
  { name: "Leo", icon: "♌", date: "Jul 23 - Aug 22" },
  { name: "Virgo", icon: "♍", date: "Aug 23 - Sep 22" },
  { name: "Libra", icon: "♎", date: "Sep 23 - Oct 22" },
  { name: "Scorpio", icon: "♏", date: "Oct 23 - Nov 21" },
  { name: "Sagittarius", icon: "♐", date: "Nov 22 - Dec 21" },
  { name: "Capricorn", icon: "♑", date: "Dec 22 - Jan 19" },
  { name: "Aquarius", icon: "♒", date: "Jan 20 - Feb 18" },
  { name: "Pisces", icon: "♓", date: "Feb 19 - Mar 20" }
];

const chineseZodiacs = [
  { name: "Rat", icon: "🐀", years: "2020, 2008, 1996" },
  { name: "Ox", icon: "🐂", years: "2021, 2009, 1997" },
  { name: "Tiger", icon: "🐅", years: "2022, 2010, 1998" },
  { name: "Rabbit", icon: "🐇", years: "2023, 2011, 1999" },
  { name: "Dragon", icon: "🐉", years: "2024, 2012, 2000" },
  { name: "Snake", icon: "🐍", years: "2025, 2013, 2001" },
  { name: "Horse", icon: "🐎", years: "2026, 2014, 2002" },
  { name: "Goat", icon: "🐐", years: "2027, 2015, 2003" },
  { name: "Monkey", icon: "🐒", years: "2028, 2016, 2004" },
  { name: "Rooster", icon: "🐓", years: "2029, 2017, 2005" },
  { name: "Dog", icon: "🐕", years: "2030, 2018, 2006" },
  { name: "Pig", icon: "🐖", years: "2031, 2019, 2007" }
];

// Enhanced FAQ data with Vedic astrology focus
const faqs = [
  {
    q: "What Vedic astrology services does your API provide?",
    a: "Our Vedic Astrology API offers comprehensive services including daily Panchang calculations, Kundali generation with 40+ parameters, Kundali matching (Ashtakoot and Dashakoot methods), planetary transit predictions, Dasha periods, and detailed horoscope analysis based on precise birth details."
  },
  {
    q: "How accurate are your Vedic astrology calculations?",
    a: "Our calculations follow authentic Vedic astrology principles using the Lahiri Ayanamsa and precise astronomical algorithms. We calculate planetary positions with NASA-grade accuracy (within 0.01 arc seconds) and follow traditional methods for house division (Placidus, Whole Sign, and Equal House systems available)."
  },
  {
    q: "What makes your Vedic astrology API unique?",
    a: "Unlike basic astrology APIs, we provide: 1) Authentic Vedic calculations with multiple ayanamsa options 2) Detailed Kundali reports with 40+ parameters 3) Comprehensive matching reports with multiple compatibility systems 4) Support for multiple house division systems 5) Detailed planetary transit analysis with remedies."
  },
  {
    q: "Can I use your API for Kundali matching in matrimonial apps?",
    a: "Yes! Our API is perfect for matrimonial services, offering detailed Ashtakoot (36-point) and Dashakoot (10-point) matching systems. We provide percentage compatibility scores, dosha analysis (Manglik, Nadi, Bhakoot), and detailed interpretation of planetary influences on marriage compatibility."
  },
  {
    q: "Do you support different ayanamsa calculations?",
    a: "Yes, our API supports multiple ayanamsa calculations including Lahiri (Chitrapaksha), Raman, KP, and Yukteshwar. You can specify the ayanamsa method in your API request to get calculations according to different Vedic traditions."
  },
  {
    q: "What planetary data do you provide in Kundali reports?",
    a: "Our Kundali reports include: planetary positions with exact degrees, nakshatras and padas, conjunctions, aspects, planetary strengths (Shadbala), Vargas (divisional charts), Dasha periods, yogas, and detailed interpretations for each placement."
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

export default function VedicAstrologyPage() {
  const [tab, setTab] = useState(0);
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0]);
  const [selectedChinese, setSelectedChinese] = useState(chineseZodiacs[0]);
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
    const messages = {
      1: { 
        insight: "You're a natural leader with strong independence. Your pioneering spirit drives you to innovate.", 
        career: "Excel in entrepreneurial ventures, management, or any field requiring initiative and originality.",
        traits: ["Independent", "Determined", "Innovative"]
      },
      2: { 
        insight: "Your diplomatic nature makes you an excellent peacemaker. You thrive in cooperative environments.", 
        career: "Ideal for counseling, diplomacy, customer service, or any teamwork-oriented profession.",
        traits: ["Diplomatic", "Sensitive", "Cooperative"]
      },
      3: { 
        insight: "Your creativity and expressiveness shine in all you do. You have a natural gift for communication.", 
        career: "Flourish in writing, performing arts, design, or any creative/expressive field.",
        traits: ["Creative", "Expressive", "Sociable"]
      },
      4: { 
        insight: "Your practical approach and strong work ethic make you reliable and organized.", 
        career: "Suited for engineering, project management, accounting, or any detail-oriented work.",
        traits: ["Practical", "Organized", "Hardworking"]
      },
      5: { 
        insight: "Your adventurous spirit craves freedom and variety. You adapt well to change.", 
        career: "Thrive in travel, sales, journalism, or any dynamic, changing environment.",
        traits: ["Adventurous", "Adaptable", "Freedom-loving"]
      },
      6: { 
        insight: "Your nurturing nature makes you responsible and caring. You're the rock for many.", 
        career: "Excel in teaching, healthcare, social work, or any service-oriented profession.",
        traits: ["Nurturing", "Responsible", "Compassionate"]
      },
      7: { 
        insight: "Your analytical mind seeks deeper truths. You have strong intuition and spiritual awareness.", 
        career: "Good for research, science, philosophy, or metaphysical studies.",
        traits: ["Analytical", "Spiritual", "Introspective"]
      },
      8: { 
        insight: "Your ambition and executive abilities make you goal-oriented and authoritative.", 
        career: "Excel in business, finance, law, or any leadership position.",
        traits: ["Ambitious", "Authoritative", "Goal-oriented"]
      },
      9: { 
        insight: "Your humanitarian nature makes you compassionate and globally conscious.", 
        career: "Ideal for healing professions, environmental work, or global humanitarian efforts.",
        traits: ["Humanitarian", "Compassionate", "Artistic"]
      },
      11: { 
        insight: "As a master number, you're highly intuitive with visionary capabilities.", 
        career: "Inspire others through art, spiritual leadership, or innovative technologies.",
        traits: ["Intuitive", "Visionary", "Inspirational"]
      },
      22: { 
        insight: "The 'Master Builder' - you can turn dreams into reality on a large scale.", 
        career: "Capable of major accomplishments in architecture, large-scale projects, or global initiatives.",
        traits: ["Practical Visionary", "Masterful", "Large-scale Thinker"]
      },
      33: { 
        insight: "The 'Master Teacher' - your nurturing extends to global consciousness.", 
        career: "Work involving spiritual teaching, global healing, or transformative education.",
        traits: ["Healing", "Teaching", "Transforming"]
      }
    };
    return messages[number] || null;
  };

  const lifePathNumber = calculateLifePathNumber(dob);
  const numeroscope = getNumeroscopeMessage(lifePathNumber);

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-indigo-50 min-h-screen">
      {/* Hero Section with Vedic astrology focus */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Authentic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Vedic Astrology API</span> for Developers
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Integrate precise Vedic astrology calculations including Kundali generation, Panchang data, horoscope matching, and planetary transit predictions into your applications with our developer-friendly API.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get API Key - Free Trial
            </Link>
            <Link href="#demo" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-md border border-gray-200 transition transform hover:-translate-y-1">
              Live Vedic Calculations
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">📜</div>
            <h3 className="font-bold">Kundali API</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">💍</div>
            <h3 className="font-bold">Kundali Matching</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">📅</div>
            <h3 className="font-bold">Panchang API</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🪐</div>
            <h3 className="font-bold">Planetary Transit</h3>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-6">Trusted by astrology platforms worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-xl font-bold text-gray-700">JyotishApp</div>
            <div className="text-xl font-bold text-gray-700">MatrimonyMatch</div>
            <div className="text-xl font-bold text-gray-700">VedicInsights</div>
            <div className="text-xl font-bold text-gray-700">AstroSage</div>
            <div className="text-xl font-bold text-gray-700">Kundali360</div>
          </div>
        </div>
      </div>

      {/* Features Section with Vedic astrology keywords */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Comprehensive Vedic Astrology API Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to integrate authentic Vedic astrology into your applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Kundali Generation API</h3>
              <p className="text-gray-700 mb-4">
                Generate detailed birth charts with 40+ parameters including planetary positions, nakshatras, divisional charts, yogas, and Dasha periods based on precise birth details.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Detailed planetary positions with degrees</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Nakshatra and pada calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>16 divisional charts (Vargas)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Kundali Matching API</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive compatibility analysis with Ashtakoot (36-point) and Dashakoot (10-point) matching systems, dosha analysis, and detailed interpretation of planetary influences.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Ashtakoot and Dashakoot matching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Manglik, Nadi, Bhakoot analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Detailed compatibility reports</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Panchang API</h3>
              <p className="text-gray-700 mb-4">
                Get accurate daily Panchang data including tithi, nakshatra, yoga, karana, sunrise/sunset timings, and auspicious/inauspicious muhurtas for any date and location.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tithi, Nakshatra, Yoga, Karana</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Auspicious Muhurta timings</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Hindu festival dates</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🪐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Planetary Transit API</h3>
              <p className="text-gray-700 mb-4">
                Track planetary movements and get predictions for how transits affect different moon signs, including retrograde periods, planetary aspects, and conjunctions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Current planetary positions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Retrograde period alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Transit predictions by sign</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Dasha & Bhukti API</h3>
              <p className="text-gray-700 mb-4">
                Calculate Vimshottari Dasha periods with sub-periods (bhuktis) and get interpretations for how these planetary periods influence different areas of life.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Vimshottari Dasha calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Current and upcoming periods</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Detailed period interpretations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Remedial Astrology API</h3>
              <p className="text-gray-700 mb-4">
                Get personalized remedial measures including gemstone recommendations, mantras, yantras, and rituals based on planetary positions and doshas in the birth chart.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Gemstone recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mantras and yantras</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Rituals and donations</span>
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
              <div className="text-sm text-gray-400">GET /api/v1/kundali?dob=1990-05-15&tob=13:30&lat=28.6139&lon=77.2090</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                {`{
  "success": true,
  "data": {
    "basic_info": {
      "birth_date": "1990-05-15",
      "birth_time": "13:30:00",
      "birth_place": "New Delhi, India",
      "timezone": "IST",
      "sun_sign": "Taurus",
      "moon_sign": "Scorpio",
      "ascendant": "Libra"
    },
    "planetary_positions": [
      {
        "planet": "Sun",
        "sign": "Taurus",
        "degree": 1.2345,
        "nakshatra": "Krittika",
        "pada": 2,
        "house": 10,
        "retrograde": false
      },
      // Other planets...
    ],
    "dasha_periods": {
      "current": {
        "major": "Moon",
        "start": "2020-01-01",
        "end": "2030-01-01",
        "sub_periods": [
          {
            "planet": "Mars",
            "start": "2023-05-15",
            "end": "2024-02-15",
            "interpretation": "A period of increased energy and initiative..."
          }
        ]
      }
    },
    "yogas": [
      {
        "name": "Gajakesari Yoga",
        "description": "Provides wisdom, wealth and happiness..."
      }
    ],
    "shadbala": {
      "total": 7.89,
      "breakdown": {
        "sthana_bala": 1.23,
        "dik_bala": 0.45,
        // Other balas...
      }
    },
    "divisional_charts": {
      "navamsa": {
        "ascendant": "Aries",
        "planets": [
          {
            "planet": "Sun",
            "sign": "Leo",
            "house": 5
          }
        ]
      }
      // Other divisional charts...
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
        <h2 className="text-4xl font-extrabold text-center mb-4">Interactive Vedic Astrology Demo</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Try our Vedic astrology calculations right in your browser. See how easy it is to get authentic astrological insights.
        </p>
        
        <Tabs 
          value={tab} 
          onChange={(e, val) => setTab(val)} 
          centered 
          className="mb-8"
          TabIndicatorProps={{ style: { background: '#7c3aed', height: '4px' } }}
          textColor="inherit"
        >
          <Tab label={<span className="font-semibold">Kundali</span>} />
          <Tab label={<span className="font-semibold">Kundli Matching</span>} />
          <Tab label={<span className="font-semibold">Panchang</span>} />
        </Tabs>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          {tab === 0 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Western Zodiac Horoscope</h3>
                <p className="text-gray-600">Select your zodiac sign to see today's prediction</p>
              </div>
              <div className="p-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {zodiacSigns.map(sign => (
                  <button
                    key={sign.name}
                    onClick={() => setSelectedSign(sign)}
                    className={`py-3 px-2 rounded-lg border transition-all flex flex-col items-center
                      ${selectedSign.name === sign.name ? 
                        "bg-purple-100 border-purple-400 shadow-md" : 
                        "bg-white border-gray-200 hover:shadow-lg hover:border-purple-300"}`}
                  >
                    <span className="text-2xl mb-1">{sign.icon}</span>
                    <span className="text-sm font-medium">{sign.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{sign.date}</span>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">{selectedSign.icon}</span>
                  Today's Horoscope for {selectedSign.name} ({selectedSign.date})
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2 text-purple-700">Daily Prediction</h5>
                    <p className="text-gray-700 mb-4">
                      Today brings exciting opportunities for {selectedSign.name.toLowerCase()} natives. 
                      The planetary alignment suggests a favorable time for taking initiative in 
                      creative projects. Your natural {selectedSign.name === "Aries" || selectedSign.name === "Leo" || selectedSign.name === "Sagittarius" ? "fire" : 
                      selectedSign.name === "Taurus" || selectedSign.name === "Virgo" || selectedSign.name === "Capricorn" ? "earth" :
                      selectedSign.name === "Gemini" || selectedSign.name === "Libra" || selectedSign.name === "Aquarius" ? "air" : "water"} 
                      energy is particularly strong today.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-purple-700">Key Areas</h5>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">💖</span>
                        </div>
                        <div>
                          <span className="font-medium">Love:</span> {selectedSign.name === "Aries" ? "Passionate encounters likely" :
                          selectedSign.name === "Taurus" ? "Focus on emotional security" :
                          selectedSign.name === "Gemini" ? "Good day for communication" :
                          selectedSign.name === "Cancer" ? "Nurture your relationships" :
                          selectedSign.name === "Leo" ? "Romantic gestures appreciated" :
                          selectedSign.name === "Virgo" ? "Practical expressions of love" :
                          selectedSign.name === "Libra" ? "Harmony in relationships" :
                          selectedSign.name === "Scorpio" ? "Deep emotional connections" :
                          selectedSign.name === "Sagittarius" ? "Adventures with partner" :
                          selectedSign.name === "Capricorn" ? "Stable, committed energy" :
                          selectedSign.name === "Aquarius" ? "Unconventional expressions" :
                          "Compassionate interactions"}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">💼</span>
                        </div>
                        <div>
                          <span className="font-medium">Career:</span> {selectedSign.name === "Aries" ? "Leadership opportunities arise" :
                          selectedSign.name === "Taurus" ? "Financial gains possible" :
                          selectedSign.name === "Gemini" ? "Networking brings benefits" :
                          selectedSign.name === "Cancer" ? "Trust your instincts" :
                          selectedSign.name === "Leo" ? "Recognition for your work" :
                          selectedSign.name === "Virgo" ? "Attention to detail pays off" :
                          selectedSign.name === "Libra" ? "Collaboration is key" :
                          selectedSign.name === "Scorpio" ? "Strategic planning favored" :
                          selectedSign.name === "Sagittarius" ? "New horizons appear" :
                          selectedSign.name === "Capricorn" ? "Long-term planning" :
                          selectedSign.name === "Aquarius" ? "Innovative ideas shine" :
                          "Creative solutions emerge"}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">💪</span>
                        </div>
                        <div>
                          <span className="font-medium">Health:</span> {selectedSign.name === "Aries" ? "Watch for stress-related tension" :
                          selectedSign.name === "Taurus" ? "Focus on throat/neck" :
                          selectedSign.name === "Gemini" ? "Mental relaxation needed" :
                          selectedSign.name === "Cancer" ? "Digestive health" :
                          selectedSign.name === "Leo" ? "Heart health focus" :
                          selectedSign.name === "Virgo" ? "Dietary adjustments" :
                          selectedSign.name === "Libra" ? "Kidney area awareness" :
                          selectedSign.name === "Scorpio" ? "Reproductive health" :
                          selectedSign.name === "Sagittarius" ? "Hip/liver attention" :
                          selectedSign.name === "Capricorn" ? "Knee/joint care" :
                          selectedSign.name === "Aquarius" ? "Circulation focus" :
                          "Foot/lymph care"}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Chinese Zodiac Prediction</h3>
                <p className="text-gray-600">Select your Chinese zodiac animal to see today's insight</p>
              </div>
              <div className="p-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {chineseZodiacs.map(animal => (
                  <button
                    key={animal.name}
                    onClick={() => setSelectedChinese(animal)}
                    className={`py-3 px-2 rounded-lg border transition-all flex flex-col items-center
                      ${selectedChinese.name === animal.name ? 
                        "bg-purple-100 border-purple-400 shadow-md" : 
                        "bg-white border-gray-200 hover:shadow-lg hover:border-purple-300"}`}
                  >
                    <span className="text-2xl mb-1">{animal.icon}</span>
                    <span className="text-sm font-medium">{animal.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{animal.years}</span>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">{selectedChinese.icon}</span>
                  {selectedChinese.name}'s Daily Insight ({selectedChinese.years.split(",")[0]} born)
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2 text-purple-700">General Forecast</h5>
                    <p className="text-gray-700 mb-4">
                      The {selectedChinese.name} finds today to be a {selectedChinese.name === "Rat" || selectedChinese.name === "Dragon" || selectedChinese.name === "Monkey" ? "highly favorable" :
                      selectedChinese.name === "Ox" || selectedChinese.name === "Snake" || selectedChinese.name === "Rooster" ? "moderately productive" :
                      selectedChinese.name === "Tiger" || selectedChinese.name === "Horse" || selectedChinese.name === "Dog" ? "somewhat challenging but rewarding" :
                      "calm and nurturing"} day. Your natural {selectedChinese.name} traits will serve you well in navigating today's energies.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-purple-700">Key Aspects</h5>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">💰</span>
                        </div>
                        <div>
                          <span className="font-medium">Wealth:</span> {selectedChinese.name === "Rat" ? "Unexpected gains possible" :
                          selectedChinese.name === "Ox" ? "Steady accumulation" :
                          selectedChinese.name === "Tiger" ? "Risk could bring reward" :
                          selectedChinese.name === "Rabbit" ? "Conservative approach best" :
                          selectedChinese.name === "Dragon" ? "Big opportunities" :
                          selectedChinese.name === "Snake" ? "Strategic investments" :
                          selectedChinese.name === "Horse" ? "Ups and downs" :
                          selectedChinese.name === "Goat" ? "Artistic ventures" :
                          selectedChinese.name === "Monkey" ? "Creative solutions" :
                          selectedChinese.name === "Rooster" ? "Attention to details" :
                          selectedChinese.name === "Dog" ? "Protect assets" :
                          "Generosity returns"}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">❤️</span>
                        </div>
                        <div>
                          <span className="font-medium">Relationships:</span> {selectedChinese.name === "Rat" ? "Social connections flourish" :
                          selectedChinese.name === "Ox" ? "Stable bonds strengthen" :
                          selectedChinese.name === "Tiger" ? "Passionate encounters" :
                          selectedChinese.name === "Rabbit" ? "Harmony prevails" :
                          selectedChinese.name === "Dragon" ? "Admiration from others" :
                          selectedChinese.name === "Snake" ? "Deep connections" :
                          selectedChinese.name === "Horse" ? "Freedom important" :
                          selectedChinese.name === "Goat" ? "Nurturing needed" :
                          selectedChinese.name === "Monkey" ? "Playful interactions" :
                          selectedChinese.name === "Rooster" ? "Direct communication" :
                          selectedChinese.name === "Dog" ? "Loyalty rewarded" :
                          "Compassionate exchanges"}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600">🏆</span>
                        </div>
                        <div>
                          <span className="font-medium">Career:</span> {selectedChinese.name === "Rat" ? "Resourcefulness shines" :
                          selectedChinese.name === "Ox" ? "Diligence pays off" :
                          selectedChinese.name === "Tiger" ? "Leadership opportunities" :
                          selectedChinese.name === "Rabbit" ? "Diplomacy favored" :
                          selectedChinese.name === "Dragon" ? "Innovation rewarded" :
                          selectedChinese.name === "Snake" ? "Strategic planning" :
                          selectedChinese.name === "Horse" ? "New challenges" :
                          selectedChinese.name === "Goat" ? "Creative solutions" :
                          selectedChinese.name === "Monkey" ? "Problem-solving" :
                          selectedChinese.name === "Rooster" ? "Attention to detail" :
                          selectedChinese.name === "Dog" ? "Teamwork essential" :
                          "Service brings rewards"}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Numeroscope Calculator</h3>
                <p className="text-gray-600">Enter your birth date to discover your life path number and its meaning</p>
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
                  <h4 className="text-xl font-bold mb-4 text-center">Your Numeroscope Reading</h4>
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-purple-100">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-600">
                          {lifePathNumber}
                        </div>
                      </div>
                      <h5 className="text-lg font-semibold text-center mb-3 text-purple-700">Life Path Number {lifePathNumber}</h5>
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
                      <h5 className="text-lg font-semibold mb-3 text-purple-700">Today's Advice for Number {lifePathNumber}</h5>
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
                        <h6 className="font-semibold mb-2 text-purple-700">Lucky Elements for Today</h6>
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Color: {lifePathNumber === 1 ? "Red" :
                            lifePathNumber === 2 ? "Orange" :
                            lifePathNumber === 3 ? "Yellow" :
                            lifePathNumber === 4 ? "Green" :
                            lifePathNumber === 5 ? "Blue" :
                            lifePathNumber === 6 ? "Indigo" :
                            lifePathNumber === 7 ? "Violet" :
                            lifePathNumber === 8 ? "Gold" :
                            lifePathNumber === 9 ? "White" :
                            lifePathNumber === 11 ? "Silver" :
                            lifePathNumber === 22 ? "Platinum" :
                            "Rainbow"}</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Stone: {lifePathNumber === 1 ? "Ruby" :
                            lifePathNumber === 2 ? "Coral" :
                            lifePathNumber === 3 ? "Topaz" :
                            lifePathNumber === 4 ? "Emerald" :
                            lifePathNumber === 5 ? "Sapphire" :
                            lifePathNumber === 6 ? "Diamond" :
                            lifePathNumber === 7 ? "Amethyst" :
                            lifePathNumber === 8 ? "Citrine" :
                            lifePathNumber === 9 ? "Clear Quartz" :
                            lifePathNumber === 11 ? "Moonstone" :
                            lifePathNumber === 22 ? "Lapis Lazuli" :
                            "Opal"}</span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Number: {lifePathNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
                  <p className="text-gray-500">Please enter your date of birth to see your personalized numeroscope reading.</p>
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
              Get started with our Vedic Astrology API in just a few minutes
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
                  Use our well-documented REST API or SDKs to fetch Vedic astrology data. We provide code samples in JavaScript, Python, PHP, and more.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-2 top-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">3</div>
              <div className="pl-12">
                <h3 className="text-2xl font-bold mb-3">Deliver Authentic Insights</h3>
                <p className="text-purple-200">
                  Show accurate Vedic astrology content including Kundali reports, matching scores, and Panchang data to your users.
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
            <h2 className="text-4xl font-extrabold mb-4">Trusted by Astrology Platforms Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what our customers say about our Vedic Astrology API
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">PS</div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">CTO, JyotishApp</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "We switched to this API after struggling with inaccurate calculations from another provider. The Vedic astrology calculations are mathematically precise and our user engagement increased by 40% after the switch."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">RK</div>
                <div>
                  <h4 className="font-bold">Ramesh Kumar</h4>
                  <p className="text-gray-600 text-sm">Developer, MatrimonyMatch</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "The Kundali matching API saved us months of development time. We integrated the Ashtakoot and Dashakoot matching in just a few days. The detailed compatibility reports have significantly improved our match success rates."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">AM</div>
                <div>
                  <h4 className="font-bold">Anjali Mehta</h4>
                  <p className="text-gray-600 text-sm">Founder, VedicInsights</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★☆</div>
              <p className="text-gray-700">
                "Our users love the detailed planetary transit reports. The only reason I didn't give 5 stars is that I'd love to see more detailed yogas and planetary combinations in the reports."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Powerful Vedic Astrology Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our API can enhance your application
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Matrimonial Apps</h3>
              <p className="text-gray-700">
                Integrate Kundali matching with Ashtakoot and Dashakoot systems to provide compatibility scores and detailed marriage reports for your users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Astrology Platforms</h3>
              <p className="text-gray-700">
                Generate detailed Kundali reports with planetary positions, divisional charts, yogas, and Dasha periods for your astrology service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Event Planning</h3>
              <p className="text-gray-700">
                Use Panchang API to suggest auspicious dates for weddings, business launches, and other important events based on planetary positions.
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
                Combine Vedic astrology with health recommendations for a holistic approach to wellbeing based on planetary influences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Calendar Apps</h3>
              <p className="text-gray-700">
                Show Hindu festival dates, auspicious muhurtas, and inauspicious periods (Rahu Kalam) in your calendar application.
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
                Generate personalized Vedic astrology content at scale for blogs, social media, and newsletters based on user birth details.
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
            Everything you need to know about our Vedic Astrology API
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
          <h2 className="text-4xl font-extrabold mb-6">Ready to Integrate Vedic Astrology?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of developers using our API to deliver authentic Vedic astrology insights to their users.
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