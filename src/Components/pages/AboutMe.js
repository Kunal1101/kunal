import React from 'react'
import PageDesc from '../PageDesc'
import Footer from '../Footer'


const AboutMe = () => {
  return (
    <div>
      <PageDesc title="About" description="To know more about. DIG IN!" />
      <p className='aboutMeText text-white'>As a <span className='text-white'>front end developer</span>, I bring a proven track record of crafting visually stunning and highly functional web applications. Proficient in React JS, JavaScript, jQuery, HTML, CSS I specialize in creating responsive and user-friendly interfaces that seamlessly integrate with backend systems.
      </p>
      <p className='aboutMeText text-white my-4'>Throughout my career, I have collaborated closely with cross-functional teams, including designers and backend developers, to deliver projects on time and within budget. My passion for staying updated with the latest trends and technologies in frontend development drives me to continuously expand my skill set and adopt best practices.</p>
      <p className='aboutMeText text-white'>My expertise extends to modern frontend frameworks such as React, Angular, and Vue.js, allowing me to build dynamic and interactive experiences that meet both client requirements and user expectations. I am adept at translating design mockups into pixel-perfect layouts and optimizing performance for enhanced user engagement.</p>
      <Footer />
    </div>
  )
}

export default AboutMe