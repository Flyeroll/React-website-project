import React from "react";
import "../reservation/style.css"


export default function Reservation () {

    function check () {
        setTimeout(() => {
            const drawingCanvas = document.querySelector('.myCanvas');
            const ctx = drawingCanvas.getContext('2d');
            console.log(ctx);
            
        }, 1000);
    }
    check()
    return(
        <div className="mainDiv">
            <canvas className="myCanvas"></canvas>
        </div>
    )
}