import React from 'react'
import Common from './Common'
import imgweb from '../src/images/Website-Development.jpg'
const About = () => {
  return (
    <>
      <Common name=' Welcome to About Page' imgsrc={imgweb} visit='/Contact' btnname='Contact Us'/>
    </>
  )
}

export default About
