function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="title-services">O quê ofereço?</h2>

        <p className="paragraph-services">
          Desenvolvimento de websites responsivos que harmonizam tecnologia e
          criatividade. Códigos limpos que garantem acessibilidade fácil em
          futuras manutenções e na adição de novos recursos.
        </p>

        <div className="container-card-services">
          <div className="card-services">
            <h2 className="title-card-services">Desempenho</h2>

            <p className="paragraph-card-services">
              Site com pontuação acima de 90% no pagespeed/lighthouse.
            </p>
          </div>

          <div className="card-services">
            <h2 className="title-card-services">Otimização</h2>

            <p className="paragraph-card-services">
              Até 90% de redução do bootstrap não utilizado e arquivos
              estáticos.
            </p>
          </div>

          <div className="card-services">
            <h2 className="title-card-services">SEO</h2>

            <p className="paragraph-card-services">
              Alcance de posicionamento nos mecanismos de busca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
