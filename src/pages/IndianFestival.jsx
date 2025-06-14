import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from 'react-router-dom';

const lunarMonths = [
  { name: "Chaitra", festivals: ["Ugadi", "Gudi Padwa", "Chaitra Navratri", "Ram Navami", "Hanuman Jayanti"] },
  { name: "Vaishakha", festivals: ["Akshaya Tritiya", "Parashurama Jayanti", "Vat Savitri", "Narasimha Jayanti"] },
  { name: "Jyeshtha", festivals: ["Vat Purnima", "Ganga Dussehra", "Nirjala Ekadashi"] },
  { name: "Ashadha", festivals: ["Guru Purnima", "Rath Yatra", "Deva Shayani Ekadashi"] },
  { name: "Shravana", festivals: ["Mangala Gauri", "Raksha Bandhan", "Nag Panchami", "Shravan Putrada Ekadashi"] },
  { name: "Bhadrapada", festivals: ["Krishna Janmashtami", "Ganesh Chaturthi", "Hartalika Teej", "Rishi Panchami"] },
  { name: "Ashwin", festivals: ["Navratri", "Durga Puja", "Dussehra", "Sharad Purnima"] },
  { name: "Kartik", festivals: ["Karwa Chauth", "Dhanteras", "Diwali", "Bhai Dooj", "Chhath Puja"] },
  { name: "Margashirsha", festivals: ["Vivah Panchami", "Gita Jayanti", "Mokshada Ekadashi"] },
  { name: "Paush", festivals: ["Paush Purnima", "Lohri", "Makar Sankranti", "Pongal"] },
  { name: "Magha", festivals: ["Mauni Amavasya", "Vasant Panchami", "Magha Purnima"] },
  { name: "Phalguna", festivals: ["Maha Shivaratri", "Holi", "Rang Panchami"] }
];

const regionalFestivals = {
  "Sankranti Festivals": ["Makar Sankranti", "Pongal", "Uttarayan", "Magh Bihu", "Khichdi"],
  "Tamil Festivals": ["Pongal", "Tamil New Year", "Karthigai Deepam", "Aadi Perukku", "Thai Pusam"],
  "Malayalam Festivals": ["Vishu", "Onam", "Thiruvathira", "Makaravilakku", "Attukal Pongala"]
};

const hinduCalendarData = {
  description: "The Hindu calendar is a lunisolar calendar with roots in ancient Vedic traditions. It incorporates both lunar months and solar sidereal years, with complex calculations to keep lunar months aligned with the solar year through intercalary months (Adhik Maas).",
  elements: [
    "Tithi (Lunar Day): 30 tithis in a lunar month (Shukla and Krishna Paksha)",
    "Nakshatra (Lunar Mansion): 27 constellations along moon's path",
    "Yoga: 27 combinations of sun and moon positions",
    "Karana: Half of a tithi (11 types)",
    "Vaar: Seven-day week aligned with planetary deities",
    "Maas: Lunar month (29.5 days, 12 months in year)",
    "Ritu: Six seasons based on solar movement"
  ],
  variants: [
    "Vikram Samvat (56-57 years ahead of Gregorian)",
    "Shaka Samvat (78 years behind Gregorian)",
    "Bengali Calendar",
    "Malayalam Calendar",
    "Tamil Calendar"
  ]
};

