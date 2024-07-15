import React from 'react'
import profile_pic from '../Assests/profile_pic.jpg'

function HomeDescription() {
  return (
    <div className="HomeDescription">
      <div className='d-flex gap-4 align-items-center'>
        <img src={profile_pic} alt='profile_pic' className='img-fluid profile_pic' />
        <div>
          <h1 className='animate__animated animate__rubberBand'>Kunal Mishra</h1>
          <a href='https://www.linkedin.com/in/kunal-mishra-715386183' target='_blank' rel='noopener' alt="@kunalmishra" title='Kunal Mishra'>@kunalmishra</a>
        </div>
      </div>
      <p className='mt-4 text-white'>I'm a passionate front-end developer dedicated to crafting captivating digital experiences. With a keen eye for design and a commitment to clean, efficient code. From responsive websites to interactive web applications, I thrive on transforming ideas into engaging realities.</p>
    </div>
  )
}

export default HomeDescription