import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ProgrammingSection } from '../sections/ProgrammingSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ProcessSection } from '../sections/ProcessSection';
import { PhotographySection } from '../sections/PhotographySection';
import { EducationCertificatesSection } from '../sections/EducationCertificatesSection';
import { NextChapterSection } from '../sections/NextChapterSection';
import { CinematicFooter } from '../components/ui/CinematicFooter';

export const HomePage = () => {
  return (
    <div className="home-page-portfolio">
      <main>
        <HeroSection />
        <AboutSection />
        <ProgrammingSection />
        <ProjectsSection />
        <ProcessSection />
        <PhotographySection />
        <EducationCertificatesSection />
        <NextChapterSection />
      </main>
      <CinematicFooter />
    </div>
  );
};

export default HomePage;
