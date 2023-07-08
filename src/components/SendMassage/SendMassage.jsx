import React from "react";
import logoContact from "../../img/contact.img.png";
import "./sendmassage.css";

const SendMassage = () => {
  return (
    <>
      <div className="form">
        <div className="form-content" data-aos="fade-right">
          <h1>Уточните любую информацию, заказав обратный звонок</h1>
          <div className="flexbox">
            <div className="input-forms">
              <input className="formS" type="text" placeholder="Ваше имя" />
              <input className="formS" type="text" placeholder="Ваш телефон" />
              <input className="formS" type="email" placeholder="Ваша почта" />
              <div className="accept">
                <input type="checkbox" />
                <p>
                  Согласен с обработкой моих персональных данных в соответствии
                  с политикой конфиденциальности
                </p>
              </div>
            </div>
            <div className="right-side">
              <img src={logoContact} alt="" />
              <button className="form-btn">отправить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMassage;
