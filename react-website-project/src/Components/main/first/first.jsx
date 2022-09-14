/* eslint-disable */
// DISHES
import React, { useEffect, useState } from "react";
import "./first.css"
import Reservation from "../reservation/reservation"
import { Outlet } from "react-router-dom";

import Data from '../../API/api.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function First(){

    const [initialArray, setinitialArray] = useState(Data)
    const [filteredArray, setFilteredArray] = useState(Data)

    
    // Categories
    const [filteredArrayBreakfast, setFilteredArrayBreakfast] = useState(Data)
    const [filteredArrayLunch, setFilteredArrayLunch] = useState(Data)
    const [filteredArrayPizza, setFilteredArrayPizza] = useState(Data)
    const [filteredArrayDinner, setFilteredArrayDinner] = useState(Data)
    const [filteredArrayDessert, setFilteredArrayDessert] = useState(Data)
    const [filteredArrayColdDrinks, setFilteredArrayColdDrinks] = useState(Data)
    const [showImage, setShowImage] = useState({status:false, adress:""})
    
    const [input, setInput] = useState('')
    
    // Final data with dishes here (Counter)
    const [counter, setCounter] = useState(Data)

    const [JPEGcode, setJPEGcode] = useState('')
    const [currentImage, setCurrentImage] = useState(1)
    
    // Reserve Button
    const [showReserve, setShowReserve] = useState(false)

    //Reserve window
    
    
    
    
    function filterArray(element) {
            setInput((prev) => {
                return element.target.value
            })
    }


    useEffect(() => {
        console.log(counter);
            
    },[counter])

    useEffect(() => {
        let adress = showImage.adress.nodeValue
        if(adress !== undefined) {
            let part = adress.slice(14, adress.indexOf('j'))
            let indexOfLastDot = part.indexOf('.', (part.indexOf('.')) + 1)
            let endPart = `${part.slice(0, indexOfLastDot - 1)}${currentImage}`
            setJPEGcode((prev) => {
                return endPart
            })
        }

    },[currentImage])

    useEffect(() => {
        let adress = showImage.adress.nodeValue
        if(adress !== undefined) {
            let part = adress.slice(14, adress.indexOf('j'))
            let indexOfLastDot = part.indexOf('.', (part.indexOf('.')) + 1)
            let endPart = `${part.slice(0, indexOfLastDot - 1)}${currentImage}`
            setJPEGcode((prev) => {
                return endPart
            })
        }
    }, [showImage.adress])



    useEffect(() => {
        if(!showImage.status) {
  
            setCurrentImage((prev) => {
                return 1
            })
            setJPEGcode((prev) => {
                return ""
            })
            setShowImage((prev) => {
                return {...prev, adress:""}
            })
        }
    }, [showImage.status])



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
        setShowReserve((prev) => {
            return true
        })
    }

    function minusDish(element){
        let elementName = element.target.parentElement.parentElement.firstElementChild.innerHTML
        let checkShowReserve = false
        setCounter((prev) => {
            let newObj = prev.map((elem) => {
                let newCount = elem.counter
                if(elem.name === elementName & newCount > 0){
                    newCount--
                }
                if(newCount !== 0) {
                    checkShowReserve = true
                }
                return {...elem, counter:newCount}
            })
            return newObj
        })

        setShowReserve((prev) => {
            return checkShowReserve
        })
    }
    
    
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
        if(!showImage.status) {
            setShowImage((prev) => {
                return {status:!prev.status, adress:elem.target.attributes.src}
            })
        } else if(showImage.status) {
            setShowImage((prev) => {
                return {status:!prev.status, adress:""}
            })

        }
    }

    function nextImg(){

        let prevNew
        setCurrentImage((prev) => {
            let prevNew
            if(prev > 0 & prev !== 3){
                prevNew = prev + 1
            }  else if(prev === 3) {
            prevNew = 3
            }
            return prevNew
        })
    }
    
    function prevImg(){

        setCurrentImage((prev) => {
            let prevNew
            if(prev > 1 || prev === 3){
                prevNew = prev - 1
            }  else {
            prevNew = prev
            }
            return prevNew
        })
    }

    function showLeftArrow(){
        return (
            <FontAwesomeIcon icon={faAngleLeft} className="fotoAngle fotoAngleLeft" onClick={() => prevImg()}/>
        )
    }

    function showRightArrow(){
        return (
            <FontAwesomeIcon icon={faAngleRight} className="fotoAngle fotoAngleRight" onClick={() => nextImg()}/>
        )
    }

    function pictureElement() {

        return (
            <div className="showedFoto">
                <div className="showedFotoContainer">
                    {currentImage !== 1 ? showLeftArrow() : null }
                    <img className="showedFoto" src={process.env.PUBLIC_URL + `/images/fotos/${JPEGcode}.jpg`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    {currentImage !== 3 ? showRightArrow() : null }
                </div>
            </div> )
    }

    function showReserveWindow() {
        console.log("SHOW RESERVATION TABLE!");
    }

    function printReserve() {
        return (
            <div className="inputFieldReserveBtn" onClick={(elem) => showReserveWindow()}>Reserve!</div>
        )
    }


    



























    return (
        <div className="componentFirst">
            {/* <Reservation className="reservationTable"/> */}
            {showImage.status ? pictureElement() : null }
            <div className="inputField">
                <input type="text" className="firstInput"  id="dishesInput" onChange={(element) => filterArray(element) }/>
                {showReserve ? printReserve() : null }
            </div>
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
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
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
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
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
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
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
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
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
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
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
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={elem => showPicture(elem)}/>
                    </div>
                    ))}
                    </div>
        {showReserve ? <Outlet/> : null}
        </div>
    )
}