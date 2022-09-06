import React from "react";
import "./sectionThreeBoxs.style.css";

import { useTranslation } from "react-i18next";

function Basic(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>19§</h3>
            <p>{t("front price a1")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title a1")}</h3>
            <p>{t("back description info a1")}</p>
          </div>
        </div>
      </div>

      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>28§</h3>
            <p>{t("front price a1")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title a2")}</h3>
            <p>{t("back description info a2")}</p>
          </div>
        </div>
      </div>
      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>36§</h3>
            <p>{t("front price a1")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title a3")}</h3>
            <p>{t("back description info a3")}</p>
          </div>
        </div>
      </div>

      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>30§ / {t("day")}</h3>
            <p>{t("front price a1")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title a4")}</h3>
            <p>{t("back description info a4")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic;
