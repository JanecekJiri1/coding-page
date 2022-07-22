import React from "react";
import "./sectionOne.style.css";
import { AiOutlineWoman } from "react-icons/ai";
import sectionOneText from "./sectionOne.text";
import SectionOneSceleton from "./SectionOneSceleton";

function SectionOne(props) {
  const offerList = sectionOneText.map((text) => {
    return <SectionOneSceleton nameOf={text.nameOf} description={text.description} status={text.status} img={text.img} />;
  });
  return (
    <section>
      <div className="sectionOne">
        <h1 className="click-away--title">Our offer</h1>
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

export default SectionOne;
