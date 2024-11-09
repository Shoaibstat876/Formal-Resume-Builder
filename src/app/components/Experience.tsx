"use client"
import React, { useState } from 'react';

const Experience: React.FC = () => {
  // Initialize an array with your provided job experiences
  const [experiences, setExperiences] = useState([
    {
      jobTitle: "Junior Elementary School Teacher (BPS-14)",
      date: "December 14, 2022 - Present",
      responsibilities: "Work as Junior Elementary School Teacher (BPS-14) at Sindh Education and Literacy Department."
    },
    {
      jobTitle: "Primary School Teacher (BPS-14)",
      date: "June 6, 2022 - December 14, 2022",
      responsibilities: "Work as Primary School Teacher (BPS-14) at Sindh Education and Literacy Department."
    },
    {
      jobTitle: "Computer Operator",
      date: "Feb 16, 2016 - June 22, 2018",
      responsibilities: "Work as Computer Operator at Sindh Medical Store."
    },
    {
      jobTitle: "Telephone Operator and Front Office Executive",
      date: "March 14, 2013 - August 21, 2015",
      responsibilities: "Work as Telephone Operator and Front Office Executive at Star Trading Co."
    }
  ]);

  // Function to handle adding a new job experience
  const handleAddExperience = () => {
    const newExperience = {
      jobTitle: "New Job Title",
      date: "New Job Date",
      responsibilities: "New Responsibilities"
    };
    setExperiences([...experiences, newExperience]); // Add the new experience to the list
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Experience</h2>

      {/* Form for adding or editing experience */}
      <form className="space-y-4">
        {experiences.map((experience, index) => (
          <div key={index}>
            <div>
              <label className="block text-gray-700">Job Title:</label>
              <input
                type="text"
                value={experience.jobTitle}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].jobTitle = e.target.value;
                  setExperiences(updatedExperiences);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Date:</label>
              <input
                type="text"
                value={experience.date}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].date = e.target.value;
                  setExperiences(updatedExperiences);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Responsibilities:</label>
              <textarea
                value={experience.responsibilities}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].responsibilities = e.target.value;
                  setExperiences(updatedExperiences);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        ))}
      </form>

      {/* Button to add new job experience */}
      <button
        onClick={handleAddExperience}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Add New Experience
      </button>

      {/* Display all job experiences */}
      <div className="mt-6 text-gray-700">
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3 className="font-semibold">{experience.jobTitle}</h3>
            <p>{experience.date}</p>
            <p>{experience.responsibilities}</p>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;



