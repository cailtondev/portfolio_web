import Icon_1 from '../../images/icons/instagram.svg';
import Icon_2 from '../../images/icons/github.svg';
import Icon_3 from '../../images/icons/linkedin.svg';
import Icon_4 from '../../images/icons/figma.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-more">
          <h2 className="title-footer">@Cailton_Oliveira</h2>
          <p className="paragraph-footer">
            Desenvolvimento de <b>Websites</b>, <b>UX Design</b> e{' '}
            <b>Templates</b>.
          </p>
        </div>

        <div className="footer-social-icons">
          <ul>
            <li>
              <a href="https://www.instagram.com/cailton.dev/">
                <img
                  src={Icon_1}
                  width="24"
                  height="24"
                  alt="Acessar instagram"
                />
              </a>
            </li>

            <li>
              <a href="https://github.com/cailtondev">
                <img src={Icon_2} width="24" height="24" alt="Acessar github" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/cailtonoliveira/">
                <img
                  src={Icon_3}
                  width="24"
                  height="24"
                  alt="Acessar linkedin"
                />
              </a>
            </li>

            <li>
              <a href="https://www.figma.com/@cailton">
                <img src={Icon_4} width="24" height="24" alt="Acessar figma" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="copywriting">© By Cailton Oliveira - 2023</p>
    </footer>
  );
};

export default Footer;
