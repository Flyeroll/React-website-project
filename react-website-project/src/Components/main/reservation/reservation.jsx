import React, { useEffect, useState } from "react";
import "../reservation/style.css"


export default function Reservation () {

    const [reservedTables, setReservedTables] = useState({
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
        7:false,
        8:false,
        9:false,
        10:false
    })

    const [reservedTablesClear, setReservedTablesClear] = useState('')

    function changeTableStatus(table) {
        console.log(content);
        let content = table.target.innerHTML
        
        if(table.target.classList.contains('tableFree')) {
            let classes = table.target.classList
            classes.add('tableSelected')
            classes.remove('tableFree')
            setReservedTables((prev) => {
                return {...prev, [content]:true}
            })


        } else if (table.target.classList.contains('tableSelected')) {
            let classes = table.target.classList
            classes.add('tableFree')
            classes.remove('tableSelected')
            setReservedTables((prev) => {
                return {...prev, [content]:false}
            })
        } else {
            console.log("Table is occupied!");
        }
    }

    useEffect(() => {
        setReservedTablesClear((prev) => {
            
        })
    },[reservedTables])
    
    

    return(
        <div className="mainDiv">
            <div className="myCanvas">
                <div className="firstRow row">
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>1</div>
                    <div className="welcome">Welcome !</div>
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>2</div>
                </div>
                <div className="secondRow row">
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>3</div>
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>4</div>
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>5</div>
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>6</div>
                </div>
                <div className="thirdRow row">
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>7</div>
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>8</div>
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>9</div>
                    <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>10</div>
                </div>
            </div>
        </div>
    )
}