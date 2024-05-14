import React from 'react'
import HomeDescription from '../HomeDescription'
import CurrentProjects from '../projects/CurrentProjects'
import UserInputBox from '../UserInputBox'
import Marquee from "../Marquee"

const HomePage = () => {
  return (
    <>
      <HomeDescription />
      <Marquee />
      <CurrentProjects />
      <UserInputBox />
    </>
  )
}

export default HomePage