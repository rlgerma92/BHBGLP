import PropTypes from "prop-types";
import React from "react";
import featureImage from "../../static/images/logo.png";

// const style =

const Header = ({ siteTitle }) => (
  <header>
    <div id="main-nav">
      <div className="wrapper">
        <div className="logo-wrap">
          <a href="/" className="logo">
            <img src={featureImage} alt={"cbdistillery"} />
          </a>
        </div>
        <div className="nav-wrap">
          <ul className="nav-list">
            <li>
              <a href="/">Why Hemp?</a>
            </li>
            <li>
              <a href="/">Types of Products</a>
            </li>
          </ul>
        </div>
        <div className="learn-more">
          <a href="/" className="button">
            Learn More
          </a>
        </div>
      </div>
    </div>
    <div className="hero-wrap">
      <div className="wrapper">
        <div className="hero-inner left"></div>
        <div className="hero-inner right">
          <h1>Find Personalized Relief with Hemp Oil</h1>
          <p>
            People all over the world are turning to CBD to improve their
            overall health. Many daily users first turned to CBD after their
            current regimes didn't give them the effects they desired.
            <br />
            <br />
            If you're looking for a natural, yet effective, way to get back to
            living a comfortable life, see what health benefits CBDistillery
            customers reported after using CBD daily for 7-14 days:*
          </p>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
