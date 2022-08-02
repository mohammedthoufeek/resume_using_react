import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiInstagramLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i7yicbw', 'template_zl2lm2b', form.current, '28AjKegQKZyj66htw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>www.thoufeekabc@gmail.com</h5>
            <a href='mailto:www.thoufeekabc@gmail.com' rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiInstagramLine className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>mhd_thoufeek01</h5>
            <a href='https://www.instagram.com/mhd_thoufeek01/' rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-7339201097</h5>
            <a href="https://api.whatsapp.com/send?phone=7339201097" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder="Your full name" required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact