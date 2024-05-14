import React from 'react'
import projectOne from "../../Assests/project_one.png"
import projectTwo from "../../Assests/project_two.png"
import projectThree from "../../Assests/project_three.png"
import projectFour from "../../Assests/project_four.png"
import projectFive from "../../Assests/project_five.png"
import projectSix from "../../Assests/project_six.png"
import projectSeven from "../../Assests/project_seven.png"


const AllProject = () => {
 const  items = [
    {
      id: 1,
      projectImg: projectOne,
      projectName: "CedCommerce",
      projectDescription: "eCommerce platform and marketplace integrator",
      projectLink : "https://cedcommerce.com/"
    },
    {
      id: 2,
      projectImg: projectTwo,
      projectName: "Bansal College",
      projectDescription: "Engineering College",
      projectLink : "https://www.bansaliet.in/"

    },
    {
      id: 3,
      projectImg: projectThree,
      projectName: "Health Foundation",
      projectDescription: "NGO for women and migratory workers",
      projectLink : "https://healthvalueshowbiz.in/"
    },
    {
      id: 4,
      projectImg: projectFour,
      projectName: "Bazoob",
      projectDescription: "Influencer marketing Service",
      projectLink : "https://bazoob.com/home"
    },
    {
      id: 5,
      projectImg: projectFive,
      projectName: "Chadkhans",
      projectDescription: "Textile company",
      projectLink : "https://www.chadkhans.com/"
    },
    {
      id: 6,
      projectImg: projectSix,
      projectName: "Hotel Aarya",
      projectDescription: "Tailored Resort Retreats Online",
      projectLink : "https://hotelaarya.in/"
    },
    {
      id: 7,
      projectImg: projectSeven,
      projectName: "Magenative",
      projectDescription: "Goal is to help merchants enable mobile commerce",
      projectLink : "https://magenative.com/"
    },
    {
      id: 8,
      projectImg: projectTwo,
      projectName: "Bansal College",
      projectDescription: "Engineering College",
      projectLink : "https://www.bansaliet.in/"

    },
    {
      id: 9,
      projectImg: projectThree,
      projectName: "Health Foundation",
      projectDescription: "NGO for women and migratory workers",
      projectLink : "https://healthvalueshowbiz.in/"
    },
    {
      id: 10,
      projectImg: projectFour,
      projectName: "Bazoob",
      projectDescription: "Influencer marketing Service",
      projectLink : "https://bazoob.com/home"
    },,
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
                <a className='project-card position-relative d-flex flex-md-column gap-2'  key={item.id} onClick={() => {  window.location.href = (item.projectLink)}} target='_blank' rel='noopener norefer'>
                  <img src={item.projectImg} alt='' className='projectImg d-block' />
                  <div>
                    <span className='text-white mb-2 d-block'>{item.projectName}</span>
                    <p  className='text-white project_des'>{item.projectDescription}</p>
                  </div>
                </a>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default AllProject