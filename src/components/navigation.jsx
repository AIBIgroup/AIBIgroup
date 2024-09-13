import React from "react";

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{ backgroundColor: "#FFFF" }} // Added background color here
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/logo1.png" width="80%" style={{ marginTop: "-10px" }} />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#intro" className="page-scroll" style={{ color: "#000000" }}>
                Главная
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" style={{ color: "#000000" }}>
                Предложения
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" style={{ color: "#000000" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" style={{ color: "#0000" }}>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
