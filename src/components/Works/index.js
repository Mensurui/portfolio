import React, { useRef, useState, useEffect } from 'react'
import './index.scss'
import booksShelfApp from '../../assets/images/booksShelfApp.png'
import diabeticsApp from '../../assets/images/diabeticsApp.jpg'
import vanLines from '../../assets/images/vanLines.png'
import webApp from '../../assets/images/webApp.png'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAndroid,
  faAngrycreative,
  faAngular,
  faAws,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faAnchor, faFire } from '@fortawesome/free-solid-svg-icons'
import JavascriptIcon from '@mui/icons-material/Javascript'
export default function Card() {
  const cardRef = useRef(null)
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const sizesboxRef = useRef(null)
  const purchaseRef = useRef(null)

  function handleGitHubOne() {
    window.open('https://github.com/Mensurui/bookMem', '_blank')
  }
  function handleGitHubTwo() {
    window.open('https://github.com/Mensurui/diabeticsApp', '_blank')
  }
  function handleGitHubThree() {
    window.open('https://github.com/Mensurui/a-to-z-comm', '_blank')
  }
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="scrollable-container">
      <h1 className="heading">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={12}
        />
      </h1>
      <div className="cards-grid">
        <div className="card" ref={cardRef}>
          <img
            ref={imgRef}
            src={diabeticsApp}
            alt="Diabetics App"
            className="sneaaker-img"
          />
          <h1 className="title" ref={titleRef}>
            React Native Mobile Application
          </h1>
          <p ref={descRef}>
            In this project I built a mobile app for storing, retrieving and
            graphing blood sugar level information for Diabetic people.
          </p>
          <ul className="sizes-box" ref={sizesboxRef}></ul>
          <div className="button-box" ref={purchaseRef}>
            <button className="purchase" onClick={handleGitHubTwo}>
              Check it out
            </button>
          </div>
        </div>

        <div className="card" ref={cardRef}>
          <img
            ref={imgRef}
            src={booksShelfApp}
            alt="Book-Shelf App"
            className="sneaaker-img"
          />
          <h1 className="title" ref={titleRef}>
            React JS web application
          </h1>
          <p ref={descRef}>
            In this project I built a web app for renting, being a member and
            lending of a book store.
          </p>
          <ul className="sizes-box" ref={sizesboxRef}></ul>
          <div className="button-box" ref={purchaseRef}>
            <button className="purchase" onClick={handleGitHubOne}>
              Check it out
            </button>
          </div>
        </div>

        <div className="card" ref={cardRef}>
          <img
            ref={imgRef}
            src={vanLines}
            alt="Van lines"
            className="sneaaker-img"
          />
          <h1 className="title" ref={titleRef}>
            Flutter Mobile Application
          </h1>
          <p ref={descRef}>
            In this project, we built a mobile app for ordering cars for
            transportation, facilitating in-app payments, and enabling users to
            rate their experience within the app.
          </p>
          <ul className="sizes-box" ref={sizesboxRef}></ul>
          <div className="button-box" ref={purchaseRef}>
            <button className="purchase" onClick={() => window.alert('Can not show due to copyright')}>
              Check it out
            </button>
          </div>
        </div>

        <div className="card" ref={cardRef}>
          <img
            ref={imgRef}
            src={webApp}
            alt="Web-Application"
            className="sneaaker-img"
          />
          <h1 className="title" ref={titleRef}>
            Web Application for a company
          </h1>
          <p ref={descRef}>
            In this project, I built a web app for an export company.
          </p>
          <ul className="sizes-box" ref={sizesboxRef}></ul>
          <div className="button-box" ref={purchaseRef}>
            <button className="purchase" onClick={handleGitHubThree}>
              Check it out
            </button>
          </div>
        </div>
      </div>
      <h1 className="heading">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['S', 'k', 'i', 'l', 'l', 's', 'e', 't']}
          idx={19}
        />
      </h1>
      <div className="skills-grid">
      <div className="card">
        <h1 className="title">Programming Languages</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPython} /> Python
          </li>
          <li>
            <JavascriptIcon style={{ fontSize: '25px' }} /> Javascript
          </li>
          <li>
            <FontAwesomeIcon icon={faAndroid} /> Kotlin
          </li>
        </ul>
      </div>

      <div className="card">
        <h1 className="title">Frontend Development</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faReact} />
            React js
          </li>
          <li>
            <FontAwesomeIcon icon={faAngrycreative} />
            React Native
          </li>
          <li>
            <FontAwesomeIcon icon={faAngular} />
            Angular
          </li>
        </ul>
      </div>

      <div className="card">
        <h1 className="title">Cloud Platforms</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFire} /> Firebase
          </li>
          <li>
            <FontAwesomeIcon icon={faAnchor} /> Supabase
          </li>
          <li>
            <FontAwesomeIcon icon={faAws} /> AWS
          </li>
        </ul>
      </div>
        <h1 className="title">And more...</h1>
    </div>
    </div>
  );
}