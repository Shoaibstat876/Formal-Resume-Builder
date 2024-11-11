//src\app\components\Education.tsx
"use client";
import React, { useState } from "react";

const Education: React.FC = () => {
  const [educations, setEducations] = useState([
    {
      degree: "Bachelor of Science in Electronic Engineering",
      institution: "Sir Syed University of Engineering and Technology",
      gpa: "3.0",
      showDetails: false,
      isEditing: false,
    },
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [educationToDelete, setEducationToDelete] = useState<number | null>(null);

  const handleToggleDetails = (index: number) => {
    const updatedEducations = [...educations];
    updatedEducations[index].showDetails = !updatedEducations[index].showDetails;
    setEducations(updatedEducations);
  };

  const handleAddEducation = () => {
    const newEducation = {
      degree: "New Degree",
      institution: "New Institution",
      gpa: "4.0",
      showDetails: false,
      isEditing: false,
    };
    setEducations([...educations, newEducation]);
  };

  const handleEditEducation = (index: number) => {
    const updatedEducations = [...educations];
    updatedEducations[index].isEditing = !updatedEducations[index].isEditing;
    setEducations(updatedEducations);
  };

  const handleSaveEducation = (index: number) => {
    const updatedEducations = [...educations];
    updatedEducations[index].isEditing = false;
    setEducations(updatedEducations);
  };

  const handleDeleteEducation = () => {
    if (educationToDelete !== null) {
      const updatedEducations = educations.filter((_, index) => index !== educationToDelete);
      setEducations(updatedEducations);
    }
    setIsDeleteModalOpen(false);
  };

  const openDeleteModal = (index: number) => {
    setEducationToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setEducationToDelete(null);
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Education</h2>

      {/* Action buttons */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddEducation}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
        >
          Add New Education
        </button>
      </div>

      {/* Education list */}
      {educations.map((education, index) => (
        <div key={index} className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">{education.degree}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleDetails(index)}
                className="text-blue-500 hover:text-blue-700"
              >
                {education.showDetails ? "Hide Details" : "Show Details"}
              </button>
              <button
                onClick={() => handleEditEducation(index)}
                className="text-yellow-500 hover:text-yellow-700"
              >
                {education.isEditing ? "Cancel" : "Edit"}
              </button>
              {education.isEditing && (
                <button
                  onClick={() => handleSaveEducation(index)}
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

          <p className="text-gray-600">{education.institution}</p>
          <p className="text-gray-600">{education.gpa}</p>

          {education.isEditing ? (
            <div className="mt-2 pl-4 text-gray-700">
              <h4 className="font-semibold">Degree:</h4>
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
              <h4 className="font-semibold mt-4">Institution:</h4>
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
              <h4 className="font-semibold mt-4">GPA:</h4>
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
          ) : (
            education.showDetails && (
              <div className="mt-2 pl-4 text-gray-700">
                <p><strong>From:</strong> {education.institution}</p>
                <p><strong>GPA:</strong> {education.gpa}</p>
              </div>
            )
          )}
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Are you sure you want to delete this education?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteEducation}
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

export default Education;