const festivalDetails = {
  "Diwali": {
    description: "The festival of lights celebrating Lord Rama's return to Ayodhya after 14 years of exile and victory over Ravana.",
    significance: "Symbolizes the victory of light over darkness, knowledge over ignorance, and good over evil.",
    rituals: ["Lighting diyas", "Rangoli making", "Lakshmi Puja", "Exchanging sweets", "Fireworks"],
    regionalVariations: {
      "North India": "Celebrates Rama's return",
      "South India": "Celebrates Krishna's victory over Narakasura",
      "West India": "Marks the day Lord Vishnu sent Bali to rule the netherworld"
    }
  },
  "Holi": {
    description: "The festival of colors celebrating the arrival of spring and the divine love of Radha and Krishna.",
    significance: "Represents the triumph of good (Prahlad) over evil (Holika) and the arrival of spring.",
    rituals: ["Playing with colors", "Holika Dahan", "Special sweets like gujiya", "Singing and dancing"],
    regionalVariations: {
      "Mathura/Vrindavan": "Week-long celebrations at Krishna's birthplace",
      "West Bengal": "Dol Jatra with focus on Radha-Krishna",
      "Punjab": "Hola Mohalla with martial arts displays"
    }
  },
  "Navratri": {
    description: "Nine-night festival worshiping the nine forms of Goddess Durga.",
    significance: "Celebrates the victory of Goddess Durga over the buffalo demon Mahishasura.",
    rituals: ["Garba/Dandiya dances", "Fasting", "Kanya Pujan", "Durga Puja pandals"],
    regionalVariations: {
      "Gujarat": "Garba dances all night",
      "West Bengal": "Durga Puja with elaborate idols",
      "South India": "Golu doll displays"
    }
  }
};

const upcomingFestivals = [
  {
    name: "Makar Sankranti",
    date: "2025-01-14",
    lunarMonth: "Paush",
    tithi: "Makar Sankranti",
    significance: "Harvest Festival, Sun's northward journey"
  },
  {
    name: "Maha Shivaratri",
    date: "2025-02-26",
    lunarMonth: "Phalguna",
    tithi: "Chaturdashi",
    significance: "Night of Lord Shiva"
  },
  {
    name: "Holi",
    date: "2025-03-14",
    lunarMonth: "Phalguna",
    tithi: "Purnima",
    significance: "Festival of Colors"
  },
  {
    name: "Ram Navami",
    date: "2025-04-06",
    lunarMonth: "Chaitra",
    tithi: "Navami",
    significance: "Birthday of Lord Rama"
  },
  {
    name: "Raksha Bandhan",
    date: "2025-08-09",
    lunarMonth: "Shravana",
    tithi: "Purnima",
    significance: "Brother-Sister Bond"
  }
];

