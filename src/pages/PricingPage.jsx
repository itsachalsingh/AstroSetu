
import React from 'react';
import '../assets/css/UnifiedPricing.css';

const plans = [
  {
    name: 'Horoscope',
    price: 49,
    features: ['Daily/Weekly/Monthly reports', 'PDF + JSON output', 'API + Widget access', '300K API calls/month'],
    color: '#ff8a00',
  },
  {
    name: 'Numerology',
    price: 49,
    features: ['Chaldean + Pythagorean', 'Name & DOB readings', 'Compatibility + Traits', '300K API calls/month'],
    color: '#8e2de2',
  },
  {
    name: 'Indian Astrology',
    price: 29,
    features: ['Kundli + Charts', 'Dasha, Bhava, Nakshatra', 'Muhurta + Remedies', 'Panchang API included'],
    color: '#00b09b',
  },
  {
    name: 'Western Astrology',
    price: 49,
    features: ['Sun/Moon/Rising', 'Zodiac Compatibility', 'Transit & Natal Charts', 'PDF Generator'],
    color: '#0f2027',
  },
  {
    name: 'Lifestyle',
    price: 59,
    features: ['Health & Wellness', 'Career & Wealth', 'Love Life Insights', 'Custom Reports'],
    color: '#c31432',
  },
];

export default function PricingPage(){
    return (
        <>
            <section className="bg-gradient-to-b from-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center p-5">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Get Started with Your <br/>45-Day Free Trial – No Charges Today!
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Explore powerful tools to elevate your astrological offerings. Enter your details to begin, and we’ll only charge after 45 days if you decide to continue.
                    </p>
                </div>     
            </section>
         <div className="pricing-wrapper">
            <h1 className="title">Our Premium Astrology APIs</h1>
            <div className="pricing-grid">
                {plans.map(plan => (
                <div className="plan-card" key={plan.name} style={{ borderTop: `4px solid ${plan.color}` }}>
                    <h2>{plan.name}</h2>
                    <div className="price">${plan.price} <span>/month</span></div>
                    <ul>
                    {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                    </ul>
                    <button style={{ backgroundColor: plan.color }} className="cta-btn">Start Free Trial</button>
                </div>
                ))}
            </div>
            </div>
        </>
        
    )
}