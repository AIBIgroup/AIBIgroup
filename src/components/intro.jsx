import React from "react";
import TextField from "@mui/material/TextField";
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
                     {/* Форма с атрибутом data-netlify для Netlify Forms */}
                     <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        {/* Скрытое поле для Netlify */}
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="bot-field" />

                        <TextField
                           id="name"
                           label="Имя"
                           name="name"
                           variant="filled"
                           sx={{
                              "& .MuiInputBase-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                              "& .MuiInputLabel-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                           }}
                        />
                        <TextField
                           id="lastname"
                           label="Фамилия"
                           name="lastname"
                           variant="filled"
                           sx={{
                              "& .MuiInputBase-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                              "& .MuiInputLabel-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                           }}
                        />
                        <TextField
                           id="phone"
                           label="Номер"
                           name="phone"
                           variant="filled"
                           sx={{
                              "& .MuiInputBase-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                              "& .MuiInputLabel-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                           }}
                        />
                        <TextField
                           id="comments"
                           label="Комментарии"
                           name="comments"
                           variant="filled"
                           sx={{
                              "& .MuiInputBase-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                              "& .MuiInputLabel-root": {
                                 fontFamily: `"Manrope", sans-serif`,
                              },
                           }}
                        />
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
