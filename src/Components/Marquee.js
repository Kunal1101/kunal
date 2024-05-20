import React from 'react';
import bootstrap_logo from '../Assests/bootstrap.png';
import html_logo from '../Assests/html-5.png'
import css_logo  from '../Assests/css-3.png'
import wordpress_logo from '../Assests/wordpress.png'
import javascript_logo from '../Assests/java-script.png'
import jquery_logo from '../Assests/social.png'
import react_logo from '../Assests/atom.png'
import figma_logo from '../Assests/figma.png'
import github_logo from '../Assests/github.png'
import vscode_logo from '../Assests/windows.png'


function Marquee() {
  return (
    <>
      <marquee width="100%" className="mt-5" direction="left" height="70px">
        <img src={bootstrap_logo} alt='' className="marquee_img" />
        <img src={html_logo} alt='' className="marquee_img" />
        <img src={css_logo} alt='' className="marquee_img" />
        <img src={wordpress_logo} alt='' className="marquee_img" />
        <img src={javascript_logo} alt='' className="marquee_img" />
        <img src={jquery_logo} alt='' className="marquee_img" />
        <img src={react_logo} alt='' className="marquee_img" />
        <img src={figma_logo} alt='' className="marquee_img" />
        <img src={github_logo} alt='' className="marquee_img" />
        <img src={vscode_logo} alt='' className="marquee_img" />

      </marquee>
    </>
  )
}

export default Marquee