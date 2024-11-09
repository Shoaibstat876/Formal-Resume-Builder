"use client";
import React, { useState } from 'react';

const Education: React.FC = () => {
  // Initialize an array to hold multiple education entries
  const [educations, setEducations] = useState([
    {
      degree: "Bachelor of Science in Electronic Engineering",
      institution: "Sir Syed University of Engineering and Technology",
      gpa: "3.0"
    }
  ]);

  // Function to handle adding a new education entry
  const handleAddEducation = () => {
    const newEducation = {
      degree: "New Degree",
      institution: "New Institution",
      gpa: "4.0"
    };
    setEducations([...educations, newEducation]); // Add the new education entry to the list
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      
      {/* Form for adding or editing education information */}
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
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        ))}
      </form>

      {/* Button to add new education entry */}
      <button
        onClick={handleAddEducation}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Add New Education
      </button>

      {/* Display all education entries */}
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
