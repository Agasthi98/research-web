import React from "react";
import "./timeLine.scss";

import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      title: "2023 Januaray",
      cardTitle: "Topic Assesment submission",
    },
    {
      title: "2023 February",
      cardTitle: "Charter Document submission",
    },
    {
      title: "2023 March",
      cardTitle: "Praposal Presentation",
    },
    {
      title: "2023 April",
      cardTitle: "Praposal Submission",
    },
    {
      title: "2023 April",
      cardTitle: "Status Document Submission",
    },
    {
      title: "2023 June",
      cardTitle: "Progress Presentation 1",
    },
    {
      title: "2023 August",
      cardTitle: "Progress Presentation 2",
    },
    {
      title: "2023 August",
      cardTitle: "Research paper submission for ICAC",
    },
    {
      title: "2023 October",
      cardTitle: "Final presentation ",
    },
  ];
  return (
    <>
      <div className="title" style={{ color: "#1e3050" }}>
        Time Line
      </div>

      <div className="wrapper">
        <div className="timeLine">
          <Chrono items={items} mode="VERTICAL_ALTERNATING" />
          <hr />
        </div>
      </div>
    </>
  );
};

export default Timeline;
