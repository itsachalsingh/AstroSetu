import React, { useEffect, useState } from 'react';
import '../assets/css/UnifiedPricing.css';
import { useNavigate } from 'react-router-dom';

const TAX_RATE = 0.18; // 18% tax
const PLATFORM_FEE_RATE = 0.10; // 10% platform fee
const DISCOUNT_RATE = 0.70; // 70% discount

const plans = [
  {
    name: 'Horoscope',
    price: 10,
    inrprice: 2000,
    chineseprice: 50,
    braprice: 50,
    package_id: 1,
    comming_soon:false,
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
    inrprice: 1500,
    chineseprice: 50,
    braprice: 50,
    package_id: 2,
     comming_soon:false,
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
    name: 'Vedic Astrology',
    price: 10,
    inrprice: 2000,
    chineseprice: 50,
    braprice: 50,
    package_id: 3,
     comming_soon:true,
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
    name: 'Western Astrology',
    price: 10,
    inrprice: 4000,
    chineseprice: 50,
    braprice: 50,
    package_id: 4,
     comming_soon:true,
    discription: 'Western astrology-based predictions using Sun, Moon, and Rising signs with planetary transits and aspects.',
    features: [
      'Sun, Moon, and Ascendant sign interpretation.',
      'Daily, weekly, monthly horoscopes.',
      'Planetary retrogrades and transits.',
      'Zodiac-based compatibility analysis.',
      '300K API calls/month'
    ],
    color: '#1e3c72',
  },
  {
    name: 'Numerology',
    price: 10,
    inrprice: 3000,
    chineseprice: 50,
    braprice: 50,
    package_id: 5,
    comming_soon:true,
    discription: 'Personal numerology profile including Destiny, Soul Urge, Expression, Maturity, and Karmic numbers with their meanings.',
    features: [
      'Computation of Destiny, Soul Urge, Expression numbers.',
      'Karmic Lesson, Hidden Passion, and Maturity numbers.',
      'Compatibility based on numerological vibrations.',
      'Insights into career, health, relationships through numbers.',
      '300K API calls/month'
    ],
    color: '#c31432',
  },
  {
    name: 'Cosmic Harmony',
    price: 10,
    inrprice: 7000,
    chineseprice: 50,
    braprice: 50,
    package_id: 6,
    comming_soon:true,
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
    name: 'Indian Festival',
    price: 10,
    inrprice: 5000,
    chineseprice: 50,
    braprice: 50,
    package_id: 7,
    comming_soon:true,
    discription: 'Accurate festival calendar with Tithi, Nakshatra, Parana time, and sunrise/sunset based on Panchang and Drik calculations.',
    features: [
      'Festival dates based on Hindu Panchang.',
      'Tithi and Nakshatra based festival triggers.',
      'Sunrise, moonrise, and Parana timings.',
      'Support for Ekadashi, Sankranti, Amavasya, Purnima, etc.',
      '300K API calls/month'
    ],
    color: '#d38312',
  }
];

// Your existing plans array here (same as in your code)

