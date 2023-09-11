import React from 'react';
import Introduction from '../../components/Introduction';
import Services from '../../components/Services';
import Projects_home from '../../components/Projects_home';
import About from '../../components/About';

function Home() {
  return (
    <>
      <Introduction />
      <Services />
      <Projects_home />
      <About />
    </>
  );
}

export default Home;
