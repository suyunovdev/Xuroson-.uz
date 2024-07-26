import { useEffect } from "react";
import "./Portfolio.css";
import f1 from "../assets/f1.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import { FaChevronRight } from "react-icons/fa6";
import ayiq from "../assets/ayiq.jpg";
import ayiq2 from "../assets/ayiq2.jpg";

import ayiq3 from "../assets/ayiq3.jpg";

import ayiq4 from "../assets/ayiq4.jpg";
import ayiq5 from "../assets/ayiq5.jpg";
import ayiq6 from "../assets/ayiq6.jpg";
import ayiq7 from "../assets/ayiq7.jpg";
import ayiq8 from "../assets/ayiq8.jpg";
import ayiq9 from "../assets/ayiq9.jpg";
import ayiq10 from "../assets/ayiq10.jpeg";
import ayiq11 from "../assets/ayiq11.jpg";
import ayiq12 from "../assets/ayiq12.jpg";

import { FaPlay } from "react-icons/fa6";
// import ayiq2 from "./assets/ayiq2.jpg";
// imort

import { BiCameraMovie } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Portfolio">
      <div className="portfolios">
        <div className="container">
          <div className="colls">
            <div className="colls-one" data-aos="fade-right">
              <h1>Portfolio</h1>
            </div>
            <div className="colls-two" data-aos="fade-up">
              <a href="/">
                <p>Bosh saxifa</p>
              </a>
              <FaChevronRight className="str" />
              <p>Portfolio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Panda">
        <div className="container">
          <div className="panda">
            <div className="panda-one">
              <h1>BIZNING PORTFOLIO</h1>
              <p>
                Bizning animatsion studiyamizning asosiy loyihalari va
                animatsiyalari ko'rishga tayyor.
              </p>
            </div>
            <div className="panda-two"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <marquee behavior="" direction="right" scrollamount="8">
          <div className="discus">
            <div className="won">
              <img src={f3} alt="" />
              <div className="yozu">
                <h1>5</h1>
                <p>Yangiliklarimiz!!!</p>
              </div>
            </div>
            <div className="line"></div>

            <div className="won">
              <img src={f1} alt="" />
              <div className="yozu">
                <h1>43</h1>
                <p>3D animatsiyalar</p>
              </div>
            </div>
            <div className="line"></div>

            <div className="won">
              <img src={f5} alt="" />
              <div className="yozu">
                <h1>27</h1>
                <p>Jamoamz</p>
              </div>
            </div>
            <div className="line"></div>

            <div className="won">
              <img src={f4} alt="" />
              <div className="yozu">
                <h1>38</h1>
                <p>Maqolalarimiz</p>
              </div>
            </div>
          </div>
        </marquee>
      </div>

      <div className="container">
        <div className="multik">
          <div className="multik-one">
            <h1>PORTFOLIO</h1>
          </div>
          <div className="multik-two">
            <div className="animations">
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=RE2QClKir1E">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=https://www.youtube.com/watch?v=g35J2dSq570&list=PLf7UgLItH9AK2S3Novl3hLh-Y2sDEetQv">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq2} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=78giW_2gZKI&list=PLf7UgLItH9AK2S3Novl3hLh-Y2sDEetQv&index=2">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq3} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=1c2o_cTiF-c&list=PLf7UgLItH9AK2S3Novl3hLh-Y2sDEetQv&index=3">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq4} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=x7j4Hd46VSE">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq5} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=hdcTmpvDO0I">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq6} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=bCtlituS9p8">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq7} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=fLPS4sIpYh0">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq8} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=Nwva3SQ8UTk">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq9} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=WH63K8m-5Xw">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq10} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=l6LX8XZcCyk">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq11} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
              <div className="animation-one" data-aos="zoom-in">
                <div className="btn-ones">
                  <button>ANIMATSIYA</button>
                  <button>FILM</button>
                  <BiCameraMovie className="movie" />
                </div>
                <div className="btn-imgs">
                  <a href="https://www.youtube.com/watch?v=6XfJYMYz6yc">
                    {" "}
                    <button className="faplay">
                      <FaPlay />
                    </button>
                  </a>
                  <img src={ayiq12} alt="" />
                </div>
                <div className="btn-link">
                  <a href="#">Ayiq Haqida multik</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
