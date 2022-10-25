import React from 'react';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { Nav } from '../components/Nav/Nav';
import { Projects } from '../components/Projects/Projects';

export const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
