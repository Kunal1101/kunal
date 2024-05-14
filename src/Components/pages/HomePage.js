import React from 'react'
import HomeDescription from '../HomeDescription'
import CurrentProjects from '../projects/CurrentProjects'
import UserInputBox from '../UserInputBox'

const HomePage = () => {
  return (
    <>
      <HomeDescription />
      {/* <Marquee /> */}
      <CurrentProjects />
      <UserInputBox />
    </>
  )
}

export default HomePage