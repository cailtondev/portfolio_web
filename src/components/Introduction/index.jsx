const Introduction = () => {
  return (
    <section className="introduction container">
      <h1>
        Vou criar soluções Inovadoras e Eficientes para te ajudar atrair mais
        clientes a atingir seus objetivos de negócios<span>_</span>
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
