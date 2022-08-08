// import "./App.css";
import Carousel from "./carousel/Carousel";

// import img1 from "./assets/1.jpg";
// import img2 from "./assets/2.jpg";
// import img3 from "./assets/3.jpg";
// import img4 from "./assets/4.jpg";
// import img5 from "./assets/6.jpg";

const footerLine = <h1 style={{ color: "red" }}>asdasdasd</h1>;

const one = <p className="insideCarousol">Ubytování</p>;
const two = <p className="insideCarousol">Zajímavosti</p>;
const three = <p className="insideCarousol">Cena</p>;
const four = <p className="insideCarousol">Cesta</p>;

function CarousalApp() {
  const slides = [one, two, three, four];
  return (
    <div className="CarousalApp">
      <Carousel slides={slides} />

      <div className="carousel--item"></div>
    </div>
  );
}

export default CarousalApp;
