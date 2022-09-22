import React, { useEffect, useState } from "react";
import "./style.css"

export default function firstPageReserv(props) {

    const[usersList, setUsersList]= useState(props.data3)
    const[usersListDisplay, setUsersListDisplay] = useState(props.data3)
    const[orderSumm, setOrderSumm] = useState(400)
    const[showPopUp, setShowPopUp] = useState(false)
    const[selectedDish, setSelectedDish] = useState("")


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

    useEffect(() => {
        let orderSumm = 0
        for(let i = 0; i < usersListDisplay.length; i++) {
            let currentDishSumm = usersListDisplay[i].counter * usersListDisplay[i].price
            orderSumm += currentDishSumm
            
        }
        setOrderSumm((prev) => {
            return orderSumm
        })
    },[usersListDisplay])



    //MINUS DISH
    function minusDish(elem) {
        let nameOfDish = elem.target.parentElement.parentElement.childNodes[0].textContent

        
        setUsersListDisplay((prev) => {
            
            let newArr = prev.map((dish) => {
                let newEl
                if(dish.counter !== 0 & nameOfDish === dish.name) {
                    newEl = dish.counter - 1
                    printPopUp(dish)
                } else if(dish.counter === 0 & nameOfDish === dish.name){
                    newEl = 0
                } else {
                    newEl = dish.counter
                }
                return {...dish, counter:newEl}
            })
            return newArr
        })
        
    }
    
    
    
    // PLUS DISH
    function plusDish(elem) {
        let nameOfDish = elem.target.parentElement.parentElement.childNodes[0].textContent
        

        
        setUsersListDisplay((prev) => {
            
            let newArr = prev.map((dish) => {
                let newEl
                if(dish.counter !== 0 & nameOfDish === dish.name) {
                    newEl = dish.counter + 1
                    printPopUp(dish)
                } else if(dish.counter === 0 & nameOfDish === dish.name){
                    newEl = dish.counter + 1
                    printPopUp(dish)
                } else {
                    newEl = dish.counter
                    
                }
                return {...dish, counter:newEl}
            })
            return newArr
        })
    }
    
    
    
    function printPopUp(dish) {
        setShowPopUp((prev) => {
            return !prev
        })
        

        let elToColorise = document.querySelector(".DishPriceColor")
        console.log(elToColorise);

        

        setTimeout(() => {
            setShowPopUp((prev) => {
                return !prev
            })
        }, 2000);
        
        console.log(dish);
        
        
    }
    



    return (
        <div className="allComponent">
            <h2 className="allComponentTitle">Your Order</h2>
            <div className="contactFormMain">
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
                <div className="contactFormSecond">
                    <h3>Your Total Check</h3>
                    <h5>{orderSumm}$</h5>
                    {showPopUp ? <h4 className="DishPriceColor">hiddenText</h4> : null}
                    <h3>If your Order is correct please proceed</h3>
                </div>

            </div>
        </div>
    )
}




