"use client";
// src/app/components/PersonalInfo.tsx
import React, { useState } from 'react';

const PersonalInfo: React.FC = () => {
  // State variables for user input
  const [name, setName] = useState("Shoaib");
  const [title, setTitle] = useState("Software Developer");
  const [email, setEmail] = useState("shoaib@example.com");
  const [phone, setPhone] = useState("(123) 456-7890");

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </form>
      <div className="mt-6 text-gray-700">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </section>
  );
};

export default PersonalInfo;


