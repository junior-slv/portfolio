import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index:any) => {
        setToggleState(index)
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualificação</h2>
        <span className="section__subtitle">Jornada pessoal</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex" >
                    <i className="uil uil-graduation-cap qualification__icon">                        
                    </i>{" "}Educação
                </div>
            </div>

            <div className="qualification__section">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title">Engenharia de Software</h3>
                            <span className="qualification__subtitle">Universidade Filadélfia Londrina - UNIFIL</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i> 2022 - Presente
                            </div>

                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Programação WEB</h3>
                            <span className="qualification__subtitle">Rocketseat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i> 2022 - Presente
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Inglês</h3>
                            <span className="qualification__subtitle">Academia Washington</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i> 2019 - 2021
                            </div>
                        </div>
                        <div>
                            <h3 className="qualification__title">Técnico em Administração</h3>
                            <span className="qualification__subtitle">Colégio Ceravolo</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i> 2017 - 2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

  )
}

export default Qualification