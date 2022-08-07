import React from "react";

import Header from "./components/header/Header";
import SectionOne from "./components/sectionsOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
function Main(props) {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default Main;
