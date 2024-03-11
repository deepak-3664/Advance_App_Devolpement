import { Link } from "react-router-dom"
import "../../assets/css/header.css"


const AHeader = () => {

  return (
    <>
      <header>
      <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/a">Home</Link></li>
        <li className="nav-item"><Link to="/course">Course</Link></li>
        <li className="nav-item"><Link to="/For">Admission Forms</Link></li> 
      </ul>
    </nav>
    
      </header>
    </>
  );
};

export default AHeader;


