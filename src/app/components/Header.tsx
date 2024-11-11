// src/app/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-6 shadow-lg flex items-center justify-between">
      <h1 className="text-3xl font-extrabold tracking-tight">Resume Builder</h1>
      <div className="flex items-center space-x-4">
        {/* Add optional elements like a logo or profile icon here */}
      </div>
    </header>
  );
};

export default Header;




