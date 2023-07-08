import React from "react";
import { Link } from "react-router-dom";
import about from "../../img/img.about.jpg";
import "./about.css";
import Extra from "./Extra";

const About = () => {
  return (
    <>
      <div className="container-class">
        <div className="title_1">
          <h1 data-aos="fade-right">О НАС</h1>
        </div>
        <div className="desc">
          <div className="col-1">
            <div className="img" data-aos="zoom-in">
              <img src={about} alt="" />
            </div>
            <p data-aos="fade-up">
              Чем занимается наша компания <br />
              <br />
              Компания ООО “Free Power Solution” г. Ташкент, Республика
              Узбекистан, специализируется на разработке и производстве
              современного, высококачественного электротехнического оборудования
              для промышленного и гражданского строительства, инфраструктуры,
              распределительных электрических сетей. <br /> <br />
              Компания ООО “Free Power Solution” г. Ташкент, Республика
              Узбекистан, специализируется на разработке и производстве
              современного, высококачественного электротехнического оборудования
              для промышленного и гражданского строительства, инфраструктуры,
              распределительных электрических сетей. Являясь официальным
              «Промышленным партнером» Legrand (Франция) в Узбекистане, мы
              применяем самые современные решения и компоненты для реализации
              крупных и сложных проектов. Получив статус официального партнера,
              активно сотрудничаем в области передачи технологий и обменом
              опыта, с крупными производителями электротехнического
              оборудования, как “General Electric”, ЗАО ГК «Электрощит»-ТМ.
            </p>
          </div>
          <div className="btn-class">
            <Link to="/contacts" className="linkS">
              <button className="btn_class" id="btn-class" data-aos="zoom-in">
                Связаться с нами
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Extra />
      <div className="overlayR"></div>
    </>
  );
};

export default About;
