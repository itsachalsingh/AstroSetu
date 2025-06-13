import { Link } from "react-router-dom"
import React, { useState } from 'react'

const Dropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
     <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-yellow-400 text-white">{label}</button>

      {/* Dropdown box */}
      <div
        className={`absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-200 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="py-1 text-sm text-gray-800">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-black hover:bg-yellow-100 hover:text-yellow-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const solutions = [
    { label: 'Astrology Apps', href: '/astrology-apps' },
    { label: 'Matrimonial', href: '/dating-matrimonial' },
    { label: 'Jewellery & Gemstones', href: '/jewellery-gemstones' },
    { label: 'Media & Entertainment', href: '/media-entertainment' },
    { label: 'Utility & Lifestyle', href: '/utility-lifestyle' },
  ];



  const apis = [
    { label: 'Horoscope', href: '/horoscope' },
    { label: 'Tarot', href: '/tarot-card' },
    { label: 'Indian Astrology', href: '/vedic-astrology' },
    { label: 'Western Astrology', href: '/western-astrology' },
    { label: 'Numerology', href: '/numerology' },
    { label: 'Lifesyle', href: '/apis/astrology' },
  ];

export default function HomePage(){
    return (
        <>
            <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white shadow-md">
                <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center">
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-xl font-bold text-white">
                        <img className="w-80" src="../assets/images/logo.png" />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex gap-8 text-sm font-medium custom-nav-menu">
                        <Link to="/" className="hover:text-yellow-400 text-white">Home</Link>
                        <Dropdown label="Solutions" items={solutions} />
                        <Dropdown label="API’s" items={apis} />
                        <Link to="/pricing" className="hover:text-yellow-400 text-white">Pricing</Link>
                    </nav>

                    {/* Started Button */}
                    <Link
                    to="/pricing"
                    className="ml-6 px-4 py-2 bg-white text-indigo-800 font-semibold rounded-lg shadow hover:bg-yellow-400 hover:text-white transition custom-button"
                    >
                    Started
                    </Link>
                </div>
            </header>
        </>
    )
}