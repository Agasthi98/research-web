import React from "react";
import "./timeLine.scss";

import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      //   url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      //   media: {
      //     type: "IMAGE",
      //     source: {
      //       url: "http://someurl/image.jpg",
      //     },
      //   },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];
  return (
    <>
      <div className="title">Time Line</div>

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
