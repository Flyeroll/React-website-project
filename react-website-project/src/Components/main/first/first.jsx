/* eslint-disable */
// DISHES
import React, { useEffect, useState } from "react";
import "./first.css"
import { Outlet } from "react-router-dom";

import Data from '../../API/api.json'
import OpenedImage from './opened_Image/opened_img'


export default function First(){

    const [initialArray, setinitialArray] = useState(Data)
    const [filteredArray, setFilteredArray] = useState(Data)

    const [showReserve, setShowReserve] = useState(true)

    // Categories
    const [filteredArrayBreakfast, setFilteredArrayBreakfast] = useState(Data)
    const [filteredArrayLunch, setFilteredArrayLunch] = useState(Data)
    const [filteredArrayPizza, setFilteredArrayPizza] = useState(Data)
    const [filteredArrayDinner, setFilteredArrayDinner] = useState(Data)
    const [filteredArrayDessert, setFilteredArrayDessert] = useState(Data)
    const [filteredArrayColdDrinks, setFilteredArrayColdDrinks] = useState(Data)
    
    const [input, setInput] = useState('')

    // Counter
    const [counter, setCounter] = useState(Data)

    function filterArray(element) {
            let elementVar = element
            setInput((prev) => {
                return element.target.value
            })
    }

    useEffect(() => {
        //making copy of original data
        let copyArr = initialArray
        //sorting all dishes throuhg input Field
        copyArr = copyArr.map((elem) => {
            if(elem.name.toLowerCase().includes(input)){
                return elem
            } 
        })
        
        //making new array to filter UNDEFINED elements
        let noUndefinedArray = []
        //filtering 'dirty array (heres array is clear)'
        copyArr.forEach((elem) => {
            if(elem !== undefined) {
                noUndefinedArray.push(elem)
            }
    })




    let categBreakfast = noUndefinedArray.filter((elem) => {
        return elem.category === "Breakfast"
    })
    setFilteredArrayBreakfast((prev) => categBreakfast)
    
    let categLunch = noUndefinedArray.filter((elem) => {
        return elem.category === "Lunch"
    })
    setFilteredArrayLunch((prev) => categLunch)
    
    let categPizza = noUndefinedArray.filter((elem) => {
        return elem.category === "Pizza"
    })
    setFilteredArrayPizza((prev) => categPizza)
    
    let categDinner = noUndefinedArray.filter((elem) => {
        return elem.category === "Dinner"
    })
    setFilteredArrayDinner((prev) => categDinner)
    
    let categDessert = noUndefinedArray.filter((elem) => {
        return elem.category === "Dessert"
    })
    setFilteredArrayDessert((prev) => categDessert)
    
    let categColdDrinks = noUndefinedArray.filter((elem) => {
        return elem.category === "Cold drinks"
    })
    setFilteredArrayColdDrinks((prev) => categColdDrinks)

    setFilteredArray((prev) => {
        return noUndefinedArray
    })
    }, [input])


    function plusDish(element){
        let elementName = element.target.parentElement.parentElement.firstElementChild.innerHTML

        setCounter((prev) => {
            let newObj = prev.map((elem) => {
                let newCount = elem.counter
                if(elem.name === elementName) {
                    newCount++
                }
                return {...elem, counter:newCount}
            })
            return newObj
        })
    }

    function minusDish(element){
        let elementName = element.target.parentElement.parentElement.firstElementChild.innerHTML

        setCounter((prev) => {
            let newObj = prev.map((elem) => {
                let newCount = elem.counter
                if(elem.name === elementName & newCount > 0){
                    newCount--
                }
                return {...elem, counter:newCount}
            })
            return newObj
        })
    }
    
    useEffect(() => {
        console.log(counter);
    },[counter])
    
    function printCountPlus(prevEl){
        let number = 0;

        let newCount = counter
        newCount.forEach((elem) => {
            if(elem.id === prevEl.id){
                number = elem.counter
            }
        })
        return number

    }

    function showPicture(elem) {
        console.log(elem.target);
    }
    
    return (
        <div className="componentFirst">
            <OpenedImage className="openedImage"/>
            <input type="text" className="firstInput"  id="dishesInput" onChange={(element) => filterArray(element) }/>
            {/* all Breakfasts */}
            

                {filteredArrayBreakfast.length !== 0 ? <h1 className="categoryTitle">Breakfast</h1> : null  }
                <div className="allDishes">

                {filteredArrayBreakfast.map((prev) => (
                    <div className="dishFormMain">
                        <div key={prev.id} className="dishForm">
                            <div key={prev.id} className="dishName">{prev.name}</div>
                            <h6 className="dishDescription">{prev.description}</h6>
                            <div className="dishBtnForm">
                                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                            <div className="dishFormCount">{printCountPlus(prev)}</div>
                                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
                            </div>
                            <div className="dishPrice">{prev.price} <span>$</span></div>
                        </ div>
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.2.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    </div>
                    ))}
                    </div>


            {/* all Lunchs */}
            
       

                {filteredArrayLunch.length !== 0 ? <h1 className="categoryTitle">Lunch</h1> : null  }
                <div className="allDishes">

                {filteredArrayLunch.map((prev) => (
                    <div className="dishFormMain">
                        <div key={prev.id} className="dishForm">
                            <div key={prev.id} className="dishName">{prev.name}</div>
                            <h6 className="dishDescription">{prev.description}</h6>
                            <div className="dishBtnForm">
                                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                            <div className="dishFormCount">{printCountPlus(prev)}</div>
                                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
                            </div>
                            <div className="dishPrice">{prev.price} <span>$</span></div>
                        </ div>
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.2.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    </div>
                    ))}
                    </div>



            {/* all Pizzas */}
            
     


                {filteredArrayDinner.length !== 0 ? <h1 className="categoryTitle">Dinner</h1> : null  }
                <div className="allDishes">

                {filteredArrayDinner.map((prev) => (
                    <div className="dishFormMain">
                        <div key={prev.id} className="dishForm">
                            <div key={prev.id} className="dishName">{prev.name}</div>
                            <h6 className="dishDescription">{prev.description}</h6>
                            <div className="dishBtnForm">
                                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                            <div className="dishFormCount">{printCountPlus(prev)}</div>
                                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
                            </div>
                            <div className="dishPrice">{prev.price} <span>$</span></div>
                        </ div>
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.2.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    </div>
                    ))}
                    </div>



            {/* all Dinners */}
            


                {filteredArrayPizza.length !== 0 ? <h1 className="categoryTitle">Pizza</h1> : null  }
                <div className="allDishes">

                {filteredArrayPizza.map((prev) => (
                    <div className="dishFormMain">
                        <div key={prev.id} className="dishForm">
                            <div key={prev.id} className="dishName">{prev.name}</div>
                            <h6 className="dishDescription">{prev.description}</h6>
                            <div className="dishBtnForm">
                                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                            <div className="dishFormCount">{printCountPlus(prev)}</div>
                                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
                            </div>
                            <div className="dishPrice">{prev.price} <span>$</span></div>
                        </ div>
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.2.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    </div>
                    ))}
                    </div>



            {/* all Desserts */}
            
                {filteredArrayDessert.length !== 0 ? <h1 className="categoryTitle">Desserts</h1> : null  }
                <div className="allDishes">

                {filteredArrayDessert.map((prev) => (
                    <div className="dishFormMain">
                        <div key={prev.id} className="dishForm">
                            <div key={prev.id} className="dishName">{prev.name}</div>
                            <h6 className="dishDescription">{prev.description}</h6>
                            <div className="dishBtnForm">
                                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                            <div className="dishFormCount">{printCountPlus(prev)}</div>
                                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
                            </div>
                            <div className="dishPrice">{prev.price} <span>$</span></div>
                        </ div>
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.2.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    </div>
                    ))}
                    </div>





            {/* all ColdDrinkss */}
            


                {filteredArrayColdDrinks.length !== 0 ? <h1 className="categoryTitle">Cold Drinks</h1> : null  }
                <div className="allDishes">

                {filteredArrayColdDrinks.map((prev) => (
                    <div className="dishFormMain">
                        <div key={prev.id} className="dishForm">
                            <div key={prev.id} className="dishName">{prev.name}</div>
                            <h6 className="dishDescription">{prev.description}</h6>
                            <div className="dishBtnForm">
                                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                            <div className="dishFormCount">{printCountPlus(prev)}</div>
                                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
                            </div>
                            <div className="dishPrice">{prev.price} <span>$</span></div>
                        </ div>
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.2.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    </div>
                    ))}
                    </div>
        {showReserve ? <Outlet/> : null}
        </div>
    )
}