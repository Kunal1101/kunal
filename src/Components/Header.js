import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../Assests/logo_.png"


function Header() {
  return (
    <>
      <nav className="mt-md-4 navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand text-white me-4" href="/"><img src={logo} alt='' width={40} /></a>
          <button className="border-none navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <GiHamburgerMenu className='text-white'/>
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-sm-around" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Tech Stack</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Links</a>
              </li>
            </ul>
            <div className='icons-div d-flex gap-3'>
              <a className="text-white" href="/">
                <AiOutlineInstagram />
              </a>
              <a className="text-white" href="/">
                <AiOutlineGithub />
              </a>
              <a className="text-white" href="/">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header