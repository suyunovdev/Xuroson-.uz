import "./About.css";
import { IoIosArrowForward } from "react-icons/io";
import "./Home.css";
import film from "../assets/ab1.png";
import film2 from "../assets/ab2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import tv from "../assets/tv.png";
import uzm from "../assets/uzm.jpg";
import mark from "../assets/mark.jpg";

import elon from "../assets/elon.jpg";
import { useEffect, useState } from "react";

const Aboute = () => {
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
      <div className="hero">
        <div className="container">
          <div className="abouts">
            <h1> Biz haqimizda</h1>
            <p>
              <a href="/">Bosh Sahifa </a> <IoIosArrowForward /> Biz Haqimizda
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div data-aos="zoom-in-left">
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
                  <h4>{"Do'stona Jamoalar"}</h4>
                </div>
                <div className="man" data-aos="flip-left">
                  <img src={film2} alt="" />
                  <h4>{"Maqsad va Muvaffaqiyat "}</h4>
                </div>
              </div>
            </div>
            <div className="rightes"></div>
          </div>
        </div>
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
            <div className="person" data-aos="fade-down-right">
              <img src={uzm} alt="" />
              <div className="info">
                <div>
                  <h4>Suyunov</h4>
                  <h4>Ilyos</h4>
                </div>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div
              className="person"
              data-aos="fade-down"
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
            <div className="person" data-aos="fade-down-left">
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
        <div className="galery">
          <div className="bottomss">
            <h3 className="hre">GALERIYA</h3>
            <h2>BIZNING GALEREYAMIZ</h2>
          </div>
          <div className="bottomss">
            <h3 className="hre ">VAKANSIYA</h3>
            <h2>ISHGA JOYLASHISH UCHUN ARIZA QOLDIRING</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box-three" data-aos="zoom-in">
          <div className="three-two">
            <div className="three-input-one">
              <input type="text" placeholder="Ismingiz" />
              <input type="text" placeholder="Sizning o'qtuvchingiz" />
              <input type="number" placeholder="Telefon raqam" />
              <input type="email" placeholder="example@gmail.com" />
              <input type="text" placeholder="Qayerda o'qigansiz" />
              <input type="text" placeholder="Qayerda  ishlaysiz" />
            </div>
            <div className="three-input-two">
              <input type="file" className="file" />
              <input type="file" className="file" />
              <textarea placeholder="O'zingiz xaqingizda"></textarea>
              <button>YUBORISH</button>
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

export default Aboute;
