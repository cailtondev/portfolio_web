import React from 'react';
import Introduction from '../../components/Introduction';
import Services from '../../components/Services';
import Technology from '../../components/Technology';
import Projects_home from '../../components/Projects_home';
import About from '../../components/About';
import Contact from '../../components/Contact';

function Home() {
  return (
    <>
      <Introduction />
      <Services />
      <Technology />
      <Projects_home />
      <About />
      <Contact />
    </>
  );
}

export default Home;
