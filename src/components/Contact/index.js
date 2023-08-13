import React, { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ebnxkqr',
        'contact_form',
        form.current,
        '6uKjDJt398ETFNtQJ'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('Message sent')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello and welcome to my contact page! I'm thrilled to connect with
            fellow enthusiasts, learners, and collaborators in the tech world.
            Whether you have questions, want to discuss a project, or just want
            to say hello, I'd love to hear from you. 
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="info-map">
        Mensur Khalid,
        <br />
        Hayahulet,
        <br />
        Addis Ababa <br />
        Ethiopia <br />
        <br />
        <span>mensurk3000@gmail.com</span>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Contact
