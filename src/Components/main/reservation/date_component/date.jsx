import React, { useEffect, useState } from "react";
import "./style.css"
import uniqid from 'uniqid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


export default function DateWindow(props){
    
    //DATE MONTH YEAR
    const d = new Date();
    
    let dayToday = d.getDate(); // ДАТА СЕГОДНЯ "22"
    
    let monthToday = d.getMonth(); //возвращает месяц  '0-11'
    
    let yearToday = d.getFullYear(); // ГОД СЕГОДНЯ "2022"

const [weeksDayArray, setWeeksDayArray] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])

const [yearsArrayForPrint, setYearsArrayForPrint] = useState()

const [yearsArray, setYearsArray] = useState([
    {name:2022,
    monthInfo: [
        {monthName:"January", firstDay:weeksDayArray[5], lastDay:'', amountOfDays:31},
        {monthName:"February", firstDay:"", lastDay:'', amountOfDays:28},
        {monthName:"March", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"April", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"May", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"June", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"July", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"August", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"September", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"October", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"November", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"December", firstDay:"", lastDay:'', amountOfDays:31},
    ]},
    {name:2023,
        monthInfo: [
            {monthName:"January", firstDay:weeksDayArray[6], lastDay:'', amountOfDays:31},
            {monthName:"February", firstDay:"", lastDay:'', amountOfDays:28},
            {monthName:"March", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"April", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"May", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"June", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"July", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"August", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"September", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"October", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"November", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"December", firstDay:"", lastDay:'', amountOfDays:31},
        ]},
        {name:2024,
            monthInfo: [
                {monthName:"January", firstDay:weeksDayArray[0], lastDay:'', amountOfDays:31},
                {monthName:"February", firstDay:"", lastDay:'', amountOfDays:29},
                {monthName:"March", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"April", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"May", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"June", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"July", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"August", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"September", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"October", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"November", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"December", firstDay:"", lastDay:'', amountOfDays:31},
            ]},
])

useEffect(() => {
    setYearsArray((prev) => {
        prev.map((year) => {
            //Функция переходных значений для дней недели (аргументы: текущий индекс + необходимая величина изменения)
            function refreshWeeksDay(index, increment) {
                let newWeekdDay = index
                if(index === 0 && increment < 0) {
                    newWeekdDay = 6
                } else if (index === 6 && increment === 1) {
                    newWeekdDay = 0
                } else if (index === 6 && increment === 2) {
                    newWeekdDay = 1
                } else {
                    newWeekdDay += increment
                    if(newWeekdDay === 7){
                        newWeekdDay = 0
                    } else if (newWeekdDay === 8) {
                        newWeekdDay = 1
                    }
                }
                return newWeekdDay
            }
            
            let newYear = year
        
            for(let i = 0; i < 12; i++) {

        
                if(i === 0) {
                    if(year.monthInfo[i].amountOfDays === 28){
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), -1)]
                    } else if(year.monthInfo[i].amountOfDays === 29){
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 0)]
                    } else if(year.monthInfo[i].amountOfDays === 30) {
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 1)]
                    } else if(year.monthInfo[i].amountOfDays === 31) {
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 2)]
                    }
                } else {
                    //calc first day for current month
                    if(year.monthInfo[i].amountOfDays === 28){
                        newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), -1)]
                    } else if(year.monthInfo[i].amountOfDays === 29){
                        newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 0)]
                    } else if(year.monthInfo[i].amountOfDays === 30) {
                        newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 1)]
                    } else if(year.monthInfo[i].amountOfDays === 31) {
                        newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                        newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 2)]
                    }
                    //calc last day for current month
                }
            }
            
            return newYear
        })
    })

    setYearsArrayForPrint((prev) => yearsArray)


},[1])

const [finalCurrent, setFinalCurrent] = useState({year: yearToday, month: monthToday, currentMonthData:''})

