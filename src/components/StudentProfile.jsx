import React from 'react';
import './StudentProfile.css';

const StudentProfile = () => {
  return (
    <div className="student-profile-card">
      <img
        src="public/images/profilepic.png"
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2>NAME</h2>
      <p className="goal">🎯 Goal: Cracking Interviews 2025</p>
      <p className="level">📚 Level: Beginner</p>
      <p className="progress">📚 Topics Completed: 3 / 10</p>
      <p className="Mail"> Mail: </p>
      <p className="Mobile"> Mobile:</p>
      
    </div>
  );
};

export default StudentProfile;

