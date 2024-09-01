import React from "react";export const Navigation = (props) => {
   return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
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
                  <img src="img/logo.png" width="80%" style={{ marginTop: "-10px" }} />
               </a>{" "}
            </div>

            <div
               className="collapse navbar-collapse"
               id="bs-example-navbar-collapse-1"
            >
               <ul className="nav navbar-nav navbar-right">
                  <li>
                     <a href="#features" className="page-scroll">
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="#about" className="page-scroll">
                        Offers
                     </a>
                  </li>
                  <li>
                     <a href="#services" className="page-scroll">
                        Benefit Calculator
                     </a>
                  </li>
                  <li>
                     <a href="#portfolio" className="page-scroll">
                        Contact Us
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};
