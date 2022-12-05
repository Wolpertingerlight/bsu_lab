import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom"
import AboutMe from "./pages/AboutMe/AboutMe";
import Calculator from "./pages/Calculator/Calculator";
import Slides from "./pages/Slides/Slides";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import Test from "./pages/test/Test";

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
                    <Route path="/test" element={<Test/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App