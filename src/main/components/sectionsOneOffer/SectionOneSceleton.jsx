import React from "react";

function SectionOneSceleton(props) {
  let stats;
  if (props.status === 0) {
    stats = <span className="status--taken">zadana</span>;
  } else stats = <span className="status--taken available">k mání</span>;
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
