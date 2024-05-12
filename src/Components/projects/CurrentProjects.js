import React from 'react'
import projectOne from "../../Assests/project_one.png"
import projectTwo from "../../Assests/project_two.png"
import projectThree from "../../Assests/project_three.png"
import projectFour from "../../Assests/project_four.png"
import projectFive from "../../Assests/project_five.png"
import projectSix from "../../Assests/project_six.png"



const CurrentProjects = () => {
 const  items = [
    {
      id: 1,
      projectImg: projectOne,
      projectName: "CedCommerce",
      // projectDescription: "djvidov0dhvpifv0",
      projectLink : "https://cedcommerce.com/"
    },
    {
      id: 2,
      projectImg: projectTwo,
      projectName: "Bansal College",
      // projectDescription: "djvidov0dhvpifv0",
      projectLink : "https://www.bansaliet.in/"

    },
    {
      id: 3,
      projectImg: projectThree,
      projectName: "Health Foundation",
      // projectDescription: "djvidov0dhvpifv0",
      projectLink : "https://healthvalueshowbiz.in/"
    },
    {
      id: 4,
      projectImg: projectFour,
      projectName: "Bazoob",
      // projectDescription: "djvidov0dhvpifv0",
      projectLink : "https://bazoob.com/home"
    },
    {
      id: 5,
      projectImg: projectFive,
      projectName: "Chadkhans",
      // projectDescription: "djvidov0dhvpifv0",
      projectLink : "https://www.chadkhans.com/"
    },
    {
      id: 6,
      projectImg: projectSix,
      projectName: "Hotel Aarya",
      // projectDescription: "djvidov0dhvpifv0",
      projectLink : "https://hotelaarya.in/"
    },
  ]


  return (
    <>
      <div>
        <div className='homeProjects mt-3 mb-4 d-flex align-items-center justify-content-between'>
          <span className="d-block">Projects</span>
          {/* <a href='/' title='All Projects' alt="All Projects">All Projects</a> */}
        </div>
        <div className='d-flex flex-wrap gap-3'>
          {
            items.map((item)=>(
              <div className='project-card position-relative d-flex flex-column' key={item.id}>
                <a onClick={() => {  window.location.href = (item.projectLink)}} target='_blank' rel='noopener norefer'>
                  <img src={item.projectImg} alt='' className='projectImg' />
                  <span className='text-white my-3 d-block'>{item.projectName}</span>
                  <p  className='text-white project_des'>{item.projectDescription}</p>
                </a>
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default CurrentProjects