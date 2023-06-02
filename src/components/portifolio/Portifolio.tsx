import React, { useState } from "react";
import "./Portifolio.css";

const Portifolio = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portifólio</h2>
      <span className="section__subtitle">
        Projetos relevantes que já trabalhei
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bx-money-withdraw services__icon"></i>
            <h3 className="services__title">
              Currency
              <br /> now
            </h3>
            <p>Serviço de câmbio em tempo real</p>
            <br />
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                <h2>Sobre o projeto</h2>
                <p>
                  Um conversor de câmbio que utiliza TypeScript e React. Com uma
                  interface dinâmica e responsiva, os usuários podem converter
                  diferentes tipos de moedas.
                </p>
                <br />
                <h2>Documentação e código fonte: </h2>
                <h3>
                  <a
                    href="https://github.com/junior-slv/currency-now"
                    target="_blank"
                  >
                    Github
                  </a>
                </h3>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-trophy services__icon"></i>
            <h3 className="services__title">Hackathons</h3>
            <p>Informações sobre os hackathons que participei.</p>
            <br />
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Hackathon</h3>
              <p className="services__modal-description">
                Hackathons são eventos em que equipes criam soluções inovadoras
                em pouco tempo. São oportunidades para aprender, fazer
                networking e mostrar habilidades em projetos tecnológicos.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <h2></h2>
                  <p className="services__modal-info">
                    Participante do Ideathon Smart Agro 2023
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Participante do Hackathon Smart Agro 2023
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    3º lugar de campeão no Hackathon GreenTech 2023
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="bx bx-leaf services__icon"></i>
            <h3 className="services__title">
              Horta <br /> solidária
            </h3>
            <p>Projeto de implementação do sistema para a horta solidária.</p>
            <br />
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            Veja mais{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Hackathon</h3>
              <p className="services__modal-description">
                A Horta Solidária em Apucarana ajuda famílias vulneráveis e
                pessoas idosas, oferecendo um espaço para cultivar alimentos e
                ter um hobby produtivo. Promove segurança alimentar, autonomia e
                bem-estar, fortalecendo a comunidade local.
              </p>
              <ul className="services__modal-services grid">
                <h2>Informatização</h2>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Meu projeto visa informatizar o cadastro, controle e doações
                    da Horta Solidária por meio de uma plataforma web
                    interativa. Com essa solução, buscamos otimizar o
                    gerenciamento, promover interação e aumentar a eficiência na
                    gestão da iniciativa.
                  </p>
                </li>
                <li>
                  <h2>Documentação e código fonte: </h2>
                  <h3>
                    <a
                      href="https://github.com/junior-slv/horta-solidaria"
                      target="_blank"
                    >
                      Github
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
