import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
import {FaInstagram, FaGithub , FaLinkedin} from 'react-icons/fa';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', fontFamily: 'Poppins, sans-serif' }}>
        <div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Quick Links</h2>
              <nav className="list-none mb-10 ">
                <li>
                  <Link to={'/'} className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</Link>
                </li>
                <li>
                  <Link to={'/allproducts'} className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Products</Link>
                </li>
                <li>
                  <Link to={'/cart'} className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Categories</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Electronics</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Fashion</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Beauty</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Personal Links</h2>
              <nav className="list-none mb-10 flex items-center gap-3 lg:justify-start justify-center">
                <a href="https://www.linkedin.com/in/syedmair/">
                  <FaLinkedin className="text-3xl hover:text-primary durationn-300 hover:text-black"/>
                </a>
                <a href="https://github.com/mairfarooq21">
                  <FaGithub  className="text-3xl hover:text-primary durationn-300 hover:text-black"/>
                </a>
                <a href="https://www.instagram.com/maiirfarooq/">
                  <FaInstagram className="text-3xl hover:text-primary durationn-300 hover:text-black"/>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer