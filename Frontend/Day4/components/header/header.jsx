import { Link } from "react-router-dom"
import "../../assets/css/header.css"
import Head from "./head"
// import { CgProfile } from "react-icons/cg";
// import { useState } from "react";


const Header = () => {

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className="flexSB">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">About</Link>
            </li>
            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <li>
              <Link to="/College">Colleges</Link>
            </li>
          </ul>
          <select className="start">
            {/* <option className="icon2">< CgProfile className="icon2"/></option> */}
            <option><Link to="/adminp">Admin</Link></option>
            <option><Link to="/profile">Student</Link></option>
          </select>
        
          
        </nav>
    
      </header>
    </>
  );
};

export default Header;
