import React from "react";
import InputMask from "react-input-mask";
import Button from "@mui/material/Button";

export const Intro = () => {
   return (
      <div id="intro" style={{ padding: "20px", fontFamily: '"Manrope", sans-serif' }}>
         <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="row2">
               <div className="main" style={{ textAlign: "center" }}>
                  <div className="logo">
                     <img
                        src={`${process.env.PUBLIC_URL}/img/main-logo.png`}
                        alt="My Image"
                        style={{ width: "150px", marginBottom: "20px" }}
                     />
                  </div>
                  <div className="title">
                     <p style={{ fontSize: "24px", fontWeight: "600", marginBottom: "30px" }}>
                        Инвестируй в офисные помещения и зарабатывай от
                        <span style={{ color: "#007bff" }}> 25% годовых</span>
                     </p>
                  </div>
                  <div className="main-footer" style={{ display: "flex", justifyContent: "space-around", marginBottom: "30px" }}>
                     <div className="item" style={{ textAlign: "left" }}>
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/pointer.png`}
                              alt="pointer"
                              style={{ width: "20px", marginRight: "10px" }}
                           />
                           Ул. Сыганак 47
                        </p>
                     </div>
                     <div className="item" style={{ textAlign: "left" }}>
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/phone.png`}
                              alt="phone"
                              style={{ width: "20px", marginRight: "10px" }}
                           />
                           +7 (778) 257 68 75
                        </p>
                     </div>
                     <div className="item" style={{ textAlign: "left" }}>
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/email.png`}
                              alt="email"
                              style={{ width: "20px", marginRight: "10px" }}
                           />
                           example@gmail.com
                        </p>
                     </div>
                  </div>
               </div>
               <div className="crm" style={{ marginTop: "30px" }}>
                  <div className="title">
                     <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>Свяжитесь с нами</h1>
                  </div>
                  <div className="form" style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                     <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />

                        <div style={{ marginBottom: "15px" }}>
                           <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Имя:</label>
                           <input type="text" id="name" name="name" style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ddd" }} />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                           <label htmlFor="lastname" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Фамилия:</label>
                           <input type="text" id="lastname" name="lastname" style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ddd" }} />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                           <label htmlFor="phone" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Номер:</label>
                           <InputMask
                              mask="+7 (999) 999-9999"
                              id="phone"
                              name="phone"
                              style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ddd" }}
                              placeholder="+7 (___) ___-____"
                           />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                           <label htmlFor="comments" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Комментарии:</label>
                           <textarea id="comments" name="comments" style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ddd", minHeight: "100px" }}></textarea>
                        </div>

                        <Button
                           type="submit"
                           variant="contained"
                           style={{
                              width: "100%",
                              padding: "12px",
                              backgroundColor: "#007bff",
                              color: "white",
                              fontSize: "16px",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                              textTransform: "uppercase",
                           }}
                        >
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
