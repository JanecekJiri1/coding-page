import Carousel from "../../../hooks/carousel/Carousel";
import "./appCarousel.style.css";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/6.jpg";

function AppCarousel() {
  const once = (
    <div className="imgSection">
      <img className="carousel-img" src={img1} />
      <img className="carousel-img" src={img1} />
      <img className="carousel-img" src={img1} />
    </div>
  );
  const twos = (
    <div className="imgSection">
      <img className="carousel-img" src={img3} />
      <img className="carousel-img" src={img3} />
      <img className="carousel-img" src={img3} />
    </div>
  );
  const threes = (
    <div className="imgSection">
      <img className="carousel-img" src={img5} />
      <img className="carousel-img" src={img5} />
      <img className="carousel-img" src={img5} />
    </div>
  );

  const sli = [img1, img2, img3];
  const slides = [once, twos, threes];
  return (
    <div className="container-carousal">
      <Carousel slides={slides} controls indicators autoPlay={false} />
      {/* <Carousel slides={sli} controls indicators autoPlay={false} /> */}
    </div>
  );
}

export default AppCarousel;
