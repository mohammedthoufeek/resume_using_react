import React from 'react'
import cv from '../../assests/MOHAMMED THOUFEEK A.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>DOWNLOAD CV</a>
        <a href='#contact' className='btn btn-primary'>LET's TALK</a>        
    </div>
  )
}

export default CTA;
