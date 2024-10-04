import React from "react";
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
                           +7 (777) 438 2855
                        </p>
                     </div>
                     <div className="item">
                        <p>
                           <img
                              src={`${process.env.PUBLIC_URL}/img/email.png`}
                              alt="email"
                           />
                           aibigroupinvest@gmail.com
                        </p>
                     </div>
                  </div>
               </div>
               <div className="crm">
                  <div className="container">
                     <div className="title">
                        <h1>Свяжитесь с нами</h1>
                     </div>
                     <form 
    className="form" 
    name="contact" 
    method="POST" 
    data-netlify="true"
> 
    {/* Скрытое поле для Netlify */} 
    <input type="hidden" name="form-name" value="contact" /> 

    {/* Honeypot скрытое поле */} 
    <div style={{ display: "none" }}> 
        <input name="bot-field" /> 
    </div> 

    <div className="intro-input"> 
        <label htmlFor="name"></label> 
        <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Имя" 
            required
        /> 
    </div> 
    <div className="intro-input"> 
        <label htmlFor="phone"></label> 
        <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Телефон" 
            required
        /> 
    </div> 
    <div className="intro-input"> 
        <label htmlFor="comments"></label> 
        <textarea 
            id="comments" 
            name="comments" 
            placeholder="Комментарии" 
            required
        ></textarea> 
    </div> 

    <button className="submit" type="submit"> 
        Отправить 
    </button> 
</form>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
