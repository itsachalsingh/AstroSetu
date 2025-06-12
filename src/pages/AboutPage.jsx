import { Helmet } from 'react-helmet';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Astrology API Hub - Vedic, Western & Numerology APIs</title>
        <meta
          name="description"
          content="Astrology API Hub offers the most reliable astrology APIs including Vedic astrology, Western astrology, numerology, and horoscope services for developers and businesses worldwide."
        />
        <meta
          name="keywords"
          content="Astrology API, Vedic astrology API, Western astrology API, Numerology API, Horoscope API, Kundli API, Panchang API, Astrology software, Astrology app development"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

        {/* Hero */}
        <section className="bg-white py-24 px-6 sm:px-12 md:px-20 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-indigo-900">
            About Astrology API Hub
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto leading-relaxed">
            Astrology API Hub is a leading provider of comprehensive astrology APIs including Vedic astrology, Western astrology, numerology, and detailed horoscope forecasts. We empower developers, businesses, and astrology enthusiasts worldwide to seamlessly integrate astrological insights into their platforms, apps, and websites with ease and precision.
          </p>
        </section>

        {/* Mission & Vision Grid */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Mission */}
          <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Our Mission</h2>
            <p className="text-indigo-700 leading-relaxed text-lg">
              Our mission is to democratize access to ancient astrological wisdom by providing powerful, scalable, and accurate astrology APIs. Whether you are developing a horoscope app, creating personalized kundli charts, or building numerology services, our APIs deliver reliable astrological data and insights to bring your ideas to life.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Our Vision</h2>
            <p className="text-indigo-700 leading-relaxed text-lg">
              We envision becoming the world’s most trusted astrology API provider, continually innovating to enhance accuracy, ease of integration, and developer experience. By bridging traditional astrology with modern technology, we aim to make astrology accessible and actionable for everyone.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-24">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-12 text-center">Why Choose Astrology API Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Comprehensive Astrology Data</h3>
              <p className="text-indigo-700 text-lg leading-relaxed">
                Access a wide range of astrology data including Janam Kundli, Panchang, Tithi, Nakshatra, Dosha analysis, compatibility charts, and personalized horoscope reports powered by precise planetary calculations.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Easy API Integration</h3>
              <p className="text-indigo-700 text-lg leading-relaxed">
                Our RESTful APIs come with detailed documentation, code examples, and SDKs that make integration quick and straightforward, enabling developers to embed astrology features seamlessly into any application or website.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Reliable & Scalable Infrastructure</h3>
              <p className="text-indigo-700 text-lg leading-relaxed">
                Built on robust cloud infrastructure with high availability and low latency, our APIs handle millions of requests daily, ensuring your astrology app stays fast, reliable, and scalable.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-indigo-50 py-24 px-6 sm:px-12 md:px-20">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">Our Core Values</h2>
            <p className="text-indigo-700 max-w-2xl mx-auto text-lg leading-relaxed">
              We prioritize accuracy, innovation, and exceptional developer support — delivering astrology APIs that empower creativity and transform ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-5xl mx-auto">
            {[
              { title: 'Precision', desc: 'Data accuracy backed by trusted astrological algorithms and continuous updates aligned with astronomical calculations.' },
              { title: 'Developer First', desc: 'Comprehensive documentation, SDKs, sample code, and prompt technical support for smooth integration.' },
              { title: 'Innovation', desc: 'Regular feature releases and upgrades incorporating latest research in astrology and technology.' },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">{title}</h3>
                <p className="text-indigo-700 text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-24 text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-12">Meet The Team Behind Astrology API Hub</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            {[
              {
                name: 'Sumit Pant',
                role: 'Founder & CEO',
                img: 'https://randomuser.me/api/portraits/men/75.jpg',
                bio: 'Astrology enthusiast and technology visionary dedicated to making ancient wisdom accessible through modern APIs.',
              },
              {
                name: 'Anjali Sharma',
                role: 'Lead Astrologer',
                img: 'https://randomuser.me/api/portraits/women/65.jpg',
                bio: 'Vedic astrology expert with over 15 years of experience in personalized horoscope and dosha analysis.',
              },
              {
                name: 'Rahul Mehta',
                role: 'Head of Development',
                img: 'https://randomuser.me/api/portraits/men/35.jpg',
                bio: 'Engineering lead responsible for creating scalable, secure, and easy-to-use astrology APIs.',
              },
            ].map(({ name, role, img, bio }, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 flex flex-col items-center"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-28 h-28 rounded-full mb-6 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-indigo-900">{name}</h3>
                <p className="text-indigo-700 font-medium mb-2">{role}</p>
                <p className="text-gray-600 text-sm max-w-xs">{bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-24 bg-white rounded-3xl shadow-lg border border-gray-200">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-4xl mx-auto text-indigo-700 text-lg leading-relaxed">
            <details className="border-b border-gray-300 pb-4">
              <summary className="font-semibold cursor-pointer hover:text-indigo-900 transition-colors">
                What types of astrology APIs do you offer?
              </summary>
              <p className="mt-2 text-gray-700">
                We provide Vedic astrology APIs (including Kundli, Dosha, Panchang), Western astrology APIs (zodiac signs, horoscopes), numerology calculations, compatibility analysis, and lifestyle predictions.
              </p>
            </details>

            <details className="border-b border-gray-300 pb-4">
              <summary className="font-semibold cursor-pointer hover:text-indigo-900 transition-colors">
                How can I integrate your APIs into my app or website?
              </summary>
              <p className="mt-2 text-gray-700">
                Our APIs follow RESTful standards and come with detailed documentation, code samples, and SDKs in multiple languages. Integration typically requires just a few lines of code.
              </p>
            </details>

            <details className="border-b border-gray-300 pb-4">
              <summary className="font-semibold cursor-pointer hover:text-indigo-900 transition-colors">
                Are your astrology calculations accurate?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes, we use trusted astronomical data and algorithms, regularly updated for precision to ensure highly accurate results.
              </p>
            </details>

            <details className="border-b border-gray-300 pb-4">
              <summary className="font-semibold cursor-pointer hover:text-indigo-900 transition-colors">
                Do you offer custom astrology API solutions?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes, we work with enterprises and developers to customize API features, data sets, and integration support tailored to specific requirements.
              </p>
            </details>
          </div>
        </section>

        {/* Contact Call-to-Action */}
        <section className="bg-indigo-900 py-24 px-6 sm:px-12 md:px-20 text-white text-center rounded-3xl max-w-5xl mx-auto my-24">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Integrate Astrology Into Your Project?</h2>
          <p className="text-lg max-w-xl mx-auto mb-10">
            Join thousands of developers and businesses leveraging Astrology API Hub for reliable, scalable, and feature-rich astrology data. Contact us today for a free consultation or demo.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 px-10 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
}
