import React from 'react';
import { Helmet } from 'react-helmet';


export default function TarotReadingPage() {
  return (
    <>
      <Helmet>
        <title>Astrology API Use Case | Build Powerful Astrology Apps</title>
        <meta
          name="description"
          content="Discover how you can build high-performance astrology apps and websites using AstroAPIHub. Integrate Vedic, Western, Numerology APIs with ease."
        />
        <meta
          name="keywords"
          content="astrology app, vedic astrology, western astrology, horoscope api, kundli, panchang, numerology api"
        />
        <link rel="canonical" href="https://astroapihub.com/use-case/astrology-apps" />
      </Helmet>

      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen">
        <header className="text-center py-16">
          <h1 className="text-4xl font-bold">Horoscope API - Modern & Powerful</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Daily, Monthly & Yearly astrology predictions via simple JSON or PDF APIs. Build powerful apps with zero complexity.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-6 px-8 py-12 max-w-6xl mx-auto">
          {[
            {
              title: 'Daily/Monthly/Yearly Insights',
              desc: 'Covering health, emotions, love, travel & more.',
            },
            {
              title: 'Vedic & Western Charts',
              desc: 'Get detailed kundli and planetary positions.',
            },
            {
              title: 'PDF Report Generator',
              desc: 'Offer downloadable personalized reports.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </section>

        <section className="bg-[#0f172a] py-12 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ol className="text-left list-decimal space-y-3 max-w-xl mx-auto">
              <li>Select the API endpoint (e.g., /daily/:zodiacName)</li>
              <li>Authenticate using your API key</li>
              <li>Receive structured JSON or beautiful PDF</li>
            </ol>
          </div>
        </section>

        <section className="bg-[#1e293b] py-20 px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Live API Demo</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Try out the Horoscope API right here. Enter a zodiac sign to see the real-time daily prediction.
          </p>
          <iframe
            src="https://codesandbox.io/embed/horoscope-api-demo?fontsize=14&hidenavigation=1&theme=dark"
            style={{ width: '100%', height: '500px', border: 0, borderRadius: '8px', overflow: 'hidden' }}
            title="Live Horoscope API Demo"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </section>

        <section className="bg-[#0f172a] py-20 text-center px-8">
          <h2 className="text-3xl font-bold mb-10">Why Developers Love Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'High Uptime & Speed', desc: '99.99% uptime and ultra-fast JSON responses.' },
              { title: 'Built for Scale', desc: 'Works with Postman, Swagger & SDKs. White-label support included.' },
              { title: 'Future Ready', desc: 'Secure, versioned endpoints & modern architecture.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#1e293b] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-8 bg-[#1e293b]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Key Endpoints</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { endpoint: '/sun_sign_prediction/daily/:zodiacName', desc: 'Get today’s horoscope by zodiac sign.' },
                { endpoint: '/sun_sign_prediction/daily/next/:zodiacName', desc: 'Tomorrow’s forecast by sign.' },
                { endpoint: '/horoscope_prediction/monthly/:zodiacName', desc: 'Monthly insights on health, love, career, and more.' },
                { endpoint: '/vedic_horoscope', desc: 'Comprehensive Vedic natal chart and planetary positions.' },
              ].map(({ endpoint, desc }) => (
                <div key={endpoint} className="bg-[#0f172a] p-5 rounded-xl border border-gray-600">
                  <p className="font-mono text-sm text-yellow-300">{endpoint}</p>
                  <p className="text-sm text-gray-300 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] py-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Horoscope API Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: 'Dating Apps',
                  desc: 'Show compatibility and daily love predictions based on zodiac signs.',
                },
                {
                  title: 'News & Media Portals',
                  desc: 'Engage readers with fresh daily/monthly astrology content.',
                },
                {
                  title: 'Spiritual Portals',
                  desc: 'Provide personalized horoscopes and Vedic charts.',
                },
                {
                  title: 'Wellness Apps',
                  desc: 'Offer insights on emotions, stress, and health alignment.',
                },
                {
                  title: 'E-commerce Sites',
                  desc: 'Match products or offers to astrological predictions.',
                },
                {
                  title: 'Voice Assistants',
                  desc: 'Enable voice-based daily predictions (e.g. Alexa Skills).',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-[#1e293b] p-6 rounded-2xl shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] py-16 text-center px-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Reliable JSON APIs', desc: 'Blazing fast responses with >99.9% uptime.' },
              { title: 'SEO & Dev Friendly', desc: 'Built for scale with Postman, Swagger & SDKs.' },
              { title: 'White-label Ready', desc: 'Custom-brand our horoscope data in your app.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#1e293b] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f172a] py-20 px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">What Developers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Amit Sharma',
                feedback: 'Easy to integrate and accurate results. Our users love the horoscope feature!'
              },
              {
                name: 'Lena Gupta',
                feedback: 'The PDF reports are gorgeous and the API uptime is fantastic. Highly recommended.'
              },
              {
                name: 'Rahul Mehta',
                feedback: 'Great developer documentation and support. Was live in a day!'
              },
            ].map(({ name, feedback }) => (
              <div key={name} className="bg-[#1e293b] p-6 rounded-xl border border-gray-700">
                <p className="text-gray-300 italic">“{feedback}”</p>
                <p className="mt-4 text-sm text-yellow-300">— {name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="bg-[#1e293b] py-20 px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Free',
                price: '₹0/mo',
                features: ['Up to 1,000 requests/month', 'Basic endpoints', 'Community support']
              },
              {
                title: 'Pro',
                price: '₹999/mo',
                features: ['Up to 100,000 requests', 'Priority support', 'All endpoints', 'PDF reports']
              },
              {
                title: 'Enterprise',
                price: 'Custom',
                features: ['Unlimited access', 'White-label PDF', 'Premium uptime SLA', 'Dedicated support']
              },
            ].map(({ title, price, features }) => (
              <div key={title} className="bg-[#0f172a] p-8 rounded-xl border border-gray-600">
                <h3 className="text-xl font-bold text-yellow-300 mb-2">{title}</h3>
                <p className="text-3xl font-bold mb-4">{price}</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {features.map((f, idx) => <li key={idx}>• {f}</li>)}
                </ul>
                {/* <Button className="mt-6">Choose {title}</Button> */}
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-[#0f172a] py-20 px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">From Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'How to Use Horoscope APIs in Your App',
                link: '/blog/horoscope-api-integration'
              },
              {
                title: 'Top 5 Astrology APIs Compared',
                link: '/blog/top-astrology-apis'
              },
              {
                title: 'Astrology Features Your Users Will Love',
                link: '/blog/astrology-features-users-love'
              },
            ].map(({ title, link }) => (
              <a key={title} href={link} className="block bg-[#1e293b] p-6 rounded-xl border border-gray-600 hover:bg-[#334155] transition">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">{title}</h3>
                <p className="text-sm text-gray-300">Read more →</p>
              </a>
            ))}
          </div>
        </section>
         <section className="bg-[#1e293b] py-20 px-8">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: 'Is the Horoscope API free to use?',
                a: 'Yes, we offer a free tier to get started. No credit card required.',
              },
              {
                q: 'What formats do you support?',
                a: 'JSON for developers and PDF for end users. Fully customizable.',
              },
              {
                q: 'Can I generate Kundli reports?',
                a: 'Absolutely! Use our /vedic_horoscope endpoint with birth details.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-[#0f172a] p-6 rounded-lg border border-gray-700">
                <p className="font-semibold text-yellow-300">{q}</p>
                <p className="text-sm text-gray-300 mt-1">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1e293b] py-12 px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start for Free</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Sign up and get immediate access to 100+ astrology endpoints. No credit card required.
          </p>
          <div className="mt-6">
            
          </div>
        </section>
      </div>
    </>
  );
}