useEffect(() => {
    
}, [yearsArrayForPrint])

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
    
    const [daysArray, setDaysArray] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])
    const [monthArray, setMonthArray] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    const [monthsArray, setMonthsArray] = useState([
        {name: "January", amountOfDays:31},
        {name: "February", amountOfDays:28},
        {name: "March", amountOfDays:31},
        {name: "April", amountOfDays:30},
        {name: "May", amountOfDays:31},
        {name: "June", amountOfDays:30},
        {name: "July", amountOfDays:31},
        {name: "August", amountOfDays:31},
        {name: "September", amountOfDays:30},
        {name: "October", amountOfDays:31},
        {name: "November", amountOfDays:30},
        {name: "December", amountOfDays:31}
    ])
    const [yearArray, setYearArray] = useState(2022, 2023, 2024)
    const [selectedDay, setSelectedDay] = useState({daySelected:false, day:dayToday, month:monthToday, year:yearToday, time:"", object:""})
    
    //Show or hide status for Lists
    const [listStatus, setListStatus] = useState({month:false, year:false})
    
    const [selectedMonth, setSelectedMonth] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    const [selectedYear, setSelectedYear] = useState([2022, 2023, 2024])
    const [currentYearAndMonth, setCurrentYearAndMonth] = useState({year: selectedDay.year, month: selectedDay.month,currentMonthData: ""})
    
    const [monthIndex, setMonthIndex] = useState(0)
    const [yearIndex, setYearIndex] = useState(2022)

    const [currentMonthLength, setCurrentMonthLength] = useState(monthsArray[monthToday].amountOfDays)


    useEffect(() => {

    },[currentMonthLength])

    useEffect(() => {
    setSelectedDay((prev) => {
        return {...prev, month:monthToday + monthIndex, year:selectedYear[yearToday - yearIndex]}
    })

}, [monthIndex])

    useEffect(() => {
        setSelectedDay((prev) => {
            return {...prev, month:monthToday + monthIndex, year:selectedYear[yearToday - yearIndex]}
        })

    }, [yearIndex])

    useEffect(() => {

        let newTimeArrayToSave = []
        for(let i = 0;i < timeArray.length;i++) {
            if(timeArray[i].selected){
                newTimeArrayToSave.push(timeArray[i].time)
            }
        }

            setSelectedDay((prev) => {
                return {...prev, time:newTimeArrayToSave}
        })
    },[timeArray])
    
    useEffect(() => {
        setCurrentYearAndMonth((prev) => {
            return {...prev,year: selectedDay.year, month: selectedDay.month}
        })
        console.log(selectedDay);
        let selectedDayCopy = {...selectedDay}
    },[selectedDay])
    
    useEffect(() => {

        let newMonth 
        if(yearsArrayForPrint !== undefined) {
            newMonth = yearsArrayForPrint.filter(elem => elem.name === currentYearAndMonth.year)[0].monthInfo[currentYearAndMonth.month]
        }
  


        setFinalCurrent((prev) => {
            return {...currentYearAndMonth, currentMonthData:newMonth}
        })
    }, [currentYearAndMonth])

    useEffect((element) => {
    
    },[finalCurrent])
    
    
    
    function selectDate(elem) {
        if(!selectedDay.daySelected) {
            elem.target.classList.add('dateDaySelected')
            setSelectedDay((prev) => {
                return {...prev, object:elem.target, daySelected:true, day:elem.target.innerHTML}
            })
        } else if(selectedDay.daySelected && elem.target.classList.contains('dateDaySelected')){
            selectedDay.object.classList.remove('dateDaySelected')
            setSelectedDay((prev) => {
                return {...prev, object:'', daySelected:false, day:''}
            })
        } else if(selectedDay.daySelected && !elem.target.classList.contains('dateDaySelected')){
            selectedDay.object.classList.remove('dateDaySelected')
            elem.target.classList.add('dateDaySelected')
            setSelectedDay((prev) => {
                return {...prev, object:elem.target, daySelected:true, day:elem.target.innerHTML}
            })
        }
        setSelectedDay((prev) => {
            return {...prev, month:monthToday + monthIndex, year:selectedYear[yearToday - yearIndex]}
        })
    }
    
    function changeTimeStatus(elem) {
        let allTimeVariants = document.getElementsByClassName('selectedSingleTime')
        for (let i = 0; i < allTimeVariants.length; i++) {
            allTimeVariants[i].classList.remove('selectedSingleTime')
        }
        if(!elem.target.classList.contains('selectedSingleTime')) {
            elem.target.classList.add('selectedSingleTime')
        } else {
            elem.target.classList.remove('selectedSingleTime')
        }
        
        let currentTimeVariants = document.getElementsByClassName('selectedSingleTime')

        setSelectedDay((prev) => {
            return {...prev, time:currentTimeVariants[0].innerHTML}
        })

    }
    function printTime() {
        return (
            timeArray.map((elem) => {
                let newSelectedTime = <div className="singleTime" onClick={(elem) => changeTimeStatus(elem)} key={uniqid()}>{elem.time}</div>
                if(selectedDay.time === elem.time) {
                    newSelectedTime = <div className="singleTime selectedSingleTime" onClick={(elem) => changeTimeStatus(elem)} key={uniqid()}>{elem.time}</div>
                }
                return newSelectedTime
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
        }
        
        function showList(elem) {
            if(elem.target.classList.contains('dateLeftTopMonth')) {
                setListStatus((prev) => {
                    return {...prev, month:!prev.month}
                })
            }
            if(elem.target.classList.contains('dateLeftTopYear')) {
                setListStatus((prev) => {
                    return {...prev, year:!prev.year}
                })
            }
        }

        function printMonths() {
            
            return  (
        <div className="dateMonthList">
            <div>January</div>
            <div>February</div>
            <div>March</div>
            <div>April</div>
            <div>May</div>
            <div>June</div>
            <div>July</div>
            <div>August</div>
            <div>September</div>
            <div>October</div>
            <div>November</div>
            <div>December</div>
        </div>
        )
    }
    
    function printYears() {
        return (
            <div className="dateYearList">
            <div>2022</div>
            <div>2023</div>
            <div>2024</div>
        </div>
        )
    }
    
    
    function nextMonthBtn() {
        setSelectedDay((prev) => {
            return {...prev, day: "" }
        })
        setMonthIndex((prev) => {
            let newIndex = prev
            if((monthToday + prev) < 11) {
                newIndex += 1
            } else if((monthToday + prev) === 11 && yearIndex === 2020){

            } else {
                newIndex = -10
                setYearIndex((prev) => {
                    let newIndex = prev
                    if(prev > 2020) {
                        newIndex -= 1
                    } else {
                        newIndex = 2022
                    }
                    return newIndex
                })
            }
            return newIndex
        })

    }

    function prevMonthBtn() {
        setSelectedDay((prev) => {
            return {...prev, day: "" }
        })
        if (monthIndex === -10 && yearIndex < 2022) {
            setMonthIndex((prev) => {
                return 0
            })
            setYearIndex((prev) => {
                let newEl = prev
                newEl += 1
                return newEl
            })
        } else if(monthIndex <= 3 && monthIndex >=-7 && monthIndex !== 0) {
            setMonthIndex((prev) => {
                let newEl = prev
                newEl -= 1
                return newEl
            })
        } else if(monthIndex === 0 && yearIndex === yearToday) {
            //for ignoring
        } else {
            setMonthIndex((prev) => {
                let newEl = prev
                newEl -= 1
                return newEl
            })
        }
    }

    function printDays(){
        let arrayToPrint = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]
        let dataArray = []
        
        if(finalCurrent !== undefined) {
            if(finalCurrent.currentMonthData !== undefined) {
                let firstDayIndex = weeksDayArray.indexOf(finalCurrent.currentMonthData.firstDay)
                let amountOfDays
                if(finalCurrent.currentMonthData !== undefined) {
                    if(finalCurrent.currentMonthData.amountOfDays !== undefined) {
                        amountOfDays = finalCurrent.currentMonthData.amountOfDays
                    }
                }
                for(let i=0; i < firstDayIndex; i++) {
                    let newElem

                    if(i < firstDayIndex) {
                        newElem = <div className="tag unActiveDay" key={uniqid()}></div>
                    } 
                    dataArray.push(newElem)
                }
                for(let i=1; i < amountOfDays + 1; i++) {
                    let newElem
                    if(monthToday === currentYearAndMonth.month){
                        if(i < dayToday){
                            newElem = <div className="tag unActiveDay" key={uniqid()}>{i}</div>
                        } else if (i === dayToday || i > dayToday) {
                            if(Number(selectedDay.day) === i){
                                newElem = <div className="tag normalTag dateDaySelected" onClick={(target) => selectDate(target)} key={uniqid()}>{i}</div>
                            } else if (Number(selectedDay.day) !== i ){
                                newElem = <div className="tag normalTag" onClick={(target) => selectDate(target)} key={uniqid()}>{i}</div>
                            }
                        }
                    } else if(monthToday !== currentYearAndMonth.month){
                        if(Number(selectedDay.day) !== i) {
                            newElem = <div className="tag normalTag" onClick={(target) => selectDate(target)} key={uniqid()}>{i}</div>
                        } else {
                            newElem = <div className="tag normalTag dateDaySelected" onClick={(target) => selectDate(target)} key={uniqid()}>{i}</div>
                        }

                    } 
                    
                    dataArray.push(newElem)
                }

                let lastCounter = 43 - dataArray.length
                //unactive days end part
                for(let i=1; i < lastCounter; i++) {
                    let newElem
                        newElem = <div className="tag unActiveDay" key={uniqid()}>{i}</div>
                    
                    dataArray.push(newElem)
                }
            }
        }
        return dataArray
    }

    return (
        <div className="allObject">
            <div className="dateMain">
                {listStatus.month ? printMonths() : null}
                {listStatus.year ? printYears() : null}
                <div className="dateYearList"></div>
                <div className="dateLeft">
                    <div className="dateLeftTop">
                        <FontAwesomeIcon icon={faAngleLeft} className='dateLeftTopBtn dateLeftTopBtnLeft' onClick={() => prevMonthBtn()}/>
                        <div className="dateLeftTopMonth dateLeftTopBtn" >{selectedMonth[monthToday + monthIndex]}</div>
                        <div className="dateLeftTopYear dateLeftTopBtn" >{selectedYear[yearToday - yearIndex]}</div>
                        <FontAwesomeIcon icon={faAngleRight} className='dateLeftTopBtn dateLeftTopBtnRight' onClick={() => nextMonthBtn()}/>
                    </div>
                    <div className="dateLeftBottom">
                        <div className="dateLeftWeek">
                            <div className="tag weekDay">Mo</div>
                            <div className="tag weekDay">Di</div>
                            <div className="tag weekDay">Mi</div>
                            <div className="tag weekDay">Do</div>
                            <div className="tag weekDay">Fr</div>
                            <div className="tag weekDay">Sa</div>
                            <div className="tag weekDay">So</div>
                        </div>
                        <div className="dateDaysContainer">
                            <div className="dateDaysTable">
                                {printDays()}
                            </div>
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
            <div className="bottomPart">
                <FontAwesomeIcon icon={faCircleXmark} className="btnBottomPart btnCross" onClick={props.changeStatusForParent}/>
                <FontAwesomeIcon icon={faCircleCheck} className="btnBottomPart btnCheck" onClick={() => props.sendData(selectedDay)}/>
            </div>
            </div>
        </div>
    )
}