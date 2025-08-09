"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Github, ArrowRight, Code2, Trophy, Users } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import './Auth.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, switchToSignup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call - replace with your actual authentication logic
    setTimeout(() => {
      // setIsLoggedIn(true); // This will trigger the main app to show
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    // Simulate social login - replace with actual implementation
    setTimeout(() => {
      // setIsLoggedIn(true); // This will trigger the main app to show
      navigate('/');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="auth-container pt-[90px]">
      {/* Left Side - Branding */}
      <div className="auth-left">
        <div className="brand-content">
          <div className="brand-header">
            <div className="brand-logo">
              <img src={logo} alt="LetsDoDSA Logo" style={{ width: 40, height: 40, borderRadius: '50%' }} />
            </div>
            <h1 className="brand-title">LetsDoDsaTogether</h1>
            <p className="brand-subtitle">Master Data Structures & Algorithms</p>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">
                <Trophy size={24} />
              </div>
              <div>
                <h3>Track Progress</h3>
                <p>Monitor your coding journey with detailed analytics</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Code2 size={24} />
              </div>
              <div>
                <h3>Practice Daily</h3>
                <p>Solve curated problems to strengthen your skills</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <div>
                <h3>Join Community</h3>
                <p>Connect with fellow developers and learn together</p>
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Problems Solved</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-header">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue your coding journey</p>
          </div>

          {/* Social Login Buttons */}
          <div className="social-buttons">
            <button
              className="social-btn google-btn"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button
              className="social-btn github-btn"
              onClick={() => handleSocialLogin('github')}
              disabled={isLoading}
            >
              <Github size={20} />
              Continue with GitHub
            </button>
          </div>

          <div className="divider">
            <span>or</span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
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

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
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

            <div className="form-options">
              <label className="checkbox-wrapper">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <button
                className="switch-auth"
                // onClick={switchToSignup}
                disabled={isLoading}
              >
                <Link to="/auth/signup">
                  Sign Up
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
