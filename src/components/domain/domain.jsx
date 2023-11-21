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

            <div className="text-left-wrapper">
              <div className="text-left">
                What is Leaf Phytometry?
                <ul>
                  <li className="list">
                    Measuring or monitoring physiology of a leaf.
                  </li>
                </ul>
              </div>
              <div className="text-left">
                Why Leaf Phytometry / Precision Agriculture?
                <ul>
                  <li className="list">
                    Leaves reveals the health and stresses of a plants, much
                    like how faces reveal information about humans.
                    <br />
                    It is a direct method of monitoring plant data compared to
                    traditional plant sensors. Provides more accurate and
                    broader amount of data about the plant relating to plant
                    recource requirenments and plant stress.
                  </li>
                </ul>
                <div className="text-left">
                  Currently, Leaf Phytometry is carried out by expensive and
                  inaccessible devices that are limited to bio-tech laboratories
                  and is unusable for continuous monitoring.
                </div>
              </div>
            </div>

            <div className="icon-left">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />
              </div>
              <div className="sec-2">RESEARCH PROBLEM</div>
            </div>
            <div className="text-left-problem">
              How to harness the potential of leaf phytometry, for Agri-IoT, for
              continuous logging and monitoring, be performed with less human
              intervention, lower cost, and higher efficiency, to optimize crop
              production and resource use in a background of growing population
              and limited agricultural resources?
            </div>
          </div>
          <div className="d-right-side">
            <div className="icon-right">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faBolt} style={{ color: "#ffffff" }} />
              </div>
              <div className="sec-1">RESEARCH OUTCOMES</div>
            </div>
            <div className="text-right-outcome">
              Four-leaf clips were created and they proved to be simple,
              low-cost, yet highly effective methods to measure plant quality
              and health continuously, and as accurate alternatives for
              traditional agricultural IoT sensors that just measured
              environmental variables.
              <br />
              The system estimates leaf thickness, leaf nitrogen, leaf
              chlorophyll, leaf capacitance and leaf temperature as accurate
              relative measurements and semi-accurate estimations. <br />
              The system provides real time plant data through the web and the
              smartphone app. Ultimately a neural network based machine learning
              model classifies plant stress based on data from the above leaf
              clips
            </div>

            <div className="icon-right">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faReadme} style={{ color: "#ffffff" }} />
              </div>
              <div className="sec-2">RESEARCH OBJECTIVES</div>
            </div>
            <div className="text-right">
              <ul>
                <li>
                  Explore methods to monitor plant data with more accuracy
                </li>
                <li>
                  How to replicate those accurate methods at a lower cost with
                  minimum comprise of accuracy.
                </li>
                <li>How to estimate plant stress via machine learning?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
