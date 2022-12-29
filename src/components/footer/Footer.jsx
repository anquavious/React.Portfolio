import React from 'react';
import './footer.css';
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ANQUAVIOUS</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/anquavious.grant'><BsFacebook/></a>
        <a href='https://www.instagram.com/debonair.charm/'><BsInstagram/></a>
        <a href='https://twitter.com/debonair_charm'><BsTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; ANQUAVIOUS Portfolio. All rights reserved.</small>
      </div>

      .
    </footer>
  )
}

export default Footer;
