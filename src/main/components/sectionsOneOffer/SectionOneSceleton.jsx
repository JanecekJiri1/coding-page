import React from "react";

import { useTranslation } from "react-i18next";

function SectionOneSceleton(props) {
  const { t } = useTranslation();
  let stats;
  if (props.status === 0) {
    stats = <span className="status--taken">{t("s1 status taken")}</span>;
  } else stats = <span className="status--taken available">{t("s1 status available")}</span>;
  return (
    <div className="section--sceleton">
      <img src={props.img} alt="" />
      <div className="sectionOne--sceleton--text">
        <h2>{props.nameOf}</h2>
        <p>{props.description}</p>
        <div>
          <h4>
            Status:<span> {stats}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SectionOneSceleton;
