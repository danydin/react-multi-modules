import "./App.css";
import Accordion from "./components/accordion/index";
import GenerateColor from "./components/random-color-gen";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/images-slider";
import LoadMoreGallery from "./components/load-more-gallery";

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <GenerateColor />
      <StarRating />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}
      <LoadMoreGallery />
    </div>
  );
}

export default App;
