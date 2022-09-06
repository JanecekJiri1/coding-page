import React from "react";
import "./sectionOneOffer.style.css";
import { AiOutlineWoman } from "react-icons/ai";
import sectionOneText from "./sectionOne.text";
import SectionOneSceleton from "./SectionOneSceleton";

import { useTranslation } from "react-i18next";

function SectionOneOffer(props) {
  const { t } = useTranslation();

  const offerList = sectionOneText.map((text) => {
    return <SectionOneSceleton key={text.id} nameOf={text.nameOf} description={text.description} status={text.status} img={text.img} />;
  });
  return (
    <section id="ourOffer">
      <div className="sectionOne">
        <h1 className="click-away--title">{t("s1Name")}</h1>
        <div className="textAndIcons">
          <AiOutlineWoman className="global--icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <b> Nisi odio, aut iure itaque sequi veniam delectus atque officia quaerat esse.</b>
          </p>
        </div>
        <div className="sectionOne--list">
          <div>{offerList}</div>
        </div>
      </div>
    </section>
  );
}

export default SectionOneOffer;
