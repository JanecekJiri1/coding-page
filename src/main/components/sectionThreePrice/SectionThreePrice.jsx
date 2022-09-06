import React from "react";
import SectionThreeBoxs from "./SectionThreeBoxs";
import "./sectionThreePrice.style.css";

import { useTranslation } from "react-i18next";

function SectionThree(props) {
  const { t } = useTranslation();
  return (
    <div className="sectionThree" id="price">
      <h2 className="click-away--title sectionThree-title">{t("Current offer")}</h2>
      {/* <div className="sectionThree--concept"> */}
      <SectionThreeBoxs />

      <p className="sectionThree--concept--text">{t("s3 offer footer")}</p>
    </div>
    // </div>
  );
}

export default SectionThree;
