"use client";
import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [skills, setSkills] = useState([
    "JavaScript (React, Node.js)",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "HTML/CSS"
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Clear input after adding
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Skills</h2>

      <form className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div>
              <label className="block text-gray-700">Skill:</label>
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const updatedSkills = [...skills];
                  updatedSkills[index] = e.target.value;
                  setSkills(updatedSkills);
                }}
                disabled={!isEditing}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        ))}
      </form>

      <div className="space-y-4 mb-4">
        <div>
          <label className="block text-gray-700">Add New Skill:</label>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Buttons aligned in one row */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleAddSkill}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Skill
        </button>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 bg-yellow-500 text-white rounded"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        {isEditing && (
          <button
            onClick={handleSave}
            className="p-2 bg-green-500 text-white rounded"
          >
            Save
          </button>
        )}
      </div>

      <div className="mt-6 text-gray-700">
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


