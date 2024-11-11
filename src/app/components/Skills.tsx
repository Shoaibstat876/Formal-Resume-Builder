//src\app\components\Skills.tsx
"use client";
import React, { useState } from "react";

const Skills: React.FC = () => {
  const [skills, setSkills] = useState([
    {
      skillName: "JavaScript",
      proficiency: "Advanced",
      showDetails: false,
      isEditing: false,
    },
    {
      skillName: "React",
      proficiency: "Intermediate",
      showDetails: false,
      isEditing: false,
    },
    {
      skillName: "Node.js",
      proficiency: "Intermediate",
      showDetails: false,
      isEditing: false,
    },
    {
      skillName: "CSS",
      proficiency: "Advanced",
      showDetails: false,
      isEditing: false,
    },
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [skillToDelete, setSkillToDelete] = useState<number | null>(null); // Tracks which skill to delete

  const handleToggleDetails = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills[index].showDetails = !updatedSkills[index].showDetails;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    const newSkill = {
      skillName: "New Skill",
      proficiency: "New Proficiency Level",
      showDetails: false,
      isEditing: false,
    };
    setSkills([...skills, newSkill]);
  };

  const handleEditSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills[index].isEditing = !updatedSkills[index].isEditing;
    setSkills(updatedSkills);
  };

  const handleSaveSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills[index].isEditing = false;
    setSkills(updatedSkills);
  };

  // Delete skill handler
  const handleDeleteSkill = () => {
    if (skillToDelete !== null) {
      const updatedSkills = skills.filter((_, index) => index !== skillToDelete);
      setSkills(updatedSkills);
    }
    setIsDeleteModalOpen(false); // Close modal after deletion
  };

  // Open confirmation modal
  const openDeleteModal = (index: number) => {
    setSkillToDelete(index);
    setIsDeleteModalOpen(true);
  };

  // Close confirmation modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSkillToDelete(null);
  };

  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Skills</h2>

      {/* Action buttons */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddSkill}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
        >
          Add New Skill
        </button>
      </div>

      {/* Skills list */}
      {skills.map((skill, index) => (
        <div key={index} className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">{skill.skillName}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleDetails(index)}
                className="text-blue-500 hover:text-blue-700"
              >
                {skill.showDetails ? "Hide Details" : "Show Details"}
              </button>
              <button
                onClick={() => handleEditSkill(index)}
                className="text-yellow-500 hover:text-yellow-700"
              >
                {skill.isEditing ? "Cancel" : "Edit"}
              </button>
              {skill.isEditing && (
                <button
                  onClick={() => handleSaveSkill(index)}
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
          <p className="text-gray-600">{skill.proficiency}</p>

          {skill.isEditing ? (
            <div className="mt-2 pl-4 text-gray-700">
              <h4 className="font-semibold">Proficiency:</h4>
              <textarea
                value={skill.proficiency}
                onChange={(e) => {
                  const updatedSkills = [...skills];
                  updatedSkills[index].proficiency = e.target.value;
                  setSkills(updatedSkills);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          ) : (
            skill.showDetails && (
              <div className="mt-2 pl-4 text-gray-700">
                <h4 className="font-semibold">Proficiency:</h4>
                <p>{skill.proficiency}</p>
              </div>
            )
          )}
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Are you sure you want to delete this skill?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteSkill}
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

export default Skills;

