import React from "react";

export const Careers = (props) => {
  return (
    <header id="header">
      <div id="careers" className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>{props.data}
                Work with Exceptional Talent
                  <span></span>
                </h1>
                <p>Here, you’ll be energized by the people around you. 
                    Investment professionals, engineers and quantitative researchers
                     come together to learn from each other and quickly build extraordinary careers.</p>
                <a href="#">Explore career possibilites</a>
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
