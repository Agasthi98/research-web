import React from "react";
import "./domain.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBolt, faGear } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

const Domain = () => {
  return (
    <>
      <div className="domain-body">
        <h1 className="topic-1">Our Domain</h1>
        <div className="domain-wrapper">
          <div className="d-left-side">
            <div className="icon-left">
              <FontAwesomeIcon
                icon={faBook}
                beat
                style={{ color: "#ffffff" }}
              />
              <div className="sec-1">LITERATURE SURVEY</div>
            </div>

            <div className="text-left">
              The error message you're seeing, "Attempted import error:
              'faReadme' is not exported from 'react-icons/fa' (imported as
              'faReadme')," indicates that you're trying to import a component
              or symbol named 'faReadme' from the 'react-icons/fa' package, but
            </div>

            <div></div>
            <div className="icon-left">
              <FontAwesomeIcon
                icon={faGear}
                beat
                style={{ color: "#ffffff" }}
              />
              <div className="sec-2">RESEARCH PROBLEM</div>
            </div>
            <div className="text-left">
              Take a look at the literature review conducted on the topics of
              existing Systems of Ornamental Fish
            </div>
          </div>
          <div className="d-right-side">
            <div className="icon-right">
              <FontAwesomeIcon
                icon={faBolt}
                beat
                style={{ color: "#ffffff" }}
              />
              <div className="sec-1">RESEARCH GAP</div>
            </div>
            <div className="text-right">
              Take a look at the literature review conducted on the topics of
              existing Systems of Ornamental Fish
            </div>

            <div className="icon-right">
              <FontAwesomeIcon
                icon={faReadme}
                beat
                style={{ color: "#ffffff" }}
              />
              <div className="sec-2">RESEARCH OBJECTIVES</div>
            </div>
            <div className="text-right">
              Take a look at the literature review conducted on the topics of
              existing Systems of Ornamental Fish
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