const fiveYearFestivalData = {
  "2023": [
    { month: "Chaitra", festivals: ["Ugadi: April 2", "Ram Navami: April 10"] },
    { month: "Vaishakha", festivals: ["Akshaya Tritiya: April 22", "Parashurama Jayanti: May 1"] },
    { month: "Jyeshtha", festivals: ["Vat Purnima: June 4", "Ganga Dussehra: June 12"] },
    { month: "Ashadha", festivals: ["Guru Purnima: July 3", "Rath Yatra: July 14"] },
    { month: "Shravana", festivals: ["Raksha Bandhan: August 19", "Nag Panchami: August 21"] },
    { month: "Bhadrapada", festivals: ["Krishna Janmashtami: September 6", "Ganesh Chaturthi: September 10"] },
    { month: "Ashwin", festivals: ["Navratri: October 15-24", "Dussehra: October 24"] },
    { month: "Kartik", festivals: ["Diwali: November 12", "Bhai Dooj: November 14"] },
    { month: "Margashirsha", festivals: ["Gita Jayanti: December 22"] }
  ],
  "2024": [
    { month: "Paush", festivals: ["Makar Sankranti: January 14", "Pongal: January 15"] },
    { month: "Magha", festivals: ["Vasant Panchami: February 14"] },
    { month: "Phalguna", festivals: ["Maha Shivaratri: March 8", "Holi: March 25"] },
    { month: "Chaitra", festivals: ["Ugadi: April 9", "Ram Navami: April 17"] },
    { month: "Vaishakha", festivals: ["Akshaya Tritiya: May 10"] },
    { month: "Jyeshtha", festivals: ["Vat Purnima: June 22"] },
    { month: "Ashadha", festivals: ["Guru Purnima: July 21"] },
    { month: "Shravana", festivals: ["Raksha Bandhan: August 19"] },
    { month: "Bhadrapada", festivals: ["Krishna Janmashtami: August 26"] },
    { month: "Ashwin", festivals: ["Navratri: October 3-12", "Dussehra: October 12"] },
    { month: "Kartik", festivals: ["Diwali: October 31", "Bhai Dooj: November 2"] }
  ],
  "2025": [
    { month: "Paush", festivals: ["Makar Sankranti: January 14", "Pongal: January 15"] },
    { month: "Magha", festivals: ["Vasant Panchami: February 2"] },
    { month: "Phalguna", festivals: ["Maha Shivaratri: February 26", "Holi: March 14"] },
    { month: "Chaitra", festivals: ["Ugadi: March 30", "Ram Navami: April 6"] },
    { month: "Vaishakha", festivals: ["Akshaya Tritiya: April 30"] },
    { month: "Jyeshtha", festivals: ["Vat Purnima: June 12"] },
    { month: "Ashadha", festivals: ["Guru Purnima: July 10"] },
    { month: "Shravana", festivals: ["Raksha Bandhan: August 9"] },
    { month: "Bhadrapada", festivals: ["Krishna Janmashtami: August 15"] },
    { month: "Ashwin", festivals: ["Navratri: September 22-October 1", "Dussehra: October 1"] },
    { month: "Kartik", festivals: ["Diwali: October 20", "Bhai Dooj: October 22"] }
  ],
  "2026": [
    { month: "Paush", festivals: ["Makar Sankranti: January 14", "Pongal: January 15"] },
    { month: "Magha", festivals: ["Vasant Panchami: January 24"] },
    { month: "Phalguna", festivals: ["Maha Shivaratri: February 15", "Holi: March 3"] },
    { month: "Chaitra", festivals: ["Ugadi: March 19", "Ram Navami: March 27"] },
    { month: "Vaishakha", festivals: ["Akshaya Tritiya: April 19"] },
    { month: "Jyeshtha", festivals: ["Vat Purnima: June 1"] },
    { month: "Ashadha", festivals: ["Guru Purnima: June 30"] },
    { month: "Shravana", festivals: ["Raksha Bandhan: July 29"] },
    { month: "Bhadrapada", festivals: ["Krishna Janmashtami: August 4"] },
    { month: "Ashwin", festivals: ["Navratri: September 11-20", "Dussehra: September 20"] },
    { month: "Kartik", festivals: ["Diwali: October 9", "Bhai Dooj: October 11"] }
  ],
  "2027": [
    { month: "Paush", festivals: ["Makar Sankranti: January 14", "Pongal: January 15"] },
    { month: "Magha", festivals: ["Vasant Panchami: February 12"] },
    { month: "Phalguna", festivals: ["Maha Shivaratri: March 5", "Holi: March 23"] },
    { month: "Chaitra", festivals: ["Ugadi: April 8", "Ram Navami: April 15"] },
    { month: "Vaishakha", festivals: ["Akshaya Tritiya: May 8"] },
    { month: "Jyeshtha", festivals: ["Vat Purnima: June 20"] },
    { month: "Ashadha", festivals: ["Guru Purnima: July 19"] },
    { month: "Shravana", festivals: ["Raksha Bandhan: August 18"] },
    { month: "Bhadrapada", festivals: ["Krishna Janmashtami: August 24"] },
    { month: "Ashwin", festivals: ["Navratri: October 1-10", "Dussehra: October 10"] },
    { month: "Kartik", festivals: ["Diwali: October 29", "Bhai Dooj: October 31"] }
  ],
  "2028": [
    { month: "Paush", festivals: [`Makar Sankranti: Jan 14`, `Pongal: Jan 15`] },
    { month: "Magha", festivals: [`Vasant Panchami: Feb 1`] },
    { month: "Phalguna", festivals: [`Maha Shivaratri: Feb 22`, `Holi: Mar 11`] },
    { month: "Chaitra", festivals: [`Ugadi: Mar 28`, `Ram Navami: Apr 4`] },
    { month: "Vaishakha", festivals: [`Akshaya Tritiya: Apr 27`] },
    { month: "Jyeshtha", festivals: [`Vat Purnima: Jun 9`] },
    { month: "Ashadha", festivals: [`Guru Purnima: Jul 7`] },
    { month: "Shravana", festivals: [`Raksha Bandhan: Aug 6`] },
    { month: "Bhadrapada", festivals: [`Krishna Janmashtami: Aug 12`] },
    { month: "Ashwin", festivals: [`Navratri: Sep 19-28`, `Dussehra: Sep 28`] },
    { month: "Kartik", festivals: [`Diwali: Oct 17`, `Bhai Dooj: Oct 19`] }
  ],
  "2029": [
    { month: "Paush", festivals: [`Makar Sankranti: Jan 14`, `Pongal: Jan 15`] },
    { month: "Magha", festivals: [`Vasant Panchami: Feb 10`] },
    { month: "Phalguna", festivals: [`Maha Shivaratri: Mar 2`, `Holi: Mar 20`] },
    { month: "Chaitra", festivals: [`Ugadi: Apr 17`, `Ram Navami: Apr 24`] },
    { month: "Vaishakha", festivals: [`Akshaya Tritiya: May 16`] },
    { month: "Jyeshtha", festivals: [`Vat Purnima: Jun 28`] },
    { month: "Ashadha", festivals: [`Guru Purnima: Jul 27`] },
    { month: "Shravana", festivals: [`Raksha Bandhan: Aug 25`] },
    { month: "Bhadrapada", festivals: [`Krishna Janmashtami: Aug 31`] },
    { month: "Ashwin", festivals: [`Navratri: Oct 8-17`, `Dussehra: Oct 17`] },
    { month: "Kartik", festivals: [`Diwali: Nov 5`, `Bhai Dooj: Nov 7`] }
  ]
};

