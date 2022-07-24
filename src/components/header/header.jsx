import React from 'react'
import './header.css'
import CTA from'./CTA'
import photo from '../../assests/Photo.jpg'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>MOHAMMED THOUFEEK A</h1>
        <h5 className='text-light'>REACT LEARNER</h5>  
        <CTA/>
        <HeaderSocial/>   
        <div className='me'>
          <img src={photo} alt="me" />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default header