import "./Footer.css";
import logos from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { MdRectangle } from "react-icons/md";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="Footer">
        <section>
          <div className="footer">
            <div className="container">
              <div className="footers">
                <div className="boxs">
                  <div className="logos" data-aos="fade-up">
                    <div
                      className="logos-img "
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000">
                      <img src={logos} alt="" />
                    </div>
                    <div className="logos-icons">
                      <button className="telegram">
                        <FaTelegramPlane />
                      </button>
                      <button className="facebook">
                        <FaFacebookF />
                      </button>
                      <button className="twitter">
                        <FaTwitter />
                      </button>
                      <button className="youtube">
                        <TfiYoutube />
                      </button>
                      <button className="instagram">
                        <BsInstagram />
                      </button>
                    </div>
                  </div>
                  <div className="words">
                    <div
                      className="words-one"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <div className="one">
                        <h2>
                          IJTIMOIY <br />
                          TARMOQLAR
                        </h2>
                      </div>
                      <div className="ones">
                        <MdRectangle className="kub" /> <p>Telegram</p>
                      </div>
                      <div className="ones">
                        <MdRectangle className="kub" /> <p>Facebook</p>
                      </div>
                      <div className="ones">
                        <MdRectangle className="kub" /> <p>Twitter</p>
                      </div>
                      <div className="ones">
                        <MdRectangle className="kub" /> <p>Youtube</p>
                      </div>
                      <div className="ones">
                        <MdRectangle className="kub" /> <p>Instagram</p>
                      </div>
                    </div>
                    <div
                      className="words-two"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <div className="two">
                        <h2>ASOSIY SAHIFA</h2>
                      </div>
                      <Link to="/about">
                        <div className="twos">
                          <MdRectangle className="kubs" /> <p>Biz Haqimizda</p>
                        </div>
                      </Link>
                      <Link to="/blog">
                        {" "}
                        <div className="twos">
                          <MdRectangle className="kubs" /> <p>Blog</p>
                        </div>
                      </Link>
                      <Link to="">
                        <div className="twos">
                          <MdRectangle className="kubs" /> <p>Galereya</p>
                        </div>
                      </Link>
                      <Link to="">
                        <div className="twos">
                          <MdRectangle className="kubs" /> <p>Jamoalar</p>
                        </div>
                      </Link>
                      <Link to="">
                        <div className="twos">
                          <MdRectangle className="kubs" /> <p>FAQ</p>
                        </div>
                      </Link>
                    </div>
                    <div className="words-three">
                      <div className="three">
                        <h2>MA'LUMOT</h2>
                      </div>
                      <div className="threes">
                        <div className="thres-one">
                          <p>
                            Bizga xabar yoki taklifingiz bolsa, <br /> bizga
                            yuborishingiz mumkin!
                          </p>
                        </div>
                        <div className="thres-two">
                          <span>Tel:</span>
                          <p>+998 (97) 422 84 77</p>
                        </div>
                        <div className="thres-three">
                          <span>Email:</span>
                          <p>info@example.uz</p>
                        </div>
                        <div className="thres-four">
                          <span>Manzil:</span>
                          <p>
                            Tashkent, Chilonzor-E, <br /> Kvartal, Toshkent,
                            Muqimiy <br />
                            koʻchasi, 41/3
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="end">
            <div className="container">
              <div className="ends">
                <p>
                  Mualliflik huquqi © 2023 <span>Astir</span> Barcha huquqlar
                  himoyalangan
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
