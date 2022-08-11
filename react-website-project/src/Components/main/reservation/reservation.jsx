import React from "react";
import "../reservation/style.css"


export default function Reservation () {
    function changeTableStatus(table) {
        if(table.target.classList.contains('tableFree')) {
            let classes = table.target.classList
            classes.add('tableSelected')
            classes.remove('tableFree')
        } else if (table.target.classList.contains('tableSelected')) {
            let classes = table.target.classList
            classes.add('tableFree')
            classes.remove('tableSelected')
        } else {
            console.log("Table is occupied!");
        }
    }
    

    return(
        <div className="mainDiv">
            <div className="myCanvas">
                <div className="firstRow row">
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">1</h2></div>
                    <div className="welcome">Welcome !</div>
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">2</h2></div>
                </div>
                <div className="secondRow row">
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">3</h2></div>
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">4</h2></div>
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">5</h2></div>
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">6</h2></div>
                </div>
                <div className="thirdRow row">
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">7</h2></div>
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">8</h2></div>
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">9</h2></div>
                    <div className="tableFree table" onClick={(table) => changeTableStatus(table)}><h2 className="tableNumber">10</h2></div>
                </div>
            </div>
        </div>
    )
}