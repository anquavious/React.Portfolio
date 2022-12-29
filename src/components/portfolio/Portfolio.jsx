import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.jpeg'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.jpeg'
import IMG6 from '../../assets/IMG6.png'
import IMG7 from '../../assets/IMG7.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Team Profile Generator',
    link: 'https://anquavious.github.io/Team-Profile-Generator-Application/',
    github: 'https://github.com/anquavious/Team-Profile-Generator-Application'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Weather Dashboard',
    link: 'https://anquavious.github.io/Weather-Dashboard/',
    github: 'https://github.com/anquavious/Weather-Dashboard'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Workday Scheduler',
    link: 'https://anquavious.github.io/Workday-Scheduler/',
    github: 'https://github.com/anquavious/Workday-Scheduler'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Code Quiz',
    link: 'https://anquavious.github.io/Code-Quiz/',
    github: 'https://github.com/anquavious/Code-Quiz'
  },
  {
    id: 5,
    image: IMG5,
    ttile: 'Password Generator',
    link: 'https://anquavious.github.io/Password-Generator',
    github: 'https://github.com/anquavious/Password-Generator'
  }, 
  {
    id: 6,
    image: IMG6,
    title: 'Text Editor',
    link: 'https://text-editor-ag.herokuapp.com/',
    github: 'https://github.com/anquavious/text-editor'
  },
  {
    id: 7,
    image: IMG7,
    title: '',
    link: 'https://peaceful-refuge-27622.herokuapp.com/',
    github: 'https://github.com/anquavious/React-Portfolio'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, link, github}) => {
            return (
              <article key={id}  className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={link} className='btn' target='_blank' rel="noreferrer">Click Me</a>
              <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
