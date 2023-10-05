import * as React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
