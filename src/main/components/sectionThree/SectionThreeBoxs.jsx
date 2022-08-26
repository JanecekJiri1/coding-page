import React from "react";

import { useState } from "react";
import "./sectionThreeBoxs.style.css";
import Basic from "./Basic";
import Advanced from "./Advanced";
import Extra from "./Extra";

function SectionThreeBoxs(props) {
  const [menuItem, setMenuItem] = useState("portfolio");

  return (
    <div>
      <ul className="sectionThree--concept--top">
        <li onClick={() => setMenuItem("portfolio")}>Základ</li>
        <li onClick={() => setMenuItem("wineMenu")}>Pokročilý</li>
        <li onClick={() => setMenuItem("foodMenu")}>Doplňky </li>
      </ul>

      <div className="sectionThree--concept--boxs ">
        {menuItem === "portfolio" && <Basic />}
        {menuItem === "wineMenu" && <Advanced />}
        {menuItem === "foodMenu" && <Extra />}
      </div>
    </div>
  );
}

export default SectionThreeBoxs;
