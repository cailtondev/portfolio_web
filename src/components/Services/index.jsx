// import Icon_web from '../../images/icons/Icon-web.svg';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="title-services">
          O quê <span className="background-effect-span">ofereço?</span>
        </h1>

        <p className="paragraph-services">
          Desenvolvimento de sites responsivos, combinando tecnologia e
          criatividade de forma harmoniosa.
        </p>

        <p className="paragraph-services">
          Códigos limpos, permitindo fácil acesso em manutenções futuras e
          adições de novos recursos.
        </p>

        <div className="container-card-services">
          <div className="card-services">
            <h2 className="title-card-services">Web Design</h2>

            <p className="paragraph-card-services">
              Elaboração de web design criativos e responsivos.
            </p>
          </div>

          <div className="card-services">
            <h2 className="title-card-services">Desenvolvimento Web</h2>

            <p className="paragraph-card-services">
              Desenvolvimento web com codificação super suave.
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
