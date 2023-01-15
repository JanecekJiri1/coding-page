import React from "react";
import "./sectionSevenInsta.style.css";
import { useTranslation } from "react-i18next";

import img1 from "./photo/desetikoruna.jpg";
import img2 from "./photo/more.jpg";
import img3 from "./photo/zapad.jpg";
import img4 from "./photo/stul.jpg";
import img5 from "./photo/utes.jpg";
import img6 from "./photo/zamek.jpg";

function SectionSevenInsta(props) {
  const { t } = useTranslation();
  return (
    <div className="sectionSevenInsta" id="instagram">
      <h2 className="click-away--title">{t("S7 find us at Instagram")}</h2>
      <h2 className="click-away--title">@jiri.janecek1</h2>
      <article>
        <a href="https://www.instagram.com/p/B0RwbPLI22u/" target="_blank">
          <img className="insta--img" src={img1} />
        </a>
        <a href="https://www.instagram.com/p/B0RwbPLI22u/" target="_blank">
          <img className="insta--img" src={img2} />
        </a>
        <a href="https://www.instagram.com/p/B0X1RmKIa_S/" target="_blank">
          <img className="insta--img" src={img3} />
        </a>

        <a href="https://www.instagram.com/p/B5lmqMkFDWL/" target="_blank">
          <img className="insta--img" src={img4} />
        </a>

        <a href="https://www.instagram.com/p/B0RwbPLI22u/" target="_blank">
          <img className="insta--img" src={img5} />
        </a>
        <a href="https://www.instagram.com/p/B0RwbPLI22u/" target="_blank">
          <img className="insta--img" src={img6} />
        </a>
      </article>
      <a href="https://www.instagram.com/jirka.janecek1/" target="_blank">
        <button className="click-away--button">{t("S7 show Instagram")} </button>
      </a>
    </div>
  );
}

export default SectionSevenInsta;
