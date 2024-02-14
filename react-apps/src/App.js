import './App.css';
import Accordion from './components/accordion/index';
import GenerateColor from './components/random-color-gen';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />
      {/* Random Color Component */}
      <GenerateColor />
      {/* Star Rating */}
      <StarRating />
    </div>
  );
}

export default App;
