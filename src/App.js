import Main from "./main/Main";
import Gallery from "./main/components/sectionFiveGallery/gallery/Gallery";
import SectionFiveGallery from "./main/components/sectionFiveGallery/SectionFiveGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/PhotoGallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
