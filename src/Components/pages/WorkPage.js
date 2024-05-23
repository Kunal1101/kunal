import React from 'react'
import AllProject from '../projects/AllProjects'
import PageDesc from '../PageDesc'
import Footer from '../Footer'

const WorkPage = () => {
  return (
    <div>
      <PageDesc title="Works" description="I was thrilled to work on these projects. Browse these projects."/>
      <AllProject />
      <Footer />
    </div>
  )
}

export default WorkPage