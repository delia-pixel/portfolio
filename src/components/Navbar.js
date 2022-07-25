import React, { useState } from "react";

const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false);


  return (
		<div className="container">
      <h1><a href="/">Emily Jones</a></h1>
			<nav id="navbar" className={isOpen? " navbar navbar-mobile" : "navbar" }>
				<ul>
					<li><a className="nav-link active" href="/">Home</a></li>
					<li><a className="nav-link" href="/about">About</a></li>
					<li><a className="nav-link" href="/resume">Resume</a></li>
					<li><a className="nav-link" href="/services">Services</a></li>
					<li><a className="nav-link" href="/portfolio">Portfolio</a></li>
					<li><a className="nav-link" href="/contact">Contact</a></li>
			  </ul>
			  
			  <button onClick={()=> setIsOpen(!isOpen)}>
				  <i className="bi bi-list mobile-nav-toggle"></i>
			  </button>
				
			</nav>
		</div>
  )
}

export default Navbar;