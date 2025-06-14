import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from 'react-router-dom';

const zodiacData = [
  { 
    sign: "Aries",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    traits: ["Adventurous", "Energetic", "Pioneering", "Courageous"],
    fashion: "Bold reds, sporty cuts, statement accessories",
    wellness: "High-intensity workouts, martial arts, competitive sports",
    home: "Dynamic spaces with motivational art, bright colors, and tech gadgets"
  },
  { 
    sign: "Taurus",
    dates: "Apr 20 - May 20",
    element: "Earth",
    traits: ["Sensual", "Practical", "Loyal", "Artistic"],
    fashion: "Luxurious fabrics, earth tones, timeless classics",
    wellness: "Yoga, gardening, aromatherapy, slow-paced routines",
    home: "Cozy spaces with plush furniture, natural materials, and art collections"
  },
  { 
    sign: "Gemini",
    dates: "May 21 - Jun 20",
    element: "Air",
    traits: ["Curious", "Adaptable", "Communicative", "Witty"],
    fashion: "Mix-and-match styles, quirky prints, lightweight layers",
    wellness: "Dance classes, brain games, social activities, variety workouts",
    home: "Multi-functional spaces with bookshelves, tech hubs, and conversation areas"
  },
  { 
    sign: "Cancer",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    traits: ["Nurturing", "Intuitive", "Protective", "Sentimental"],
    fashion: "Soft fabrics, vintage pieces, comfortable yet chic",
    wellness: "Swimming, emotional journaling, family activities, moon rituals",
    home: "Nostalgic spaces with family photos, cozy nooks, and kitchen comforts"
  },
  { 
    sign: "Leo",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    traits: ["Charismatic", "Generous", "Dramatic", "Warm-hearted"],
    fashion: "Gold accents, bold patterns, designer labels, attention-grabbing pieces",
    wellness: "Dance, theater, creative expression, leadership activities",
    home: "Luxury spaces with statement furniture, gallery walls, and entertainment areas"
  },
  { 
    sign: "Virgo",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    traits: ["Analytical", "Practical", "Detail-oriented", "Helpful"],
    fashion: "Tailored fits, neutral tones, functional yet stylish",
    wellness: "Pilates, organization projects, healthy meal planning, nature walks",
    home: "Minimalist spaces with smart storage, home office setups, and clean lines"
  },
  { 
    sign: "Libra",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    traits: ["Diplomatic", "Social", "Fair-minded", "Aesthetic"],
    fashion: "Balanced outfits, pastel hues, harmonious combinations",
    wellness: "Partner yoga, art appreciation, mediation, social harmony activities",
    home: "Elegant spaces with symmetry, art pieces, and conversation-friendly layouts"
  },
  { 
    sign: "Scorpio",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    traits: ["Passionate", "Determined", "Magnetic", "Transformative"],
    fashion: "Dark colors, leather accents, mysterious allure",
    wellness: "Intense workouts, shadow work, tantra, investigative activities",
    home: "Private spaces with mood lighting, sensual textures, and secret storage"
  },
  { 
    sign: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    traits: ["Adventurous", "Optimistic", "Philosophical", "Free-spirited"],
    fashion: "Boho chic, travel-friendly pieces, cultural motifs",
    wellness: "Hiking, learning new skills, travel planning, outdoor adventures",
    home: "Global-inspired spaces with travel souvenirs, open layouts, and study areas"
  },
  { 
    sign: "Capricorn",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    traits: ["Disciplined", "Ambitious", "Patient", "Traditional"],
    fashion: "Structured silhouettes, classic cuts, professional elegance",
    wellness: "Strength training, goal setting, mountain activities, legacy projects",
    home: "Traditional spaces with quality furniture, achievement displays, and home offices"
  },
  { 
    sign: "Aquarius",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    traits: ["Innovative", "Humanitarian", "Independent", "Unconventional"],
    fashion: "Futuristic pieces, unique accessories, tech-inspired looks",
    wellness: "Group activities, humanitarian projects, experimental therapies",
    home: "Modern spaces with smart tech, conversation pieces, and open social areas"
  },
  { 
    sign: "Pisces",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    traits: ["Compassionate", "Imaginative", "Spiritual", "Dreamy"],
    fashion: "Flowy fabrics, mystical prints, ethereal colors",
    wellness: "Swimming, meditation, creative arts, spiritual practices",
    home: "Dreamy spaces with water features, artistic corners, and meditation areas"
  }
];

