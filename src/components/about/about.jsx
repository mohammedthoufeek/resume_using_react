import React from 'react'
import './about.css'
import image from '../../assests/Photo-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={image} alt='my_photo'></img>
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>just started</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>Just 3 client</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>Just 5 projects</small>
              </article>

              
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam? Aperiam tempore repudiandae nihil voluptate? Facere, quas! Minus rerum nostrum minima consequuntur maxime aspernatur totam mollitia, commodi ab quasi quos.</p>
              <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default about