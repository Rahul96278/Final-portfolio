import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJava,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home =()=>{

const[letterClass] =useState('text-animate')
const nameArray =[' ','R', 'a', 'h', 'u', 'l']
const jobArray=['o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r']




    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                 <span className={letterClass}>H</span>
                 <span className={`${letterClass} _12`}>i,</span>
                 <br /> 
                 <span className={`${letterClass} _13`}>I</span>
                 <span className={`${letterClass} _14`}>'m</span>
               
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                
                <br />
                <img src={LogoTitle} alt='developer' className="newlogo"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                className="newfont"
                />
                 
                </h1>
                <h2>Frontend Developer /Backend java</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
            
            <Loader type="pacman" />
        </div>
    )
}

export default Home
