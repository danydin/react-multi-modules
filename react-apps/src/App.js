import "./App.css";
import Accordion from "./components/accordion/index";
import GenerateColor from "./components/random-color-gen";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/images-slider";
import LoadMoreGallery from "./components/load-more-gallery";
import NestedNav from "./components/nested-nav";
import { menus } from "./components/nested-nav/data";

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <GenerateColor />
      <StarRating />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}
      {/* <LoadMoreGallery /> */}
      <NestedNav navList={menus}/>
    </div>
  );
}

export default App;
