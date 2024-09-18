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
                  <a id="wa" href="https://wa.me/77782576875">
                     <img
                        src={`${process.env.PUBLIC_URL}/img/icon4.png`}
                        alt=""
                     />
                     Написать на WhatsApp
                  </a>
                  <a id="insta" href="https://www.instagram.com/aibigroup/">
                     <img
                        src={`${process.env.PUBLIC_URL}/img/icon5.png`}
                        alt=""
                     />
                     Написать на Instagram
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};
