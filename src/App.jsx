import React from "react";
import { Navbar, CTA, Brand } from "./components/index";
import {
  Footer,
  Header,
  Blog,
  Possibility,
  WhatGPT,
  Features,
} from "./container/index";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
