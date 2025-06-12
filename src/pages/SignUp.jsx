import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '', agree: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.agree) return alert('Please agree to terms.');
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) setSubmitted(true);
      else alert(data.message || 'Signup failed.');
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-10 max-w-md bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700">Check your email 📬</h2>
          <p className="text-gray-700 text-lg">
            We’ve sent a confirmation link to <strong>{form.email}</strong>
          </p>
          <Link to="/signin" className="inline-block mt-6 text-indigo-600 font-medium hover:underline">
            Back to Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-xl shadow-xl overflow-hidden"
      >
        {/* Left panel */}
        <div
          className="hidden md:flex items-center justify-center p-8 bg-cover bg-center"
          style={{
            backgroundImage: "url('/signup-bg.jpg')",
            filter: 'brightness(90%)',
          }}
        >
          <div className="bg-white bg-opacity-80 p-6 rounded-lg text-indigo-900 max-w-xs">
            <h2 className="text-3xl font-semibold mb-4">Welcome to Divine Style</h2>
            <p className="text-base">
              Access astrology, tarot & numerology insights with our API. Free trial available, no credit card required.
            </p>
          </div>
        </div>

        {/* Right panel – Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-900 text-center">Create your account</h2>

        

          {/* Input Fields */}
          {['name', 'email', 'password'].map((field, idx) => (
            <div key={field} className="flex items-center border border-indigo-200 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400 transition">
              {idx === 0 && <FaUser className="text-indigo-400 mr-3" />}
              {idx === 1 && <FaEnvelope className="text-indigo-400 mr-3" />}
              {idx === 2 && <FaLock className="text-indigo-400 mr-3" />}
              <input
                type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="bg-transparent outline-none text-indigo-900 w-full placeholder-indigo-400"
                value={form[field]}
                onChange={handleChange}
                required
                autoComplete={field === 'password' ? 'new-password' : undefined}
              />
            </div>
          ))}

          {/* Terms */}
          <label className="text-indigo-700 text-sm flex items-center select-none">
            <input
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2 rounded border-indigo-300 focus:ring-indigo-500"
              required
            />
            I agree to{' '}
            <a href="/tos" className="underline ml-1 text-indigo-600 hover:text-indigo-800">
              Terms of Service
            </a>
          </label>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-shadow shadow-md"
          >
            Sign Up for Free
          </button>

          <p className="text-center text-sm text-indigo-700">
            Already have an account?{' '}
            <Link to="/login" className="underline font-medium text-indigo-800 hover:text-indigo-900">
              Log in
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
