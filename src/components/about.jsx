import React from "react";
export const About = (props) => {
   return (
      <div id="about">
         <div className="container">
            <div className="row">
               <div className="columns-wrapper">
                  <div className="left-column">
                     <div className="about-text">
                        <div className="whoweare">
                           <h2>Коммерческое предложение</h2>
                        </div>
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
                     <div className="big-block">
                        <div className="benefit-calculator">
                           Калькулятор Выгоды
                           <div className="calculator-description">
                              Узнайте прибыль от инвестиций
                           </div>
                        </div>
                        <div className="textarea-container">
                           <textarea
                              className="input-field"
                              placeholder="Калькулятор выгоды"
                           ></textarea>
                           <button className="image-button">
                              <img src="img/иконка.png" alt="Button" />
                           </button>
                           <div className="textarea-label">Площадь</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
