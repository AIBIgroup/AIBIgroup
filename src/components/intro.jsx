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
                           />
                           Ул. Сыганак 47
                        </p>
                     </div>
                     <div className="item">
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/phone.png`}
                           />
                           +7 (778) 257 68 75
                        </p>
                     </div>
                     <div className="item">
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/email.png`}
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
                     <TextField
                        id="filled-basic"
                        label="Имя"
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
                        id="filled-basic"
                        label="Фамилия"
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
                        id="filled-basic"
                        label="Номер"
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
                        id="filled-basic"
                        label="Комментарии"
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
                     <Button variant="contained">Отправить</Button>
                  </div>
                  {/* </div> */}
               </div>
            </div>
         </div>
      </div>
   );
};
