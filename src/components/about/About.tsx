import React from 'react';
import { AboutHero } from './AboutHero';
import { StorySection } from './StorySection';
import { ValuesSection } from './ValuesSection';

export function About() {
  return (
    <section id="sobre">
      <AboutHero />
      <StorySection />
      <ValuesSection />
    </section>
  );
}