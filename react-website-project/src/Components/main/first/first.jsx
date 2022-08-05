/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./first.css"

import Data from '../../API/api.json'


export default function First(){

    const [initialArray, setinitialArray] = useState(Data)
    const [filteredArray, setFilteredArray] = useState(Data)
    
    const [input, setInput] = useState('')


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

    let categLunch = noUndefinedArray.filter((elem) => {
        return elem.category === "Lunch"
    })

    let categPizza = noUndefinedArray.filter((elem) => {
        return elem.category === "Pizza"
    })

    let categDinner = noUndefinedArray.filter((elem) => {
        return elem.category === "Dinner"
    })

    let categDessert = noUndefinedArray.filter((elem) => {
        return elem.category === "Dessert"
    })

    let categColdDrinks = noUndefinedArray.filter((elem) => {
        return elem.category === "Cold drinks"
    })


    console.log(categBreakfast);

    setFilteredArray((prev) => {
        return noUndefinedArray
    })
    }, [input])

    


    

    return (
        <div className="componentFirst">
            <input type="text" className="firstInput"  id="dishesInput" onChange={(element) => filterArray(element) }/>
             {/* <img src={require("../../../../public/images/fotos/1.1.jpg")} alt="" /> */}
             <div className="allDishes">
                {filteredArray.map((prev) => (
                    <div className="dishFormMain">
                        <div key={prev.id} className="dishForm">
                            <div key={prev.id} className="dishName">{prev.name}</div>
                            <h6 className="dishDescription">{prev.description}</h6>
                            <div className="dishBtnForm">
                                <button className="dishBtnMinus dishBtn">-</button>
                            <div className="dishFormCount">0</div>
                                <button className="dishBtnPlus dishBtn">+</button>
                            </div>
                            <div className="dishPrice">{prev.price} <span>$</span></div>
                        </ div>
                        <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.2.jpg`)}`} alt="Dish" />
                    </div>
                    ))}
             </div>
        </div>
    )
}