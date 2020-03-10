/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";

import Header from "./header";
import "../../static/styles/main.scss";
import logo from "../../static/images/logo.png";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className={"feet"}>
            <div className={"row"}>
              <div className={"col-4"}>
                <Link to="/" title={"CBDistillery"}>
                  <img
                    alt={"cbdistillery"}
                    src={logo}
                    className={"logoAlign"}
                  />
                </Link>
              </div>
              <div className={"col-4"}>
                THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FDA AND ARE NOT
                INTENDED TODIAGNOSE,TREAT OR CURE ANY DISEASE. ALWAYS CHECK WITH
                YOUR PHYSICIAN BEFORE STARTING A NEW DIETARY SUPPLEMENT PROGRAM
                Full Disclaimer
              </div>
              <div className={"col-4"}>
                Copyright 2020, CBDISTILLERY. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
