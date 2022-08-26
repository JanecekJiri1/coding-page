import React from "react";

import { useState } from "react";
import "./sectionThreeBoxs.style.css";
import Basic from "./Basic";
import Advanced from "./Advanced";
import Extra from "./Extra";

function SectionThreeBoxs(props) {
  const [basic, setBasic] = useState(true);
  const [advanced, setAdvanced] = useState(false);
  const [extra, setExtra] = useState(false);
  const basicHandler = () => {
    setBasic(true);
    setAdvanced(false);
    setExtra(false);
  };
  const advancedHandler = () => {
    setBasic(false);
    setAdvanced(true);
    setExtra(false);
  };
  const extraHandler = () => {
    setBasic(false);
    setAdvanced(false);
    setExtra(true);
  };

  return (
    <div>
      <ul className="sectionThree--concept--top">
        <li onClick={basicHandler}>Základ</li>
        <li onClick={advancedHandler}>Pokročilý</li>
        <li onClick={extraHandler}>Doplňky</li>
      </ul>

      <div className="sectionThree--concept--boxs ">
        {basic && <Basic />}
        {advanced && <Advanced />}
        {extra && <Extra />}
      </div>
    </div>
  );
}

export default SectionThreeBoxs;
