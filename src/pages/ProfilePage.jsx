// src/pages/ProfilePage.jsx

import React from 'react';

const ProfilePage = () => {
  // Dummy user data for now (replace with real later)
  const user = {
    name: 'Name',
    email: 'name@example.com',
    level: 'Beginner',
    modulesCompleted: 7,
    totalModules: 10,
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  };

  const progressPercent = (user.modulesCompleted / user.totalModules) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>

        <div className="mt-6">
          <p className="text-lg font-semibold text-purple-600">Level: {user.level}</p>
        </div>

        <div className="mt-6">
          <p className="text-md text-gray-600">
            Modules Completed: {user.modulesCompleted} / {user.totalModules}
          </p>
          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
            <div
              className="bg-purple-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


