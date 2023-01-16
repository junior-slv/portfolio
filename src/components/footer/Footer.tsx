import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Junior</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>
                
                <li>
                    <a href="#portfolio" className="footer__link">Portifólio</a>
                </li>
        
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/junior_gbc/" className="home__social-icon" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/djuniors/" className="home__social-icon" target="_blank">
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/junior-slv" className="home__social-icon" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Dirceu Junior. Todos os direitos reservados</span>
        </div>
    </footer>
  )
}

export default Footer