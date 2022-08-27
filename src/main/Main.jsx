import React from "react";

import Header from "./components/header/Header";
import SlideNavigation from "./components/slideNavigation/SlideNavigation";
import SectionOne from "./components/sectionsOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFourPhoto from "./components/sectionFourPhoto/SectionFourPhoto";
import SectionFiveGallery from "./components/sectionFiveGallery/SectionFiveGallery";
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
      <SectionFourPhoto />
      <SectionFiveGallery />
      <SectionSixForm />
      <SectionSevenInsta />
      <SectionEightFooter />
    </>
  );
}

export default Main;
