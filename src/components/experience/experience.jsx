import React from 'react'
import'./experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small> 
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>BASIC</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

       {/*end of frontend*/}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>SQL</h4>
                <small className='text-light'>BASIC</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience