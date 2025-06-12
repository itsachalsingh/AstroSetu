import { Helmet } from 'react-helmet';
import { useState } from 'react';

export default function ScheduleDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect with backend or API service
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Schedule a Demo | AstroAPIHub</title>
        <meta
          name="description"
          content="Book a live demo to see how AstroAPIHub can supercharge your astrology app or platform. Personalized walkthrough with our team."
        />
        <meta
          name="keywords"
          content="astrology api demo, schedule demo, astrology walkthrough, astroapihub live demo"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
        {/* Header */}
        <section className="text-center py-20 bg-white shadow-sm">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Schedule a Live Demo</h1>
          <p className="text-lg text-indigo-600 max-w-xl mx-auto">
            Get a personalized walkthrough of our Astrology APIs with real-world use cases, features, and Q&A.
          </p>
        </section>

        {/* Demo Form */}
        <section className="max-w-3xl mx-auto py-16 px-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-xl space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Message (Optional)</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-indigo-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Book Demo Now
              </button>
            </form>
          ) : (
            <div className="bg-green-100 text-green-800 text-center p-8 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
              <p>We've received your request and will contact you shortly to schedule the demo.</p>
            </div>
          )}
        </section>

        {/* Final CTA */}
        <section className="text-center py-16 bg-indigo-900 text-white">
          <h2 className="text-3xl font-bold mb-4">Need urgent assistance?</h2>
          <p className="mb-6">Contact us directly at <a href="mailto:support@astroapihub.com" className="underline">support@astroapihub.com</a></p>
          <a
            href="/contact"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all"
          >
            Contact Support
          </a>
        </section>
      </div>
    </>
  );
}