export default function PricingPage() {
  const [currency, setCurrency] = useState('usd');
  const [selectedPlans, setSelectedPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://ipapi.co/json')
      .then((res) => res.json())
      .then((data) => {
        const country = data.country_name;
        if (country === 'India') setCurrency('inr');
        else if (country === 'China') setCurrency('cny');
        else if (country === 'Brazil') setCurrency('brl');
      })
      .catch(() => setCurrency('usd'));
  }, []);

  const getPrice = (plan) => {
    switch (currency) {
      case 'inr': return plan.inrprice;
      case 'cny': return plan.chineseprice;
      case 'brl': return plan.braprice;
      default: return plan.price;
    }
  };

  const getPriceWithSymbol = (price) => {
    switch (currency) {
      case 'inr': return `₹${price}`;
      case 'cny': return `¥${price}`;
      case 'brl': return `R$${price}`;
      default: return `$${price}`;
    }
  };

  const getCurrencyLabel = () => {
    switch (currency) {
      case 'inr': return 'INR';
      case 'cny': return 'CNY';
      case 'brl': return 'BRL';
      default: return 'USD';
    }
  };

  const togglePlanSelection = (plan) => {
    if (selectedPlans.find((p) => p.package_id === plan.package_id)) {
      setSelectedPlans((prev) => prev.filter((p) => p.package_id !== plan.package_id));
    } else {
      setSelectedPlans((prev) => [...prev, plan]);
    }
  };

  const calculateCart = () => {
    const base = selectedPlans.reduce((sum, plan) => sum + getPrice(plan), 0);
    const discount = base * DISCOUNT_RATE;
    const discountedTotal = base - discount;
    const platformFee = discountedTotal * PLATFORM_FEE_RATE;
    const tax = (discountedTotal + platformFee) * TAX_RATE;
    const total = discountedTotal + platformFee + tax;
    return {
      base,
      discount,
      discountedTotal,
      platformFee,
      tax,
      total,
    };
  };

  const signup = () => {
    const selectedIds = selectedPlans.map(p => p.package_id);
    localStorage.setItem("selectedPlans", JSON.stringify(selectedIds));
    navigate('/signup');
  };

  const cart = calculateCart();

  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center p-5">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Get Started with Your <br />30-Day Free Trial – No Charges Today!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Explore powerful tools to elevate your astrological offerings. Choose multiple products and enjoy 70% off.
          </p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <div className="pricing-wrapper">
              <h1 className="title">Our Premium Astrology APIs <span style={{ fontSize: '16px', fontWeight: '400' }}>({getCurrencyLabel()})</span></h1>
              <div className="pricing-grid">
                {plans.map((plan) => (
                  <div className="plan-card" key={plan.name} style={{ borderTop: `4px solid ${plan.color}` }}>
                    <h2>{plan.name}</h2>
                    <p className="plan-description">{plan.discription}</p>
                    <div className="price">
                      {getPriceWithSymbol(getPrice(plan))} <span>/month</span>
                    </div>
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    {plan.comming_soon ? (
                      <span
                        style={{ backgroundColor: plan.color }}
                        className="cta-btn disabled opacity-70 cursor-not-allowed"
                      >
                        Coming Soon
                      </span>
                    ) : (
                      <button
                        style={{ backgroundColor: selectedPlans.find(p => p.package_id === plan.package_id) ? '#444' : plan.color }}
                        className="cta-btn"
                        onClick={() => togglePlanSelection(plan)}
                      >
                        {selectedPlans.find(p => p.package_id === plan.package_id)
                          ? 'Remove from Cart'
                          : 'Add to Cart'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[400px] pt-25">
              <div className="cart-summary p-6 max-w-4xl mx-auto bg-white shadow-md rounded-xl mt-10">
                        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
                        <ul className="mb-4">
                          {selectedPlans.map(plan => (
                            <li key={plan.package_id} className="mb-1">
                              ✅ {plan.name}: {getPriceWithSymbol(getPrice(plan))}
                            </li>
                          ))}
                        </ul>
                        <div className="text-gray-700 space-y-1">
                          <p>Subtotal: {getPriceWithSymbol(cart.base.toFixed(2))}</p>
                          <p>Discount (70%): -{getPriceWithSymbol(cart.discount.toFixed(2))}</p>
                          <p>Platform Fee (10%): {getPriceWithSymbol(cart.platformFee.toFixed(2))}</p>
                          <p>Tax (18%): {getPriceWithSymbol(cart.tax.toFixed(2))}</p>
                          <p className="font-bold text-xl">
                            Total: {getPriceWithSymbol(cart.total.toFixed(2))} / month
                          </p>
                        </div>
                        <button
                          className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700"
                          onClick={signup}
                        >
                          Proceed to Signup
                        </button>
                </div>
          </div>
      </div>
    </>
  );
}
