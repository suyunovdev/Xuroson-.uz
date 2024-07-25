import { IoIosArrowForward } from "react-icons/io";
import "./Blog.css";
import { FaMessage } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import "./Home.css";
// import { Button } from "@mui/material";

const Blog = () => {
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
              data-aos="fade-left"
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
          </div>
          <div className="large">
            <button>Prev</button>
            <button>2</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
