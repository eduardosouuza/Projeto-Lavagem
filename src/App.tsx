import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/about/About';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </Layout>
  );
}

export default App;