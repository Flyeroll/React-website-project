import React, { useState } from "react";
import "./style.css"

export default function firstPageReserv(props) {
    const [userDishes, setUserDishes] = useState(props.userDishesData)

    return (
        <div className="allComponent">
            <h2 className="allComponentTitle">Contact</h2>
            <div className="contactForm">
                {userDishes}
            </div>
        </div>
    )
}




