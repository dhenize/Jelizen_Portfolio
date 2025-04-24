import { NavLink } from "react-router-dom";
import logo from '../assets/pics/logo.png';
import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ['about', 'project', 'contact'];
  
    const handleScroll = () => {
      let current = '';
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id;
        }
      });
  
      const navLinks = document.querySelectorAll('.scroll-link');
      navLinks.forEach(link => {
        link.classList.remove('text-[#33FFC2]', 'bg-[rgba(61,79,61,0.7)]');
        if (link.dataset.section === current) {
          link.classList.add('text-[#33FFC2]', 'bg-[rgba(61,79,61,0.7)]');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between fixed top-0 left-0 w-full bg-[#1A1717] shadow-xl/20 px-4 py-3 sm:px-5 md:px-8 lg:px-10 z-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img className="h-9 w-auto" src={logo} alt="Logo" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/*DESKTOP NAVIGATION VIEW*/}
      <nav className="hidden md:flex items-center sm:space-x-2 md:space-x-3 lg:space-x-4">
        <NavLink to="/" className={({ isActive }) => `h-12 w-20 text-[14px] flex items-center justify-center ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
          Home
        </NavLink>
        <a href="/#about" data-section="about" className="scroll-link h-12 w-20 text-[14px] flex items-center justify-center text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
          About Us
        </a>
        <NavLink to="/members" className={({ isActive }) => `h-12 w-20 text-[14px] flex items-center justify-center ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
          Members
        </NavLink>
        <a href="/#project" data-section="project" className="scroll-link h-12 w-20 text-[14px] flex items-center justify-center text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
          Projects
        </a>
        <a href="/#contact" data-section="contact" className="scroll-link h-12 w-20 text-[14px] flex items-center justify-center text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
          Contact Us
        </a>
      </nav>

      {/*MOBILE NAVIGATION VIEW*/}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 w-full">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `h-12 w-full text-[14px] px-4 flex items-center rounded ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
            Home
          </NavLink>
          <a href="/#about" data-section="about" onClick={() => setIsOpen(false)} className="scroll-link h-12 w-full text-[14px] px-4 flex items-center rounded text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
            About Us
          </a>
          <NavLink to="/members" onClick={() => setIsOpen(false)} className={({ isActive }) => `h-12 w-full text-[14px] px-4 flex items-center rounded ${isActive ? 'text-[#33FFC2] bg-[rgba(61,79,61,0.7)]' : 'text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]'}`}>
            Members
          </NavLink>
          <a href="/#project" data-section="project" onClick={() => setIsOpen(false)} className="scroll-link h-12 w-full text-[14px] px-4 flex items-center rounded text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
            Projects
          </a>
          <a href="/#contact" data-section="contact" onClick={() => setIsOpen(false)} className="scroll-link h-12 w-full text-[14px] px-4 flex items-center rounded text-white hover:text-[#33FFC2] hover:bg-[rgba(61,79,61,0.7)]">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
