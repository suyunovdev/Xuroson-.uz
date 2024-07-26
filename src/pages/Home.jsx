// import from "react";
import "./Home.css";
// import jpghome from "../../assets/4.jpg";
// from "react-icons/fa";
import film from "../assets/ab1.png";
import film2 from "../assets/ab2.png";
import f1 from "../assets/f1.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import tv from "../assets/tv.png";
import mark from "../assets/mark.jpg";
import elon from "../assets/elon.jpg";
import play from "../assets/play.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import uzm2 from "../assets/uzm.jpg";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
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
      <div className="home">
        {/* <div className="alpha"> */}
        <div className="container">
          <div className="bef">
            <div className="left">
              <h3>
                # BIZ BILAN YUQORI SIFATLI <button>3D ANIMATSION </button>
                {"FILMLAR, VIDEO ROLIKLAR TAYYORLANG ! "}
              </h3>
              <button>Bog'lanish</button>
            </div>
            <div className="rightsss">
              {" "}
              {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hdcTmpvDO0I?si=eOw2OQfmHQzQJ5ah"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe> */}
              <a href="https://www.youtube.com/embed/hdcTmpvDO0I?si=eOw2OQfmHQzQJ5ah">
                {" "}
                <img src={play} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio">
          <div className="bir">
            <button className="btn btn-1 btns">
              {"BIZNING ISHLARIMIZ"}
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
            </button>
            <h1>PORTFOLIO</h1>
          </div>
          <div className="button">
            <button className="btn btn-1 btns">
              {"Barcha ishlarimizni ko'ring "}
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div data-aos="zoom-in-left" className="mine">
          <div className="about">
            <div className="left_about">
              <button className="bttn ">Biz Haqimizda</button>
              <h1 style={{ color: "white" }}>Kompaniya haqida</h1>
              <p>
                Astir Animatsion Studio- Bizning kompaniya 2016 yildan buyon
                faoliyat ko'rsatib kelmoqda. Bizda animatsion seriallar,
                Animatsion filmlar, Reklama-roliklar, prezentatsion videolar va
                xar xil turdagi videomaxsulotlar tayyorlaydi.
              </p>
              <div className="bigges">
                <div className="man" data-aos="flip-left">
                  <img src={film} alt="" />
                  <h4>{"ANIMATSIYA KINO "}</h4>
                </div>
                <div className="man" data-aos="flip-left">
                  <img src={film2} alt="" />
                  <h4>{"ANIMATSIYA KINO "}</h4>
                </div>
              </div>
            </div>
            <div className="rightes"></div>
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
        <div className="aboutme">
          <a className="hrefs" href="#">
            BIZ NIMA QILAMIZ
          </a>
          <h1>BIZNING XIZMATLARIMIZ</h1>
          <div className="cards">
            <div data-aos="fade-up">
              {" "}
              <div className="card">
                <img src={f5} alt="" />
                <h4>Reklama roliklar tayyorlash</h4>
                <p>
                  Agar maxsulotingiz uchun reklama yoki preentatsion rolik
                  tayyorlash kerak tayyorlash kerak bo'lsa, Biz sizga kreativ va
                  sifatli roliklar tayyorlab beramiz.
                </p>
              </div>
            </div>
            <div data-aos="fade-down">
              {" "}
              <div className="card">
                <img src={tv} alt="" />
                <h4>3D Animation filmlar tayyorlash</h4>
                <p>
                  Agar sizga 3D Animatsion film tayyorlash kerak bo'lsa, bizning
                  studio sizga tayyorlab beradi
                </p>
              </div>
            </div>
            <div data-aos="fade-right">
              {" "}
              <div className="card">
                <img src={f3} alt="" />
                <h4>3D Animatsion klip tayyorlash</h4>
                <p>
                  Biror qo'shiq uchun 3D Animatsion klip tayyorlashni
                  xoxlasangiz, Bizning jamoa buni sizga tayyorlab beradi.
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="card">
                <img src={f4} alt="" />
                <h4>VFX - Vizual effektlar</h4>
                <p>
                  Badiy, hujjatli yoki animatsion filmlar uchun vizual effektlat
                  tayyorlash kerak bo'lsa , bizga murojat qilishingiz mumkin!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfoilos">
          <div className="kotta">
            <h5 className="hrefs">Ishlar</h5>
            <h1 data-aos="fade-right">BIZNING PORTFOLIO</h1>
            Animatsiya studiyamizning eng muhim loyihalari va tayyor
            animatsiyalari namoyish etiladi.
          </div>

          <div className="rightss"></div>
        </div>
      </div>
      <div className="container">
        <div className="jamoa">
          <div className="top">
            <h1 className="href">BIZNING MUTAXASSISLAR</h1>
            <p>
              Bizning animatsiya studiyamizning harakatlantiruvchi kuchi bilan
              tanishing.
            </p>
            <button className="hrefs draw">BATAFSIL MA'LUMOT</button>
          </div>

          <div className="persons" data-aos="zoom-in-down">
            <div
              className="person"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <img src={uzm2} alt="" />
              <div className="info">
                <div>
                  <h4>Jonatan</h4>
                  <h4>Smith</h4>
                </div>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div
              className="person"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <img src={mark} alt="" />
              <div className="info">
                <div>
                  <h4>Zuckerberg</h4>
                  <h4>Mark</h4>
                </div>
                <h5>Facebook</h5>
              </div>
            </div>
            <div
              className="person"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <img src={elon} alt="" />
              <div className="info">
                <div>
                  <h4>Musk</h4>
                  <h4>Elon </h4>
                </div>
                <h5>Company Director</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="novosti">
          <h3 className="hrefs draw">KONTENT BLOGI</h3>
          <h1>SO'NGI YANGILIKLAR</h1>
          <div className="kartalar">
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

export default Home;
