import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className="flex flex-row">
      <img src = {logo}/>

      <Link to="/">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800">
          Home
        </button>
      </Link>

      <Link to="/about">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800">
          About Us
        </button>
      </Link>
      
      <Link to="/members">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800">
          Members
        </button>
      </Link>

      <Link to="/project">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800">
          Projects
        </button>
      </Link>

      <Link to="/contact">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800">
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default Header;
