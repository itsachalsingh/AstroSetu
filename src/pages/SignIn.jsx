import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        // Redirect or show success message
        alert('Signed in successfully!');
      } else {
        alert(data.message || 'Sign in failed');
      }
    } catch (err) {
      alert('Something went wrong');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Left panel with image & text */}
        <div
          className="hidden md:flex items-center justify-center p-8 bg-[url('/signin-bg.jpg')] bg-cover"
          aria-hidden="true"
        >
          <div className="bg-purple-900 bg-opacity-70 p-6 rounded-lg text-white max-w-sm">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-sm">
              Access your astrology, tarot & numerology insights with ease. Enter your details to continue.
            </p>
          </div>
        </div>

        {/* Right panel - Sign In form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-indigo-700 text-center">Sign in to your account</h2>

          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <FaEnvelope className="text-indigo-600 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-400"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <FaLock className="text-indigo-600 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-400"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-indigo-600">
            <Link to="/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
