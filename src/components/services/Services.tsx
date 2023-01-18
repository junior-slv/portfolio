import React, { useState } from 'react'
import './Services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index:any) => {
        setToggleState(index)
    }
  return (

    <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">O que eu ofereço</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web<br/> design</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>Veja mais {" "} <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">
                            Dê o destaque que seu negócio merece, <br/>
                            tire as idéias do papel!
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Páginas web com design moderno
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Responsividade para todo tipo de aparelho</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Incremente sua credibilidade</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Facilidade para ser encontrado</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Marcar presença online 24 horas </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Fortalecer a marca</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Product<br/> designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>Veja mais {" "} <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur officiis voluptatem 
                            ea unde deleniti, eum aperiam nisi nostrum vitae eius quae esse sit totam fugit! 
                            Quia deserunt illo iusto!
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi neque eius eveniet voluptas laboriosam illo q
                                uia non accusantium? Rem adipisci consequuntur, sequi placeat dolore libero odit nesciunt error beatae!</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor placeat dolore libero odit nesciunt error beatae!</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi neque eius eveniet voluptas laboriosam illo q
                                uia non accusantium? Rem adipisci consequuntur, sequi placeat dolore libero odit nesciunt error beatae!</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Product<br/> designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>Veja mais {" "} <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur officiis voluptatem 
                            ea unde deleniti, eum aperiam nisi nostrum vitae eius quae esse sit totam fugit! 
                            Quia deserunt illo iusto!
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi neque eius eveniet voluptas laboriosam illo q
                                uia non accusantium? Rem adipisci consequuntur, sequi placeat dolore libero odit nesciunt error beatae!</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi neque eius eveniet voluptas laboriosam illo q
                                uia non accusantium? Rem adipisci consequuntur, sequi placeat dolore libero odit nesciunt error beatae!</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi neque eius eveniet voluptas laboriosam illo q
                                uia non accusantium? Rem adipisci consequuntur, sequi placeat dolore libero odit nesciunt error beatae!</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Services