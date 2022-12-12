import React, { useRef } from "react";

import "./sectionSixForm.style.css";

import { FaEnvelope, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

function SectionSixForm(props) {
  const { t } = useTranslation();
  const ref = useRef();
  const map = (
    <iframe
      width="100%"
      height="500"
      padding="0"
      margin="0"
      outline="none"
      border="none"
      src="https://maps.google.com/maps?q=olomouc%20globus&t=&z=13&ie=UTF8&iwloc=&output=embed"
    ></iframe>
  );

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div
      className="sectionSixForm"
      id="form"
      // onSubmit={handleSubmit}
    >
      <div className="sectionSixForm--text">
        <h2 className="click-away--title">{t("S6 contact")}</h2>
        <div className="sectionSixForm--text--address">
          <p>FindHer Slepá</p>
          <p>DREAMLAND, s.r.o.</p>
          <p>Nejlepší ulice 353, ČR</p>
          <p>14100 Praha</p>
          <p>IČO 123 55 512 / DIČ: 202114552591 / IČ DPH: CZ20258584</p>
          <p>{t("S6 tel. contact")}: +420 123 545 321</p>
          <p>
            {t("S6 open")}: {t("S6 open day")} 8:30 - 19:00
          </p>
        </div>
      </div>
      <form className="sectionSixForm--form">
        <div className="sectionSixForm--inputs">
          <div className="sectionSixForm--inputLeft">
            <div className="sectionFour--input">
              <input type="text" placeholder={t("S6 form name")} className=" allInput " />
              <BsFillPersonFill className="input--icon" />
            </div>
            <div className="sectionFour--input">
              <input type="tel" placeholder={t("S6 form phone")} className=" allInput" />
              <FaPhone className="input--icon" />
            </div>
            <div className="sectionFour--input datee">
              {/* <input type="date" placeholder="Datum doručení" className="dateInput" /> */}
              <input
                type="text"
                className="dateInput"
                placeholder={t("S6 form arrive")}
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>
          <div className="sectionSixForm--inputRight">
            <div className="sectionFour--input">
              <input type="email" placeholder="E-mail*" className=" allInput" />
              <FaEnvelope className="input--icon" />
            </div>
            <div className="sectionSixForm--inputRightDouble">
              <div className="sectionSixForm--inputRightDouble--value">
                <input type="number" placeholder={t("S6 form quntity")} className=" allInput" />
              </div>
              <div className="sectionSixForm--inputRightDouble--variant">
                {/* <input type="text" placeholder={t("S6 form variant")} className="allInput" />
                 */}
                <select>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
                {/* <IoIosArrowDown className="input--icon" /> */}
              </div>
            </div>
            <div className="sectionFour--input">
              {/* <input type="date" placeholder="Datum narození" className=" dateInput" onfocus="(this.type='date')" /> */}
              <input
                type="text"
                className="dateInput"
                placeholder={t("S6 form departures")}
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>
        </div>

        <h1>Custom Checkboxes</h1>
        <label class="container">
          <span class="inputP">
            <p>One</p>
          </span>
          <span className="inputSpan">
            <input type="checkbox" />
          </span>
          {/* <span class="checkmark"></span> */}
        </label>
        <label class="container">
          <span class="inputP">
            <p> Two</p>
          </span>
          <span className="inputSpan">
            <input type="checkbox" />
          </span>
          {/* <span class="checkmark"></span> */}
        </label>
        <label class="container">
          <span class="inputP">
            <p>Three</p>
          </span>
          <span className="inputSpan">
            <input type="checkbox" />
          </span>
          {/* <span class="checkmark"></span> */}
        </label>
        <label class="container">
          <span class="inputP">
            <p> Four</p>
          </span>
          <span className="inputSpan">
            <input type="checkbox" />
          </span>
          {/* <span class="checkmark"></span> */}
        </label>

        <div className="sectionSixForm--bottom">
          <textarea name="" id="" cols="30" rows="10" placeholder={t("S6 form note")}></textarea>
          <button className="click-away--button black--button">{t("S6 form send")}</button>
        </div>
      </form>
      <div className="sectionSix--mapAndSub">
        {/* map */}
        <div className="sectionSix--map">{map}</div>
        <div className="sectionSix--bottom--subscribe">
          <h2 className="click-away--Titleh2 form--section--h2"> {t("S6 know first input")} </h2>
          <div className="sectionSix--bottom--inputAndButton">
            <div className="sectionSix--bottom--input">
              <FaRegEnvelope className="input--icon" />
              <input type="email" name="" id="" placeholder={t("S6 send email")} />
            </div>
            <button className="click-away--button">{t("S6 form send")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSixForm;
