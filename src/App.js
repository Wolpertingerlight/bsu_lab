import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom"
import AboutMe from "./pages/AboutMe/AboutMe";
import Calculator from "./pages/Calculator/Calculator";
import Slides from "./pages/Slides/Slides";
import Shop from "./pages/Shop/Shop";
import Roundabout from "./pages/Roundabout/Roundabout";
import Scenario from "./pages/Scenario/Scenario";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="/calculator" element={<Calculator/>}/>
                    <Route path="/slides" element={<Slides/>}/>
                    <Route path="/scenario" element={<Scenario/>}/>
                    <Route path="/roundabout" element={<Roundabout/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App