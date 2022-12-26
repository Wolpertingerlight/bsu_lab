import {useState} from "react";

import "./Carusel.css"
const Carusel = ({slides}) => {

    return (
        <div>
            <div className='circle-container'>
                    <img className={"deg0"} src={"https://cdn-icons-png.flaticon.com/512/9022/9022317.png"} />
                    <img className={"deg72"} src={"https://cdn-icons-png.flaticon.com/512/9022/9022351.png"} />
                    <img className={"deg144"}  src={"https://cdn-icons-png.flaticon.com/512/9022/9022382.png"} />
                    <img className={"deg216"} src={"https://cdn-icons-png.flaticon.com/512/9022/9022372.png"} />
                    <img className={"deg288"} src={"https://cdn-icons-png.flaticon.com/512/9022/9022428.png"} />

            </div>
        </div>

    )
}

export default Carusel;