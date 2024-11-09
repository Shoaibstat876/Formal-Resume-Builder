"use client";
// src/app/components/Skills.tsx
import React, { useState } from 'react';

const Skills: React.FC = () => {
  // Initialize state for skills list
  const [skills, setSkills] = useState([
    "JavaScript (React, Node.js)",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "HTML/CSS"
  ]);

  const [newSkill, setNewSkill] = useState(""); // State for new skill input

  // Handle adding new skill to the list
  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Reset input after adding
    }
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Skills</h2>

      {/* Input field to add a new skill */}
      <form onSubmit={handleAddSkill} className="space-y-4">
        <div>
          <label className="block text-gray-700">Add New Skill:</label>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)} // Update input state
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Skill
        </button>
      </form>

      {/* Display the list of skills */}
      <div className="text-gray-700 mt-6">
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;


