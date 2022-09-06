import React from "react";
import { useTranslation } from "react-i18next";

function Advanced(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>28§</h3>
            <p>{t("front price b1")}</p>
          </div>

          <div className="sectionThree--box--back">
            <h3>{t("back description title b1")}</h3>
            <p>{t("back description info b1")}</p>
          </div>
        </div>
      </div>
      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>32§</h3>
            <p>{t("front price b2")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title b2")}</h3>
            <p>{t("back description info b2")}</p>
          </div>
        </div>
      </div>
      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>39§</h3>
            <p>{t("front price b3")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title b3")}</h3>
            <p>{t("back description info b3")}</p>
          </div>
        </div>
      </div>

      <div className="sectionThree--box">
        <div className="sectionThree--box--inner">
          <div className="sectionThree--box--front">
            <h3>49§ / {t("day")}</h3>
            <p>{t("front price b4")}</p>
          </div>
          <div className="sectionThree--box--back">
            <h3>{t("back description title b4")}</h3>
            <p>{t("back description info b4")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advanced;
