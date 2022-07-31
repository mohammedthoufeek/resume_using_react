import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container service__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/Ux design</h3>
          </div>
          <ul className='service__ul'>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            
          </ul>
        </article>
        {/* end of ui */}

        <article className='service'>
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className='service__ul'>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>

      {/* end of web */}
        <article className='service'>
          <div className="service__head">
            <h3>Coding</h3>
          </div>
          <ul className='service__ul'>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__ul-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            
          </ul>
        </article>
        {/* end of coding */}
      </div>
    </section>
  )
}

export default service