const faqs = [
  {
    q: "How accurate are your festival date calculations?",
    a: "Our festival dates are calculated using precise astronomical formulas accounting for lunar phases, solar longitude, and regional variations. We use the Indian Astronomical Ephemeris and adjust for timezones to ensure accuracy within ±1 day for all locations."
  },
  {
    q: "Do you account for regional variations in festival dates?",
    a: "Yes, our API provides region-specific dates for festivals like Ugadi (celebrated as Gudi Padwa in Maharashtra), Vishu (Kerala), and Puthandu (Tamil Nadu). We maintain a database of regional calendars including Tamil, Malayalam, and Bengali variations."
  },
  {
    q: "Can I get historical festival dates through your API?",
    a: "Absolutely. Our API provides historical festival data going back to 1900 and future projections to 2050. This includes tithi-based calculations, regional observances, and even rare events like Adhik Maas (extra lunar month)."
  },
  {
    q: "How do you handle timezone and location-specific calculations?",
    a: "All calculations are location-aware. We use precise geographic coordinates to determine local sunrise/sunset times and tithi transitions. Our system automatically adjusts for daylight saving time where applicable."
  },
  {
    q: "What calendar systems do you support?",
    a: "We support all major Hindu calendar systems including Vikram Samvat, Shaka Samvat, Bengali, Tamil, Malayalam, and Kannada calendars. You can request dates in any of these systems through our API parameters."
  },
  {
    q: "Do you include Muhurta timings for festivals?",
    a: "Yes, our premium plans include auspicious timing windows (Muhurtas) for all major festivals, calculated according to Vedic astrology principles considering planetary positions, nakshatras, and karana."
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

export default function IndianFestivalPage() {
  const [tab, setTab] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(lunarMonths[0]);
  const [selectedRegion, setSelectedRegion] = useState(Object.keys(regionalFestivals)[0]);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-orange-50 min-h-screen">
      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "AstroSetuAPI - Indian Festival API",
          "description": "Comprehensive Hindu festival calendar API with lunar month calculations, regional variations, and 5-year projections.",
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
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Indian Festival API</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Integrate accurate Hindu festival dates, lunar month calculations, and regional observances into your applications with our developer-friendly API.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Started - Free Trial
            </Link>
            <Link href="#demo" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-md border border-gray-200 transition transform hover:-translate-y-1">
              Live Demo
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🌕</div>
            <h3 className="font-bold">Lunar Months</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🪔</div>
            <h3 className="font-bold">Festivals</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🗓️</div>
            <h3 className="font-bold">Hindu Calendar</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🌏</div>
            <h3 className="font-bold">Regional</h3>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-6">Trusted by cultural organizations and developers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-xl font-bold text-gray-700">CulturalIndia</div>
            <div className="text-xl font-bold text-gray-700">FestivalApp</div>
            <div className="text-xl font-bold text-gray-700">TempleConnect</div>
            <div className="text-xl font-bold text-gray-700">DharmaLabs</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Complete Hindu Festival Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for accurate Hindu festival calculations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌕</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lunar Month Festivals</h3>
              <p className="text-gray-700 mb-4">
                Get accurate dates for all festivals organized by traditional Hindu lunar months (Chaitra to Phalguna).
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>12 lunar month calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Shukla & Krishna Paksha</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Adhik Maas calculations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Regional Festivals</h3>
              <p className="text-gray-700 mb-4">
                Access region-specific festival dates including Tamil, Malayalam, Bengali, and other regional calendars.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tamil festival calendar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Malayalam festival calendar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bengali festival calendar</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🗓️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hindu Calendar API</h3>
              <p className="text-gray-700 mb-4">
                Full Hindu calendar calculations including tithi, nakshatra, yoga, karana, and vaar for any date.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tithi calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Nakshatra transitions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Sunrise/sunset based</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🪔</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Festival Details</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive festival information including significance, rituals, regional variations, and images.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Festival descriptions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Rituals & traditions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Regional variations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">5-Year Projections</h3>
              <p className="text-gray-700 mb-4">
                Get festival dates for any year with 5-year projections and historical data going back to 1900.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>5-year festival calendar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Historical festival data</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Future projections</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Developer Friendly</h3>
              <p className="text-gray-700 mb-4">
                Easy integration with comprehensive documentation and support for all major platforms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>RESTful JSON API</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>SDKs for major languages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="text-sm text-gray-400">GET /api/v1/festivals/monthly?month=ashwin&year=2023</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                {`{
  "success": true,
  "data": {
    "month": {
      "name": "Ashwin",
      "year": 2023,
      "start_date": "2023-10-15",
      "end_date": "2023-11-13",
      "paksha": "Shukla",
      "ritu": "Sharad",
      "festivals": [
        {
          "name": "Navratri",
          "start_date": "2023-10-15",
          "end_date": "2023-10-24",
          "tithi": "Pratipada to Navami",
          "description": "Nine nights festival worshipping Goddess Durga",
          "regional_names": {
            "North": "Navratri",
            "West": "Navratri",
            "East": "Durga Puja",
            "South": "Golu"
          },
          "rituals": ["Garba", "Fasting", "Kanya Pujan"],
          "significance": "Celebrates the victory of Goddess Durga over Mahishasura"
        },
        {
          "name": "Dussehra",
          "date": "2023-10-24",
          "tithi": "Dashami",
          "description": "Celebrates Lord Rama's victory over Ravana",
          "regional_names": {
            "North": "Dussehra",
            "South": "Vijayadashami",
            "East": "Bijoya Dashami"
          },
          "rituals": ["Ravana Dahan", "Shami Puja", "Weapon Worship"],
          "significance": "Victory of good over evil"
        },
        {
          "name": "Sharad Purnima",
          "date": "2023-10-28",
          "tithi": "Purnima",
          "description": "Night of the full moon in Ashwin month",
          "rituals": ["Kheer under moonlight", "Raas Leela"],
          "significance": "Considered the most auspicious full moon"
        }
      ]
    },
    "calendar": {
      "system": "Vikram Samvat",
      "year": 2080,
      "next_month": "Kartik",
      "is_adhimas": false
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
          Try our Indian Festival APIs right in your browser. See how easy it is to get accurate festival dates.
        </p>
        
        <Tabs 
          value={tab} 
          onChange={(e, val) => setTab(val)} 
          centered 
          className="mb-8"
          TabIndicatorProps={{ style: { background: '#f97316', height: '4px' } }}
          textColor="inherit"
        >
          <Tab label={<span className="font-semibold">Lunar Months</span>} />
          <Tab label={<span className="font-semibold">Regional Festivals</span>} />
          <Tab label={<span className="font-semibold">5-Year Calendar</span>} />
        </Tabs>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          {tab === 0 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Lunar Month Festivals</h3>
                <p className="text-gray-600">Select a Hindu lunar month to see associated festivals</p>
              </div>
              <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {lunarMonths.map(month => (
                  <button
                    key={month.name}
                    onClick={() => setSelectedMonth(month)}
                    className={`py-3 px-2 rounded-lg border transition-all flex flex-col items-center
                      ${selectedMonth.name === month.name ? 
                        "bg-orange-100 border-orange-400 shadow-md" : 
                        "bg-white border-gray-200 hover:shadow-lg hover:border-orange-300"}`}
                  >
                    <span className="text-lg font-medium">{month.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{month.festivals.length} festivals</span>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-4">Festivals in {selectedMonth.name} Month</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-orange-700">Major Festivals</h5>
                    <ul className="space-y-3">
                      {selectedMonth.festivals.map((festival, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-orange-600">{i+1}</span>
                          </div>
                          <div>
                            <span className="font-medium">{festival}</span>
                            {festivalDetails[festival] && (
                              <p className="text-sm text-gray-600 mt-1">{festivalDetails[festival].description}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-orange-700">Month Significance</h5>
                    <p className="text-gray-700 mb-4">
                      {selectedMonth.name === "Chaitra" ? "Chaitra marks the beginning of the Hindu New Year in most regions. It's considered auspicious for new beginnings and is associated with spring harvest festivals." :
                      selectedMonth.name === "Vaishakha" ? "Vaishakha is considered sacred for bathing in holy rivers. Major festivals celebrate agriculture and commemorate divine incarnations." :
                      selectedMonth.name === "Jyeshtha" ? "Jyeshtha is typically the hottest month. Festivals focus on water conservation, tree worship, and spiritual austerity." :
                      selectedMonth.name === "Ashadha" ? "Ashadha begins the monsoon season. Festivals celebrate the awakening of divine energy and guru-shishya traditions." :
                      selectedMonth.name === "Shravana" ? "Shravana is dedicated to Lord Shiva. Its festivals emphasize family bonds, nature worship, and spiritual observances." :
                      selectedMonth.name === "Bhadrapada" ? "Bhadrapada features major celebrations of Krishna and Ganesha. It's a time of joyous community festivals." :
                      selectedMonth.name === "Ashwin" ? "Ashwin contains the grandest festivals - Navratri and Diwali. It's considered the most spiritually charged month." :
                      selectedMonth.name === "Kartik" ? "Kartik is the holiest month for rituals and bathing in sacred rivers. Its festivals celebrate light overcoming darkness." :
                      selectedMonth.name === "Margashirsha" ? "Margashirsha is ideal for spiritual practices. Its festivals focus on wisdom scriptures and divine marriages." :
                      selectedMonth.name === "Paush" ? "Paush contains winter solstice festivals celebrating the sun's northward journey and harvest celebrations." :
                      selectedMonth.name === "Magha" ? "Magha is significant for holy river bathing. Its festivals celebrate knowledge, arts, and the approach of spring." :
                      "Phalguna marks the end of winter. Its colorful festivals celebrate love, divine play, and the triumph of good over evil."}
                    </p>
                    <div className="mt-4">
                      <h6 className="font-semibold mb-2 text-orange-700">Associated Season</h6>
                      <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {selectedMonth.name === "Chaitra" || selectedMonth.name === "Vaishakha" ? "Spring (Vasanta)" :
                        selectedMonth.name === "Jyeshtha" || selectedMonth.name === "Ashadha" ? "Summer (Grishma)" :
                        selectedMonth.name === "Shravana" || selectedMonth.name === "Bhadrapada" ? "Monsoon (Varsha)" :
                        selectedMonth.name === "Ashwin" || selectedMonth.name === "Kartik" ? "Autumn (Sharad)" :
                        selectedMonth.name === "Margashirsha" || selectedMonth.name === "Paush" ? "Winter (Hemanta)" :
                        "Pre-Spring (Shishira)"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Regional Festivals</h3>
                <p className="text-gray-600">Explore festivals by region and cultural tradition</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">Select Region</h4>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(regionalFestivals).map(region => (
                      <button
                        key={region}
                        onClick={() => setSelectedRegion(region)}
                        className={`px-4 py-2 rounded-lg border transition-all
                          ${selectedRegion === region ? 
                            "bg-orange-100 border-orange-400 shadow-md" : 
                            "bg-white border-gray-200 hover:shadow-lg hover:border-orange-300"}`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">{selectedRegion} Festivals</h4>
                    <ul className="space-y-3">
                      {regionalFestivals[selectedRegion].map((festival, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-orange-600">{i+1}</span>
                          </div>
                          <div>
                            <span className="font-medium">{festival}</span>
                            {festivalDetails[festival] && (
                              <p className="text-sm text-gray-600 mt-1">{festivalDetails[festival].description}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Regional Calendar Information</h4>
                    <p className="text-gray-700 mb-4">
                      {selectedRegion === "Sankranti Festivals" ? 
                        "Sankranti marks the sun's transition between zodiac signs. Makar Sankranti (Capricorn) is most significant, celebrated across India with regional names and traditions." :
                      selectedRegion === "Tamil Festivals" ?
                        "The Tamil calendar follows the solar cycle with months named after stars. Festivals emphasize nature, harvest, and regional deities with unique traditions." :
                        "The Malayalam calendar is solar with lunar adjustments. Festivals showcase Kerala's unique temple culture, harvest traditions, and classical arts."}
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-2">Did You Know?</h5>
                      <p className="text-yellow-700">
                        {selectedRegion === "Sankranti Festivals" ? 
                          "Pongal, the Tamil harvest festival, gets its name from the tradition of boiling rice until it overflows ('pongal'), symbolizing abundance." :
                        selectedRegion === "Tamil Festivals" ?
                          "The Tamil month of Aadi (July-August) is considered inauspicious for weddings but special for women's festivals honoring the divine feminine." :
                          "Onam, Kerala's harvest festival, commemorates King Mahabali's annual return from the netherworld to visit his subjects in a golden age of prosperity."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">5-Year Festival Calendar</h3>
                <p className="text-gray-600">View major Hindu festival dates for any year</p>
              </div>
              <div className="p-6">
                <div className="mb-6 max-w-md">
                  <label htmlFor="year-select" className="block text-sm font-medium text-gray-700 mb-2">Select Year</label>
                  <select
                    id="year-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {Object.keys(fiveYearFestivalData).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Festivals</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {fiveYearFestivalData[selectedYear].map((monthData, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{monthData.month}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-2">
                              {monthData.festivals.map((festival, j) => (
                                <span key={j} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                                  {festival}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-orange-700">Calendar Notes for {selectedYear}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Festival dates are calculated for UTC+5:30 (IST) timezone</li>
                    <li>Regional variations may apply for certain festivals</li>
                    <li>Muhurta timings available in premium plans</li>
                    {selectedYear === "2024" && <li>2024 has an Adhik Ashadha (extra month) from July 18 to August 16</li>}
                    {selectedYear === "2026" && <li>2026 has an Adhik Jyeshtha (extra month) from June 1 to June 29</li>}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Hindu Calendar Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Hindu Calendar System</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Understanding the complex lunisolar system behind Hindu festivals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Elements</h3>
              <p className="text-amber-100 mb-6">
                {hinduCalendarData.description}
              </p>
              <ul className="space-y-3">
                {hinduCalendarData.elements.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-amber-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Regional Variations</h3>
              <p className="text-amber-100 mb-6">
                Different regions of India follow variations of the Hindu calendar with different new year days and month names:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {hinduCalendarData.variants.map((variant, i) => (
                  <div key={i} className="bg-amber-800 bg-opacity-30 p-4 rounded-lg border border-amber-700">
                    <h4 className="font-bold text-amber-300">{variant}</h4>
                    <p className="text-sm text-amber-100 mt-1">
                      {variant === "Vikram Samvat" ? "Used in North & West India, Nepal" :
                      variant === "Shaka Samvat" ? "National calendar of India, used in South" :
                      variant === "Bengali Calendar" ? "Used in West Bengal, Bangladesh" :
                      variant === "Malayalam Calendar" ? "Used in Kerala, follows solar cycle" :
                      "Used in Tamil Nadu, follows solar cycle"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link href="/documentation" className="inline-block bg-white hover:bg-gray-100 text-amber-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              View API Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Festivals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Upcoming Major Festivals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important Hindu festivals in the next 12 months
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {upcomingFestivals.map((festival, i) => (
              <div key={i} className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3 text-center">
                  {festival.name === "Diwali" ? "🪔" :
                  festival.name === "Holi" ? "🎨" :
                  festival.name === "Navratri" ? "🌸" :
                  festival.name === "Ganesh Chaturthi" ? "🐘" :
                  "🧵"}
                </div>
                <h3 className="text-xl font-bold mb-1 text-center">{festival.name}</h3>
                <div className="text-center text-orange-600 font-medium mb-3">{festival.date}</div>
                <div className="text-sm text-gray-600 text-center mb-3">
                  {festival.lunarMonth} {festival.tithi}
                </div>
                <p className="text-gray-700 text-sm text-center">
                  {festival.significance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Trusted by Cultural Organizations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what our customers say about our Festival API
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4">PS</div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">Cultural Events Organizer</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "We rely on AstroSetuAPI for accurate festival dates to plan our cultural events. The regional variations feature helps us serve diverse communities with appropriate celebrations."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4">RK</div>
                <div>
                  <h4 className="font-bold">Ramesh Kumar</h4>
                  <p className="text-gray-600 text-sm">Developer, TempleConnect</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "The Hindu calendar calculations saved us months of development time. We integrated the API in a week and our temple management system now shows accurate festival dates worldwide."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4">AM</div>
                <div>
                  <h4 className="font-bold">Anjali Mehta</h4>
                  <p className="text-gray-600 text-sm">Founder, FestivalApp</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★☆</div>
              <p className="text-gray-700">
                "Our users love the festival reminders and regional calendar features. The only reason I didn't give 5 stars is that I'd love to see even more regional festival details added."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Powerful Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our Festival API can enhance your application
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v11a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Apps</h3>
              <p className="text-gray-700">
                Add accurate festival dates and Hindu calendar features to your cultural or religious applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Event Planning</h3>
              <p className="text-gray-700">
                Help users plan weddings and events around auspicious dates and avoid inauspicious periods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Diaspora Communities</h3>
              <p className="text-gray-700">
                Help Hindu communities abroad maintain cultural connections with accurate festival dates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Travel Industry</h3>
              <p className="text-gray-700">
                Highlight festival tourism opportunities and help travelers plan visits around major events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-gray-700">
                Teach about Hindu culture and traditions with accurate calendar information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content Platforms</h3>
              <p className="text-gray-700">
                Generate festival-related content with accurate dates and cultural context.
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
            Everything you need to know about our Indian Festival API
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
                  className={`w-5 h-5 text-orange-600 transition-transform ${faqOpenIndex === i ? 'transform rotate-180' : ''}`} 
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
          <Link href="#" className="text-orange-600 font-semibold hover:text-orange-800">
            Contact our support team →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Integrate Hindu Festivals?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Join cultural organizations and developers using our API to deliver accurate festival information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing" className="inline-block bg-white hover:bg-gray-100 text-orange-700 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Started for Free
            </Link>
            <Link to="#demo" className="inline-block bg-transparent hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white transition transform hover:-translate-y-1">
              Try Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}