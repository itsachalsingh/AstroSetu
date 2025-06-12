import { Helmet } from 'react-helmet';

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Astrology API Hub</title>
        <meta
          name="description"
          content="Get in touch with Astrology API Hub for support, queries, feedback, or partnership opportunities. We’re here to help you with your astrology API needs."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

        {/* Header Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-indigo-900">
            Contact Us
          </h1>
          <p className="text-lg text-indigo-700 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have a question about our services, pricing, support, or anything else, our team is ready to help.
          </p>
        </section>

        {/* Contact Info Section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 bg-white rounded-xl shadow-md border border-gray-200 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Reach Out to Us</h2>
              <p className="text-lg text-indigo-700 mb-4">
                For general inquiries or technical support, feel free to connect with us via the following channels:
              </p>
              <ul className="space-y-4 text-indigo-700 text-lg">
                <li><strong>Email:</strong> <a href="mailto:support@astroapihub.com" className="text-indigo-600 underline">support@astroapihub.com</a></li>
                <li><strong>Phone:</strong> +91-98765-43210</li>
                <li><strong>Address:</strong> 2nd Floor, AstroAPIHub HQ, New Delhi, India</li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-indigo-700">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-indigo-700">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-indigo-700">Message</label>
                  <textarea
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
