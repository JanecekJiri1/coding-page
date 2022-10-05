import React from "react";
import "./sectionSevenInsta.style.css";
import { useTranslation } from "react-i18next";

function SectionSevenInsta(props) {
  const { t } = useTranslation();
  return (
    <div className="sectionSevenInsta" id="instagram">
      <h2 className="click-away--title">{t("S7 find us at Instagram")}</h2>
      <h2 className="click-away--title">@jiri.janecek1</h2>
      <div></div>
      <button className="click-away--button">{t("S7 show Instagram")}</button>
    </div>
  );
}

export default SectionSevenInsta;
