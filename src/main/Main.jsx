import React from "react";

import Header from "./components/header/Header";
import SlideNavigation from "./components/slideNavigation/SlideNavigation";
import SectionOne from "./components/sectionsOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFive from "./components/sectionFive/SectionFive";
import SectionSixForm from "./components/sectionSixForm/SectionSixForm";
import SectionSevenInsta from "./components/sectionSevenInsta/SectionSevenInsta";
import SectionEightFooter from "./components/sectionEightFooter/SectionEightFooter";

function Main(props) {
  return (
    <>
      <Header />
      <SlideNavigation />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSixForm />
      <SectionSevenInsta />
      <SectionEightFooter />
    </>
  );
}

export default Main;
