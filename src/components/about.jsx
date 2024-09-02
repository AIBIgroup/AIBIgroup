import React from "react";
export const About = (props) => {
   return (
      <div id="about">
         <div className="container">
            <div className="row">
               {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div> */}
               {/* <div className="col-xs-12 col-md-8"> */}
                  <div className="about-text">
                     <div className="whoweare">
                        <h2>Предложения</h2>
                     </div>
                     <p>{props.data ? props.data.paragraph : "loading..."}</p>
                     <div className="features-logotype">
                        <img src="img/logo1.png" alt="" />
                     </div>
                     {/* <div className="rightbottom">
                <img src="img/portfolio/logo.png" alt="" />
              </div> */}
                     {/* <div className="bluebg">
                <img src="img/portfolio/logo.png" alt="" />
              </div> */}

                     {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
                  </div>
               {/* </div> */}

               <div className="col-xs-12 col-md-12">
                  <div className="achievements">
                     <div className="achievements-child">
                        <div className="whoweare">
                           <h2>Надежность</h2>
                        </div>
                        <h3>Надёжность и стабильность </h3>
                        <p>
                           Офисные площади от 21м² до 1000м² — ваша инвестиция с
                           гарантией прибыли!
                        </p>
                     </div>
                     <div className="achievements-child">
                        <div className="whoweare">
                           <h2>Возможность</h2>
                        </div>
                        <h3>Инвестиции в офисы и выкуп</h3>
                        <p>
                           {" "}
                           Заключите договор и гарантированном обратном выкупе
                           через 2 года с надбавкой в 20% к общей сумме вложения
                        </p>
                     </div>
                     <div className="achievements-child">
                        <div className="whoweare">
                           <h2>Выгода</h2>
                        </div>
                        <h3>Аренда, доход и прибыль</h3>
                        <p>
                           {" "}
                           ⁠Возможность заработать от 50% за 2 года чистой
                           прибыли
                        </p>
                     </div>
                     <div className="achievements-child">
                        <div className="whoweare">
                           <h2>Долгосрок</h2>
                        </div>
                        <h3>Надеждные арендаторы</h3>
                        <p> ⁠Найдем долгосрочных арендаторов за 3-4 недели</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
