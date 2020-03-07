import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import thumbnailHead from "../../static/images/head.png"
import thumbnailHand from "../../static/images/Hand.png"
import thumbnailFlag from "../../static/images/Flag.png"
import thumbnailOil from "../../static/images/oil.png"
import thumbnailTopical from "../../static/images/application.png"
import thumbnailSoftgel from "../../static/images/softgels.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Discover Quality Hemp Extract" />

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-4"}>
              <h3>Non-Intoxicating</h3>
              <img alt={"head"} src={thumbnailHead} />
            </div>
            <div className={"col-4"}>
              <h3>Naturally Sourced</h3>
              <img alt={"head"} src={thumbnailHand} />
            </div>
            <div className={"col-4"}>
              <h3>Made In The USA</h3>
              <img alt={"head"} src={thumbnailFlag} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={"features"}>
      <div className={"feature__item"}>
        <div className={"hero2"}>
          <div className={"feature__content"}>
            <h2>Why Hemp?</h2>
            <p>
              The Endocannabinoid System (ECS) is a collection of cell receptors
              and their corresponding molecules (agonists) in the human body
              responsible for regulating and maintaining many key functions of
              the human body. Plant cannabinoids, bind with these receptors and
              send a message to the body to do certain things. Industrial hemp
              plants contain 113+ naturally occurring, active cannabinoids.
            </p>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-4"}>
            <div className={"card"}>
              <div className={"card-image"}>
                <img alt={"oil"} src={thumbnailOil} />
              </div>
              <div className={"card-body"}>
                <h4>Oil Tinctures</h4>
                <p>
                  Oil Tinctures are a popular choice among users because they
                  are easy to use. For best results, hold a few drops under your
                  tongue for 10-20 seconds before swallowing.
                </p>
              </div>
            </div>
          </div>
          <div className={"col-4"}>
            <div className={"card"}>
              <div className={"card-image"}>
                <img alt={"topicals"} src={thumbnailTopical} />
              </div>
              <div className={"card-body"}>
                <h4>Topicals</h4>
                <p>
                  Bring the benefits straight to your skin with hemp extract
                  topical products. Topicals are a wonderful addition to any
                  skincare routine. Apply directly to affected areas.
                </p>
              </div>
            </div>
          </div>
          <div className={"col-4"}>
            <div className={"card"}>
              <div className={"card-image"}>
                <img alt={"softgels"} src={thumbnailSoftgel} />
              </div>
              <div className={"card-body"}>
                <h4>Softgels</h4>
                <p>
                  If you value convenience, Softgels may be your best option.
                  With these products, you never have to worry about measuring
                  or mixing your preferred dosage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
