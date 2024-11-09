// src/app/page.tsx
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <main className="max-w-2xl mx-auto space-y-6">
        <PersonalInfo />
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
