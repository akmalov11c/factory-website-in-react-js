import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <Header />
      <nav className="navbar">
        <h3 className="logo">FREE POWER TEC</h3>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="home">
            <li>Главная</li>
          </Link>
          <Link to="/about" className="about">
            <li>О компании</li>
          </Link>
          <Link to="/catalog" className="catalog">
            <li>Каталог</li>
          </Link>
          <Link to="/service" className="service">
            <li>Услуги</li>
          </Link>
          <Link to="/reviews" className="reviews">
            <li>Отзывы о нас</li>
          </Link>
          <Link to="/contacts" className="contacts">
            <li>Контакты</li>
          </Link>
        </ul>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
