import * as React from "react";
import { BrowserRouter, Routes, Link, Route, Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/landing";
import Home from "./components/home/home";
import Technologies from "./components/technologies/technologies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/technologies" element={<Technologies />}></Route>
          {/* <Route path="/" element={<LandingPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
