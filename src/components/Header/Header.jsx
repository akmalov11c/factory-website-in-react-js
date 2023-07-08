import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="items">
          <i class="fas fa-home" id="home"></i>
          <div className="text">
            <p>работа склада с 8:00 до 20:00</p>
            <span>доставка 24/7</span>
          </div>
        </div>
        <div className="items">
          <i class="fas fa-map-marker-alt"></i>
          <p> улица Саади, Ташкент, Узбекистан</p>
        </div>
        <div className="items">
          <i className="fas fa-phone-alt"></i>
          <p>+998 91 201 99 09</p>
        </div>
      </header>
    </>
  );
};

export default Header;
