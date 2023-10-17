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
          <div className="col-xs-12 col-md-8">
            <div className="about-text">
              <div className="whoweare">
                <h2>Who we are</h2>
              </div>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
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
          </div>

          <div className="col-xs-12 col-md-12">
          <div className="achievements">
            <div className="achievements-child">
              <div className="whoweare">
                <h2>1990</h2>
              </div>
              <h3>Date founded by CEO Ken Griffin</h3>
            </div>
            <div className="achievements-child">
              <div className="whoweare">
                <h2>65B</h2>
              </div>
                <h3>Investement capitalas of September 1, 2023</h3>
                <p> Investment capital is combined across funds and includes equity (or members’ capital), 
                    plus any accrued performance allocation (or manager allocation) and the granted portion 
                    of certain deferred payment obligations (where applicable).</p>
            </div>
            <div className="achievements-child">
              <div className="whoweare">
                <h2>#1</h2>
              </div>
              <h3>Most profitable hedge fund manager of all time</h3>
              <p> Source: LCH Investment NV estimates, Top Hedge Fund Managers by Net Gains Since 
                  Inception as of 12/31/2022.</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};
