import React, { useEffect, useState } from 'react';
import '../assets/css/UnifiedPricing.css';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Horoscope',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:1,
    discription: 'Comprehensive daily, weekly, monthly, and yearly horoscopes including Vedic, Western, Chinese, and Numerology systems.',
    features: [
      'Access to Vedic, Western, Chinese, and Numerology horoscopes.',
      'Daily updates with accurate planetary insights.',
      'Weekly and monthly trends for life, love, and career.',
      'Annual predictions for long-term planning.',
      '300K API calls/month'
    ],
    color: '#ff8a00',
  },
  {
    name: 'Tarot',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:2,
    discription: 'Accurate daily Tarot card readings with spiritual and intuitive guidance for decision making and emotional clarity.',
    features: [
      'Draw daily Tarot cards for love, career, and finance.',
      'Includes Major and Minor Arcana interpretations.',
      'Insightful messages for personal growth and clarity.',
      'Access to Tarot spreads (3-card, Celtic cross, etc.).',
      '300K API calls/month'
    ],
    color: '#8e2de2',
  },
  {
    name: 'Daily Panchang',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:3,
    discription: 'Daily Panchang based on Vedic Astrology with sunrise, tithi, nakshatra, yoga, karana, and muhurta.',
    features: [
      'Daily Panchang with sunrise and sunset timings.',
      'Tithi, Nakshatra, Yoga, and Karana details.',
      'Auspicious and inauspicious Muhurtas.',
      'Choghadiya, Rahu Kaal, and Abhijit Muhurta.',
      '300K API calls/month'
    ],
    color: '#00b09b',
  },
  {
    name: 'Kundali',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:4,
    discription: 'Detailed Vedic Kundali generation including birth chart, planetary positions, doshas, and remedies.',
    features: [
      'Complete Vedic birth chart generation (Lagna, Moon).',
      'Planetary positions and aspects.',
      'Dosha detection: Mangal, Kaal Sarp, etc.',
      'Basic remedies and gemstone suggestions.',
      '300K API calls/month'
    ],
    color: '#1e3c72',
  },
  {
    name: 'Kundli Match Making',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:5,
    discription: 'Ashta-Koota based Vedic compatibility check for marriage and relationships with dosha analysis.',
    features: [
      'Ashta-Koota compatibility score.',
      'Mangal dosha check and remedies.',
      'Detailed gun matching report.',
      'Compatibility insights for health, finance, and children.',
      '300K API calls/month'
    ],
    color: '#c31432',
  },
  {
    name: 'Natal Chart',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:6,
    discription: 'Personalized natal chart analysis showing planetary alignment at birth with insights for life path and personality.',
    features: [
      'Complete birth chart with 12 house analysis.',
      'Insights on career, personality, and destiny.',
      'Planetary strengths and weaknesses.',
      'North & South Node (Rahu/Ketu) interpretation.',
      '300K API calls/month'
    ],
    color: '#f953c6',
  },
  {
    name: 'Western Astrology',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:7,
    discription: 'Western astrology-based predictions using Sun, Moon, and Rising signs with planetary transits and aspects.',
    features: [
      'Sun, Moon, and Ascendant sign interpretation.',
      'Daily, weekly, monthly horoscopes.',
      'Planetary retrogrades and transits.',
      'Zodiac-based compatibility analysis.',
      '300K API calls/month'
    ],
    color: '#d38312',
  },
  {
    name: 'Indian Astrology',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    braprice: 50,
    package_id:8,
    discription: 'Traditional Indian astrology predictions using Vedic principles, including Lagna, Dashas, and Nakshatras.',
    features: [
      'Lagna-based analysis with Navamsa and divisional charts.',
      'Dasha system for timing life events.',
      'Nakshatra-based personality insights.',
      'Remedial suggestions like mantras and rituals.',
      '300K API calls/month'
    ],
    color: '#f7971e',
  },
  {
    name: 'Lifestyle',
    price: 10,
    inrprice: 1000,
    chineseprice: 50,
    package_id:9,
    braprice: 50,
    discription: 'Traditional Indian astrology predictions using Vedic principles, including Lagna, Dashas, and Nakshatras.',
    features: [
      'Lagna-based analysis with Navamsa and divisional charts.',
      'Dasha system for timing life events.',
      'Nakshatra-based personality insights.',
      'Remedial suggestions like mantras and rituals.',
      '300K API calls/month'
    ],
    color: '#304db3',
  }
];


export default function PricingPage() {
  const [currency, setCurrency] = useState('usd');

  useEffect(() => {
    fetch('https://ipapi.co/json')
      .then((res) => res.json())
      .then((data) => {
        const country = data.country_name;
        if (country === 'India') setCurrency('inr');
        else if (country === 'China') setCurrency('cny');
        else if (country === 'Brazil') setCurrency('brl');
      })
      .catch(() => {
        setCurrency('usd'); // fallback
      });
  }, []);

  const getPrice = (plan) => {
    switch (currency) {
      case 'inr':
        return `₹${plan.inrprice}`;
      case 'cny':
        return `¥${plan.chineseprice}`;
      case 'brl':
        return `R$${plan.braprice}`;
      default:
        return `$${plan.price}`;
    }
  };

  const navigate = useNavigate();

  const signup = (packageId) => {
   
    console.log("Signing up for package:", packageId);
    localStorage.setItem("selectedPlan", JSON.stringify(packageId));
     navigate('/signup');

    // Add your actual signup logic here (API call, routing, etc.)
  };
  
  const getCurrencyLabel = () => {
    switch (currency) {
      case 'inr': return 'INR';
      case 'cny': return 'CNY';
      case 'brl': return 'BRL';
      default: return 'USD';
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center p-5">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Get Started with Your <br />30-Day Free Trial – No Charges Today!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Explore powerful tools to elevate your astrological offerings. Enter your details to begin, and we’ll only charge after 45 days if you decide to continue.
          </p>
        </div>
      </section>

      <div className="pricing-wrapper">
        <h1 className="title">Our Premium Astrology APIs <span style={{ fontSize: '16px', fontWeight: '400' }}>({getCurrencyLabel()})</span></h1>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.name} style={{ borderTop: `4px solid ${plan.color}` }}>
              <h2>{plan.name}</h2>
              <p className="plan-description">{plan.discription}</p>
              <div className="price">
                {getPrice(plan)} <span>/month</span>
              </div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button style={{ backgroundColor: plan.color }} className="cta-btn" onClick={() => signup(plan.package_id)}>Start Free Trial</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
