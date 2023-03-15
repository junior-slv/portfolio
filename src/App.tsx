import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portifolio from './components/portifolio/Portifolio'
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return ( 
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Portifolio/>
        <Qualification/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
