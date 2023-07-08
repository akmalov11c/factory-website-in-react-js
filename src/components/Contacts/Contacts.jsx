import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="contact">
        <h1>контакты</h1>
        <div className="locks">
          <div className="lock-items" data-aos="fade-left">
            <div className="lock-item">
              <i className="fas fa-phone-alt"></i>
              <p>+998 91 201 99 09</p>
            </div>
            <div className="lock-item">
              <i class="fas fa-calendar-alt"></i>
              <p>доставка 24/7</p>
            </div>
            <div className="lock-item">
              <i class="fas fa-home" id="home"></i>
              <p>работа склада с 8:00 до 20:00</p>
            </div>
            <div className="lock-item">
              <i class="fas fa-map-marker-alt"></i>
              <p> улица Саади, Ташкент, Узбекистан</p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.5257356807706!2d69.21922851489128!3d41.253887612224375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d667c4b0be361%3A0x7202b4ee82688823!2sOOO%20%22FREE%20POWER%20TEC%22!5e0!3m2!1sru!2s!4v1678281063030!5m2!1sru!2s"
              width="650"
              height="460"
              style={{ style: "border: '0'" }}
              allowfullscreen=""
              loading="lazy"
              title="''"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
