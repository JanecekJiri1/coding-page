import React from "react";
import "./sectionSixForm.style.css";

import { FaEnvelope, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

function SectionSixForm(props) {
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

  return (
    <div className="sectionSixForm">
      <div className="sectionSixForm--text">
        <h2 className="click-away--title">Kontakt</h2>
        <div className="sectionSixForm--text--address">
          <p>FindHer Slepá</p>
          <p>DREAMLAND, s.r.o.</p>
          <p>Nejlepší ulice 353, ČR</p>
          <p>14100 Praha</p>
          <p>IČO 123 55 512 / DIČ: 202114552591 / IČ DPH: CZ20258584</p>
          <p>Rezervace telefonem: +420 123 545 321</p>
          <p>Otevírací hodiny: denně 8:30 - 19:00</p>
        </div>
      </div>
      <form className="sectionSixForm--form">
        <div className="sectionSixForm--inputs">
          <div className="sectionSixForm--inputLeft">
            <div className="sectionFour--input">
              <input type="text" placeholder="Jméno*" className=" allInput " />
              <BsFillPersonFill className="input--icon" />
            </div>
            <div className="sectionFour--input">
              <input type="tel" placeholder="Telefón" className=" allInput" />
              <FaPhone className="input--icon" />
            </div>
            <div className="sectionFour--input datee">
              <input type="date" placeholder="Datum doručení" className="dateInput" />
            </div>
          </div>
          <div className="sectionSixForm--inputRight">
            <div className="sectionFour--input">
              <input type="email" placeholder="E-mail*" className=" allInput" />
              <FaEnvelope className="input--icon" />
            </div>
            <div className="sectionSixForm--inputRightDouble">
              <div className="sectionSixForm--inputRightDouble--value">
                <input type="number" placeholder="Počet" className=" allInput" />
              </div>
              <div className="sectionSixForm--inputRightDouble--variant">
                <input type="text" placeholder="Varianta" className="allInput" />
                <IoIosArrowDown className="input--icon" />
              </div>
            </div>
            <div className="sectionFour--input">
              <input type="date" placeholder="Datum narození" className=" dateInput" />
            </div>
          </div>
        </div>
        <div className="sectionSixForm--bottom">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className="click-away--button black--button">odeslat</button>
        </div>
      </form>
      <div className="sectionSix--mapAndSub">
        {/* map */}
        <div className="sectionSix--map">{map}</div>
        <div className="sectionSix--bottom--subscribe">
          <p className="click-away--Titleh2"> Chcete vědět první: </p>
          <div className="sectionSix--bottom--inputAndButton">
            <div className="sectionSix--bottom--input">
              <FaRegEnvelope className="input--icon" />
              <input type="email" name="" id="" placeholder="Váš email" />
            </div>
            <button className="click-away--button">Odeslat</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSixForm;
