import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="line">
        <hr />
      </div>
      <footer>
        <div className="footer-content">
          <div className="left-content">
            <ul>
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
          </div>
          <div className="right-content">
            <h3>FREE POWER TEC</h3>
            <p>связаться с нами через соц. сети</p>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/fps_metallicheskiye_izdeliya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-telegram-plane"></i>
              </li>
            </ul>
            <div className="footer-bottom">
              <p>
                copyright $copy2023 . designed by{" "}
                <span>
                  <a href="https://www.instagram.com/jadu.uz">Jadu IT Group</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
