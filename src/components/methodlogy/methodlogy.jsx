import React from "react";
import "./methodlogy.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

function Methodology() {
  return (
    <div className="method-body">
      <div className="title">Methodlogy</div>
      <div className="method-wrapper">
        <div className="description">
          This proposed system mainly consist of four main components, which are
          specifically;
        </div>
        <div className="items">
          <div className="item">
            <FontAwesomeIcon icon={faCircleChevronRight} />
            <div className="text-component">
              Fish Behaviour Optimization For Predictions And Intensive Caring
            </div>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCircleChevronRight} />
            <div className="text-component">
              Fish Behaviour Optimization For Predictions And Intensive Caring
            </div>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCircleChevronRight} />
            <div className="text-component">
              Fish Behaviour Optimization For Predictions And Intensive Caring
            </div>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCircleChevronRight} />
            <div className="text-component">
              Fish Behaviour Optimization For Predictions And Intensive Caring
            </div>
          </div>
        </div>

        <div className="summary">
          "FishAnalyzer" is a mobile application used to automate the manual
          workarounds which exists in the existing fish industry. In the first
          phase. A more productive, smart caring solution for ornamental fish
          has been brought up where the owners can have a strong analyzation and
          deep sense with the ornamental fish. Using FishAnalyzer they can
          analyze the fish behavior for predictions and intensive caring. It can
          also perform quantification of fish Fingerlings and Length estimation.
          Moreover it has the ability of predicting the alternations of
          watercolor in fish tanks. Last but not the least, it also has the
          ability to predict the Food Consumption and maintain a Smart
          Filtration Maintenance System.
        </div>
      </div>
    </div>
  );
}

export default Methodology;
