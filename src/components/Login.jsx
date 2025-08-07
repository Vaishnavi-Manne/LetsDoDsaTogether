"use client";

import React, { useState, useEffect } from "react";
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
  Loader2,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState({
    form: false,
    google: false,
    github: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (formData.password) {
      let strength = 0;
      if (formData.password.length >= 8) strength += 1;
      if (formData.password.match(/[A-Z]/)) strength += 1;
      if (formData.password.match(/[0-9]/)) strength += 1;
      if (formData.password.match(/[^A-Za-z0-9]/)) strength += 1;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading((prev) => ({ ...prev, form: true }));
    setSuccess(false);

    try {
      await login(formData.email, formData.password);
      setSuccess(true);
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        setIsLoggedIn(true);
        navigate("/");
      }, 1000);
    } catch (error) {
      let errorMessage = "Login failed. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many attempts. Account temporarily locked.";
      }
      setErrors({ form: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsLoading((prev) => ({ ...prev, form: false }));
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading((prev) => ({ ...prev, [provider]: true }));

    try {
      if (provider === "google") {
        await googleLogin();
      } else if (provider === "github") {
        await githubLogin();
      }
      toast.success(
        `Logged in with ${
          provider.charAt(0).toUpperCase() + provider.slice(1)
        }!`
      );
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      toast.error(`Failed to login with ${provider}. Please try again.`);
      console.error(`${provider} login error:`, error);
    } finally {
      setIsLoading((prev) => ({ ...prev, [provider]: false }));
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-amber-500";
      case 3:
        return "bg-blue-500";
      case 4:
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
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
              <img src={logo} alt="Logo" className="w-12 h-12" />
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

            <div className="flex-grow space-y-8 my-8">
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
              Sign in to continue your DSA journey
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
                <Loader2 className="animate-spin h-5 w-5" />
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
                <Loader2 className="animate-spin h-5 w-5" />
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
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-xs mt-2 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                {formData.password && passwordStrength > 0 && (
                  <span
                    className={`text-xs font-medium ${
                      passwordStrength === 1
                        ? "text-red-500"
                        : passwordStrength === 2
                        ? "text-amber-500"
                        : passwordStrength === 3
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {getPasswordStrengthText()}
                  </span>
                )}
              </div>
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

              {formData.password && (
                <div className="mt-3">
                  <div className="flex gap-1.5 h-1.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-full rounded-full flex-1 transition-all ${
                          i <= passwordStrength
                            ? getPasswordStrengthColor()
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-xs mt-2 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.password}
                  </motion.p>
                )}
              </AnimatePresence>
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
                isLoading.form || success
                  ? "bg-indigo-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white font-medium relative overflow-hidden`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isLoading.form ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : success ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <>
                  Sign In
                  <motion.span
                    animate={{
                      x: isHovered ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <ChevronRight size={18} />
                  </motion.span>
                </>
              )}
            </motion.button>

            {/* Form Error */}
            <AnimatePresence>
              {errors.form && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-start gap-2 border border-red-100"
                >
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{errors.form}</span>
                </motion.div>
              )}
            </AnimatePresence>
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
