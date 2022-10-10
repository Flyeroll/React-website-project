import React from "react";
import "./nav.scoped.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";





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
            let itemsToHideShow = document.querySelectorAll('.linkToHide')
            itemsToHideShow.forEach((link) => {
                link.style.pointerEvents = 'all'
            })
        } else {
            menu[0].classList.add('showMenuFalse')
            let itemsToHideShow = document.querySelectorAll('.linkToHide')
            itemsToHideShow.forEach((link) => {
                link.style.pointerEvents = 'none'
            })
            menu[0].classList.remove('showMenuTrue')
        }

    }
    return(
        <div>

            <div className="nav" onClick={(elem) => {
                console.log(elem.target)
            }}>
                <img src="/images/logo.png" alt="" className="navLogo"/>
                <div className="buttons">
                    <button className="menuBtn navBtn" onClick={() => openMenu()}>
                        Menu
                        <button className="menuBar showMenuFalse" id="menuBtn">
      
                                <button className="navMenuBtn"><Link to="/dishes" className="linkToHide">Dishes</ Link></button>
                                <button className="navMenuBtn"><Link to="/about" className="linkToHide">About Us</Link></button>
                                <button className="navMenuBtn"><Link to="/contacts" className="linkToHide">Contacts</Link></button>
                                
                        </button>
                    </button>
                    <div className="reserveMenuBtn navBtn"><Link to="reservation" className="link">Reservation</Link></div>
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

        <Outlet/>
        </div>
    )
}