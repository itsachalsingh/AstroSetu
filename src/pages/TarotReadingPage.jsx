import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function TarotReadingPage() {
  const [activeTab, setActiveTab] = useState('yesno');
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const tarotEndpoints = [
    {
      id: 'yesno',
      title: 'Yes/No Tarot Reading',
      description: 'Get clear yes/no answers to your questions with insightful explanations',
      endpoint: '/tarot/yes-no',
      features: [
        'Simple binary answers with explanations',
        'Multiple deck options',
        'Detailed card interpretations'
      ]
    },
    {
      id: 'daily',
      title: 'Daily Tarot Reading',
      description: 'Personalized daily guidance with card spreads',
      endpoint: '/tarot/daily',
      features: [
        '3-card daily spread',
        'Customizable timeframes',
        'Thematic interpretations'
      ]
    },
    {
      id: 'love',
      title: 'In-Depth Love Reading',
      description: 'Comprehensive relationship insights',
      endpoint: '/tarot/love-reading',
      features: [
        'Celtic Cross spread for relationships',
        'Compatibility analysis',
        'Future potential insights'
      ]
    },
    {
      id: 'career',
      title: 'Career Reading',
      description: 'Professional guidance and path illumination',
      endpoint: '/tarot/career',
      features: [
        'Career path analysis',
        'Obstacle identification',
        'Opportunity forecasting'
      ]
    },
    {
      id: 'pastlife',
      title: 'Past Lives Reading',
      description: 'Explore karmic connections and past influences',
      endpoint: '/tarot/past-lives',
      features: [
        'Karmic pattern identification',
        'Soul connection insights',
        'Life purpose clues'
      ]
    },
    {
      id: 'future',
      title: 'Future Prediction',
      description: '3-card past/present/future spread',
      endpoint: '/tarot/future',
      features: [
        'Temporal analysis',
        'Event forecasting',
        'Probability indicators'
      ]
    }
  ];

  const faqs = [
    {
      q: "How accurate are your tarot readings?",
      a: "Our readings are generated using traditional tarot interpretations combined with modern psychological insights. While tarot is interpretive by nature, users consistently report high accuracy in our readings, with an 87% satisfaction rate in user surveys."
    },
    {
      q: "Can I customize the tarot spreads?",
      a: "Yes! Our API allows for custom spread configurations, including the number of cards, spread patterns, and focus areas. You can also choose from our library of 20+ pre-configured spreads for common use cases."
    },
    {
      q: "What tarot decks are available?",
      a: "We support 15+ decks including Rider-Waite, Thoth, Marseille, Angel Tarot, and Shadowscapes. You can specify your preferred deck in the API request or let the system choose the most appropriate deck for the reading type."
    },
    {
      q: "How often can I get new readings?",
      a: "For daily readings, we refresh the card draws every 24 hours. Other readings can be generated on demand. Our system remembers previous readings if you want to track patterns over time."
    },
    {
      q: "Is there a limit to API requests?",
      a: "Our free tier allows 100 readings per month. Paid plans start at 10,000 readings/month. We can accommodate enterprise needs for high-volume applications - contact our sales team for custom solutions."
    },
    {
      q: "Can I white-label these readings?",
      a: "Absolutely. Our Business and Enterprise plans include white-labeling options where you can brand the readings as your own, customize the styling, and even modify the interpretation language to match your platform's voice."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tarot API | Professional Tarot Card Reading API for Developers</title>
        <meta
          name="description"
          content="Integrate accurate tarot card readings into your apps with our powerful API. Yes/No, Daily, Love, Career and specialized tarot readings via JSON API."
        />
        <meta
          name="keywords"
          content="tarot api, tarot card reading, yes no tarot, love tarot reading, career tarot, past life reading, tarot prediction, tarot integration"
        />
        <meta property="og:title" content="Professional Tarot Card Reading API for Developers" />
        <meta property="og:description" content="Integrate accurate tarot card readings into your apps with our powerful API." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://astroapihub.com/tarot-api" />
        <link rel="canonical" href="https://astroapihub.com/tarot-api" />
      </Helmet>

      <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-indigo-50 min-h-screen">
       
        {/* Hero Section */}
              <section className="max-w-7xl mx-auto px-6 py-24 text-center bg-white">
                <div className="max-w-4xl mx-auto bg-white">
                  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Tarot API</span> for Developers
                  </h1>
                  <p className="text-xl text-gray-700 mb-8">
                    Integrate accurate tarot card readings into your apps with our REST API. Offer yes/no, daily guidance, love readings, career predictions and more.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/pricing" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
                      Get Started - Free Trial
                    </Link>
                    <Link href="#demo" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-md border border-gray-200 transition transform hover:-translate-y-1">
                      Live Demo
                    </Link>
                  </div>
                </div>
               
              </section>

        {/* Trust Indicators */}
        <div className="bg-customBg  bg-opacity-50 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-white-600 mb-6">Trusted by developers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
              <div className="text-xl font-bold">SpiritualApp</div>
              <div className="text-xl font-bold">TarotMaster</div>
              <div className="text-xl font-bold">CosmicGuide</div>
              <div className="text-xl font-bold">DestinyCards</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Powerful Tarot Reading Features</h2>
            <p className="text-xl text-black-200 max-w-3xl mx-auto">
              Everything you need to integrate tarot readings into your applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-customBg  p-8 rounded-xl border border-customBg  border-opacity-30">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 text-black text-2xl">
                🔮
              </div>
              <h3 className="text-2xl font-bold mb-4">Multiple Reading Types</h3>
              <p className="text-black-100 mb-4">
                From simple yes/no answers to complex Celtic Cross spreads, offer diverse reading experiences.
              </p>
              <ul className="space-y-2 text-black">
                {['Yes/No', 'Daily', 'Love', 'Career', 'Past Life', 'Future'].map((type) => (
                  <li key={type} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {type} Readings
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-customBg p-8 rounded-xl border border-customBg border-opacity-30">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 text-black text-2xl">
                🎴
              </div>
              <h3 className="text-2xl font-bold mb-4">Multiple Tarot Decks</h3>
              <p className="text-black mb-4">
                Choose from various decks to match your app's aesthetic and audience preferences.
              </p>
              <ul className="space-y-2 text-black">
                {['Rider-Waite', 'Thoth', 'Marseille', 'Angel', 'Shadowscapes'].map((deck) => (
                  <li key={deck} className="flex items-start">
                    <svg className="w-5 h-5 text-black mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {deck} Deck
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-customBg p-8 rounded-xl border border-customBg border-opacity-30">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 text-black text-2xl">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-4">High Performance</h3>
              <p className="text-black mb-4">
                Fast, reliable API built for scale with enterprise-grade infrastructure.
              </p>
              <ul className="space-y-2 text-black">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  99.99% Uptime SLA
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  200ms Average Response
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Global CDN
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Demo Section */}
        <section id="demo" className="py-20 px-6 bg-customBg ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4">Interactive API Demo</h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Try our tarot APIs right in your browser
              </p>
            </div>
            
            <div className="bg-indigo-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Tabs */}
              <div className="flex border-b border-indigo-700">
                {tarotEndpoints.slice(0, 4).map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => setActiveTab(endpoint.id)}
                    className={`px-6 py-4 font-medium text-sm focus:outline-none ${activeTab === endpoint.id ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-indigo-800'}`}
                  >
                    {endpoint.title}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {tarotEndpoints.find(e => e.id === activeTab)?.title}
                    </h3>
                    <p className="text-purple-100 mb-6">
                      {tarotEndpoints.find(e => e.id === activeTab)?.description}
                    </p>
                    <div className="bg-indigo-950 p-4 rounded-lg mb-6">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="ml-2">GET {tarotEndpoints.find(e => e.id === activeTab)?.endpoint}</span>
                      </div>
                      <pre className="text-green-300 text-sm overflow-x-auto">
                        {`{
  "reading": "${tarotEndpoints.find(e => e.id === activeTab)?.title}",
  "cards": [
    {
      "name": "${activeTab === 'yesno' ? 'The Magician' : 
                activeTab === 'daily' ? 'Three of Cups' : 
                activeTab === 'love' ? 'The Lovers' : 
                'The Chariot'}",
      "suit": "${activeTab === 'yesno' ? 'Major Arcana' : 
                activeTab === 'daily' ? 'Cups' : 
                activeTab === 'love' ? 'Major Arcana' : 
                'Major Arcana'}",
      "orientation": "upright",
      "meaning": "${activeTab === 'yesno' ? 'The answer is likely yes, showing manifestation of desires' : 
                  activeTab === 'daily' ? 'Celebration and friendship will mark your day' : 
                  activeTab === 'love' ? 'Deep connection and important choices in relationships' : 
                  'Willpower and determination will lead to success'}",
      "image_url": "https://astroapihub.com/cards/${activeTab === 'yesno' ? 'magician' : 
                  activeTab === 'daily' ? 'three-cups' : 
                  activeTab === 'love' ? 'lovers' : 
                  'chariot'}.jpg"
    }${activeTab !== 'yesno' ? `,
    {
      "name": "${activeTab === 'daily' ? 'Page of Pentacles' : 
                activeTab === 'love' ? 'Two of Cups' : 
                'Eight of Wands'}",
      "suit": "${activeTab === 'daily' ? 'Pentacles' : 
                activeTab === 'love' ? 'Cups' : 
                'Wands'}",
      "orientation": "upright",
      "meaning": "${activeTab === 'daily' ? 'New opportunities for learning or financial gain' : 
                  activeTab === 'love' ? 'Mutual attraction and emotional connection' : 
                  'Rapid developments and swift communication'}",
      "image_url": "https://astroapihub.com/cards/${activeTab === 'daily' ? 'page-pentacles' : 
                  activeTab === 'love' ? 'two-cups' : 
                  'eight-wands'}.jpg"
    }` : ''}${activeTab === 'love' ? `,
    {
      "name": "Ten of Pentacles",
      "suit": "Pentacles",
      "orientation": "upright",
      "meaning": "Long-term stability and family happiness",
      "image_url": "https://astroapihub.com/cards/ten-pentacles.jpg"
    }` : ''}
  ],
  "interpretation": "${activeTab === 'yesno' ? 'The appearance of The Magician suggests you have all the tools you need to make this happen. The answer leans strongly toward yes, but requires your active participation.' : 
                    activeTab === 'daily' ? 'Today brings joyful social interactions and possibly good news about finances or studies. Be open to new learning opportunities.' : 
                    activeTab === 'love' ? 'This reading indicates a significant relationship at a crossroads. The Two of Cups shows mutual feelings, while the Ten of Pentacles suggests long-term potential if nurtured.' : 
                    'Your career path shows strong momentum. The Chariot indicates you\'re in control of your direction, while the Eight of Wands suggests rapid developments coming your way.'}",
  "timestamp": "${new Date().toISOString()}"
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <div className="bg-indigo-950 p-6 rounded-lg h-full">
                      <h4 className="text-lg font-semibold mb-4">Try It Yourself</h4>
                      <div className="space-y-4">
                        {activeTab === 'yesno' && (
                          <>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Your Question</label>
                              <input 
                                type="text" 
                                placeholder="Should I pursue this opportunity?" 
                                className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              />
                            </div>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Deck Preference</label>
                              <select className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                <option>Rider-Waite</option>
                                <option>Thoth</option>
                                <option>Marseille</option>
                              </select>
                            </div>
                          </>
                        )}
                        {activeTab === 'daily' && (
                          <>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Date</label>
                              <input 
                                type="date" 
                                className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              />
                            </div>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Spread Type</label>
                              <select className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                <option>3-Card Daily Guidance</option>
                                <option>Celtic Cross</option>
                                <option>Horseshoe</option>
                              </select>
                            </div>
                          </>
                        )}
                        {activeTab === 'love' && (
                          <>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Relationship Focus</label>
                              <select className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                <option>Current Relationship</option>
                                <option>New Romance</option>
                                <option>Past Relationship</option>
                                <option>Future Potential</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Depth</label>
                              <select className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                <option>Quick Reading (3 cards)</option>
                                <option>In-Depth (10 cards)</option>
                              </select>
                            </div>
                          </>
                        )}
                        {activeTab === 'career' && (
                          <>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Career Area</label>
                              <select className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                <option>Current Job</option>
                                <option>Career Change</option>
                                <option>Promotion Potential</option>
                                <option>Business Venture</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="block text-sm text-purple-300 mb-1">Timeframe</label>
                              <select className="w-full bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                <option>Next 3 Months</option>
                                <option>Next 6 Months</option>
                                <option>Next Year</option>
                              </select>
                            </div>
                          </>
                        )}
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
                          Get Reading
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Endpoints Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Tarot API Endpoints</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Comprehensive endpoints for all your tarot reading needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tarotEndpoints.map((endpoint) => (
              <div key={endpoint.id} className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl border border-purple-500 border-opacity-30">
                <div className="flex items-start">
                  <div className="bg-purple-500 text-white p-2 rounded-lg mr-4">
                    {endpoint.id === 'yesno' && '🔮'}
                    {endpoint.id === 'daily' && '📅'}
                    {endpoint.id === 'love' && '💖'}
                    {endpoint.id === 'career' && '💼'}
                    {endpoint.id === 'pastlife' && '🕰️'}
                    {endpoint.id === 'future' && '🔮'}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{endpoint.title}</h3>
                    <p className="text-purple-200 mb-3">{endpoint.description}</p>
                    <div className="bg-indigo-900 p-3 rounded-lg mb-3">
                      <code className="text-sm text-purple-300">GET {endpoint.endpoint}</code>
                    </div>
                    <ul className="text-sm text-purple-200 space-y-1">
                      {endpoint.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6 bg-customBg  bg-opacity-30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4">Tarot API Use Cases</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Innovative ways to integrate tarot readings into your platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Dating Apps",
                  description: "Offer compatibility readings and love predictions to enhance matches",
                  icon: "💑"
                },
                {
                  title: "Wellness Apps",
                  description: "Provide daily guidance for mental and emotional wellbeing",
                  icon: "🧘"
                },
                {
                  title: "Social Media",
                  description: "Generate shareable daily tarot card pulls for your followers",
                  icon: "📱"
                },
                {
                  title: "E-commerce",
                  description: "Personalized product recommendations based on tarot guidance",
                  icon: "🛒"
                },
                {
                  title: "Gaming",
                  description: "Add mystical elements and fortune-telling features to your games",
                  icon: "🎮"
                },
                {
                  title: "Chatbots",
                  description: "Enable tarot reading capabilities in your conversational AI",
                  icon: "🤖"
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl border border-purple-500 border-opacity-30 hover:bg-indigo-700 transition">
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-purple-200">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">What Developers Say</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Trusted by developers building innovative spiritual apps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                role: "CTO, MysticApp",
                quote: "The tarot API reduced our development time by months. The accuracy of readings keeps our users coming back daily.",
                rating: 5
              },
              {
                name: "Raj P.",
                role: "Developer, SoulGuide",
                quote: "Excellent documentation and responsive support. We implemented the love readings in just two days.",
                rating: 5
              },
              {
                name: "Miguel T.",
                role: "Founder, TarotSocial",
                quote: "Our users share thousands of readings daily. The API handles our scale perfectly with 100% uptime.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-indigo-800 bg-opacity-50 p-8 rounded-xl border border-purple-500 border-opacity-30">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-purple-100 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6  mx-auto bg-customBg ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Everything you need to know about our Tarot API
            </p>
          </div>
          <div className="space-y-4 max-w-4xl  mx-auto ">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-customBg  rounded-xl overflow-hidden"
                onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
              >
                <button className="w-full px-6 py-5 text-left flex justify-between items-center bg-customBg">
                  <h3 className="text-lg font-semibold">{faq.q}</h3>
                  <svg 
                    className={`w-5 h-5 text-black transition-transform ${faqOpenIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {faqOpenIndex === index && (
                  <div className="px-6 pb-5 pt-0 bg-customBg ">
                    <p className="text-black">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl  mx-auto text-center">
            <p className="text-black mb-4">Still have questions?</p>
            <a href="#" className="text-black font-semibold hover:text-purple-300">
              Contact our support team →
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Add Tarot to Your App?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of developers using our API to deliver magical experiences to their users.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#pricing" 
                className="inline-block bg-white hover:bg-gray-100 text-purple-800 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1"
              >
                Get Started for Free
              </a>
              <a 
                href="#demo" 
                className="inline-block bg-transparent hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white transition transform hover:-translate-y-1"
              >
                Try Live Demo
              </a>
            </div>
          </div>
        </section>

       
      </div>
    </>
  );
}