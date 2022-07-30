import React from "react";
import "./nav.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'





export default function Nav() {

    function showOrHideMap() {
        let mapNav = document.querySelectorAll('#xMarkNav')

        if(mapNav[0].classList.contains('falseShow')) {
            mapNav[0].classList.remove('falseShow')
            mapNav[0].classList.add('trueShow')
        } else {
            mapNav[0].classList.add('falseShow')
            mapNav[0].classList.remove('trueShow')
        }
        
    }
    function openMenu(){
        let menu = document.querySelectorAll('.menuBar')
        console.log(menu[0].classList);
        if(menu[0].classList.contains('showMenuFalse')) {
            menu[0].classList.remove('showMenuFalse')
            menu[0].classList.add('showMenuTrue')
        } else {
            menu[0].classList.add('showMenuFalse')
            menu[0].classList.remove('showMenuTrue')
        }
    }
    return(
        <div>

            <div className="nav">
                <img src="/images/logo.png" alt="" className="navLogo"/>
                <div className="buttons">
                    <div className="menuBtn navBtn" onClick={() => openMenu()}>
                        <div className="menuBar showMenuFalse" id="menuBtn">
      
                                <h6 className="navMenuBtn">First</h6>
   
         
                                <h6 className="navMenuBtn">Second</h6>
  
                                <h6 className="navMenuBtn">Third</h6>

                        </div>
                        Menu
                        </div>
                    <div className="reserveBtn navBtn">Reservation</div>
                </div>
                <FontAwesomeIcon icon={ faMapLocation } className="navIcon" onClick={() => showOrHideMap()}/>
                <div className="navMap falseShow" id="xMarkNav">
                    <div className="contentNav">
                        <h1>Coffee House</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quidem optio error repudiandae earum quod repellat nostrum vel esse perspiciatis aperiam, molestiae illum sequi ipsum? Ratione velit nulla consectetur. Explicabo!</p>
                    </div>
                    <FontAwesomeIcon icon={ faXmark } onClick={() => showOrHideMap()} className="xMarkNav"/>
                </div>
            </div>

  
        </div>
    )
}