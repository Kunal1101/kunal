import React from 'react'
import border from "../Assests/vintage.png"


const PageDesc = (props) => {
  return (
    <div className='workDesc text-center'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={border} alt='' width={"100px"} />
    </div>
  )
}

export default PageDesc