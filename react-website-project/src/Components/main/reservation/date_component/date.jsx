import React, { useEffect, useState } from "react";
import "./style.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


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

    useEffect(() => {
        console.log(timeArray);
    },[timeArray])
    


    function selectDate(elem) {
        console.log(elem);
    }

    function changeTimeStatus(elem) {
        if(!elem.target.classList.contains('selectedSingleTime')) {
            elem.target.classList.add('selectedSingleTime')
        } else {
            elem.target.classList.remove('selectedSingleTime')
        }

        let newElem = elem



        setTimeArray((prevArr) => {
            let newArr = prevArr.map((hour) => {
                let newHour = hour
                if(newElem.target.innerHTML === hour.time){
                    newHour.selected = !newHour.selected
                }
                return newHour
            })
            return newArr
        })


  
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
            <div className="dateLeft">
                <div className="dateLeftTop">
                    <FontAwesomeIcon icon={faAngleLeft} className='dateLeftTopBtn'/>
                    <div className="dateLeftTopMobth dateLeftTopBtn">August</div>
                    <div className="dateLeftTopYear dateLeftTopBtn">2022</div>
                    <FontAwesomeIcon icon={faAngleRight} className='dateLeftTopBtn'/>
                </div>
                <div className="dateLeftBottom">
                    <div className="dateLeftWeek">
                        <div className="tag">Mo</div>
                        <div className="tag">Di</div>
                        <div className="tag">Mi</div>
                        <div className="tag">Do</div>
                        <div className="tag">Fr</div>
                        <div className="tag">Sa</div>
                        <div className="tag">So</div>
                    </div>
                    <div className="dateDaysTable">
                        <div className="tag" onClick={(elem) => selectDate(elem)}>1</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>2</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>3</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>4</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>5</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>6</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>7</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>8</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>9</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>10</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>11</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>12</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>13</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>14</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>15</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>16</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>17</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>18</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>19</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>20</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>21</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>22</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>23</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>24</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>25</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>26</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>27</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>28</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>29</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>30</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}>31</div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}></div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}></div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}></div>
                        <div className="tag" onClick={(elem) => selectDate(elem)}></div>
                    </div>
                </div>
            </div>
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