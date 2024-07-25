import { NavLink } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [fix, setFix] = useState(false);
  function setFixd() {
    if (window.scrollY >= 5) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    Aos.init();
  }, []);
  window.addEventListener("scroll", setFixd);
  return (
    <div className={`Header ${fix ? "show" : "Header"}`}>
      <div className="container">
        <div className="header">
          <div
            className="logo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <img src={logo} alt="" />
          </div>
          <div className="all">
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
                <FaInstagramSquare
                  className="instagrams"
                  data-aos="fade-up-left"
                />
              </button>
            </div>
            <div className="words" data-aos="fade-down">
              <NavLink to="/">BOSH SAHIFA</NavLink>
              <NavLink to="/portfolio">PORTFOLIO</NavLink>
              <NavLink to="/about">BIZ HAQIMIZDA</NavLink>
              <NavLink to="/blog">BLOG</NavLink>
              <NavLink to="contact">BOG'LANISH</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
