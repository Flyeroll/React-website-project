import React, { useEffect, useState } from "react";

import "./style.css"


export default function secondPageReserv() {


            
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
            const [phoneNumber, setPhoneNumber] = useState('')
            const [numberParts, setNumberParts] = useState({1:"", 2:"", 3:"", 4:""})
        
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

            function phoneFilter(elem) {

                let phone = document.getElementsByClassName('phoneNumber')[0].value
                setPhoneNumber((prev) => elem.target.value)

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

            }, [clearReservedTables])
            
            
            useEffect(() => {
                
                let firstThreeText
                let secondThreeText 
                let firstTwoText
                let secondTwoText
                let finalNumber
                
                if(phoneNumber.length < 4){
                    let firstThreeArr = phoneNumber.slice(0, 3)
                    let newArrText = ""
                    for(let i = 0; i < firstThreeArr.length; i++) {
                        if(firstThreeArr[i] !== undefined) {
                            newArrText += firstThreeArr[i]
                        } else if(firstThreeArr[i] === undefined) {
                            newArrText += "_"
                        }
                    }
                    firstThreeText = `(${newArrText})`

                    setNumberParts((prev) => {
                        return {...prev, 1:firstThreeText}
                    })
                    
                }
                
                if(phoneNumber.length < 7 ){
                    let secondThreeArr = phoneNumber.slice(3, 6)
                    let newArrText = ""
                    for(let i = 0; i < secondThreeArr.length; i++) {
                        if(secondThreeArr[i] !== undefined) {
                            newArrText += secondThreeArr[i]
                        } else if(secondThreeArr[i] === undefined) {
                            newArrText += "_"
                        }
                    }

                    secondThreeText = ` ${newArrText}`
                    
                    setNumberParts((prev) => {
                        return {...prev, 2:secondThreeText}
                    })
                    
                }

                
                
                if(phoneNumber.length < 9 ){
                    let firstTwoArr = phoneNumber.slice(6, 8)
                    let newArrText = ""
                    for(let i = 0; i < firstTwoArr.length; i++) {
                        if(firstTwoArr[i] !== undefined) {
                            newArrText += firstTwoArr[i]
                        } else if(firstTwoArr[i] === undefined) {
                            newArrText += "_"
                        }
                    }
                    
                    firstTwoText = ` ${newArrText}`
                    
                    setNumberParts((prev) => {
                        return {...prev, 3:firstTwoText}
                    })
                }
                
                if(phoneNumber.length < 11 ){
                    let secondTwoArr = phoneNumber.slice(8, 10)
                    let newArrText = ""
                    for(let i = 0; i < secondTwoArr.length; i++) {
                        if(secondTwoArr[i] !== undefined) {
                            newArrText += secondTwoArr[i]
                        } else if(secondTwoArr[i] === undefined) {
                            newArrText += "_"
                        }
                    }
                    
                    secondTwoText = ` ${newArrText}`
                    
                    setNumberParts((prev) => {
                        return {...prev, 4:secondTwoText}
                    })

                }
                
               
                finalNumber = `${firstThreeText} + ${secondThreeText} + ${firstTwoText} + ${secondTwoText}`

                console.log(finalNumber);

                
            },[phoneNumber])

            useEffect(() => {
                console.log(numberParts);
            },[numberParts])


    return (
        <div className="allComponent">
            <h2 className="allComponentTitle">Info</h2>
            <div className="columns">

                <div className="firstColumn">
                    <h3>Your Contacts</h3>
                    <div className="reservationClientDataBox">

                        <input type="text" className="reservationInput" placeholder="your name"/>
                        <input type="text" className="reservationInput phoneNumber" placeholder="your phone" maxlength="10" onChange={(elem) => phoneFilter(elem)} value={phoneNumber}/>
                    </div>
                </div>

                <div className="secondColumn">
                    <h3>Please choose your table(s)</h3>
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

            </div>
        </div>
    )
}