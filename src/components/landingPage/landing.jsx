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
import Supervisor from "../supervisors/supervisor";
import Footer from "../Footer/Footer";

const Landing = () => {
  const [loading, setLoading] = useState(true);

  const gg = window.pageYOffset;
  console.log(gg);
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
          <main id="home">
            <Nav />
            <section className="home">
              <Home />
            </section>
            <section className="domain" id="domain">
              {" "}
              <Domain />
            </section>
            <section className="methodlogy" id="methodlogy">
              {" "}
              <Methodology />
            </section>
            <section className="technologies" id="technologies">
              {" "}
              <Technologies />
            </section>

            <section className="timeline" id="timeline">
              {" "}
              <TimeLine />
            </section>
            <section className="documents" id="documents">
              {" "}
              <Documents />
            </section>
            <section className="supervisor" id="supervisor">
              {" "}
              <Supervisor />
            </section>
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Landing;
