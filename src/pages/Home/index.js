import React from 'react';
import Introduction from '../../components/Introduction';
import Services from '../../components/Services';
import Projects_home from '../../components/Projects_home';
import About from '../../components/About';
import Contact from '../../components/Contact';

function Home() {
  return (
    <>
      <Introduction />
      <Services />
      <Projects_home />
      <About />
      <Contact />
    </>
  );
}

export default Home;
