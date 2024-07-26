import { useEffect } from "react";
import "./Portfolio.css";
import f1 from "../assets/f1.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import { FaChevronRight } from "react-icons/fa6";
import ayiq from "../assets/ayiq.jpg";
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
      <section>
        <div className="portfolios">
          <div className="container">
            <div className="colls">
              <div className="colls-one" data-aos="fade-right">
                <h1>Bog'lanish</h1>
              </div>
              <div className="colls-two" data-aos="fade-up">
                <p>Bosh saxifa</p>
                <FaChevronRight className="str" />
                <p>Bog'lanish</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
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
      </section>
      <section>
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
      </section>
      <section>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
