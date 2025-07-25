import React, { useState } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const faqData = [
    {
      question: "How do I get started with DSA?",
      answer: "Begin with our Beginner's section to learn fundamental concepts like arrays, linked lists, and basic algorithms. Practice regularly and gradually move to more complex topics."
    },
    {
      question: "What's the difference between Beginner and Advanced sections?",
      answer: "Beginner covers basic data structures and simple algorithms. Advanced includes complex topics like dynamic programming, graph algorithms, and system design concepts."
    },
    {
      question: "How long does it take to master DSA?",
      answer: "It varies by individual, but with consistent practice (1-2 hours daily), you can build a solid foundation in 3-6 months and become proficient in 6-12 months."
    },
    {
      question: "Do you provide coding practice problems?",
      answer: "Yes! Each section includes curated practice problems with detailed explanations and multiple solution approaches."
    },
    {
      question: "Is this suitable for interview preparation?",
      answer: "Absolutely! Our content is specifically designed to help you ace technical interviews at top tech companies."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* Header with back button */}
      <div className="contact-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <h1>Contact & FAQ</h1>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>
        <button
          className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
      </div>

      {/* Content */}
      <div className="page-content">
        {activeTab === 'contact' && (
          <div className="contact-section">
            <div className="contact-intro">
              <h2>Get in Touch</h2>
              <p>Have questions about DSA? Need help with your coding journey? We're here to help!</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your question or how we can help..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="faq-section">
            <div className="faq-intro">
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about our DSA learning platform.</p>
            </div>

            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="faq-icon">
                      {activeFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
