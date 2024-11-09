// src/app/components/PersonalInfo.tsx
import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <div className="text-gray-700">
        <p><strong>Name:</strong> Shoaib</p>
        <p><strong>Title:</strong> Electronic Engineer</p>
        <p><strong>Email:</strong> shoaibstar876@gmail.com</p>
        <p><strong>Phone:</strong> 0333-3277622</p>
      </div>
    </section>
  );
};

export default PersonalInfo;
