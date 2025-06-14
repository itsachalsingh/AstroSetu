import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AstroChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    birthDate: "",
    birthTime: "",
    birthPlace: ""
  });
  const [step, setStep] = useState(1); // 1 = user info, 2 = chat

  const astroData = {
    planets: {
      sun: "Represents your core identity, vitality, and life purpose. In your chart, the Sun is strong indicating leadership qualities.",
      moon: "Governs emotions, instincts, and subconscious patterns. Your Moon placement suggests strong intuition.",
      mercury: "Rules communication and intellect. Currently in retrograde, suggesting careful review of decisions.",
      venus: "Love, beauty, and values. Well-placed for harmonious relationships this month.",
      mars: "Energy, drive, and assertion. Your Mars position indicates a period of increased motivation.",
      jupiter: "Expansion and good fortune. Jupiter's transit brings opportunities for growth.",
      saturn: "Discipline and life lessons. Saturn's influence suggests karmic rewards for hard work.",
      rahu: "North Node - your soul's growth direction. Currently activating spiritual development.",
      ketu: "South Node - past life influences. Indicates releasing old patterns now."
    },
    houses: {
      1: "Self, personality, and appearance. New beginnings are favored.",
      2: "Wealth, speech, and family. Financial gains are possible.",
      3: "Communication, siblings, and courage. Good for creative projects.",
      4: "Home, mother, and emotions. Focus on domestic harmony.",
      5: "Creativity, children, and romance. A fortunate period.",
      6: "Health, service, and obstacles. Pay attention to wellness.",
      7: "Partnerships and marriage. Relationship matters highlighted.",
      8: "Transformation and occult. Deep psychological work beneficial.",
      9: "Fortune, spirituality, and travel. Spiritual growth indicated.",
      10: "Career and public image. Professional success likely.",
      11: "Gains, friends, and aspirations. Wishes may be fulfilled.",
      12: "Losses, liberation, and foreign. Time for introspection."
    },
    nakshatras: [
      "Ashwini: The star of transport. Quick healing and new initiatives favored.",
      "Bharani: The star of restraint. Transformation through challenges.",
      "Krittika: The star of fire. Purification and clarity emerging.",
      "Rohini: The star of growth. Creativity and material comforts.",
      "Mrigashira: The star of searching. Exploration and research beneficial.",
      "Ardra: The star of sorrow. Emotional cleansing occurring.",
      "Punarvasu: The star of renewal. Second chances and recovery.",
      "Pushya: The star of nourishment. Spiritual and material abundance.",
      "Ashlesha: The star of clinging. Karmic relationships highlighted.",
      "Magha: The star of power. Ancestral blessings available.",
      "Purva Phalguni: The star of creation. Romantic and creative energy.",
      "Uttara Phalguni: The star of patronage. Community support coming.",
      "Hasta: The star of skill. Mastery and precision favored.",
      "Chitra: The star of architecture. Beautiful creations manifesting.",
      "Swati: The star of independence. Self-reliance and balance.",
      "Vishakha: The star of purpose. Determination leading to success.",
      "Anuradha: The star of devotion. Spiritual friendships important.",
      "Jyeshtha: The star of seniority. Wisdom through experience.",
      "Mula: The star of roots. Deep healing and transformation.",
      "Purva Ashadha: The star of invincibility. Overcoming obstacles.",
      "Uttara Ashadha: The star of victory. Lasting accomplishments.",
      "Shravana: The star of learning. Knowledge and listening skills.",
      "Dhanishta: The star of wealth. Musical and financial gains.",
      "Shatabhisha: The star of healing. Solitude for rejuvenation.",
      "Purva Bhadrapada: The star of transformation. Spiritual fire awakening.",
      "Uttara Bhadrapada: The star of the warrior. Courage and discipline.",
      "Revati: The star of nourishment. Completion and protection."
    ],
    predictions: {
      love: "Venus in your 7th house indicates a harmonious period for relationships. Singles may meet someone special through social gatherings. Couples should plan a romantic getaway to strengthen bonds.",
      career: "Saturn's transit through your 10th house suggests career advancement through disciplined effort. A promotion or new responsibility is likely around the full moon. Networking with senior colleagues will be beneficial.",
      health: "Mars in the 6th house warns against overexertion. Focus on balancing work and rest. Yoga and pranayama will help maintain vitality. Pay attention to digestion during this period.",
      finance: "Jupiter's aspect on your 2nd house indicates financial gains, possibly through investments or unexpected sources. However, avoid speculative risks during Mercury retrograde.",
      education: "Mercury conjunct Moon suggests excellent concentration for students. Competitive exam aspirants will perform well. This is an auspicious time to start new courses or research projects.",
      family: "The Sun in your 4th house highlights family matters. Property deals favored. Resolving ancestral issues will bring peace. Spending quality time with parents is recommended.",
      spiritual: "Rahu in the 9th house awakens spiritual curiosity. Pilgrimages or studying ancient texts will be fulfilling. Meditation practice will yield profound insights during dawn hours."
    },
    remedies: {
      general: "Chant the Gayatri Mantra 108 times daily. Donate yellow items on Thursdays. Keep your northeast corner clean and clutter-free.",
      sun: "Offer water to the Sun at sunrise. Wear a copper bracelet. Donate wheat or jaggery on Sundays.",
      moon: "Meditate on Mondays. Wear pearl or moonstone. Donate milk or white items.",
      mars: "Recite Hanuman Chalisa. Donate red lentils on Tuesdays. Avoid unnecessary conflicts.",
      mercury: "Feed green vegetables to cows. Donate educational materials. Wear emerald if suitable.",
      jupiter: "Light a ghee lamp before a deity. Donate yellow sweets on Thursdays. Chant Brihaspati mantra.",
      venus: "Appreciate art and beauty. Donate white flowers on Fridays. Maintain harmony in relationships.",
      saturn: "Light sesame oil lamps on Saturdays. Help the elderly. Chant Shani mantra.",
      rahu: "Donate blue items. Chant Rahu mantra. Avoid intoxicants and processed foods.",
      ketu: "Meditate daily. Donate to spiritual causes. Chant Ketu mantra for clarity."
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Generate AI response after delay
    setTimeout(() => {
      const aiResponse = generateResponse(input);
      setMessages(prev => [...prev, { text: aiResponse, sender: "ai" }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (query) => {
    query = query.toLowerCase();
    
    // Check for planet queries
    for (const planet in astroData.planets) {
      if (query.includes(planet)) {
        return `Regarding ${planet.toUpperCase()}: ${astroData.planets[planet]} ${getRandomRemedy(planet)}`;
      }
    }

    // Check for house queries
    for (let i = 1; i <= 12; i++) {
      if (query.includes(i + "th house") || query.includes(`house ${i}`)) {
        return `Your ${i}th house: ${astroData.houses[i]}`;
      }
    }

    // Check for nakshatra mentions
    for (const nakshatra of astroData.nakshatras) {
      const nakshatraName = nakshatra.split(":")[0].toLowerCase();
      if (query.includes(nakshatraName)) {
        return `About ${nakshatraName.toUpperCase()} nakshatra: ${nakshatra}`;
      }
    }

    // Check for category predictions
    for (const category in astroData.predictions) {
      if (query.includes(category)) {
        return `Your ${category} prediction: ${astroData.predictions[category]}`;
      }
    }

    // Default responses
    const defaultResponses = [
      "Based on your planetary positions, this is an auspicious time for new beginnings.",
      "Your chart indicates strong spiritual growth potential this month.",
      "The current planetary alignment suggests caution in financial matters.",
      "I see positive developments in your career path based on your birth chart.",
      "Your emotional wellbeing requires attention according to lunar transits.",
      "The stars indicate this is a favorable period for learning new skills.",
      "Relationship harmony is highlighted in your current planetary configuration."
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const getRandomRemedy = (planet = null) => {
    if (planet && astroData.remedies[planet]) {
      return `\n\nRemedy: ${astroData.remedies[planet]}`;
    }
    return `\n\nGeneral remedy: ${astroData.remedies.general}`;
  };

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name && userInfo.birthDate) {
      setStep(2);
      setMessages([
        { 
          text: `Welcome ${userInfo.name}! I'm your Vedic Astrology AI Guide. Based on your birth details (${userInfo.birthDate}, ${userInfo.birthTime}, ${userInfo.birthPlace}), I can provide personalized astrological insights. What would you like to know about?`, 
          sender: "ai" 
        }
      ]);
    }
  };

  useEffect(() => {
    if (step === 2) {
      // Generate initial horoscope reading
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: `Here's your initial reading:\n\nSun in Leo - Strong leadership qualities\nMoon in Cancer - Emotional and intuitive\nRising sign in Libra - Charming and diplomatic\n\nCurrent planetary transits indicate a period of growth and opportunity.`, 
          sender: "ai" 
        }]);
      }, 2000);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Vedic Astrology AI Chatbot",
          "description": "AI-powered Vedic astrology chatbot providing personalized predictions based on planetary positions and birth charts.",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>

      {/* Navigation */}
      <nav className="bg-indigo-800 bg-opacity-50 backdrop-blur-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">AstroSetu</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-amber-300 transition">Home</Link>
            <Link to="/festivals" className="hover:text-amber-300 transition">Festivals</Link>
            <Link to="/horoscope" className="hover:text-amber-300 transition">Horoscope</Link>
            <Link to="/remedies" className="hover:text-amber-300 transition">Remedies</Link>
          </div>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-lg hover:shadow-lg transition">
            Get Premium
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Vedic Astrology AI Guide
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Get personalized astrological predictions based on your birth chart and current planetary transits
          </p>
        </header>

        {step === 1 ? (
          <div className="bg-indigo-800 bg-opacity-30 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-xl border border-indigo-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Birth Details</h2>
            <form onSubmit={handleUserInfoSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  className="w-full bg-indigo-900 bg-opacity-50 border border-indigo-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium mb-2">Date of Birth</label>
                <input
                  type="date"
                  id="birthDate"
                  value={userInfo.birthDate}
                  onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
                  className="w-full bg-indigo-900 bg-opacity-50 border border-indigo-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="birthTime" className="block text-sm font-medium mb-2">Time of Birth</label>
                  <input
                    type="time"
                    id="birthTime"
                    value={userInfo.birthTime}
                    onChange={(e) => setUserInfo({...userInfo, birthTime: e.target.value})}
                    className="w-full bg-indigo-900 bg-opacity-50 border border-indigo-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="birthPlace" className="block text-sm font-medium mb-2">Place of Birth</label>
                  <input
                    type="text"
                    id="birthPlace"
                    value={userInfo.birthPlace}
                    onChange={(e) => setUserInfo({...userInfo, birthPlace: e.target.value})}
                    className="w-full bg-indigo-900 bg-opacity-50 border border-indigo-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="City, Country"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Generate My Astrological Profile
              </button>
              
              <p className="text-sm text-purple-300 text-center">
                Your data is secure and will only be used for astrological calculations.
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-indigo-800 bg-opacity-30 backdrop-blur-lg rounded-xl shadow-xl border border-indigo-700 overflow-hidden">
            {/* Chat header */}
            <div className="bg-indigo-900 bg-opacity-50 p-4 border-b border-indigo-700 flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-xl">
                {userInfo.name.charAt(0)}
              </div>
              <div className="ml-3">
                <h3 className="font-bold">{userInfo.name}'s Astro Chat</h3>
                <p className="text-xs text-purple-300">Based on birth chart: {userInfo.birthDate}</p>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${msg.sender === "user" 
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600" 
                      : "bg-indigo-900 bg-opacity-50 border border-indigo-700"}`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    {msg.sender === "ai" && (
                      <p className="text-xs text-purple-300 mt-1">Vedic Astrology AI</p>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-indigo-900 bg-opacity-50 border border-indigo-700 rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{animationDelay: "0.2s"}}></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{animationDelay: "0.4s"}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-indigo-700 bg-indigo-900 bg-opacity-30">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-indigo-800 border border-indigo-700 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Ask about love, career, health..."
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-4 rounded-r-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button 
                  type="button" 
                  onClick={() => setInput("Love prediction")}
                  className="text-xs bg-indigo-800 hover:bg-indigo-700 px-2 py-1 rounded"
                >
                  Love
                </button>
                <button 
                  type="button" 
                  onClick={() => setInput("Career advice")}
                  className="text-xs bg-indigo-800 hover:bg-indigo-700 px-2 py-1 rounded"
                >
                  Career
                </button>
                <button 
                  type="button" 
                  onClick={() => setInput("Health forecast")}
                  className="text-xs bg-indigo-800 hover:bg-indigo-700 px-2 py-1 rounded"
                >
                  Health
                </button>
                <button 
                  type="button" 
                  onClick={() => setInput("Financial outlook")}
                  className="text-xs bg-indigo-800 hover:bg-indigo-700 px-2 py-1 rounded"
                >
                  Finance
                </button>
                <button 
                  type="button" 
                  onClick={() => setInput("Remedies for current problems")}
                  className="text-xs bg-indigo-800 hover:bg-indigo-700 px-2 py-1 rounded"
                >
                  Remedies
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Astrology Features */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-indigo-800 bg-opacity-30 p-6 rounded-xl border border-indigo-700">
            <div className="text-amber-400 text-3xl mb-4">🌌</div>
            <h3 className="text-xl font-bold mb-2">Birth Chart Analysis</h3>
            <p className="text-purple-200">
              Detailed analysis of your planetary positions based on exact birth time and location.
            </p>
          </div>
          <div className="bg-indigo-800 bg-opacity-30 p-6 rounded-xl border border-indigo-700">
            <div className="text-amber-400 text-3xl mb-4">🪐</div>
            <h3 className="text-xl font-bold mb-2">Planetary Transits</h3>
            <p className="text-purple-200">
              Real-time impact of current planetary movements on your life areas.
            </p>
          </div>
          <div className="bg-indigo-800 bg-opacity-30 p-6 rounded-xl border border-indigo-700">
            <div className="text-amber-400 text-3xl mb-4">🧿</div>
            <h3 className="text-xl font-bold mb-2">Vedic Remedies</h3>
            <p className="text-purple-200">
              Personalized mantras, gemstones, and rituals to balance planetary influences.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16 bg-indigo-800 bg-opacity-20 rounded-xl p-8 border border-indigo-700">
          <h2 className="text-2xl font-bold mb-6 text-center">How Our Astrology AI Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
              <h3 className="text-lg font-semibold mb-2">Enter Birth Details</h3>
              <p className="text-purple-200">
                Provide your exact birth date, time and location for accurate chart calculation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-purple-200">
                Our system calculates planetary positions using Vedic astrology algorithms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
              <h3 className="text-lg font-semibold mb-2">Get Predictions</h3>
              <p className="text-purple-200">
                Receive personalized insights about all life aspects based on your chart.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-800 bg-opacity-30 p-6 rounded-xl border border-indigo-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center font-bold mr-4">AS</div>
                <div>
                  <h4 className="font-bold">Aarav Sharma</h4>
                  <p className="text-sm text-purple-300">Software Engineer</p>
                </div>
              </div>
              <p className="text-purple-100">
                "The career prediction was incredibly accurate. It guided me to make a job change at the right planetary time which led to a 50% salary increase!"
              </p>
              <div className="mt-3 text-amber-400">★★★★★</div>
            </div>
            <div className="bg-indigo-800 bg-opacity-30 p-6 rounded-xl border border-indigo-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center font-bold mr-4">PM</div>
                <div>
                  <h4 className="font-bold">Priya Mehta</h4>
                  <p className="text-sm text-purple-300">Homemaker</p>
                </div>
              </div>
              <p className="text-purple-100">
                "The relationship advice helped save my marriage. The AI pinpointed exactly when our conflicts would ease and suggested perfect remedies."
              </p>
              <div className="mt-3 text-amber-400">★★★★★</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-900 bg-opacity-50 mt-20 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">AstroSetu</h3>
            <p className="text-purple-300">
              Bringing ancient Vedic wisdom through modern AI technology for accurate astrological guidance.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-purple-300">
              <li><Link to="/horoscope" className="hover:text-amber-300 transition">Daily Horoscope</Link></li>
              <li><Link to="/chatbot" className="hover:text-amber-300 transition">AI Astrologer</Link></li>
              <li><Link to="/festivals" className="hover:text-amber-300 transition">Festival Calendar</Link></li>
              <li><Link to="/remedies" className="hover:text-amber-300 transition">Planetary Remedies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-purple-300">
              <li><Link to="/about" className="hover:text-amber-300 transition">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-amber-300 transition">Blog</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-300 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-amber-300 transition">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-purple-300">
              <li>support@astrosetu.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
              <li className="flex space-x-4 mt-4">
                <Link to="#"><span className="sr-only">Facebook</span>📘</Link>
                <Link to="#"><span className="sr-only">Twitter</span>🐦</Link>
                <Link to="#"><span className="sr-only">Instagram</span>📷</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-indigo-800 text-center text-purple-400">
          <p>© {new Date().getFullYear()} AstroSetu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AstroChatbot;