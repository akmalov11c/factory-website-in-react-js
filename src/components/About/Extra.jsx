import React from "react";
import "./about.css";

const Extra = () => {
  return (
    <>
      <di v className="extra">
        <h1 className="title" data-aos="fade-right">
          наши преимущества
        </h1>
        <div className="wrp">
          <div className="wrp_items" data-aos="zoom-in">
            <div className="card-items">
              <i class="far fa-star"></i>
              <p>10 лет работы на рынке</p>
            </div>
          </div>
          <div className="wrp_items" data-aos="zoom-in">
            <div className="card-items">
              <i class="fas fa-certificate"></i>
              <p>Сертифицированные материалы и оборудование</p>
            </div>
          </div>
          <div className="wrp_items" data-aos="zoom-in">
            <div className="card-items">
              <i class="fas fa-wallet"></i>
              <p>Любая форма оплаты</p>
            </div>
          </div>
          <div className="wrp_items" data-aos="zoom-in">
            <div className="card-items">
              <i class="fas fa-hammer"></i>
              <p>Собственное производство</p>
            </div>
          </div>
          <div className="wrp_items" data-aos="zoom-in">
            <div className="card-items">
              <i class="fas fa-thumbs-up"></i>
              <p>Качественная продукция</p>
            </div>
          </div>
          <div className="wrp_items" data-aos="zoom-in">
            <div className="card-items">
              <i class="fas fa-truck"></i>
              <p>Быстрая доставка по всей Республике</p>
            </div>
          </div>
        </div>
      </di>
    </>
  );
};

export default Extra;
