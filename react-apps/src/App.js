import "./App.css";
import Accordion from "./components/accordion/index";
import GenerateColor from "./components/random-color-gen";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/images-slider";
import LoadMoreGallery from "./components/load-more-gallery";
import NestedNav from "./components/nested-nav";
import { menus } from "./components/nested-nav/data";
import QrGen from "./components/qr-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-bar-indicator";
import MultiTabs from "./components/multi-tabs/index";
import Modal from "./components/modal/modal";

function App() {
  return (
    <div className="App">
      <Accordion />
      <GenerateColor />
      <StarRating />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
      <LoadMoreGallery limit={12} />
      <NestedNav navList={menus} />
      <QrGen />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <MultiTabs />
      <Modal />
    </div>
  );
}

export default App;
