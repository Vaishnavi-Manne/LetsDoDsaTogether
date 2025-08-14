"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Github,
  ArrowRight,
  Code2,
  Trophy,
  Users,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = ({ setIsLoggedIn, switchToSignup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState({
    form: false,
    google: false,
    github: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading((prev) => ({ ...prev, form: true }));

    // Simulate API call - replace with your actual authentication logic
    setTimeout(() => {
      setIsLoggedIn(true);
      navigate("/");
      setIsLoading((prev) => ({ ...prev, form: false }));
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading((prev) => ({ ...prev, [provider]: true }));
    // Simulate social login - replace with actual implementation
    setTimeout(() => {
      setIsLoggedIn(true);
      navigate("/");
      setIsLoading((prev) => ({ ...prev, [provider]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-gray-100"
      >
        {/* Left Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 flex flex-col justify-between relative overflow-hidden min-h-[600px]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-300 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-300 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center space-x-3 mb-8">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
              <h1 className="text-3xl font-bold tracking-tight">
                LetsDoDsaTogether
              </h1>
            </div>

            <div className="mb-6">
              <p className="text-xl opacity-90 font-medium">
                Master Data Structures & Algorithms with our comprehensive
                platform
              </p>
            </div>

            <div className="space-y-8 my-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="p-2 bg-white/10 rounded-lg">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Track Progress</h3>
                  <p className="text-base opacity-80 mt-1">
                    Monitor your journey with detailed analytics and insights
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="p-2 bg-white/10 rounded-lg">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Practice Daily</h3>
                  <p className="text-base opacity-80 mt-1">
                    Solve curated problems from beginner to advanced levels
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="p-2 bg-white/10 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Join Community</h3>
                  <p className="text-base opacity-80 mt-1">
                    Connect with thousands of developers and learn together
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="grid grid-cols-3 gap-5 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <p className="font-bold text-2xl">50K+</p>
                  <p className="opacity-80 text-sm mt-1">Problems Solved</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <p className="font-bold text-2xl">10K+</p>
                  <p className="opacity-80 text-sm mt-1">Active Users</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <p className="font-bold text-2xl">95%</p>
                  <p className="opacity-80 text-sm mt-1">Success Rate</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 bg-white text-gray-800 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-gray-500 mt-2">
              Sign in to continue your coding journey
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleSocialLogin("google")}
              disabled={isLoading.google}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-3 hover:bg-gray-50 transition-colors relative"
            >
              {isLoading.google ? (
                <div className="animate-spin h-5 w-5 border-2 border-gray-400 rounded-full border-t-transparent"></div>
              ) : (
                <>
                  <FcGoogle size={22} />
                  <span className="font-medium">Continue with Google</span>
                </>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleSocialLogin("github")}
              disabled={isLoading.github}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-3 hover:bg-gray-50 transition-colors relative"
            >
              {isLoading.github ? (
                <div className="animate-spin h-5 w-5 border-2 border-gray-400 rounded-full border-t-transparent"></div>
              ) : (
                <>
                  <Github size={22} />
                  <span className="font-medium">Continue with GitHub</span>
                </>
              )}
            </motion.button>
          </div>

          <div className="flex items-center justify-center my-6">
            <hr className="flex-1 border-gray-200" />
            <span className="px-4 text-gray-400 text-sm">
              or sign in with email
            </span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div
                className={`flex items-center border rounded-lg px-4 py-3 transition-all ${
                  errors.email
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
                }`}
              >
                <Mail size={20} className="text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading.form}
                  className="flex-1 p-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <div
                className={`flex items-center border rounded-lg px-4 py-3 transition-all ${
                  errors.password
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
                }`}
              >
                <Lock size={20} className="text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading.form}
                  className="flex-1 p-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                  disabled={isLoading.form}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  disabled={isLoading.form}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                Remember me
              </label>
              <Link
                to="/auth/forgot-password"
                className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isLoading.form}
              className={`w-full py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all ${
                isLoading.form
                  ? "bg-indigo-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white font-medium relative overflow-hidden`}
            >
              {isLoading.form ? (
                <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </form>

          {/* Switch to Signup */}
          <p className="text-sm text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Sign Up Now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
