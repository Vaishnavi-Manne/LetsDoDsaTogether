// Profile.jsx
import React from 'react';
import './Profile.css'; // Optional, for separate styling

const Profile = ({ setView }) => {
console.log(setView);
  const user = {
    name: 'NAME',
    profilePic: 'https://i.imgur.com/4M34hi2.png',
    modulesCompleted: 5,
    totalModules: 10,
  };

  return (
    <div className="profile-container">
      {/* 🔙 Come Back Button */}
      <button
        onClick={() => setView('home')}
        className="come-back-button"
      >
        ← Come Back
      </button>

      {/* 👤 Profile Content */}
      <img src={user.profilePic} alt="Profile" className="profile-pic" />
      <h2>{user.name}</h2>
      <p>Modules Completed: {user.modulesCompleted} / {user.totalModules}</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(user.modulesCompleted / user.totalModules) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};


export default Profile;


