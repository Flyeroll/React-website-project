import React from "react";
import "./style.css"

export default function firstPageReserv(props) {

    return (
        <div className="allComponent">
            <h2 className="allComponentTitle">Contact</h2>
            <div className="contactForm">
                {props.data3[0].name}
            </div>
        </div>
    )
}




