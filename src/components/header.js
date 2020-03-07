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
          <h1>Discover Quality Hemp Extract</h1>
          <p>
            Chances are you know at least one person claiming to experience
            significant benefits using hemp based products. If you’ve been
            trying to learn about what hemp is, how hemp extract products work,
            and what they could do for you, we are her to help.
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
