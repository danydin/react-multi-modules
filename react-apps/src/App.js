import './App.css';
import Accordion from './components/accordion/index';
import GenerateColor from './components/random-color-gen';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />
      {/* Random Color Component */}
      <GenerateColor />
    </div>
  );
}

export default App;
