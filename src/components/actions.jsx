import React from "react";export const Actions = () => {
   return (
      <div id="actions">
         <div className="container">
            <div className="actions">
               <div className="mockup">
                  <img
                     src={`${process.env.PUBLIC_URL}/img/mockup.png`}
                     alt=""
                  />
               </div>
               <div className="text">
                  <h4>Возникли вопросы?</h4>
                  <p>Если у вас есть вопросы, вы можете написать нам на</p>
               </div>
               <div className="social-media">
                  <a id="wa" href="#">
                     <img src={`${process.env.PUBLIC_URL}/img/.png`} alt="" />
                     написать на WhatsApp
                  </a>
                  <a id="insta" href="#">
                     <img src={`${process.env.PUBLIC_URL}/img/.png`} alt="" />
                     написать на Instagram
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};
