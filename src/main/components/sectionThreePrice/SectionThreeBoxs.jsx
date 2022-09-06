import React from "react";

import { useState } from "react";
import "./sectionThreeBoxs.style.css";
import Basic from "./Basic";
import Advanced from "./Advanced";
import Extra from "./Extra";
import { useTranslation } from "react-i18next";

function SectionThreeBoxs(props) {
  const { t } = useTranslation();
  const [menuItem, setMenuItem] = useState("basic");

  return (
    <div>
      <ul className="sectionThree--concept--top">
        <li onClick={() => setMenuItem("basic")}>{t("basic")}</li>
        <li onClick={() => setMenuItem("advanced")}>{t("Advanced")}</li>
        <li onClick={() => setMenuItem("extra")}>{t("Accessories")} </li>
      </ul>

      <div className="sectionThree--concept--boxs ">
        {menuItem === "basic" && <Basic />}
        {menuItem === "advanced" && <Advanced />}
        {menuItem === "extra" && <Extra />}
      </div>
    </div>
  );
}

export default SectionThreeBoxs;
