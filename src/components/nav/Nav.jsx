import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {ImUser} from 'react-icons/im'
import {FaBookOpen} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active': ''}><ImUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaBookOpen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav
