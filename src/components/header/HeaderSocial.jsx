import React from 'react'
import {BsLinkedin ,BsGithub, BsInstagram} from 'react-icons/bs'



const HeaderSocial = () => {
  return (
    <div className='header__socials' >
        <a href='https://www.linkedin.com/in/mohammed-thoufeek-a-006387200/' target=' _blank'><BsLinkedin /></a>
        <a href='https://github.com/mohammedthoufeek' target=' _blank'><BsGithub/></a>
        <a href='https://www.instagram.com/mhd_thoufeek01/'  target=' _blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial;