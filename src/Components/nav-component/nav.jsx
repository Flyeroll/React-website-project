import React, { useEffect, useRef, useState } from "react";
import "./nav.scoped.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";









export default function Nav() {

    const [showMenu, setShowMenu] = useState(false)
    const menuBtnRef = useRef()

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
    
    function printMenu() {
        return (
            <div className="menuBar showMenuTrue" id="menuBtn">
                <div className="navMenuBtn"><Link to="/dishes" className="linkToHide">Dishes</ Link></div>
                <div className="navMenuBtn"><Link to="/about" className="linkToHide">About Us</Link></div>
                <div className="navMenuBtn"><Link to="/contacts" className="linkToHide">Contacts</Link></div>
            </div>
        )
    }

 
    
    function openMenu(){
        setShowMenu((prev) => {
            return !prev
        })
        
    }
    
    
    
    useEffect(() => {
        const closeDropDown = e => {
            if(e.target !== menuBtnRef.current) {
                setShowMenu((prev) => {
                    return false
                })
            }
        }

        document.addEventListener('click', closeDropDown)

        return () => document.removeEventListener('click', closeDropDown)
        
    },[])

      


    return(
        <div>

            <div className="nav">
                <img src="/images/logo.png" alt="" className="navLogo"/>
                <div className="buttons">
                    <button ref={menuBtnRef} className="menuBtn navBtn" onClick={() => openMenu()}>
                        Menu
                        {showMenu ? printMenu() : null }
                    </button>
                </div>
                <FontAwesomeIcon icon={ faMapLocation } className="navIcon" onClick={() => showOrHideMap()}/>
                <div className="navMap falseShow" id="xMarkNav">
                    <div className="contentNav">
                        <h1>Coffee House</h1>
                        <h3>You can find us:</h3>
                        <div id="map"></div>
                    </div>
                    <FontAwesomeIcon icon={ faXmark } onClick={() => showOrHideMap()} className="xMarkNav"/>
                </div>
            </div>

        <Outlet/>
        </div>
    )
}