"use client";
import { useRouter } from "next/navigation"; // Import from next/navigation
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

const Home = () => {
  const router = useRouter();
  const username = "your-username"; // This should come from user data or props

  // Handle navigation to the resume page
  const handleNavigation = () => {
    router.push(`/${username}/resume`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <main className="max-w-2xl mx-auto space-y-6">
        <PersonalInfo />
        <Experience />
        <Education />
        <Skills />
        
        {/* "Go to Resume" Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleNavigation}
            className="py-3 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition-transform"
          >
            Go to Resume
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;


