// src/components/ResumeDisplay.tsx

import React from "react";

interface ResumeData {
  education: {
    degree: string;
    institution: string;
    gpa: string;
  };
  skills: string[];
  experience: {
    title: string;
    company: string;
    description: string;
  }[];
}

const ResumeDisplay: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <section>
        <h2 className="text-xl font-semibold">Education</h2>
        <p><strong>Degree:</strong> {data.education.degree}</p>
        <p><strong>Institution:</strong> {data.education.institution}</p>
        <p><strong>GPA:</strong> {data.education.gpa}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul>
          {data.experience.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> at {job.company}
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumeDisplay;
