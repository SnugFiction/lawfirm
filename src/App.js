import "./App.css";
import Header from "./Components/Header/Header";
import Heroarea from "./Components/Heroarea/Heroarea";
import Ourself from "./Components/Ourself/Ourself";

function App() {
  return (
    <div className="App">
      <div className="Section1">
        <Header />
        <Heroarea />
      </div>
      <div className="Section2">
        <Ourself/>
      </div>
    </div>
  );
}

export default App;