const cosmicBeauty = {
  moonPhases: {
    newMoon: "Best for intention setting and new beginnings. Try detox treatments and fresh skincare routines.",
    waxingMoon: "Ideal for growth and building. Focus on hair treatments and muscle-building workouts.",
    fullMoon: "Peak energy for manifestation. Perfect for dramatic makeovers and intense therapies.",
    waningMoon: "Time for release. Best for detox, decluttering, and breaking bad habits."
  },
  planetaryInfluences: {
    venus: "When Venus is strong, focus on luxury beauty treatments, romantic scents, and enhancing natural beauty.",
    mars: "Mars energy calls for bold looks, intense workouts, and adventurous style changes.",
    jupiter: "Jupiter's influence expands beauty routines - try new treatments or extravagant self-care.",
    saturn: "Saturn demands discipline - stick to proven routines and focus on long-term results."
  },
  elements: {
    fire: "Fire signs benefit from warm tones, spicy scents, and energizing treatments.",
    earth: "Earth signs thrive with natural products, earthy tones, and grounding practices.",
    air: "Air signs should focus on light textures, fresh scents, and social beauty experiences.",
    water: "Water signs respond well to cooling treatments, mystical scents, and emotional wellness."
  }
};

const astroGifts = [
  {
    category: "Romantic",
    aries: "Adventure experience or bold red lingerie",
    taurus: "Luxury spa day or gourmet chocolate collection",
    gemini: "Personalized playlist or witty book series",
    cancer: "Family photo album or cozy homemade dinner",
    leo: "Designer accessory or VIP experience",
    virgo: "Organizational tool or wellness tracker",
    libra: "Matching couple jewelry or art piece",
    scorpio: "Mystery trip or intimate experience",
    sagittarius: "Travel voucher or philosophy book",
    capricorn: "Quality timepiece or professional development course",
    aquarius: "Tech gadget or donation to their favorite cause",
    pisces: "Personalized poetry or spiritual retreat"
  },
  {
    category: "Practical",
    aries: "High-quality sports gear",
    taurus: "Artisan kitchen tools",
    gemini: "Latest communication device",
    cancer: "Family recipe organizer",
    leo: "Statement home decor piece",
    virgo: "Smart home organizer",
    libra: "Beautiful planner system",
    scorpio: "Private safe or journal",
    sagittarius: "Travel accessories",
    capricorn: "Professional portfolio",
    aquarius: "Innovative tech solution",
    pisces: "Creative art supplies"
  },
  {
    category: "Luxury",
    aries: "Personal training package",
    taurus: "Designer handbag",
    gemini: "Front-row event tickets",
    cancer: "Heirloom jewelry",
    leo: "Custom portrait session",
    virgo: "High-end cleaning service",
    libra: "Fine art acquisition",
    scorpio: "Exclusive retreat",
    sagittarius: "First-class travel upgrade",
    capricorn: "Antique timepiece",
    aquarius: "Cutting-edge gadget",
    pisces: "Private yacht experience"
  }
];

const cosmicLivingTips = [
  {
    area: "Home Decor",
    tips: [
      "Align furniture placement with your rising sign's element (Fire: South, Earth: North, Air: East, Water: West)",
      "Display crystals associated with your sun sign in prominent areas",
      "Choose wall colors based on your Venus sign's preferences",
      "Create a meditation corner in your moon sign's elemental style"
    ]
  },
  {
    area: "Daily Routine",
    tips: [
      "Schedule important meetings during your Mercury sign's peak hours",
      "Exercise according to your Mars sign's energy (Cardio for fire, Strength for earth, etc.)",
      "Practice moon sign-specific self-care rituals before bed",
      "Align meal times with your Jupiter sign's expansion qualities"
    ]
  },
  {
    area: "Social Life",
    tips: [
      "Host gatherings during your Venus sign's most sociable days",
      "Choose friendship activities based on your 11th house sign",
      "Network during Mercury's transit through your career house",
      "Plan romantic dates according to your descendant sign's preferences"
    ]
  }
];

