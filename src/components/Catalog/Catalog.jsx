import React from "react";
import { Link } from "react-router-dom";
import Image from "../../img/le_grend_nizkovolt.webp";
import Image_1 from "../../img/vysokovoltnoe_oborudovanie.webp";
import Image_2 from "../../img/metallichekie_korpusy.webp";
import "./catalog.css";

const Catalog = () => {
  return (
    <>
      <div className="containerSB">
        <h1 data-aos="fade-up-right">КАТАЛОГ</h1>
        <div className="carts">
          <div className="cart-item">
            <img src={Image} alt="" />
            <div className="overlaySB">
              <div className="content">
                <h1>Низковольтное оборудование</h1>
                <Link to="catalog_1" className="linkR">
                  <button className="link">
                    Подробнее
                    <div class="arrowwrapper">
                      <div class="arrow"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img src={Image_1} alt="" />
            <div className="overlaySB">
              <div className="content">
                <h1>Высоковольтное оборудование</h1>
                <Link to="/catalog_2" className="linkR">
                  <button className="link">
                    Подробнее
                    <div class="arrow-wrapper">
                      <div class="arrow"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img src={Image_2} alt="" />
            <div className="overlaySB">
              <div className="content">
                <h1>Корпуса</h1>
                <Link to="/catalog_3" className="linkR">
                  <button className="link">
                    Подробнее
                    <div class="arrow-wrapper">
                      <div class="arrow"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
