import { IoIosArrowForward } from "react-icons/io";
import "./Blog.css";
import { FaMessage } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import "./Home.css";
import { useEffect, useState } from "react";

const Blog = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="bloggs">
        <div className="container">
          <div className="blog">
            <h1>Bizning yangiliklarimiz</h1>
            <div className="pst">
              <a href="/">Bosh Sahifa</a>
              <p>
                {" "}
                <IoIosArrowForward /> Bizning yangiliklarimiz
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="log">
          <div className="kartalar infos">
            <div
              className="karta"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className="imgs"></div>
              <div className="before">16.12.2024</div>
              <div className="display">
                <h4>
                  <FaUserAlt />
                  Admin
                </h4>
                <h4>
                  <FaMessage />0
                </h4>
              </div>
              <h2>Disney</h2>
            </div>
            <div
              className="karta"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              <div className="imgses"></div>
              <div className="before">16.12.2024</div>
              <div className="display">
                <h4>
                  <FaUserAlt />
                  Creater
                </h4>
                <h4>
                  <FaMessage />0
                </h4>
              </div>
              <h2>Cartoon</h2>
            </div>
            <div
              className="karta"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className="imgss"></div>
              <div className="before">16.12.2024</div>
              <div className="display">
                <h4>
                  <FaUserAlt />
                  Pohotgraph
                </h4>
                <h4>
                  <FaMessage />0
                </h4>
              </div>
              <h2>Photographer</h2>
            </div>
          </div>
          <div className="large">
            <button>Prev</button>
            <button>2</button>
            <button>Next</button>
          </div>
        </div>
      </div>

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Blog;
