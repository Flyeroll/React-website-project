import React, { useState } from "react";
import "./style.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export default function DateWindow(){


    const [timeArray, setTimeArray] = useState([
        {time:'10:00', selected:false},
        {time:'11:00', selected:false},
        {time:'12:00', selected:false},
        {time:'13:00', selected:false},
        {time:'14:00', selected:false},
        {time:'15:00', selected:false},
        {time:'16:00', selected:false},
        {time:'17:00', selected:false},
        {time:'18:00', selected:false},
        {time:'19:00', selected:false},
        {time:'20:00', selected:false},
    ])

    function changeTimeStatus(elem) {
        setTimeArray((prev) => {
            let newArr = prev.map(())
        })
        if(!elem.target.classList.contains('selectedSingleTime')) {
            elem.target.classList.add('selectedSingleTime')
        } else {
            elem.target.classList.remove('selectedSingleTime')
        }
        console.log(elem.target);
    }

    function printTime() {
        return (
            timeArray.map((elem) => {
                return <div className="singleTime" onClick={(elem) => changeTimeStatus(elem)}>{elem.time}</div>
            })
        )
    }
    function changeScroll(elem) {
        let scrollWindow = document.querySelector('.dateTime')
        if(elem.target.classList.contains('dateArrowDown')) {
            scrollWindow.scrollTop += 30
        } else {
            scrollWindow.scrollTop -= 30
        }
        console.log(timeArray);
    }
    return (
        <div className="dateMain">
            <div className="dateLeft"></div>
            <div className="dateRight">
                <FontAwesomeIcon icon={faAngleUp} className="dateArrow dateArrowUp" onClick={(elem) => changeScroll(elem)}/>
                <div className="dateTime">
                    {printTime()}
                </div>
                <FontAwesomeIcon icon={faAngleDown} className="dateArrow dateArrowDown" onClick={(elem) => changeScroll(elem)}/>
            </div>
        </div>
    )
}