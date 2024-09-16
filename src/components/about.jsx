import React, { useState, useEffect } from "react";import PropTypes from "prop-types"; // Импортируем PropTypes

// Функция для форматирования чисел с разделением тысяч
const formatNumber = (num) => {
   if (typeof num === "number") {
      return num.toLocaleString("ru-RU");
   }
   return num;
};

export const About = (props) => {
   const [inputValue, setInputValue] = useState("");
   const [area, setArea] = useState("Площадь");
   const [profit, setProfit] = useState("Прибыль");
   const [benefit, setBenefit] = useState("Выгода");

   useEffect(() => {
      if (!isNaN(inputValue) && inputValue > 0) {
         const areaValue = Math.floor(inputValue / 700000);
         const profitValue = areaValue * 10300;
         const benefitValue = inputValue * 1.2;

         setArea(formatNumber(areaValue) + " м²");
         setProfit(formatNumber(profitValue));
         setBenefit(formatNumber(benefitValue));
      } else {
         setArea("Площадь");
         setProfit("Прибыль");
         setBenefit("Выгода");
      }
   }, [inputValue]);

   return (
      <div id="about">
         <div className="container">
            <div className="row">
               <div className="whoweare">
                  <h2>Коммерческое предложение</h2>
               </div>
               <div className="columns-wrapper">
                  <div className="left-column">
                     <div className="about-text">
                        <p>
                           {props.data ? props.data.paragraph : "loading..."}
                        </p>
                     </div>
                     <div className="features-wrapper">
                        <div className="features-blocks">
                           <div
                              className="features-block text-left"
                              data-number="01"
                           >
                              25% годовых от аренды и гарантированного обратного
                              выкупа. Инвестируйте и получайте стабильный доход
                              в 25% годовых
                           </div>
                           <div
                              className="features-block text-left"
                              data-number="02"
                           >
                              Гарантированный обратный выкуп через 2 года с 20%
                              надбавкой к первоначальной сумме инвестиций, что
                              позволит увеличить ваши вложения.
                           </div>
                           <div
                              className="features-block text-left"
                              data-number="03"
                           >
                              Офисные помещения площадью от 20 до 1,000 м².
                              Выберите свою планировку из разнообразных офисных
                              помещений стоимостью от 15 миллионов KZT и выше.
                           </div>
                           <div
                              className="features-block text-left"
                              data-number="04"
                           >
                              Цены от 700,000 KZT за м². Приобретайте офисные
                              площади по выгодной цене — всего от 700,000 KZT за
                              квадратный метр.
                           </div>
                        </div>
                        <div
                           className="additional-block text-left"
                           data-number="05"
                        >
                           Быстрое заключение долгосрочной аренды. Мы подберем
                           надежных арендаторов за 3–4 недели, обеспечив
                           стабильный доход для ваших инвестиций.
                        </div>
                     </div>
                  </div>

                  <div className="right-column">
                     <div className="container">
                        <h2>Калькулятор выгоды</h2>
                        <p>Узнайте прибыль от инвестиции</p>
                        <div className="input-calc">
                           <textarea
                              className="input-calculator"
                              placeholder="Введите сумму"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                           ></textarea>
                           {/* <img src="img/иконка.png" alt="Button" /> */}
                        </div>
                        <div className="profits">
                           <div className="profit">
                              <h4>Площадь</h4>
                              <p>
                                 <img
                                    src="img/icon1.png"
                                    alt="Area Icon"
                                    className="output-icon"
                                 />
                                 {area}
                              </p>
                           </div>
                           <div className="profit">
                              <h4>Прибыль</h4>
                              <p>
                                 <img
                                    src="img/icon2.png"
                                    alt="Area Icon"
                                    className="output-icon"
                                 />
                                 {profit}
                              </p>
                           </div>
                           <div className="profit">
                              <h4>Выгода</h4>
                              <p>
                                 <img
                                    src="img/icon3.png"
                                    alt="Area Icon"
                                    className="output-icon"
                                 />
                                 {benefit}
                              </p>
                           </div>
                           <p className="footer-calculator">
                              Все права на публикуемые на сайте материалы
                              принадлежат компании ABI Group © 2024
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

// Добавляем валидацию пропсов
About.propTypes = {
   data: PropTypes.shape({
      paragraph: PropTypes.string.isRequired,
   }),
};
