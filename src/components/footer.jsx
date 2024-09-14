import React from "react";

export const Footer = () => {
   return (
      <>
         <div className="contact-info">
            <p className="contact-address">
               Адрес офиса
            </p>
            <p className="contact-hours">
               Режим Работы: с 10:00 - 18:00
            </p>
            <p className="contact-address-large">
               Ул.Сыганак 47
            </p>
         </div>
         
         <div className="phone-info">
            <p className="phone-label">Телефон номер</p>
            <p className="phone-number">+7 (778) 257 68 75</p>
         </div>
         
         <div className="email-info">
            <p className="email-label">Электронная почта</p>
            <p className="email-address">example.com</p>
         </div>

         <footer className="footer">
            <div className="container">
               <div className="map-container">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.2086290732914!2d71.43233561788716!3d51.12305966580216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424584196171f9f3%3A0x570f42db9dc3641d!2sEurocentre%20Business%20Centre!5e0!3m2!1sen!2skz!4v1726322288301!5m2!1sen!2skz"
                     width="100%"
                     height="450" // Увеличиваем высоту карты
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Google Maps"
                  ></iframe>
                 
               </div>
            </div>
         </footer>
      </>
   );
};
