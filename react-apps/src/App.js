import "./App.css";
import SingleMultiSelection from "./components/multi-selection/index";
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
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/api-search-filter";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-switches/context";
import FeatureFlags from "./components/feature-switches";
import UseFetchHook from "./components/custom-hooks/fetch/index";
import OnClickOutside from "./components/custom-hooks/click";
import WindowResize from "./components/custom-hooks/resize";
import ScrollToTopAndBottom from "./components/scroll/top-bottom";
import ScrollToSection from "./components/scroll/specific";

function App() {
  return (
    <div className="App">
      <SingleMultiSelection />
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
      <GithubProfileFinder />
      <SearchAutocomplete />
      <TicTacToe />
      <FeatureFlagGlobalState>
      <FeatureFlags />
      </FeatureFlagGlobalState>
      <UseFetchHook />
      <OnClickOutside />
      <WindowResize />
      <ScrollToTopAndBottom />
      <ScrollToSection />
    </div>
  );
}

export default App;
