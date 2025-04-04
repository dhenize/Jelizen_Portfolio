import { Link } from "react-router-dom";
import logo from '../assets/pics/logo.png';

function Header() {
  return (
    <header className = "flex items-row justify-between bg-[#1A1714] shadow-xl/20 px-4 py-3 sm:px-5 md:px-8 lg:px-10">
        <div className="flex items-center flex-shrink-0">
          <img className = "h-9 w-auto" src = {logo}/>
        </div>
        
        <nav className = "flex items-center sm:space-x-2 md:space-x-3 lg:space-x-4">
          <Link to="/">
            <button type="button" className="h-12 w-20 text-[15px] text-[#33FFC2] bg-[rgba(61,79,61,0.7)] border border-transparent hover:border-[#33FFC2]">
              Home
            </button>
          </Link>

          <Link to="/about">
            <button type="button" className="h-12 w-20 text-[14px] text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
              About Us
            </button>
          </Link>
          
          <Link to="/members">
            <button type="button" className="h-12 w-20 text-[14px] text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
              Members
            </button>
          </Link>

          <Link to="/project">
            <button type="button" className="h-12 w-20 text-[14px] text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
              Projects
            </button>
          </Link>

          <Link to="/contact">
            <button type="button" className="h-12 w-20 text-[14px] text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
              Contact Us
            </button>
          </Link>
        </nav>
    </header>
  );
}

export default Header;
