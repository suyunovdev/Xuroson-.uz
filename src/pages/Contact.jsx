import { useEffect, useState } from "react";
import "../App.css";
import { FaChevronRight } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import {
  FaTelegram,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import ozbekfilim from "../assets/ozbefilim.svg";

const Contact = () => {
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
    <div className="Contact">
      <div className="contact">
        <div className="container">
          <div className="coll">
            <div className="coll-one" data-aos="fade-right">
              <h1>Bog'lanish</h1>
            </div>
            <div className="coll-two" data-aos="fade-up">
              <a href="/">
                <p>Bosh saxifa</p>
              </a>
              <FaChevronRight className="right" />
              <p>Bog'lanish</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="box-one">
            <div className="box-one-h1">
              <h1>BIZNING MANZILIMIZ</h1>
            </div>
            <div className="box-ones">
              <div className="box-one-contact" data-aos="fade-right">
                <div className="box-one-contact-first">
                  <h3>Biz bilan bog'laning</h3>
                  <p>
                    Bizga xabar yoki taklifingiz bo'lsa, bizga yuborishingiz
                    mumkin!
                  </p>
                </div>
                <div className="box-one-contact-secend">
                  <div className="secend-one">
                    <PiMapPinAreaFill className="locetion" />
                    <p>
                      Toshkent,Chilonzor-E,Kvartal,Toshkent,Muqimiy kuchasi 41/3
                    </p>
                  </div>
                  <div className="secend-one">
                    <MdEmail className="locetion" />
                    <p>asteranimation@gmail.com</p>
                  </div>
                  <div className="secend-one">
                    <FaTelegram className="locetion" />
                    <p>Abdulatif Haydarov</p>
                  </div>
                  <div className="secend-one">
                    <FaPhone className="locetions" />
                    <p>+998(94)626 15 90</p>
                  </div>
                  <div className="secend-one">
                    <FaPhone className="locetions" />
                    <p>+998(93)885 15 90</p>
                  </div>
                </div>
                <div className="box-one-contact-end">
                  <div className="end-one">
                    <h3>Bizning ijtimoiy tarmoqlarimiz :</h3>
                  </div>
                  <div className="end-icons">
                    <div className="sayts">
                      <button>
                        <FaTelegram
                          className="telegrams"
                          data-aos="fade-up-left"
                        />
                      </button>
                      <button>
                        <FaFacebookF
                          className="facebooks"
                          data-aos="fade-up-left"
                        />
                      </button>
                      <button>
                        <FaTwitter
                          className="twitters"
                          data-aos="fade-up-left"
                        />
                      </button>
                      <button>
                        <FaYoutube
                          className="youtubes"
                          data-aos="fade-up-left"
                        />
                      </button>
                      <button>
                        <FaInstagram
                          className="instagrams"
                          data-aos="fade-up-left"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1720793633991!5m2!1sru!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="box-two">
            <div className="box-two-first" data-aos="fade-right">
              <div className="box-two-first-one">
                <h1>BIZNING HAMKORLAR</h1>
              </div>
              <marquee behavior="" direction="">
                {" "}
                <div className="box-two-first-two">
                  <img src={ozbekfilim} alt="" />

                  <img src={ozbekfilim} alt="" />

                  <img src={ozbekfilim} alt="" />

                  <img src={ozbekfilim} alt="" />
                </div>
              </marquee>
            </div>
            <div className="box-two-secend" data-aos="fade-left">
              <div className="last-one">
                <h2>BIZ BILAN BOG'LANING</h2>
                <p>
                  Bizga xabar yoki taklifingiz bo'lsa, bizga yuborishingiz
                  mumkin!
                </p>
              </div>
              <div className="last-two">
                <div className="input-one">
                  <input type="text" placeholder="Ism" />
                  <input type="number" placeholder="Telefon raqam" />
                  <input type="text" placeholder="Mavzu" />
                </div>

                <textarea placeholder="Xabar"></textarea>
              </div>
              <div className="last-three">
                <button>YUBORISH</button>
              </div>
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

export default Contact;
