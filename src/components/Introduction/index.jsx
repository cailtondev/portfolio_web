const Introduction = () => {
  return (
    <section className="introduction container">
      <h1>
        Vou criar o seu site com harmonia e criatividade para atingir seus
        objetivos de negócios<span>_</span>
      </h1>

      <button
        className="btn-contact"
        onClick={() => {
          window.open('https://wa.me/77998249382');
          window.scrollTo(0, 0);
        }}
      >
        Fale comigo
      </button>
    </section>
  );
};

export default Introduction;
