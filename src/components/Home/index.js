import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders'


const Home =()=>{

const[letterClass] =useState('text-animate')
const nameArray =['R', 'a', 'h', 'u', 'l']
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
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                 
                </h1>
                <h2>Frontend Developer /Backend java</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
            <Loader type="pacman" />
        </div>
    )
}

export default Home