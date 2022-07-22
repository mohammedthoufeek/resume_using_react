import React from "react"
import Header from './components/header/header'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
import Service from './components/serivce/service'
import Testimonials from './components/testimonials/testimonials'


const App=()=>{
    return(
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/> 
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    )

}

export  default App;