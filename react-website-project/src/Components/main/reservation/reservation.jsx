import React, { useEffect, useState } from "react";
import "../reservation/style.css"

import { Outlet } from "react-router-dom";
import { faLineChart } from "@fortawesome/free-solid-svg-icons";


export default function Reservation () {


    function moveToFirstStep() {
        let secondBtn = document.querySelector('.reserveSecondBall')
        let reserveLine = document.querySelector('.reserveLine')
        let before = window.getComputedStyle(reserveLine,'::before')
        console.log(before.width);
        secondBtn.classList.remove('black')
    }


    return(
        <div className="mainDiv">
            <div className="reserveMainWindow">
                <Outlet />
                <div className="reserveBtnSection">
                    <div className="reserveBtn reservBtnBack" onClick={() => moveToFirstStep()}>back</div>
                    <div className="reserveBtn reservBtnForwar">continue</div>
                </div>
                <div className="reserveShape">
                    <div className="reserveLine">
                        <div className="reserveFirstBall reserveBall"></div>
                        <div className="reserveSecondBall reserveBall black"></div>
                        <div className="reserveThirdBall reserveBall"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}


            // <div className="myCanvas">
            //     <div className="firstRow row">
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>1</div>
            //         <div className="welcome">Welcome !</div>
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>2</div>
            //     </div>
            //     <div className="secondRow row">
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>3</div>
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>4</div>
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>5</div>
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>6</div>
            //     </div>
            //     <div className="thirdRow row">
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>7</div>
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>8</div>
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>9</div>
            //         <div className="tableFree table tableNumber" onClick={(table) => changeTableStatus(table)}>10</div>
            //     </div>
            // </div>







     

            /*
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
            // clear Tables data to display user
            const [clearReservedTables,setClearReservedTables] = useState('')
        
            function changeTableStatus(table) {
                let content = table.target.innerHTML
                console.log(content);
                
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
                let newRawObjTables = reservedTables
                let newRawArrayTables = Object.values(newRawObjTables)
                let newClearArrayTables = []
                for(let i = 0; i < newRawArrayTables.length;i++){
                    if(newRawArrayTables[i] === true) {
                        newClearArrayTables.push(i+1)
                    }
                }
        
                setClearReservedTables((prev) => newClearArrayTables)
                
            },[reservedTables])
            
            useEffect(() => {
                console.log(clearReservedTables);
            }, [clearReservedTables])
            */
            
            