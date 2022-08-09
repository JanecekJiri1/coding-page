import React from "react";

import "./main.style.css";

import Header from "./components/header/Header";
import SlideNavigation from "./components/slideNavigation/SlideNavigation";
import SectionOne from "./components/sectionsOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";

function Main(props) {
  return (
    <div>
      <Header />
      <SlideNavigation />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default Main;
