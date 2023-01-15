import React, { useEffect } from "react";

import Header from "./components/header/Header";
import SlideNavigation from "./components/slideNavigation/SlideNavigation";
import SectionOneOffer from "./components/sectionsOneOffer/SectionOneOffer";
import SectionTwoVideo from "./components/sectionTwoVideo/SectionTwoVideo";
import SectionThreePrice from "./components/sectionThreePrice/SectionThreePrice";
import SectionFourPhoto from "./components/sectionFourPhoto/SectionFourPhoto";
import SectionFiveGallery from "./components/sectionFiveGallery/SectionFiveGallery";
import Gallery from "./components/sectionFiveGallery/gallery/Gallery";
import SectionSixForm from "./components/sectionSixForm/SectionSixForm";
import SectionSevenInsta from "./components/sectionSevenInsta/SectionSevenInsta";
import SectionEightFooter from "./components/sectionEightFooter/SectionEightFooter";
// import Main from "./components/src/App";

import { Routes, Route } from "react-router-dom";
import PageNavigationListener from "./hooks/PageNavigationListener";

function MainMain(props) {
  return (
    <>
      {/* <PageNavigationListener /> */}
      <Header />
      <SlideNavigation />
      <SectionOneOffer />
      <SectionTwoVideo />
      <SectionThreePrice />
      <SectionFourPhoto />
      <SectionFiveGallery />
      <SectionSixForm />
      <SectionSevenInsta />
      <SectionEightFooter />
      {/* <Main /> */}
    </>
  );
}

export default MainMain;
