import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">Help & Support</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Cetegory</h4>
  	 			<ul>
  	 				<li><Link to="/">Home</Link></li>
  	 				<li><Link to="/Business">Business</Link></li>
  	 				<li><Link to="/Entertainment">Entertainment</Link></li>
  	 				<li><Link to="/general">general</Link></li>
  	 				<li><Link to="/health">health</Link></li>
  	 				<li><Link to="/Science">Science</Link></li>
  	 				<li><Link to="/Sports">Sports</Link></li>
  	 				<li><Link to="/Technology">Technology</Link></li>
  	 			</ul>
  	 		</div>
  	 		{/* <div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-github"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
                <div>
                    <p className='text-slate-200 mt-4 whitespace-nowrap tracking-wider font-thin text-xl'>All Rights Reserverd &copy; 2024 By Deepak Gameti</p>
                </div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer