import React from "react";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <img src="img/portfolio/logo.png" alt="" />
        <div className="footer-navigation">
            <a href="#">Our Teams</a>
            <a href="#">What We Do</a>
            <a href="#">Careers</a>
            <a href="#">News & Insights</a>
        </div>
        <p>Copyright © Citadel Enterprise Americas LLC or one of its affiliates. All rights reserved.</p>
      </div>
    </footer>
  );
};
