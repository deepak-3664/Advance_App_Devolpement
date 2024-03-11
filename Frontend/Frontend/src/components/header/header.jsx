import { Link } from "react-router-dom"
import "../../assets/css/header.css"
import Head from "./head"
import { CgProfile } from "react-icons/cg";

const Header = () => {

  return (
    <>
      <Head />
      <header>
      <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/college">Colleges</Link></li>
        <li className="nav-item"><Link to="/Courses">Courses</Link></li>
        
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item dropdown" >
          <CgProfile className="icon2" />
          <ul className="dropdown-menu">
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
    
      </header>
    </>
  );
};

export default Header;


