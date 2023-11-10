import React from "react";
import "./documents.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePowerpoint,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const Documents = () => {
  const handler = () => {
    const link =
      "https://drive.google.com/drive/folders/1kZmAKGXGK1nTt3tkhccVFP0ftCKX-zhy";
    window.open(link, "_blank");
    console.log(link);
  };

  return (
    <>
      <div className="doc-wrapper">
        <div className="doc-title" style={{ color: "#1e3050" }}>
          Documents
        </div>
        <div className="document-body">
          <div className="document-wrapper">
            <div className="doc-items">
              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">TOPIC ASSESSMENT</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>

                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">PROJECT CHARTER</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>

              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">PROJECT CHARTER</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>
            </div>
          </div>

          <div className="document-wrapper">
            <div className="doc-items">
              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">PROJECT PROPOSAL</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">PROJECT PROPOSAL</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">STATUS DOCUMENT I</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>
            </div>
          </div>

          <div className="document-wrapper">
            <div className="doc-items">
              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">STATUS DOCUMENT II</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>

              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">STATUS DOCUMENT II</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faFileLines} />
                <div className="document-name">RESEARCH PAPER</div>
                <div className="document-description">
                  Take a look at the Topic Assessment Form submitted at the
                  begining of the Research Project which contains the individual
                  work distribution.
                </div>
                <div className="submitted-date">
                  Group - Submitted on 28/12/2021
                </div>
                <button className="view-btn" onClick={handler}>
                  <b>View</b>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr-line" />

        <div className="presentation-side">
          <div className="doc-title" style={{ color: "#1e3050" }}>
            Presentations
          </div>
          <div className="document-body">
            <div className="document-wrapper">
              <div className="doc-items">
                <div className="row">
                  <FontAwesomeIcon icon={faFilePowerpoint} />
                  <div className="document-name">
                    PROJECT PROPOSAL PRESENTATION
                  </div>
                  <div className="document-description">
                    Take a look at the Topic Assessment Form submitted at the
                    begining of the Research Project which contains the
                    individual work distribution.
                  </div>
                  <div className="submitted-date">
                    Group - Submitted on 28/12/2021
                  </div>
                  <button className="view-btn" onClick={handler}>
                    <b>View</b>
                  </button>
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faFilePowerpoint} />
                  <div className="document-name">PROGRESS PRESENTATION - I</div>
                  <div className="document-description">
                    Take a look at the Topic Assessment Form submitted at the
                    begining of the Research Project which contains the
                    individual work distribution.
                  </div>
                  <div className="submitted-date">
                    Group - Submitted on 28/12/2021
                  </div>
                  <button className="view-btn" onClick={handler}>
                    <b>View</b>
                  </button>
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faFilePowerpoint} />
                  <div className="document-name">
                    PROGRESS PRESENTATION - II
                  </div>
                  <div className="document-description">
                    Take a look at the Topic Assessment Form submitted at the
                    begining of the Research Project which contains the
                    individual work distribution.
                  </div>
                  <div className="submitted-date">
                    Group - Submitted on 28/12/2021
                  </div>
                  <button className="view-btn" onClick={handler}>
                    <b>View</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
