import React from 'react'
import HomeDescription from '../HomeDescription'
import CurrentProjects from '../projects/CurrentProjects'
import UserInputBox from '../UserInputBox'
import Marquee from "../Marquee"
import Footer from '../Footer'


const HomePage = () => {
  return (
    <>
      <HomeDescription />
      <Marquee />
      <CurrentProjects />
      <UserInputBox />
      <Footer />

    </>
  )
}

export default HomePage