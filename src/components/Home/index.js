import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Log from '../../assets/images/log.png';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [' ','M', 'e', 'n', 's', 'u', 'r'];
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ];

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(idTimeOut);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          </h1>
          <h2>Web Application / Mobile Application Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img src={Log} alt="logo" className="logo-container" />
      </div>

      <Loader type="cube-transition" />
    </>
  );
};


export default Home;
