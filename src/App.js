import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom"
import Image from "./pages/Image/Image";

import Calendar from "./pages/Calculator/Calendar";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/image" element={<Image/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App