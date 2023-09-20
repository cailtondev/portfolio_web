import Icon_linkedin from '../../images/icons/linkedin.svg';
import Icon_instagram from '../../images/icons/instagram.svg';
import Icon_github from '../../images/icons/github.svg';

import Image_background from '../../images/effect-background/background-effect.webp';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="container-contact background">
          <div className="container-contact">
            <div className="row row-container">
              <section className="col-sm-12 col-md-9 container-form-contact">
                <h2 className="title-contact">Fale Comigo</h2>

                <p className="paragraph-contact">
                  Mande-me um email, responderei o mais rápido possível.
                </p>

                <form action="https://formspree.io/f/mzbqogrz" method="POST">
                  <div className="user-box">
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="name">Nome:</label>
                  </div>

                  <div className="user-box">
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="email">Email:</label>
                  </div>

                  <div className="user-box">
                    <input
                      type="text"
                      name="message"
                      data-ms-editor="true"
                      id="message"
                      required
                    />
                    <label htmlFor="name">Mensagem:</label>
                  </div>

                  <button type="submit">ENVIAR</button>
                </form>
              </section>

              <aside className="container-contact-more">
                <h2 className="title-contact-more">Informações</h2>

                <p className="paragraph-contact-more">cailton.dev@gmail.com</p>

                <p className="paragraph-contact-more">+55 (77) 9 98249382</p>

                <p className="paragraph-contact-more">Poções-Ba, 45260-000</p>

                <ul className="container-social-icons">
                  <li className="nav-link">
                    <a
                      href="https://www.linkedin.com/in/cailtonoliveira/"
                      className="social-icon"
                    >
                      <img
                        className="icon-md"
                        src={Icon_linkedin}
                        alt="Acessar Linkedin"
                        width="20"
                        height="20"
                      />
                    </a>
                  </li>

                  <li className="nav-link">
                    <a
                      href="https://www.instagram.com/cailton.dev/"
                      className="social-icon"
                    >
                      <img
                        className="icon-md"
                        src={Icon_instagram}
                        alt="Acessar Instagram"
                        width="20"
                        height="20"
                      />
                    </a>
                  </li>

                  <li className="nav-link">
                    <a
                      href="https://github.com/cailtondev"
                      className="social-icon"
                    >
                      <img
                        className="icon-md"
                        src={Icon_github}
                        alt="Acessar Github"
                        width="20"
                        height="20"
                      />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <img
            className="image-background"
            src={Image_background}
            alt="Image for background style "
            width="290"
            height="290"
          />
        </div>
        <span className="text-background">CONTACT</span>
      </div>
    </div>
  );
}

export default Contact;
