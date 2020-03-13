import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import thumbnailSleep from "../../static/images/BetterSleep.svg";
import thumbnailDiscomfort from "../../static/images/LessDiscomfort.svg";
import thumbnailInflamation from "../../static/images/LessInflammation.svg";
import thumbnailLessStiffness from "../../static/images/LessStiffness.svg";
import thumbnailMoreRelaxed from "../../static/images/MoreRelaxed.svg";
import thumbnailOil from "../../static/images/oil.png";
import thumbnailTopical from "../../static/images/application.png";
import thumbnailSoftgel from "../../static/images/softgels.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Discover Quality Hemp Extract" />
    <div className={"mobileHero"} />
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-2"}>
          <img alt={"Better Sleep"} src={thumbnailSleep} />
          <h3>Better Sleep</h3>
        </div>
        <div className={"col-2"}>
          <img alt={"Less Discomfort"} src={thumbnailDiscomfort} />
          <h3>Less Discomfort</h3>
        </div>
        <div className={"col-2"}>
          <img alt={"Less Inflammation"} src={thumbnailInflamation} />
          <h3>Less Inflammation</h3>
        </div>
        <div className={"col-2"}>
          <img alt={"Less Stiffness"} src={thumbnailLessStiffness} />
          <h3>Less Stiffness</h3>
        </div>
        <div className={"col-2"}>
          <img alt={"More Relaxed"} src={thumbnailMoreRelaxed} />
          <h3>More Relaxed</h3>
        </div>
      </div>
    </div>
    <div className={"mobileBody"}>
      <div className={"whyHemp"}>
        <div className={"hero2"} alt={"Hemp"}>
          <div className="row">
            <div className="col-4">
              <h2>Why Hemp?</h2>
              <p>
                Hemp extracts have been used for centuries to support the mind
                and body in various ways. Through natural cell receptors and
                their corresponding molecules, hemp oil has the potential to aid
                the human body in regulating and maintaining many key functions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className={"row"}>
          <div className={"col-4"}>
            <img alt={"oil"} src={thumbnailOil} />
            <h4>Oil Tinctures</h4>
            <p>
              Oil Tinctures are a popular choice among users because they are
              easy to use. For best results, hold a few drops under your tongue
              for 10-20 seconds before swallowing.
            </p>
          </div>
          <div className={"col-4"}>
            <img alt={"topicals"} src={thumbnailTopical} />
            <h4>Topicals</h4>
            <p>
              Bring the benefits straight to your skin with hemp extract topical
              products. Topicals are a wonderful addition to any skincare
              routine. Apply directly to affected areas.
            </p>
          </div>
          <div className={"col-4"}>
            <img alt={"softgels"} src={thumbnailSoftgel} />
            <h4>Softgels</h4>
            <p>
              If you value convenience, Softgels may be your best option. With
              these products, you never have to worry about measuring or mixing
              your preferred dosage.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
