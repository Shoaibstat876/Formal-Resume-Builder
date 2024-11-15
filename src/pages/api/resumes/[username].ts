// src/pages/api/resumes/[username].ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // We no longer destructure `username` from `req.query` if it's not needed
  // const { username } = req.query; 

  // Mock data for the user (replace this with actual fetching logic as needed)
  const resumeData = {
    education: {
      degree: "Bachelor of Science in Electronic Engineering",
      institution: "Sir Syed University",
      gpa: "3.7",
    },
    skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
    experience: [
      {
        title: "Frontend Developer",
        company: "Tech Corp",
        description: "Developed user-facing features for web applications.",
      },
      {
        title: "Junior Developer",
        company: "Dev Studio",
        description: "Worked on back-end services and APIs.",
      },
    ],
  };

  // Return resume data (no longer depend on `username`)
  res.status(200).json(resumeData);
}




  