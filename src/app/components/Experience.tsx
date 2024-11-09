// src/app/components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="text-gray-700">
        <h3 className="font-semibold">Sindh Education and Literacy Department</h3>
        <p>December 14, 2022 - Present</p>
        <p>Work as Junior Elementary School Teacher (BPS-14)</p>
      </div>
      <hr className="my-4" />
      <div className="text-gray-700">
        <h3 className="font-semibold">Sindh Education and Literacy Department</h3>
        <p>June 6, 2022 - December 14, 2022</p>
        <p>Work as Primary School Teacher (BPS-14) </p>
      </div>
      <hr className="my-4" />
      <div className="text-gray-700">
        <h3 className="font-semibold">Sindh Medical Store</h3>
        <p>Feb 16, 2016 - June 22, 2018</p>
        <p>Work as Computer Operator</p>
      </div>
      <hr className="my-4" />
      <div className="text-gray-700">
        <h3 className="font-semibold"> Star Trading Co</h3>
        <p>March 14, 2013 - August 21, 2015</p>
        <p>Work as Telephone Operator and Front Office Executive.</p>
      </div>
    </section>
  );
};

export default Experience;
