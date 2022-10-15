import React, { useState } from "react";
import "./footerAddInformationComp.style.css";
import { useTranslation } from "react-i18next";

function FooterAddInformationComp(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer--information--wrapper">
        <div>
          <h5>{t("S8 often ask")}</h5>
          <ul>
            <li>{t("S8 hows it work")}</li>
            <li>{t("S8 conditions")}</li>
            <li>{t("S8 cancellation")}</li>
          </ul>
        </div>
        <div>
          <h5>{t("S8 contact")}</h5>
          <ul>
            <li>{t("S8 helpline")}</li>
            <li>{t("S8 businessman")}</li>
            <li>{t("S8 individuals")}</li>
          </ul>
        </div>

        <div>
          <h5>{t("S8 about us")}</h5>
          <ul>
            <li>{t("S8 start")}</li>
            <li>{t("S8 who are we")}</li>
          </ul>
        </div>
        <div>
          <h5>{t("S8 career")}</h5>
          <ul>
            <li>{t("S8 positions")}</li>
            <li>{t("S8 volunteering")}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterAddInformationComp;
