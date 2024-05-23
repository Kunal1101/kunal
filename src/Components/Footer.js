import React from 'react'
import border from "../Assests/vintage.png"


const Footer = () => {
  return (
      <div>
        <img src={border} alt='' width={"100px"} className='mx-auto d-block'/>
        <p className='text-center text-white' style={{fontWeight: '600'}}>Stay Connected, ADIOS!!</p>
      </div>


  )
}

export default Footer