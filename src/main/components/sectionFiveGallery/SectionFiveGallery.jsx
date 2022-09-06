import React from "react";
import "./sectionFiveGallery.style.css";

import { Link } from "react-router-dom";

import SectionFiveCarousel from "./SectionFiveCarousel";

import { useTranslation } from "react-i18next";

function SectionFiveGallery(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="sectionFive" id="gallery">
        <h2 className="click-away--title ">{t("S5 title")}</h2>
        <p>{t("S5 info")}</p>
        <div className="sectionFive--Carousel">
          <SectionFiveCarousel />
        </div>
        <Link to="PhotoGallery">
          <button className="click-away--button">{t("S5 more photo")}</button>
        </Link>
      </div>
    </>
  );
}

export default SectionFiveGallery;
