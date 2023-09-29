import "./App.css";
import Areaofpractice from "./Components/Areaofpractice/Areaofpractice";
import Carousel from "./Components/Carousel/Carousel";
import Faq from "./Components/Faq/Faq";
import Header from "./Components/Header/Header";
import Heroarea from "./Components/Heroarea/Heroarea";
import Newslatter from "./Components/Newslatter/Newslatter";
import Our from "./Components/Our/Our";
import Ourself from "./Components/Ourself/Ourself";
import Why from "./Components/Why/Why";
//180 faq top
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
       <div className="Section4">
         <Areaofpractice/>
       </div>
       <div className="Section5">
        <Carousel/>
       </div>
       <div className="Section6">
            <Our/>
       </div>
       <div className="Section7">
        <Faq/>
       </div>
       <div className="Section8">
        <Newslatter/>
       </div>
    </div>
  );
}

export default App;
