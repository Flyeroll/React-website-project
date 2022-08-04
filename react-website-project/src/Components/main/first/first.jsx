/* eslint-disable */
import React, { useEffect, useState } from "react";


import Data from '../../API/api.json'


export default function First(){

    const [initialArray, setinitialArray] = useState(Data)
    const [filteredArray, setFilteredArray] = useState(Data)
    
    const [input, setInput] = useState('')


    function filterArray(element) {
            console.log(input);
            let elementVar = element
            setInput((prev) => {
                return element.target.value
            })

    }

    useEffect(() => {
        let copyArr = initialArray

        copyArr = copyArr.map((elem) => {
            if(elem.name.toLowerCase().includes(input)){
                return elem
            } 
        })
        
        let noUndefinedArray = []
        
        copyArr.forEach((elem) => {
            if(elem !== undefined) {
                noUndefinedArray.push(elem)
            }
    })

    setFilteredArray((prev) => {
        return noUndefinedArray
    })
        console.log(noUndefinedArray);
        // setFilteredArray((prev) => {
        //     return copyArr
        // })
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
                    {/* <div >
                        {input}
                    </div> */}
        </div>
    )
}