/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './nav.css'
import {AiTwotoneHome}from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {ImBook} from 'react-icons/im'
import {MdDesignServices, MdContacts} from 'react-icons/md'
import { useState } from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#header" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiTwotoneHome/></a>
      <a href="#about"  onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBook/></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><MdDesignServices/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContacts/></a>

    </nav>
  )
}

export default nav