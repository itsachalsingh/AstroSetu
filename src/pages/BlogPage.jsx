import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  // Dummy blog posts — replace with dynamic data or CMS later
  const posts = [
    {
      title: 'Top 7 Features Your Astrology App Must Have in 2025',
      summary: 'Explore the essential astrology features modern users demand, from AI horoscope generation to personalized reports.',
      slug: 'top-7-features-for-astrology-app',
      date: 'June 10, 2025',
    },
    {
      title: 'How Numerology APIs Can Boost Engagement in Spiritual Apps',
      summary: 'Learn how accurate numerology data can increase user retention and lifetime value in your mobile apps.',
      slug: 'numerology-api-user-engagement',
      date: 'June 6, 2025',
    },
    {
      title: 'Building Vedic Panchang Systems Using Swiss Ephemeris',
      summary: 'A developer’s guide to using astronomical libraries for real-time Tithi, Yoga, Nakshatra, and Muhurat data.',
      slug: 'vedic-panchang-with-swisseph',
      date: 'June 2, 2025',
    },
  ];

  return (
    <>
      <Helmet>
        <title>AstroAPIHub Blog | Insights on Astrology Tech & APIs</title>
        <meta
          name="description"
          content="Read the latest blog posts about astrology APIs, numerology engines, horoscope tech, Panchang calculations and app development best practices."
        />
        <meta
          name="keywords"
          content="astrology blog, horoscope tech, astrology api blog, vedic blog, numerology blog"
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero */}
        <section className="text-center py-20 bg-white shadow-sm">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">AstroAPIHub Blog</h1>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Technical insights, product updates, and developer resources for astrology-based apps and systems.
          </p>
        </section>

        {/* Blog List */}
        <section className="max-w-5xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border hover:border-indigo-300"
              >
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h2 className="text-xl font-semibold text-indigo-800 mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.summary}</p>
                <span className="inline-block mt-4 text-indigo-600 font-medium">Read More →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 bg-indigo-900 text-white">
          <h2 className="text-3xl font-bold mb-4">Want to stay updated?</h2>
          <p className="mb-6">Join our mailing list to get new blog posts and product tips in your inbox.</p>
          <a
            href="/signup"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all"
          >
            Subscribe Now
          </a>
        </section>
      </div>
    </>
  );
}
