import * as React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
