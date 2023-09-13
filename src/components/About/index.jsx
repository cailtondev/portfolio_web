import Profile from '../../images/profile/profile-resume.webp';
import Icon from '../../images/icons/filetype-pdf.svg';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <figure className="col-md-5 image-about">
            <img className="img-fluid" src={Profile} alt="Imagem de perfil" />
          </figure>

          <div className="col-md-7 container-about-info">
            <h2 className="title-about">
              Quem está por trás dessa mente <span>criativa</span>?
            </h2>

            <p className="paragraph">
              Olá. Meu nome é <b>Cailton</b> e atuo na área de{' '}
              <b>Desenvolvimento Web Full-Stack</b>.
            </p>

            <p className="paragraph">
              Iniciei minha carreira na área de T.I em 2018, e venho me
              aprimorando ainda mais através de cursos, livros e bootcamps
              oferecidos por empresas renomadas do mercado, como{' '}
              <b>Santander</b>,<b>Inter</b>, <b>Philips</b>, <b>Take Blip</b> e{' '}
              <b>Oracle</b>.
            </p>

            <p className="paragraph">
              No momento, estou atuando como <b>Freelancer</b> e{' '}
              <b>trabalhos voluntários</b>.
            </p>

            <p className="paragraph">
              <b>
                Estou disponível para vagas CLT ou Freelancer,
                preferencialmente, com foco em Front-End.
              </b>
            </p>

            <button className="component-buttom btn  btn-light">
              <img
                src={Icon}
                width="16"
                height="16"
                alt="Baixar currículo pdf"
              />
              Curriculo
            </button>
          </div>
        </div>
      </div>

      <div className="container-text-effect">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <span className="text-effect" text-style="RESUME">
          RESUME
        </span>
      </div>
    </section>
  );
}

export default About;
