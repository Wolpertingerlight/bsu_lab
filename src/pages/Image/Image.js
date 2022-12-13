import "./Image.css"
import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCardImage, CCardText, CCardTitle} from "@coreui/react";
import {Component, useEffect, useState} from "react";


function Image() {

    const [coords, setCoords] = useState({x: 0, y: 0});

    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    const img = document.getElementById('IM1');
    let flag = false; //запрет на перемещения

    if (img) {

        img.addEventListener('mouseenter', (ev) => {
            flag = true
        });


        document.addEventListener('mousemove', (ev) => {
            if (flag == true) {
                img.style.transform = `translateY(${ev.clientY - 25}px)`;
                img.style.transform += `translateX(${ev.clientX - 25}px)`;
            }
        });

        img.addEventListener('click', (ev) => {
            flag = false
        });

    }
    return (
        <div>
            <hr/>
            <h2>
              Наведи на картинку, чтобы запустить. Кликни, чтобы отпустить
            </h2>
            <img id="IM1" className="follow-cursor" src={`images/заяц.jpg`}/>


        </div>
    );



}

export default Image;