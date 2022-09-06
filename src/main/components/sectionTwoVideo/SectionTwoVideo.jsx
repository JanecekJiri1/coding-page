import React from "react";
import "./sectionTwoVideo.style.css";
import { useTranslation } from "react-i18next";

function SectionTwoVideo(props) {
  const { t } = useTranslation();
  return (
    <div className="sectionTwo" id="section2">
      <video src="https://vjs.zencdn.net/v/oceans.mp4" autoPlay muted loop />
      <div className="sectionTwo--text">
        <h2>{t("discover")}</h2>
        <h3>{t("no regret")}</h3>
      </div>
    </div>
  );
}

export default SectionTwoVideo;
