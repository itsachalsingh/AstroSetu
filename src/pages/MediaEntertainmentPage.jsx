import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const base64Star = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkQ5NjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExLjk5IDMuNTAybDQuNzkgOS42ODMgMTAuNjk2IDEuNTY0LTcuNjM0IDcuMDI5IDEuODA4IDEwLjYxMS05LjcxMi01LjEzOC05LjcxMiA1LjEzOCAxLjgwOC0xMC42MTEtNy42MzQtNy4wMjkgMTAuNjk2LTEuNTY0IDQuNzktOS42ODN6Ii8+PC9zdmc+";
const base64Film = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3Qgd2lkdGg9IjIyIiBoZWlnaHQ9IjE4IiB4PSIxIiB5PSI0IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI1IiBjeT0iOSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iOSI+PC9jaXJjbGU+PC9zdmc+";

export default function MediaEntertainmentPage() {
  const features = [
    {
      icon: base64Star,
      title: "Celebrity Horoscopes & Insights",
      desc: "Provide your users with in-depth natal charts and predictive analysis of their favorite celebrities.",
    },
    {
      icon: base64Film,
      title: "Movie Release Predictions",
      desc: "Use astrology to predict box office success and audience response for upcoming films.",
    },
    {
      icon: base64Star,
      title: "Event Muhurat & Timing",
      desc: "Recommend the most auspicious timing for entertainment launches, concerts, and shows.",
    },
    {
      icon: base64Film,
      title: "Content Personalization",
      desc: "Tailor entertainment content suggestions based on user’s birth chart and planetary transits.",
    },
    {
      icon: base64Star,
      title: "Fan Engagement Tools",
      desc: "Create astrology-powered quizzes, games, and reports to boost user interaction.",
    },
    {
      icon: base64Film,
      title: "Branded PDF Reports",
      desc: "Generate downloadable celebrity and entertainment astrology reports for fans.",
    },
  ];

  const steps = [
    "Sign up and get API credentials",
    "Select entertainment astrology modules",
    "Integrate APIs in your app or website",
    "Launch with unique astrology-powered features",
  ];

  return (
    <>
      <Helmet>
        <title>Media & Entertainment Astrology API | AstroAPIHub</title>
        <meta
          name="description"
          content="Integrate astrology-based celebrity horoscopes, movie release predictions, event timings, and fan engagement tools into your media and entertainment platforms."
        />
        <meta
          name="keywords"
          content="media astrology api, celebrity horoscope, movie astrology, event muhurat, fan engagement, entertainment astrology"
        />
        <link rel="canonical" href="https://astroapihub.com/use-case/media-entertainment" />
      </Helmet>

      <div className="font-sans text-gray-900">

        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-24 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Astrology for Media & Entertainment Platforms
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8">
            Deliver cutting-edge astrology-powered features for celebrities, movies, events, and fan engagement.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Get Started Free
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
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className="border border-purple-300 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
                >
                  <img src={icon} alt={title} className="w-16 h-16 mb-5" />
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-purple-50 py-20">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-12">Easy Integration in 4 Steps</h2>
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
        <section className="bg-gradient-to-r from-pink-600 to-purple-700 py-16 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring Astrology to Your Entertainment Platform</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Stand out by integrating astrology features your users will love and engage with daily.
            </p>
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
