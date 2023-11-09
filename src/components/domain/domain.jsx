import React from "react";
import "./domain.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBolt, faGear } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

const Domain = () => {
  return (
    <>
      <div className="domain-body">
        <div className="heading">
          <h1 className="topic-1" style={{ color: "#1e3050" }}>
            Our Domain
          </h1>
        </div>

        <div className="domain-wrapper">
          <div className="d-left-side">
            <div className="icon-left">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faBook} style={{ color: "#ffffff" }} />
              </div>
              <div className="sec-1">LITERATURE SURVEY</div>
            </div>

            <div className="text-left">
              In the literature review, we shall investigate about different
              existing methods of chlorophyll measurement and estimation, their
              relative accuracies, and the equations they use. The following are
              some of the broad categories that have been explored in research
              studies for chlorophyll estimation.
              <ul>
                <li className="list">
                  In-vitro leaf solution chemical analysis or spectrophotometry.
                </li>
                <li className="list">
                  In-situ proprietary spectrophotometers.
                </li>
                <li className="list">
                  Low-cost in-vitro leaf solution spectrophotometer.
                </li>
                <li className="list">
                  Image Recognition and colour-based leaf chlorophyll
                  estimation.
                </li>
              </ul>
            </div>

            <div className="icon-left">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />
              </div>
              <div className="sec-2">RESEARCH PROBLEM</div>
            </div>
            <div className="text-left">
              In the research problem section, we shall discuss what exact
              issues this research address, and the relevance of the issues and
              why we need a solution. There are mainly three research problems
              that we aim to address. The first one being, how to create sensors
              for early leaf area identification and leaf thickness sensor for
              measuring leaf thickness, and research about the efficiency of
              these novel instruments. The second problem is to research on how
              to control shade based on the inputs taken from above outputs
              based on ML. The third problem is finding a solution for optimally
              integrating leaf area and thickness measurements and shade control
              with ICRS (Intelligent Chat-bot Recommendation System) for a
              highly accurate and valuable set of outputs for farmers / agro
              stakeholders. Unlike conventional output i.e., a set of
              pre-defined parameters on a UI, in (agricultural/other) monitoring
              applications such as these, ICRS technology is revolutionizing
              norms and breaks the limits of conventional UIs by providing users
              the capability to ask questions and resolving their doubts without
              limiting themselves for a few outputs on a UI. And ICRS attempts
              to provide one of the most accurate results based on data
              available to it.
            </div>
          </div>
          <div className="d-right-side">
            <div className="icon-right">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faBolt} style={{ color: "#ffffff" }} />
              </div>
              <div className="sec-1">RESEARCH GAP</div>
            </div>
            <div className="text-right">
              There are several research gaps that has been identified within
              this component, and they will be tabulated below. Each aspect
              shall be explained thoroughly.
              <ul>
                <li>
                  Leaf Chlorophyll and Nitrogen estimation method/calculation.
                </li>
                <li>
                  Low-cost and convenient leaf chlorophyll estimation device.
                </li>
                <li>
                  Low-cost and convenient plant nitrogen (N) estimation method.
                </li>
                <li>
                  Integration of chlorophyll level and plant nitrogen status
                  with Weather Data.
                </li>
                <li>
                  Realtime monitoring of leaf quality parameters and plant
                  health.
                </li>
                <li>
                  Obtain Plant Health Assessment (PHA) information over
                  duration.
                </li>
                <li>
                  Obtain ML-based suggestions on improving chlorophyll and leaf
                  quality.
                </li>
                <li>Obtain ML-based recommendations on improving yield.</li>
                <li>
                  Obtain ML-based advice on efficient application of N
                  fertilizer.
                </li>
              </ul>
            </div>

            <div className="icon-right">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faReadme} style={{ color: "#ffffff" }} />
              </div>
              <div className="sec-2">RESEARCH OBJECTIVES</div>
            </div>
            <div className="text-right">
              <div className="objective-group">Group Objectives</div>
              <p>The following are our group objectives,</p>
              <ul>
                <li>
                  To use different methods to measure and estimate plant health
                  and stress indicators such as diseases, chlorophyll and water
                  status for Brassica sp.
                </li>
                <li>
                  To compare the results obtained from the methods with existing
                  data or literature to verify the quality and accuracy of the
                  sensors and models.
                </li>
                <li>
                  To integrate the results obtained from the methods with other
                  parameters of the system in a chatbot recommendation system
                  that can provide timely and relevant advice to the users.
                </li>
              </ul>
              <div className="objective-group">Component Objectives</div>
              <ul>
                <li>
                  Make estimation of chlorophyll in Brassica sp. using 650nm and
                  940nm (IR) light attenuation, with aid of precise 24 bit
                  Analog-to-digital converted values of light intensity sensor
                  TSL257-LF.
                </li>
                <li>
                  Compare above results with the given results on source paper
                  by Kamarianakis Z and Panagiotakis S to verify quality of the
                  created the sensor.
                </li>
                <li>
                  Use estimation of chlorophyll to identify health status of
                  plant.
                </li>
                <li>
                  Use estimation of chlorophyll to speculate whether plant is
                  facing a disease.
                </li>
                <li>
                  Use chlorophyll estimations in chatbot recommendation system
                  to integrate with other parameters of the research to obtain
                  profound results and alerts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
