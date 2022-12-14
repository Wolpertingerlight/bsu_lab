import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom"
import AboutMe from "./pages/AboutMe/AboutMe";
import Calculator from "./pages/Calculator/Calculator";
import Slides from "./pages/Slides/Slides";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import Carusel from "./pages/Carusel/Carusel";
import Culture from "./pages/Culture/Culture";

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
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/carusel" element={<Carusel/>}/>
                    <Route path="/culture" element={<Culture/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App