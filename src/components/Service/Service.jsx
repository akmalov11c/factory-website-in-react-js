import React from "react";
import service from "../../img/6.webp";
import service_1 from "../../img/4_1.webp";
import service_2 from "../../img/2_1.webp";
import service_3 from "../../img/5.webp";
import service_4 from "../../img/3_1.webp";
import { Link } from "react-router-dom";
import "./service.css";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>НАШИ УСЛУГИ</h1>
        </div>
        <div className="wrapper">
          <div className="wrap_items" data-aos="fade-up">
            <img src={service} alt="" />
            <h2>​​​​​​​ИНЖЕНЕРНО-КОНСТРУКТОРСКОЕ БЮРО</h2>
            <Link to="/service_1">
              <button>Подробнее</button>
            </Link>
          </div>
          <div className="wrap_items" data-aos="fade-up">
            <img src={service_1} alt="" />
            <h2>​​​​​​ПОКРАСКА МЕТАЛЛА</h2>
            <Link to="/service_2">
              <button>Подробнее</button>
            </Link>
          </div>
          <div className="wrap_items" data-aos="fade-up">
            <img src={service_2} alt="" />
            <h2>СВАРКА МЕТАЛЛА</h2>
            <Link to="/service_3">
              <button>Подробнее</button>
            </Link>
          </div>
          <div className="wrap_items" data-aos="fade-up">
            <img src={service_3} alt="" />
            <h2>ГИБКА МЕТАЛЛА</h2>
            <Link to="/service_4">
              <button>Подробнее</button>
            </Link>
          </div>
          <div className="wrap_items" data-aos="fade-up">
            <img src={service_4} alt="" />
            <h2>КООРДИНАТНО-ПРОБИВНЫЕ РАБОТЫ</h2>
            <Link to="/service_5">
              <button>Подробнее</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
