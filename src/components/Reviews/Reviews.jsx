import React from "react";
import "./reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="rewiev-container">
        <h1 data-aos="fade-right">Оставить отзыв</h1>
        <div className="review-content" data-aos="zoom-in">
          <div className="form-container">
            <div className="form-items">
              <label htmlFor="name"> Имя *</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-items">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-items">
              <label htmlFor="text">Текст </label>
              <textarea id="text" name="text" rows="10" cols="100"></textarea>
            </div>
            <button className="submit-btn">отправить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
