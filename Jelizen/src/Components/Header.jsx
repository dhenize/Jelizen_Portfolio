import { NavLink } from "react-router-dom";
import logo from '../assets/pics/logo.png';

function Header() {
  return (
    <header className="flex items-row justify-between fixed top-0 left-0 w-full bg-[#1A1717] shadow-xl/20 px-4 py-3 sm:px-5 md:px-8 lg:px-10 z-50">
      <div className="flex items-center flex-shrink-0">
        <img className="h-9 w-auto" src={logo} alt="Logo" />
      </div>

      <nav className="flex items-center sm:space-x-2 md:space-x-3 lg:space-x-4">
        <NavLink to="/" className={({ isActive }) => `h-12 w-20 text-[14px] flex items-center justify-center ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => `h-12 w-20 text-[14px] flex items-center justify-center ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
          About Us
        </NavLink>

        <NavLink to="/members" className={({ isActive }) => `h-12 w-20 text-[14px] flex items-center justify-center ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
          Members
        </NavLink>

        <NavLink to="/project" className={({ isActive }) => `h-12 w-20 text-[14px] flex items-center justify-center ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => `h-12 w-20 text-[14px] flex items-center justify-center ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
