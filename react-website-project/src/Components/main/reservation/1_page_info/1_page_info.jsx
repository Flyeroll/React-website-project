import React, { useEffect, useState } from "react";
import "./style.css"

export default function firstPageReserv(props) {

    const[usersList, setUsersList]= useState(props.data3)
    const[usersListDisplay, setUsersListDisplay] = useState(props.data3)



    useEffect(() => {
        let newArr = []
        for(let i = 0;i < 36; i++){
            if(usersList[i].counter !== 0){
                newArr.push(usersList[i])
            }
        }

        setUsersListDisplay((prev) => {
            return newArr
        })
        console.log(usersListDisplay);
    },[usersList])



    function plusDish(elem) {
        console.log(elem);
    }

    function minusDish(elem) {
        console.log(elem);
    }



    return (
        <div className="allComponent">
            <h2 className="allComponentTitle">Contact</h2>
            <div className="contactForm">
                <div className="contactFormList">
                    {usersListDisplay.map((elem) => {
                        return (
                            <div className="contactFormLine">
                                <div className="contactFormLineName">{elem.name}</div>
                                <div className="contactFormLineAmountBox">
                                    <div className="contactFormLinePlusMinus" onClick={(elem) => minusDish(elem)}>-</div>
                                    <div className="contactFormLineAmount">{elem.counter}</div>
                                    <div className="contactFormLinePlusMinus" onClick={(elem) => plusDish(elem)}>+</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}




