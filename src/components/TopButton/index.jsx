import React, { useState, useLayoutEffect } from 'react';
import Icon from '../../images/icons/arrow-up.svg';

function TopButton() {
  const [btnIsVisible, setBtnIsVisible] = useState(true);

  useLayoutEffect(() => {
    const handleScroll = () => setBtnIsVisible(window.scrollY > 100);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="container-btnTop">
      <button
        className={`btnTop ${btnIsVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <img src={Icon} width="16" height="16" alt="Voltar ao top da página" />
      </button>
    </div>
  );
}

export default TopButton;
