import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./gallery.style.css";
import { Link } from "react-router-dom";
import img1 from "../assets/1.jpg";

import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img6 from "../assets/6.jpg";

function Gallery(props) {
  let imgData = [
    {
      id: 1,
      imgSrc: img1,
    },

    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];

  const [modal, setModal] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <Link to="/">
        <button className="click-away--button returnButton--gallery">Zpět na hlavní stránku</button>
      </Link>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempimgSrc} alt="" />
        <AiOutlineClose onClick={() => setModal(false)} />
      </div>
      <div className="imgGallery">
        <div>
          {imgData.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{ width: "100%", height: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
