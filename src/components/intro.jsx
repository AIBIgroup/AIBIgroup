import React from "react";
import Button from "@mui/material/Button";

export const Intro = () => {
   return (
      <div id="intro">
         <div className="container">
            <div className="row2">
               <div className="main">
                  <div className="logo">
                     <img
                        src={`${process.env.PUBLIC_URL}/img/main-logo.png`}
                        alt="My Image"
                     />
                  </div>
                  <div className="title">
                     <p>
                        Инвестируй в офисные помещения и зарабатывай от
                        <span> 25% годовых</span>
                     </p>
                  </div>
                  <div className="main-footer">
                     <div className="item">
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/pointer.png`}
                              alt="pointer"
                           />
                           Ул. Сыганак 47
                        </p>
                     </div>
                     <div className="item">
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/phone.png`}
                              alt="phone"
                           />
                           +7 (778) 257 68 75
                        </p>
                     </div>
                     <div className="item">
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/email.png`}
                              alt="email"
                           />
                           example@gmail.com
                        </p>
                     </div>
                  </div>
               </div>
               <div className="crm">
                  <div className="title">
                     <h1>Свяжитесь с нами</h1>
                  </div>
                  <div className="form">
                     <form name="contact" method="POST" data-netlify="true">
                        {/* Скрытое поле для Netlify */}
                        <input type="hidden" name="form-name" value="contact" />

                        {/* Honeypot скрытое поле */}
                        <div style={{ display: "none" }}>
                           <input name="bot-field" />
                        </div>

                        <div>
                           <label htmlFor="name">Имя:</label>
                           <input type="text" id="name" name="name" />
                        </div>
                        <div>
                           <label htmlFor="lastname">Фамилия:</label>
                           <input type="text" id="lastname" name="lastname" />
                        </div>
                        <div>
                           <label htmlFor="phone">Номер:</label>
                           <input type="tel" id="phone" name="phone" />
                        </div>
                        <div>
                           <label htmlFor="comments">Комментарии:</label>
                           <textarea id="comments" name="comments"></textarea>
                        </div>

                        <Button type="submit" variant="contained">
                           Отправить
                        </Button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
