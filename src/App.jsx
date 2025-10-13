import React from 'react';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { About } from './components/sections/About';
import { Activities } from './components/sections/Activities';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { References } from './components/sections/References';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { FloatingCodes } from './components/ui/FloatingCodes';
import { getActivities, getEducation, getExperience, references } from './data/experience';
import { getProjects } from './data/projects';
import { translations } from './data/translations';
import { useLanguage } from './hooks/useLanguage';

const App = () => {
  const { language, toggleLanguage } = useLanguage();
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const t = translations[language];
  const projects = getProjects(language);
  const experience = getExperience(language);
  const education = getEducation(language);
  const activities = getActivities(language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Floating Code Snippets Background */}
      <FloatingCodes />
      
      {/* Navigation */}
      <Navigation 
        t={t} 
        language={language} 
        toggleLanguage={toggleLanguage} 
        scrollToSection={scrollToSection} 
      />

      {/* Hero Section */}
      <Hero t={t} scrollToSection={scrollToSection} />

      {/* About Section */}
      <About t={t} />

      {/* Experience Section */}
      <Experience t={t} experience={experience} />

      {/* Projects Section */}
      <Projects t={t} projects={projects} />

      {/* Education Section */}
      <Education t={t} education={education} />

      {/* Activities Section */}
      <Activities t={t} activities={activities} />

      {/* References Section */}
      <References t={t} references={references} />

      {/* Contact Section */}
      <Contact t={t} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
};

export default App;
