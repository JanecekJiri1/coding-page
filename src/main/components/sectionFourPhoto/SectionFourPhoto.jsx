import React from "react";
import "./sectionFourPhoto.style.css";
import { AiOutlineWoman } from "react-icons/ai";

import SectionFourCarousel from "./SectionFourCarousel";

import { useTranslation } from "react-i18next";

function SectionFour(props) {
  const { t } = useTranslation();
  return (
    <div className="SectionFour" id="photo">
      <h2 className="click-away--title ">{t("S4 title")}</h2>
      <AiOutlineWoman className="global--icon" />
      <p>{t("S4 short info")}</p>
      <div className="sectionFour--Carousel">
        <SectionFourCarousel />
      </div>
    </div>
  );
}

export default SectionFour;
