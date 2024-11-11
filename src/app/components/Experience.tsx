//src\app\components\Experience.tsx
"use client";
import React, { useState } from "react";

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState([
    {
      jobTitle: "Junior Elementary School Teacher (BPS-14)",
      date: "December 14, 2022 - Present",
      responsibilities:
        "Work as Junior Elementary School Teacher (BPS-14) at Sindh Education and Literacy Department.",
      showDetails: false,
      isEditing: false,
    },
    {
      jobTitle: "Primary School Teacher (BPS-14)",
      date: "June 6, 2022 - December 14, 2022",
      responsibilities:
        "Work as Primary School Teacher (BPS-14) at Sindh Education and Literacy Department.",
      showDetails: false,
      isEditing: false,
    },
    {
      jobTitle: "Computer Operator",
      date: "Feb 16, 2016 - June 22, 2018",
      responsibilities: "Work as Computer Operator at Sindh Medical Store.",
      showDetails: false,
      isEditing: false,
    },
    {
      jobTitle: "Telephone Operator and Front Office Executive",
      date: "March 14, 2013 - August 21, 2015",
      responsibilities: "Work as Telephone Operator and Front Office Executive at Star Trading Co.",
      showDetails: false,
      isEditing: false,
    },
  ]);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [experienceToDelete, setExperienceToDelete] = useState<number | null>(null); // Tracks which experience to delete

  const handleToggleDetails = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].showDetails = !updatedExperiences[index].showDetails;
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    const newExperience = {
      jobTitle: "New Job Title",
      date: "New Job Date",
      responsibilities: "New Responsibilities",
      showDetails: false,
      isEditing: false,
    };
    setExperiences([...experiences, newExperience]);
  };

  const handleEditExperience = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].isEditing = !updatedExperiences[index].isEditing;
    setExperiences(updatedExperiences);
  };

  const handleSaveExperience = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].isEditing = false;
    setExperiences(updatedExperiences);
  };

  // Delete experience handler
  const handleDeleteExperience = () => {
    if (experienceToDelete !== null) {
      const updatedExperiences = experiences.filter((_, index) => index !== experienceToDelete);
      setExperiences(updatedExperiences);
    }
    setIsDeleteModalOpen(false); // Close modal after deletion
  };

  // Open confirmation modal
  const openDeleteModal = (index: number) => {
    setExperienceToDelete(index);
    setIsDeleteModalOpen(true);
  };

  // Close confirmation modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setExperienceToDelete(null);
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Experience</h2>

      {/* Action buttons */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddExperience}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
        >
          Add New Experience
        </button>
      </div>

      {/* Experience list */}
      {experiences.map((experience, index) => (
        <div key={index} className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">{experience.jobTitle}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleDetails(index)}
                className="text-blue-500 hover:text-blue-700"
              >
                {experience.showDetails ? "Hide Details" : "Show Details"}
              </button>
              <button
                onClick={() => handleEditExperience(index)}
                className="text-yellow-500 hover:text-yellow-700"
              >
                {experience.isEditing ? "Cancel" : "Edit"}
              </button>
              {experience.isEditing && (
                <button
                  onClick={() => handleSaveExperience(index)}
                  className="text-green-500 hover:text-green-700"
                >
                  Save
                </button>
              )}
              <button
                onClick={() => openDeleteModal(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600">{experience.date}</p>

          {experience.isEditing ? (
            <div className="mt-2 pl-4 text-gray-700">
              <h4 className="font-semibold">Responsibilities:</h4>
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
          ) : (
            experience.showDetails && (
              <div className="mt-2 pl-4 text-gray-700">
                <h4 className="font-semibold">Responsibilities:</h4>
                <p>{experience.responsibilities}</p>
              </div>
            )
          )}
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Are you sure you want to delete this experience?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteExperience}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;





