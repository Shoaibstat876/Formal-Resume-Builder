// src/app/components/Skills.tsx
import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="text-gray-700">
        <ul className="list-disc list-inside">
          <li>JavaScript (React, Node.js)</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