const faqs = [
  {
    q: "How does astrology influence lifestyle choices?",
    a: "Astrology provides a cosmic blueprint of your personality, preferences, and energetic rhythms. By understanding your natal chart's planetary positions and signs, you can align your lifestyle choices with your natural cosmic inclinations for greater harmony and success."
  },
  {
    q: "Can I use moon phases for beauty routines?",
    a: "Absolutely! The lunar cycle significantly impacts our bodies and energy. New moons are ideal for starting new treatments, waxing moons for growth-focused routines, full moons for dramatic changes, and waning moons for detox and release. Many report better results when syncing beauty regimens with moon phases."
  },
  {
    q: "How often should I update my cosmic lifestyle approach?",
    a: "While your core natal chart remains constant, planetary transits create shifting energies. We recommend reviewing your lifestyle alignment monthly with the moon cycle, seasonally with zodiac transitions, and annually around your solar return (birthday) for comprehensive updates."
  },
  {
    q: "Do rising signs affect personal style more than sun signs?",
    a: "Your rising sign (ascendant) governs first impressions and outward appearance, making it crucial for style. However, Venus (aesthetics) and moon (comfort) signs also contribute. The ideal approach combines all three - rising sign for overall vibe, Venus for taste, and moon for what feels emotionally satisfying."
  },
  {
    q: "Can astrology help with gift-giving?",
    a: "Yes! Astrology provides deep insight into what different signs truly value. Fire signs appreciate experiences, earth signs value quality, air signs enjoy intellectual gifts, and water signs cherish emotional connections. For best results, consider the recipient's Venus sign for what they find beautiful and moon sign for what feels nurturing."
  },
  {
    q: "How accurate are astrological lifestyle recommendations?",
    a: "When based on a complete natal chart analysis rather than just sun signs, astrological lifestyle guidance shows remarkable accuracy. Many report 80-90% alignment with their natural preferences. However, we recommend using astrology as a helpful guide rather than absolute rule, combining cosmic wisdom with personal intuition."
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

export default function CosmicLifestylePage() {
  const [tab, setTab] = useState(0);
  const [selectedSign, setSelectedSign] = useState(zodiacData[0]);
  const [selectedGiftCategory, setSelectedGiftCategory] = useState(astroGifts[0]);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-purple-50 min-h-screen">
      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Cosmic Lifestyle Guide",
          "description": "Astrology-based lifestyle recommendations for fashion, beauty, home decor, and gifts tailored to your zodiac sign and planetary positions.",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free tier available with premium plans for personalized astrological insights"
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Live in Cosmic Harmony with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Astrological Lifestyle</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover personalized fashion, beauty, home decor, and gift recommendations aligned with your zodiac sign and planetary positions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Your Cosmic Profile
            </Link>
            <Link href="#demo" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-md border border-gray-200 transition transform hover:-translate-y-1">
              Explore Zodiac Styles
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-bold">Zodiac Fashion</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">💄</div>
            <h3 className="font-bold">Cosmic Beauty</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🏠</div>
            <h3 className="font-bold">Astro Decor</h3>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="font-bold">Zodiac Gifts</h3>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-6">Trusted by astrologers and lifestyle experts worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-xl font-bold text-gray-700">CosmicLiving</div>
            <div className="text-xl font-bold text-gray-700">AstroChic</div>
            <div className="text-xl font-bold text-gray-700">ZodiacStyle</div>
            <div className="text-xl font-bold text-gray-700">StarSign</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Cosmic Lifestyle Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Align your daily life with celestial wisdom for enhanced harmony and style
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Zodiac Fashion</h3>
              <p className="text-gray-700 mb-4">
                Discover clothing styles, colors, and accessories that resonate with your astrological energy.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personalized style recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Seasonal zodiac color palettes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Venus sign beauty enhancements</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lunar Beauty</h3>
              <p className="text-gray-700 mb-4">
                Align your beauty routines with moon phases for enhanced results and cosmic harmony.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Moon phase beauty calendars</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Element-based skincare routines</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Planetary perfume blending guides</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Astro Decor</h3>
              <p className="text-gray-700 mb-4">
                Create living spaces that harmonize with your natal chart for maximum comfort and productivity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Zodiac color schemes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>House placement by element</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Moon sign bedroom designs</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Zodiac Gifts</h3>
              <p className="text-gray-700 mb-4">
                Perfect present ideas tailored to each sign's unique personality and preferences.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personalized gift recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Venus sign present ideas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Birth chart compatible gifts</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cosmic Wellness</h3>
              <p className="text-gray-700 mb-4">
                Health and self-care routines aligned with your astrological makeup.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mars sign workout plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Moon sign emotional care</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Sun sign vitality boosters</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Astro Planning</h3>
              <p className="text-gray-700 mb-4">
                Schedule your life according to favorable planetary transits and aspects.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Best dates for haircuts by moon</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Venus transit style updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mercury retrograde tech care</span>
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
            <h2 className="text-4xl font-extrabold mb-4">Personalized Cosmic Guidance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean, well-documented JSON responses with tailored astrological lifestyle recommendations
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gray-900 px-6 py-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400">GET /api/v1/cosmic-profile?sign=leo&moon=cancer&venus=libra</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                {`{
  "success": true,
  "data": {
    "profile": {
      "sun_sign": "Leo",
      "moon_sign": "Cancer",
      "rising_sign": "Sagittarius",
      "venus_sign": "Libra",
      "mars_sign": "Aries"
    },
    "recommendations": {
      "fashion": {
        "colors": ["Gold", "Purple", "Royal Blue"],
        "styles": ["Dramatic silhouettes", "Luxury fabrics", "Statement accessories"],
        "brands": ["Gucci", "Versace", "Dolce & Gabbana"]
      },
      "beauty": {
        "skincare": "Hydrating masks, rose-infused products",
        "makeup": "Warm tones, glitter accents, bold lips",
        "hair": "Voluminous styles, golden highlights"
      },
      "home": {
        "colors": ["Rich purples", "Gold accents", "Warm neutrals"],
        "styles": ["Regal glamour", "Theatrical elements", "Comfortable luxury"],
        "decor": ["Statement lighting", "Gallery walls", "Velvet textiles"]
      },
      "wellness": {
        "exercise": "Dance cardio, team sports, performance-based activities",
        "self_care": "Pampering spa days, creative expression, social bonding",
        "nutrition": "Heart-healthy foods, orange-colored produce"
      }
    },
    "current_transits": {
      "venus": "Enhancing aesthetic sense - good for style updates",
      "mars": "Boosting energy for fitness goals",
      "jupiter": "Expanding social circle - ideal for hosting"
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
        <h2 className="text-4xl font-extrabold text-center mb-4">Cosmic Lifestyle Explorer</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover how astrology influences fashion, beauty, home decor, and gift-giving
        </p>
        
        <Tabs 
          value={tab} 
          onChange={(e, val) => setTab(val)} 
          centered 
          className="mb-8"
          TabIndicatorProps={{ style: { background: '#8b5cf6', height: '4px' } }}
          textColor="inherit"
        >
          <Tab label={<span className="font-semibold">Zodiac Style</span>} />
          <Tab label={<span className="font-semibold">Cosmic Beauty</span>} />
          <Tab label={<span className="font-semibold">Astro Gifts</span>} />
        </Tabs>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          {tab === 0 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Zodiac Fashion & Lifestyle</h3>
                <p className="text-gray-600">Select a zodiac sign to see personalized style and living recommendations</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">Choose Your Sign</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {zodiacData.map(sign => (
                      <button
                        key={sign.sign}
                        onClick={() => setSelectedSign(sign)}
                        className={`py-2 px-1 rounded-lg border transition-all flex flex-col items-center
                          ${selectedSign.sign === sign.sign ? 
                            "bg-purple-100 border-purple-400 shadow-md" : 
                            "bg-white border-gray-200 hover:shadow-lg hover:border-purple-300"}`}
                      >
                        <span className="text-lg">{getZodiacEmoji(sign.sign)}</span>
                        <span className="text-sm font-medium mt-1">{sign.sign}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4">{selectedSign.sign} Lifestyle Guide</h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold mb-2 text-purple-700">Key Traits</h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedSign.traits.map((trait, i) => (
                            <span key={i} className="bg-purple-50 text-purple-800 px-3 py-1 rounded-full text-sm">
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-purple-700">Fashion Style</h5>
                        <p className="text-gray-700">{selectedSign.fashion}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-purple-700">Wellness Approach</h5>
                        <p className="text-gray-700">{selectedSign.wellness}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
                      <h5 className="font-semibold text-purple-800 mb-2">Home Decor Tips</h5>
                      <p className="text-purple-700">{selectedSign.home}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-purple-700">Element: {selectedSign.element}</h5>
                      <p className="text-gray-700 mb-4">
                        {selectedSign.element === "Fire" ? "Fire signs thrive with bold statements, warm colors, and energetic spaces that reflect their passionate nature." :
                        selectedSign.element === "Earth" ? "Earth signs prefer stability, natural materials, and practical designs that ground their sensible nature." :
                        selectedSign.element === "Air" ? "Air signs need intellectual stimulation, light spaces, and social areas that feed their curious minds." :
                        "Water signs crave emotional comfort, flowing designs, and intuitive spaces that nurture their sensitive souls."}
                      </p>
                      <div className="mt-4">
                        <h6 className="font-semibold mb-2 text-purple-700">Best Colors</h6>
                        <div className="flex flex-wrap gap-2">
                          {getColorsForElement(selectedSign.element).map((color, i) => (
                            <span key={i} className="inline-block w-6 h-6 rounded-full" style={{backgroundColor: color}} title={color}></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Cosmic Beauty & Wellness</h3>
                <p className="text-gray-600">Align your beauty and self-care routines with celestial rhythms</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Moon Phase Beauty</h4>
                    <div className="space-y-4">
                      {Object.entries(cosmicBeauty.moonPhases).map(([phase, advice]) => (
                        <div key={phase} className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-semibold mb-2 text-purple-700 capitalize">{phase.replace(/([A-Z])/g, ' $1').trim()}</h5>
                          <p className="text-gray-700">{advice}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Planetary Beauty Influences</h4>
                    <div className="space-y-4">
                      {Object.entries(cosmicBeauty.planetaryInfluences).map(([planet, advice]) => (
                        <div key={planet} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center mb-2">
                            <span className="mr-2">{getPlanetEmoji(planet)}</span>
                            <h5 className="font-semibold text-purple-700 capitalize">{planet}</h5>
                          </div>
                          <p className="text-gray-700">{advice}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <h5 className="font-semibold mb-3 text-purple-700">Elemental Beauty Approaches</h5>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(cosmicBeauty.elements).map(([element, advice]) => (
                          <div key={element} className="bg-white p-3 rounded-lg border border-gray-200">
                            <h6 className="font-medium mb-1 text-purple-700 capitalize">{element}</h6>
                            <p className="text-sm text-gray-700">{advice}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Zodiac Gift Guide</h3>
                <p className="text-gray-600">Find the perfect presents based on astrological signs</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">Gift Categories</h4>
                  <div className="flex flex-wrap gap-3">
                    {astroGifts.map((category, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedGiftCategory(category)}
                        className={`px-4 py-2 rounded-lg border transition-all
                          ${selectedGiftCategory.category === category.category ? 
                            "bg-purple-100 border-purple-400 shadow-md" : 
                            "bg-white border-gray-200 hover:shadow-lg hover:border-purple-300"}`}
                      >
                        {category.category}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zodiac Sign</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gift Idea</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {zodiacData.map((sign) => (
                        <tr key={sign.sign}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center text-xl">
                                {getZodiacEmoji(sign.sign)}
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">{sign.sign}</div>
                                <div className="text-sm text-gray-500">{sign.dates}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-gray-900">{selectedGiftCategory[sign.sign.toLowerCase()]}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-2 text-purple-700">Gift-Giving Tips</h4>
                  <ul className="list-disc pl-5 space-y-1 text-purple-700">
                    <li>For romantic gifts, consider the recipient's Venus sign</li>
                    <li>For practical gifts, look to their Mercury and Saturn signs</li>
                    <li>For luxury gifts, consider their Jupiter and Venus placements</li>
                    <li>Always check current planetary transits for timing</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Cosmic Living Tips Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Cosmic Living Tips</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Practical ways to align your daily life with celestial wisdom
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cosmicLivingTips.map((section, i) => (
              <div key={i} className="bg-purple-800 bg-opacity-30 p-6 rounded-xl border border-purple-700">
                <h3 className="text-2xl font-bold mb-4">{section.area}</h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, j) => (
                    <li key={j} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-purple-100">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/signup" className="inline-block bg-white hover:bg-gray-100 text-purple-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Get Personalized Tips
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How cosmic lifestyle guidance has transformed everyday living
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">AS</div>
                <div>
                  <h4 className="font-bold">Aanya Sharma</h4>
                  <p className="text-gray-600 text-sm">Fashion Blogger</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "Following my Venus sign's style recommendations completely transformed my wardrobe. I get compliments daily and finally feel authentically expressed through fashion."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">RM</div>
                <div>
                  <h4 className="font-bold">Rohan Mehta</h4>
                  <p className="text-gray-600 text-sm">Interior Designer</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700">
                "Designing my home according to my natal chart elements created the most harmonious space I've ever lived in. The energy just flows perfectly now."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">PK</div>
                <div>
                  <h4 className="font-bold">Priya Kapoor</h4>
                  <p className="text-gray-600 text-sm">Wellness Coach</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★☆</div>
              <p className="text-gray-700">
                "Syncing my beauty routines with moon phases has given me better results than any expensive product ever did. My skin has never looked better!"
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
            Everything you need to know about cosmic lifestyle guidance
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
            Contact our cosmic guides →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Transform Your Life with Cosmic Wisdom?</h2>
          <p className="text-xl text-purple-200 mb-8">
            Join thousands aligning their lifestyle with celestial energy for enhanced harmony and style
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="inline-block bg-white hover:bg-gray-100 text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Start Your Cosmic Journey
            </Link>
            <Link to="#demo" className="inline-block bg-transparent hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white transition transform hover:-translate-y-1">
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper functions
function getZodiacEmoji(sign) {
  const emojis = {
    "Aries": "♈",
    "Taurus": "♉",
    "Gemini": "♊",
    "Cancer": "♋",
    "Leo": "♌",
    "Virgo": "♍",
    "Libra": "♎",
    "Scorpio": "♏",
    "Sagittarius": "♐",
    "Capricorn": "♑",
    "Aquarius": "♒",
    "Pisces": "♓"
  };
  return emojis[sign] || "✨";
}

function getPlanetEmoji(planet) {
  const emojis = {
    "venus": "♀",
    "mars": "♂",
    "jupiter": "♃",
    "saturn": "♄"
  };
  return emojis[planet.toLowerCase()] || "🪐";
}

function getColorsForElement(element) {
  const colors = {
    "Fire": ["#FF4500", "#FF8C00", "#FFD700", "#DC143C"],
    "Earth": ["#8B4513", "#228B22", "#A0522D", "#556B2F"],
    "Air": ["#87CEEB", "#4682B4", "#B0E0E6", "#1E90FF"],
    "Water": ["#00008B", "#4169E1", "#00BFFF", "#9370DB"]
  };
  return colors[element] || ["#000000"];
}