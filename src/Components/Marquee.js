import React from 'react';
import bootstrap_logo from '../Assests/bootstrap_logo.png';
import html_logo from '../Assests/html_logo.png'
import css_logo  from '../Assests/css_logo.jpg'
import wordpress_logo from '../Assests/wordpress_logo.png'
import javascript_logo from '../Assests/javascript_logo.png'
import jquery_logo from '../Assests/jQuery_logo.png'
import react_logo from '../Assests/react_logo.png'


function Marquee() {
  return (
    <>
      <marquee width="100%" className="mt-3" direction="left" height="100px">
        <img src={bootstrap_logo} alt='' className="marquee_img" />
        <img src={html_logo} alt='' className="marquee_img" />
        <img src={css_logo} alt='' className="marquee_img" />
        <img src={wordpress_logo} alt='' className="marquee_img" />
        <img src={javascript_logo} alt='' className="marquee_img" />
        <img src={jquery_logo} alt='' className="marquee_img" />
        <img src={react_logo} alt='' className="marquee_img" />
      </marquee>
    </>
  )
}

export default Marquee