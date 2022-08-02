import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaGithubAlt} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
       <a href='#header' className='footer__logo'>MOHAMMED THOUFEEK A</a>           
       
       <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer__socials">
        <a href='https://www.instagram.com/mhd_thoufeek01/'><FiInstagram/></a>
        <a href='https://github.com/mohammedthoufeek'><FaGithubAlt/></a>
        <a href='https://www.linkedin.com/in/mohammed-thoufeek-a-006387200/'><BsLinkedin/></a>
       </div>

       <div className="footer__copyright">
          <small>&copy; MOHAMMED THOUFEEK A. All rights reserved.</small>
       </div>
    </footer>
  )
}

export default footer