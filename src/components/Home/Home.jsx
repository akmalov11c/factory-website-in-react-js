import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

import "./home.css";

const Home = () => {
  return (
    <section>
      <div className="hero">
        <h1 data-aos="fade-right">
          Широкий спектр <br /> электротехнического оборудования
        </h1>
        <h4 data-aos="fade-right">
          Инженерные, электромонтажные работы высшего качества
        </h4>
        <div className="btn">
          <Link to="/catalog" className="linkS">
            <button className="btn_class" data-aos="zoom-in">
              в каталог
              <div class="arrow-wrapper">
                <div class="arrow"></div>
              </div>
            </button>
          </Link>
          <Link to="/contacts" className="linkS">
            <button className="btn_class" data-aos="zoom-in">
              Связаться с нами
            </button>
          </Link>
        </div>
      </div>
      <div className="social-container">
        <h3 data-aos="fade-left">или связаться с нами через соц. сети</h3>
        <div className="icon_box" data-aos="fade-left">
          <a
            href="https://www.instagram.com/fps_metallicheskiye_izdeliya"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <i class="fab fa-telegram-plane"></i>
          <i class="fab fa-facebook"></i>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Home;
