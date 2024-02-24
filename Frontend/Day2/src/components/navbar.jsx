import"../assets/css/navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/Login">Admission</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
