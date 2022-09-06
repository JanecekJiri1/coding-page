import React from "react";

import { useTranslation } from "react-i18next";

function Extra(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>11§</h3>
            <p>{t("front price c1")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title c1")}</h3>
            <p>{t("back description info c1")}</p>
          </div>
        </div>
      </div>

      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>17§</h3>
            <p>{t("front price c2")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title c2")}</h3>
            <p>{t("back description info c2")}</p>
          </div>
        </div>
      </div>
      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>24§</h3>
            <p>{t("front price c3")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title c3")}</h3>
            <p>{t("back description info c3")}</p>
          </div>
        </div>
      </div>

      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>42§</h3>
            <p>{t("front price c4")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title c4")}</h3>
            <p>{t("back description info c4")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Extra;
