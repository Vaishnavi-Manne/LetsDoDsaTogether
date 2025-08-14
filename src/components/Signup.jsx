"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Github,
  ArrowRight,
  Code2,
  Trophy,
  Users,
  Check,
  X,
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

const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState({
    form: false,
    google: false,
    github: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Password validation
    if (name === "password") {
      setPasswordValidation({
        minLength: value.length >= 8,
        hasUppercase: /[A-Z]/.test(value),
        hasLowercase: /[a-z]/.test(value),
        hasNumber: /\d/.test(value),
        hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }

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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!Object.values(passwordValidation).every(Boolean)) {
      newErrors.password = "Password does not meet requirements";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading((prev) => ({ ...prev, form: true }));
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
      toast.success("Account created successfully! Redirecting...");
      setTimeout(() => {
        setIsLoggedIn(true);
        navigate("/");
      }, 1000);
    } catch (error) {
      let errorMessage = "Signup failed. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already in use. Please login instead.";
      }
      setErrors({ form: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsLoading((prev) => ({ ...prev, form: false }));
    }
  };

  const handleSocialSignup = async (provider) => {
    setIsLoading((prev) => ({ ...prev, [provider]: true }));

    try {
      // Simulate social signup
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success(
        `Signed up with ${
          provider.charAt(0).toUpperCase() + provider.slice(1)
        } successfully!`
      );
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      toast.error(`Failed to sign up with ${provider}. Please try again.`);
      console.error(`${provider} signup error:`, error);
    } finally {
      setIsLoading((prev) => ({ ...prev, [provider]: false }));
    }
  };

  const PasswordRequirement = ({ met, text }) => (
    <div
      className={`flex items-center gap-2 text-sm ${
        met ? "text-green-500" : "text-gray-500"
      }`}
    >
      {met ? <Check size={14} /> : <X size={14} />}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center pt-4">
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
            <h2 className="text-3xl font-bold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-gray-500 mt-2">
              Join thousands of developers mastering DSA
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleSocialSignup("google")}
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
              onClick={() => handleSocialSignup("github")}
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
              or sign up with email
            </span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div
                  className={`flex items-center border rounded-lg px-4 py-3 transition-all ${
                    errors.fullName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
                  }`}
                >
                  <User size={20} className="text-gray-500" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isLoading.form}
                    className="flex-1 p-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.fullName}
                  </p>
                )}
              </div>

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
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    placeholder="Create password"
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

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div
                  className={`flex items-center border rounded-lg px-4 py-3 transition-all ${
                    errors.confirmPassword
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
                  }`}
                >
                  <Lock size={20} className="text-gray-500" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={isLoading.form}
                    className="flex-1 p-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 hover:text-gray-700 p-1"
                    disabled={isLoading.form}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-lg">
                <PasswordRequirement
                  met={passwordValidation.minLength}
                  text="At least 8 characters"
                />
                <PasswordRequirement
                  met={passwordValidation.hasUppercase}
                  text="One uppercase letter"
                />
                <PasswordRequirement
                  met={passwordValidation.hasLowercase}
                  text="One lowercase letter"
                />
                <PasswordRequirement
                  met={passwordValidation.hasNumber}
                  text="One number"
                />
                <PasswordRequirement
                  met={passwordValidation.hasSpecial}
                  text="One special character"
                />
              </div>
            )}

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
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
                  Create Account
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

          {/* Switch to Login */}
          <p className="text-sm text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
