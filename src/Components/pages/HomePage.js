import React from 'react'
import HomeDescription from '../HomeDescription'
import CurrentProjects from '../projects/CurrentProjects'
import UserInputBox from '../UserInputBox'
import Marquee from "../Marquee"
import border from "../../Assests/vintage.png"


const HomePage = () => {
  return (
    <>
      <HomeDescription />
      <Marquee />
      <CurrentProjects />
      <UserInputBox />
      <img src={border} alt='' width={"100px"} className='mx-auto d-block'/>


    </>
  )
}

export default HomePage