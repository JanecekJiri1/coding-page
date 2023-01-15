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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad quos exercitationem
          labore deserunt minus impedit maxime voluptatem, quis voluptatibus eius id incidunt, sit
          ab eaque delectus repellendus. Similique, debitis.
        </p>
        <h3>Kdo jsem</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus at officiis
          dolores eius nisi deleniti, dolorem omnis numquam provident quae possimus atque quidem
          iure inventore, natus laudantium, veniam odio minus dicta rem laboriosam ex in? Numquam
          magnam laborum maxime, nostrum accusantium enim praesentium, voluptates eos cupiditate
          sapiente harum in officia libero veritatis facilis voluptatibus id beatae non quo et rerum
          aliquam. Eligendi, aperiam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, animi sunt debitis eos
          expedita veniam a et incidunt at quis. Eos, rerum voluptatibus voluptatum minus non
          officiis quibusdam? Unde, ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, animi sunt debitis eos expedita veniam a et incidunt at quis. Eos, rerum
          voluptatibus voluptatum minus non officiis quibusdam.
        </p>

        <span onClick={() => props.setIsOpen(false)}>
          <button className="headerModal--bottom--close click-away--button">Close</button>
        </span>
      </div>
    </div>
  );
}

export default MoreInfoHeader;
