// src/pages/[username]/resume.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ResumePage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [resumeData, setResumeData] = useState<any>(null);

  useEffect(() => {
    if (username) {
      // Fetch resume data for the username
      fetch(`/api/resumes/${username}`)
        .then((response) => response.json())
        .then((data) => setResumeData(data))
        .catch((error) => console.log("Error fetching resume:", error));
    }
  }, [username]);

  const handleDownload = async () => {
    const response = await fetch(`/api/generate-pdf?username=${username}`);
    
    if (!response.ok) {
      console.error("Failed to generate PDF");
      alert("Failed to generate PDF");
      return;
    }

    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${username}-resume.pdf`;
    link.click();
  };

  const handleCopyLink = () => {
    const shareableLink = `${window.location.origin}/${username}/resume`;
    navigator.clipboard.writeText(shareableLink);
    alert("Shareable link copied to clipboard!");
  };

  if (!resumeData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500 flex justify-center items-center py-8">
      <div className="bg-white shadow-2xl rounded-lg max-w-4xl w-full overflow-hidden flex flex-col sm:flex-row p-6 space-y-6 sm:space-y-0 sm:space-x-8">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/3 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col items-center py-12 px-8 space-y-6 rounded-lg">
          <h1 className="text-3xl font-bold text-center text-yellow-200">Resume of {username}</h1>
          <button
            onClick={handleDownload}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-indigo-500"
          >
            Download as PDF
          </button>
          <button
            onClick={handleCopyLink}
            className="w-full py-3 bg-teal-600 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-teal-500"
          >
            Copy Shareable Link
          </button>
        </aside>

        {/* Content */}
        <main className="w-full sm:w-2/3 p-8 space-y-8 bg-white rounded-lg shadow-md">
          {/* Education Section */}
          <section className="bg-gradient-to-r from-pink-300 to-indigo-500 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <p className="text-white"><strong>Degree:</strong> {resumeData.education.degree}</p>
            <p className="text-white"><strong>Institution:</strong> {resumeData.education.institution}</p>
            <p className="text-white"><strong>GPA:</strong> {resumeData.education.gpa}</p>
          </section>

          {/* Skills Section */}
          <section className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
            <ul className="space-y-2">
              {resumeData.skills.map((skill: string, index: number) => (
                <li key={index} className="text-lg text-white">- {skill}</li>
              ))}
            </ul>
          </section>

          {/* Experience Section */}
          <section className="bg-gradient-to-r from-teal-400 to-blue-600 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
            {resumeData.experience.map((job: any, index: number) => (
              <div key={index} className="space-y-2 mb-6">
                <p className="text-lg font-semibold text-white">
                  {job.title} <span className="text-gray-200">@ {job.company}</span>
                </p>
                <p className="text-white">{job.description}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ResumePage;









