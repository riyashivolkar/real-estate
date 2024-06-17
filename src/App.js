import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import Hero from "./components/Hero";
import { Sliderdata } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={Sliderdata} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
