"use client";
import React, { useState } from 'react';

const Education: React.FC = () => {
  const [educations, setEducations] = useState([
    {
      degree: "Bachelor of Science in Electronic Engineering",
      institution: "Sir Syed University of Engineering and Technology",
      gpa: "3.0"
    }
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddEducation = () => {
    const newEducation = {
      degree: "New Degree",
      institution: "New Institution",
      gpa: "4.0"
    };
    setEducations([...educations, newEducation]);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <form className="space-y-4">
        {educations.map((education, index) => (
          <div key={index}>
            <div>
              <label className="block text-gray-700">Degree:</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => {
                  const updatedEducations = [...educations];
                  updatedEducations[index].degree = e.target.value;
                  setEducations(updatedEducations);
                }}
                disabled={!isEditing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Institution:</label>
              <input
                type="text"
                value={education.institution}
                onChange={(e) => {
                  const updatedEducations = [...educations];
                  updatedEducations[index].institution = e.target.value;
                  setEducations(updatedEducations);
                }}
                disabled={!isEditing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">GPA:</label>
              <input
                type="text"
                value={education.gpa}
                onChange={(e) => {
                  const updatedEducations = [...educations];
                  updatedEducations[index].gpa = e.target.value;
                  setEducations(updatedEducations);
                }}
                disabled={!isEditing}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        ))}
      </form>

      {/* Align the buttons in one row */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleAddEducation}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add New Education
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
        {educations.map((education, index) => (
          <div key={index}>
            <h3 className="font-semibold">{education.degree}</h3>
            <p><strong>From:</strong> {education.institution}</p>
            <p><strong>GPA:</strong> {education.gpa}</p>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
