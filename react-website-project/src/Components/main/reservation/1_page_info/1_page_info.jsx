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


    function minusDish(elem) {
        let nameOfDish = elem.target.parentElement.parentElement.childNodes[0].textContent


        setUsersListDisplay((prev) => {

            let newArr = prev.map((dish) => {
                let newEl
                if(dish.counter !== 0) {
                    newEl = dish.counter - 1
                } else if(dish.counter === 0){
                    newEl = 0
                }
                return {...dish, counter:newEl}
            })
            return newArr
        })
        console.log(usersListDisplay)
        console.log(nameOfDish);
    }
    
    function plusDish(elem) {
        let nameOfDish = elem.target.parentElement.parentElement.childNodes[0].textContent

        setUsersListDisplay((prev) => {
    
            let newArr = prev.map((dish) => {
                let newEl = dish.counter + 1
                return {...dish, counter:newEl}
            })
            return newArr
        })
        console.log(nameOfDish);
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




