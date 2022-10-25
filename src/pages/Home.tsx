import React from 'react';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/layout/Layout';
import { Projects } from '../components/Projects/Projects';

export const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}
