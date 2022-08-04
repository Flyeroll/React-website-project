/* eslint-disable */
import React, { useEffect, useState } from "react";


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

    setFilteredArray((prev) => {
        return noUndefinedArray
    })
    }, [input])

    


    

    return (
        <div>
            <input type="text"  id="dishesInput" onChange={(element) => filterArray(element) }/>
             {/* <img src={require("../../../../public/images/fotos/1.1.jpg")} alt="" /> */}
            {filteredArray.map((prev) => (
                <div key={prev.id}>
                    <div key={prev.id}>{prev.name}</div>
                    <h6>{prev.description}</h6>
                </ div>
                ))}
        </div>
    )
}