import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const base64Home = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIgMTEuMTk5TDExIDIgMjAgMTEuMTk5VjIySDE4VjE1SDE1VjIySDEyVjE1SDl2N0g3VjExLjE5OXoiLz48L3N2Zz4=";
const base64Calendar = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgeD0iMyIgeT0iNiIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE1IiByeD0iMiIvPjxsaW5lIHgxPSI4IiB5MT0iMiIgeDI9IjgiIHkyPSI1IiBzdHJva2U9IiMwMDdDRkYiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNiIgeTE9IjIiIHgyPSIxNiIgeTI9IjUiIHN0cm9rZT0iIzAwN0NGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+";
const base64Chart = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgeD0iMyIgeT0iOSIgd2lkdGg9IjIiIGhlaWdodD0iMTEiLz48cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxNCIvPjxjaXJjbGUgY3g9IjE0IiBjeT0iOSIgcj0iMiIvPjwvc3ZnPg==";

export default function UtilityLifestylePage() {
  const features = [
    {
      icon: base64Home,
      title: "Personalized Daily Tips",
      desc: "Deliver lifestyle suggestions based on users’ birth charts for health, wellness, and habits.",
    },
    {
      icon: base64Calendar,
      title: "Auspicious Dates & Events",
      desc: "Automatically recommend the best days for weddings, travel, and important decisions.",
    },
    {
      icon: base64Chart,
      title: "Health & Fitness Insights",
      desc: "Integrate planetary health predictions and suggest lifestyle changes for better wellbeing.",
    },
    {
      icon: base64Home,
      title: "Home & Family Guidance",
      desc: "Provide astrology-based advice to improve relationships and domestic harmony.",
    },
    {
      icon: base64Calendar,
      title: "Custom Reminder Alerts",
      desc: "Send notifications for parana timings, fasting days, and other lifestyle rituals.",
    },
    {
      icon: base64Chart,
      title: "Interactive Dashboard",
      desc: "Enable users to track their astrology trends and lifestyle recommendations easily.",
    },
  ];

  const steps = [
    "Register and obtain your free API key",
    "Select utility and lifestyle astrology modules",
    "Integrate APIs effortlessly in your app or website",
    "Enhance user engagement with personalized lifestyle astrology",
  ];

  return (
    <>
      <Helmet>
        <title>Utility & Lifestyle Astrology APIs | AstroAPIHub</title>
        <meta
          name="description"
          content="Integrate astrology-based lifestyle insights, auspicious dates, health tips, and personalized reminders into your utility and lifestyle applications."
        />
        <meta
          name="keywords"
          content="utility astrology api, lifestyle astrology, auspicious dates, health astrology, personalized tips, astrology reminders"
        />
        <link rel="canonical" href="https://astroapihub.com/use-case/utility-lifestyle" />
      </Helmet>

      <div className="font-sans text-gray-900">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-24 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Empower Utility & Lifestyle Apps with Astrology
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8">
            Provide personalized astrology-driven tips, auspicious timings, and wellness insights for a better daily life.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="border border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-yellow-400 font-semibold px-6 py-3 rounded-lg transition"
            >
              Contact Sales
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Astrology Features for Utility & Lifestyle</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className="border border-green-300 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
                >
                  <img src={icon} alt={title} className="w-14 h-14 mb-5" />
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-green-50 py-20">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-12">Simple API Integration in 4 Steps</h2>
            <ol className="list-decimal list-inside space-y-6 text-lg text-gray-800">
              {steps.map((step, i) => (
                <li key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-teal-600 to-green-700 py-16 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add Astrology to Your Utility & Lifestyle Apps</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Increase user engagement and satisfaction with personalized astrology features that enrich daily life.
            </p>
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
