import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    {/* Brand & Trust */}
                    <div>
                    <h3 className="text-xl font-bold text-white mb-2">AstroAPIHub</h3>
                    <p className="text-sm">
                        All‑in‑one Astrology API platform delivering Horoscope, Natal, Tarot, Numerology & Chinese Zodiac services.
                    </p>
                    <p className="text-xs mt-4">Trusted by top businesses worldwide</p>
                    <div className="flex space-x-3 mt-2">
                        {/* Placeholder icons */}
                        <a href="#" aria-label="Facebook">
                        <svg className="w-6 h-6 fill-current hover:text-white" viewBox="0 0 24 24"></svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                        <svg className="w-6 h-6 fill-current hover:text-white" viewBox="0 0 24 24"></svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                        <svg className="w-6 h-6 fill-current hover:text-white" viewBox="0 0 24 24"></svg>
                        </a>
                    </div>
                    </div>

                    {/* Products & APIs */}
                    <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Products & APIs</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/horoscope" className="hover:text-white">Horoscope API</Link></li>
                        <li><Link to="/natal" className="hover:text-white">Natal/Birth Chart API</Link></li>
                        <li><Link to="/tarot" className="hover:text-white">Tarot API</Link></li>
                        <li><Link to="/numerology" className="hover:text-white">Numerology API</Link></li>
                        <li><Link to="/chinese-zodiac" className="hover:text-white">Chinese Zodiac API</Link></li>
                    </ul>
                    </div>

                    {/* Support & Resources */}
                    <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Support & Resources</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/docs" className="hover:text-white">API Documentation</Link></li>
                        <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
                        <li><Link to="/pricing" className="hover:text-white">Pricing Plans</Link></li>
                        <li><Link to="/schedule-demo" className="hover:text-white">Schedule a Demo</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                    </ul>
                    </div>

                    {/* Legal & Social */}
                    <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Legal & Info</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                        <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
                        <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                    </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} AstroAPIHub. All rights reserved.
                </div>
            </footer>
        </>
    )
}