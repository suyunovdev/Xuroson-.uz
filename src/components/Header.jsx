import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTelegram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Header.css";
import "aos/dist/aos.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Header">
      <div className="header">
        <div
          className="logo"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src={logo} alt="" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`all ${isOpen ? "active" : ""}`}>
          <div className="sayt">
            <button>
              <FaTelegram className="telegrams" data-aos="fade-up-left" />
            </button>
            <button>
              <FaFacebookF className="facebooks" data-aos="fade-up-left" />
            </button>
            <button>
              <FaTwitter className="twitters" data-aos="fade-up-left" />
            </button>
            <button>
              <FaYoutube className="youtubes" data-aos="fade-up-left" />
            </button>
            <button>
              <FaInstagram className="instagrams" data-aos="fade-up-left" />
            </button>
          </div>
          <div className="close-button" onClick={closeMenu}>
            <FaTimes />
          </div>
          <div className="words" data-aos="fade-down">
            <NavLink to="/" onClick={closeMenu}>
              BOSH SAHIFA
            </NavLink>
            <NavLink to="/portfolio" onClick={closeMenu}>
              PORTFOLIO
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              BIZ HAQIMIZDA
            </NavLink>
            <NavLink to="/blog" onClick={closeMenu}>
              BLOG
            </NavLink>
            <NavLink to="contact" onClick={closeMenu}>
              BOG'LANISH
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
