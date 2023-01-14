import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Certificações</h3>
            <span className="about_subtitle">6+ Cursos na área</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completos</h3>
            <span className="about_subtitle">8+ projetos concluídos</span>
        </div>

        <div className="about__box">
        <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Atendimento</h3>
            <span className="about_subtitle">Sempre a disposição </span>
        </div>
    </div>
  )
}

export default Info