import React, { useEffect, useState } from "react";
import "../reservation/style.css"


import { faLineChart } from "@fortawesome/free-solid-svg-icons";

import FirstPage from "./1_page_info/1_page_info"
import SecondPage from "./2_page_client_info/2_page_client_info"
import ThirdPage from "./3_page_time_table/3_page_time_table"

import {ThemeContext} from '../reservation/Context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { createContext } from "react";



export const showWindow = createContext() 

export default function Reservation (props) {

    const [statusLine, setStatusLine] = useState(1)
    const [secondPageValidator, setSecondPageValidator] = useState(false)
    

    useEffect(() => {
        if (statusLine === 1){
            moveToFirstStep();
        } else if(statusLine === 2) {
            moveToSecondStep();
        } else if(statusLine === 3) {
            moveToThirdStep();
        }
    },[statusLine])


    function changeStatus(btn){
        if(statusLine === 1){
            setStatusLine((prev) => 2)
        } else if(statusLine === 2 & btn.target.classList.contains('reservBtnForward')) {
            setStatusLine((prev) => 3)
        } else if(statusLine === 2 & btn.target.classList.contains('reservBtnBack')) {
            setStatusLine((prev) => 1)
        } else if(statusLine === 3) {
            setStatusLine((prev) => 2)
            let thirdBtn = document.querySelector('.reserveThirdBall')
            setTimeout(() => {
                thirdBtn.classList.remove('black')
            }, 200);
        } 
    }

    function moveToFirstStep() {
        let secondBtn = document.querySelector('.reserveSecondBall')
        let reserveLineBlack = document.getElementById('reserveLineBlack')
        console.log(reserveLineBlack.style.width);
        reserveLineBlack.style = "width:0px;"
        secondBtn.classList.remove('black')
    }
    function moveToSecondStep() {
        let secondBtn = document.querySelector('.reserveSecondBall')
        let reserveLineBlack = document.getElementById('reserveLineBlack')
        reserveLineBlack.style = "width:160px;"
        setTimeout(() => {
            secondBtn.classList.add('black')
        }, 550);
    }
    function moveToThirdStep() {
        let thirdBtn = document.querySelector('.reserveThirdBall')
        let reserveLineBlack = document.getElementById('reserveLineBlack')
        reserveLineBlack.style = "width:310px;"
        setTimeout(() => {
            thirdBtn.classList.add('black')
        }, 475);
    }

    function crossFunc() {
        

    }
    return(
        <ThemeContext.Provider value={false}>
            <div className="mainDiv">
                <div className="reserveMainWindow">
                    <FontAwesomeIcon icon={ faXmark } className="xMarkNav xMarkReservation" onClick={() => crossFunc()}/>
                    {statusLine === 1 ? <FirstPage data3={props.data2}/> : null}
                    {statusLine === 2 ? <SecondPage /> : null}
                    {statusLine === 3 ? <ThirdPage /> : null}

                    <div className="reserveBtnSection">
                        {statusLine === 1 ? null : <div className="reserveBtn reservBtnBack" onClick={(btn) => changeStatus(btn)}>back</div>}
                        {statusLine === 3 ? null : <div className="reserveBtn reservBtnForward" onClick={(btn) => changeStatus(btn)}>continue</div>}
                        
                    </div>
                    <div className="reserveShape">
                        <div className="reserveLine">
                            <div className="reserveLineBlack" id="reserveLineBlack"></div>
                            <div className="reserveFirstBall reserveBall"></div>
                            <div className="reserveSecondBall reserveBall"></div>
                            <div className="reserveThirdBall reserveBall"></div>
                        </div>
                    </div>

                </div>
            </div>
        </ThemeContext.Provider>
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
            
            