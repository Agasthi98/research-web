import React, { useEffect, useState } from "react";
import "./landing.scss";
import Nav from "../navbar/navbar";
import Home from "../home/home";
import TimeLine from "../timeLine/timeLine";
import Technologies from "../technologies/technologies";
import PageLoader from "../../assets/loader/loader";
import Domain from "../domain/domain";
import Methodology from "../methodlogy/methodlogy";
import Documents from "../documents/documents";

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loader when the component mounts
    setLoading(true);

    // Automatically hide the loader after 5 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1500);
    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      {/* {loading && <PageLoader />} */}
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Nav />
          <Home />
          <Domain />
          <Methodology />
          <Technologies />

          <TimeLine />
          <Documents />
        </>
      )}
    </>
  );
};

export default Landing;
