"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Github, ArrowRight, Code2, Trophy, Users, Check, X } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import './Auth.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ setIsLoggedIn, switchToLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Password validation
    if (name === 'password') {
      setPasswordValidation({
        minLength: value.length >= 8,
        hasUppercase: /[A-Z]/.test(value),
        hasLowercase: /[a-z]/.test(value),
        hasNumber: /\d/.test(value),
        hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(value)
      });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!Object.values(passwordValidation).every(Boolean)) {
      newErrors.password = 'Password does not meet requirements';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // setIsLoggedIn(true);
      navigate('/');
      setIsLoading(false);
    }, 2000);
  };

  const handleSocialSignup = (provider) => {
    setIsLoading(true);
    // Simulate social signup
    setTimeout(() => {
      // setIsLoggedIn(true);
      navigate('/');
      setIsLoading(false);
    }, 2000);
  };

  const PasswordRequirement = ({ met, text }) => (
    <div className={`password-requirement ${met ? 'met' : ''}`}>
      {met ? <Check size={14} /> : <X size={14} />}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="auth-container signup-optimized pt-20">
      {/* Left Side - Branding */}
      <div className="auth-left">
        <div className="brand-content signup-compact">
          <div className="brand-header signup-compact">
            <div className="brand-logo signup-compact">
              <img src={logo} alt="LetsDoDSA Logo" style={{ width: 36, height: 36, borderRadius: '50%' }} />
            </div>
            <h1 className="brand-title signup-compact">LetsDoDsaTogether</h1>
            <p className="brand-subtitle signup-compact">Master Data Structures & Algorithms</p>
          </div>

          <div className="feature-list signup-compact">
            <div className="feature-item signup-compact">
              <div className="feature-icon signup-compact">
                <Trophy size={22} />
              </div>
              <div>
                <h3>Track Progress</h3>
                <p>Monitor your coding journey with detailed analytics</p>
              </div>
            </div>

            <div className="feature-item signup-compact">
              <div className="feature-icon signup-compact">
                <Code2 size={22} />
              </div>
              <div>
                <h3>Practice Daily</h3>
                <p>Solve curated problems to strengthen skills</p>
              </div>
            </div>

            <div className="feature-item signup-compact">
              <div className="feature-icon signup-compact">
                <Users size={22} />
              </div>
              <div>
                <h3>Join Community</h3>
                <p>Connect with fellow developers</p>
              </div>
            </div>
          </div>

          <div className="stats signup-compact">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Problems</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="auth-right">
        <div className="auth-form-container signup-optimized">
          <div className="auth-header signup-optimized">
            <h2>Create Your Account</h2>
            <p>Join thousands of developers mastering DSA</p>
          </div>

          {/* Social Signup Buttons */}
          <div className="social-buttons signup-row">
            <button
              className="social-btn google-btn"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button
              className="social-btn github-btn signup-social"
              onClick={() => handleSocialSignup('github')}
              disabled={isLoading}
            >
              <Github size={20} />
              Continue with GitHub
            </button>
          </div>

          <div className="divider signup-divider">
            <span>or create with email</span>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="auth-form signup-form">
            {/* Name and Email Row */}
            <div className="signup-row">
              <div className="input-group signup-half">
                <label htmlFor="fullName">Full Name</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={20} />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'error' : ''}
                    disabled={isLoading}
                  />
                </div>
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="input-group signup-half">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            {/* Password and Confirm Row */}
            <div className="signup-row">
              <div className="input-group signup-half">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="input-group signup-half">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error' : ''}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div className="password-requirements signup-requirements">
                <PasswordRequirement met={passwordValidation.minLength} text="At least 8 characters" />
                <PasswordRequirement met={passwordValidation.hasUppercase} text="One uppercase letter" />
                <PasswordRequirement met={passwordValidation.hasLowercase} text="One lowercase letter" />
                <PasswordRequirement met={passwordValidation.hasNumber} text="One number" />
                <PasswordRequirement met={passwordValidation.hasSpecial} text="One special character" />
              </div>
            )}

            <div className="form-options signup-terms">
              <label className="checkbox-wrapper">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="submit-btn signup-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <button
                className="switch-auth"
                onClick={switchToLogin}
                disabled={isLoading}
              >
                <Link to="/auth/login">
                  login
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
