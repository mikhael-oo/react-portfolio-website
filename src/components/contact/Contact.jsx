import React, {useRef} from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvcw6w7', 'template_ylgm18f', form.current, '3v4mCUFFoayJ1yOdf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>mikhaelolat@gmail.com</h5>
            <a href="mailto:mikhaelolat@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Mikhael</h5>
            <a href="https://www.linkedin.com/in/mikhael-opeyemi-olatunji-33a8a61a0/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+16136026403</h5>
            <a href="https://api.whatsapp.com/send?phone+16136026403" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact