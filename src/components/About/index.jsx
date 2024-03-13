import React from 'react';
import Profile from '../../images/profile/profile-resume.webp';
import useConnectApi from '../useConnectApi';

function About() {
  const { data, error } = useConnectApi('resume');

  if (error) {
    console.error('Erro ao buscar dados da API:', error);
    return (
      <p style={{ textAlign: 'center' }}>
        Ocorreu um erro ao buscar os dados, recarregue a página.
      </p>
    );
  }

  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <figure className="col-md-5 image-about">
            <img
              className="img-fluid"
              src={Profile}
              width="295"
              height="395"
              alt="Imagem de perfil"
            />
          </figure>

          {data.map((resume) => (
            <div key={resume.id} className="col-md-7 container-about-info">
              <h2 className="title-about">
                {resume.title}
                <span>_</span>
              </h2>

              <p
                className="paragraph"
                dangerouslySetInnerHTML={{ __html: resume.paragraph }}
              />

              <button
                className="component-buttom btn  btn-light"
                onClick={() =>
                  window.open(
                    'https://gpdbdgszndzhiitlexxz.supabase.co/storage/v1/object/sign/portfolio_storage/cv-cailton-oliveira.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZS9jdi1jYWlsdG9uLW9saXZlaXJhLnBkZiIsImlhdCI6MTcwNzMyODYxMywiZXhwIjo0ODI5MzkyNjEzfQ.n2eyTErgA8IelORiea_AwxdGvmVEBnsaTjIh-PB161M&t=2024-02-07T17%3A56%3A53.825Z',
                    '_blank',
                  )
                }
              >
                Curriculo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-filetype-pdf"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <span className="text-background">ABOUT</span>
    </section>
  );
}

export default About;
