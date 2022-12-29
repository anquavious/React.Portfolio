import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div> 

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>0+ Worldwide</small>
          </article>


        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>10+ Completed</small>
        </article>
      </div>

      <p>
      Accomplished and dynamic IT professional with years of experience in managing and supporting IT helpdesk procedure and processes. Well versed in a variety of common operating systems, applications, and hardware with proven ability to master new tools and technologies quickly. 
      In depth knowledge of evaluating tickets to determine trends and escalation path. Efficient and highly motivated with a passion for software programming and engineering.
      </p>

      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  </div>
</section>
  )
}

export default About;
