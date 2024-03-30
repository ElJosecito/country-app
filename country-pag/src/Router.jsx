import React from "react";
import "./index.css";
import "./styles/style.css";
//
import Header from "./components/Header";
import FlagsSection from "./components/FlagsSection";
//
import { Routes, Route } from "react-router-dom";
import Cardpage from "./components/Cardpage";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FlagsSection />} />
        <Route path="country/:id" element={<Cardpage />} />
      </Routes>
    </>
  );
}

export default Router;
