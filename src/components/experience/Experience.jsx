import React from 'react'
import './experience.css'
import {BsFillCalendarCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My skills</h5>
      <h2> My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          {/* End of Frontend */}

        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <h4>Insomnia</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience
