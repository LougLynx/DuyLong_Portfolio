import React, { useEffect } from 'react';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { About } from './components/sections/About';
import { Activities } from './components/sections/Activities';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { References } from './components/sections/References';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Chatbot } from './components/ui/Chatbot';
import { FloatingCodes } from './components/ui/FloatingCodes';
import { getCertificates } from './data/certificates';
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
  const certificates = getCertificates(language);
  const activities = getActivities(language);

  // Set page title based on language
  useEffect(() => {
    document.title = language === 'en' ? 'Duy Long Tran - Business Analyst' : 'Trần Duy Long - Chuyên viên Phân tích Kinh doanh';
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
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
      <Hero t={t} scrollToSection={scrollToSection} language={language} />

      {/* About Section */}
      <About t={t} scrollToSection={scrollToSection} />

      {/* Experience Section */}
      <Experience t={t} experience={experience} scrollToSection={scrollToSection} />

      {/* Projects Section */}
      <Projects t={t} projects={projects} scrollToSection={scrollToSection} />

      {/* Education Section */}
      <Education t={t} education={education} />

      {/* Certificates Section */}
      <Certificates t={t} certificates={certificates} scrollToSection={scrollToSection} />

      {/* Activities Section */}
      <Activities t={t} activities={activities} scrollToSection={scrollToSection} />

      {/* References Section */}
      <References t={t} references={references} />

      {/* Contact Section */}
      <Contact t={t} scrollToSection={scrollToSection} />

      {/* Footer */}
      <Footer t={t} />

      {/* AI Chatbot */}
      <Chatbot language={language} />
    </div>
  );
};

export default App;
