import React from "react";
import "./moreInfoHeader.style.css";
import { AiOutlineClose } from "react-icons/ai";

function MoreInfoHeader(props) {
  return (
    <div className="headerModal">
      <div className="headerModal--body">
        <span onClick={() => props.setIsOpen(false)}>
          <AiOutlineClose className="headerModal--top--close " />
        </span>
        <h2>Informace o této stránce</h2>
        <h3>Jak to vše začalo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad quos exercitationem labore deserunt minus impedit maxime voluptatem,
          quis voluptatibus eius id incidunt, sit ab eaque delectus repellendus. Similique, debitis.
        </p>
        <h3>Kdo jsem</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, animi sunt debitis eos expedita veniam a et incidunt at quis. Eos, rerum
          voluptatibus voluptatum minus non officiis quibusdam? Unde, ex?7
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, animi sunt debitis eos expedita veniam a et incidunt at quis. Eos, rerum
          voluptatibus voluptatum minus non officiis quibusdam? Unde, ex?7
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, animi sunt debitis eos expedita veniam a et incidunt at quis. Eos, rerum
          voluptatibus voluptatum minus non officiis quibusdam? Unde, ex?7
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, animi sunt debitis eos expedita veniam a et incidunt at quis. Eos, rerum
          voluptatibus voluptatum minus non officiis quibusdam? Unde, ex?7
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, animi sunt debitis eos expedita veniam a et incidunt at quis. Eos, rerum
          voluptatibus voluptatum minus non officiis quibusdam? Unde, ex?7
        </p>
        <span onClick={() => props.setIsOpen(false)}>
          <button className="headerModal--bottom--close click-away--button">Close</button>
        </span>
      </div>
    </div>
  );
}

export default MoreInfoHeader;
