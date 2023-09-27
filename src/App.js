import "./App.css";
import Header from "./Components/Header/Header";
import Heroarea from "./Components/Heroarea/Heroarea";
import Ourself from "./Components/Ourself/Ourself";
import Why from "./Components/Why/Why";

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
       <div className="Section3">
        <Why/>
       </div>
    </div>
  );
}

export default App;
