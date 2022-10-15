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
        <li className={"basic" === menuItem ? "sectionThree-item-active" : ""} onClick={() => setMenuItem("basic") + setMenuItem("basic")}>
          {t("basic")}
        </li>

        <li className={"advanced" === menuItem ? "sectionThree-item-active" : ""} onClick={() => setMenuItem("advanced") + setMenuItem("advanced")}>
          {t("Advanced")}
        </li>

        <li className={"extra" === menuItem ? "sectionThree-item-active" : ""} onClick={() => setMenuItem("extra") + setMenuItem("extra")}>
          {t("Accessories")}
        </li>
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
