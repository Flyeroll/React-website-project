import React, { useEffect, useRef, useState } from 'react';
import './nav.scoped.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Outlet, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const menuBtnRef = useRef();
  const menuPopUpRef = useRef();

  function showOrHideMap() {
    const mapNav = document.querySelectorAll('#xMarkNav');
    const mapEl = document.getElementsByClassName('mapImg');

    if (mapNav[0].classList.contains('falseShow')) {
      mapNav[0].classList.remove('falseShow');
      mapNav[0].classList.add('trueShow');
      mapEl[0].classList.add('moveToLeft');
    } else {
      mapNav[0].classList.add('falseShow');
      mapNav[0].classList.remove('trueShow');
      mapEl[0].classList.remove('moveToLeft');
    }
  }

  function printMenu() {
    return (
      <div className="menuBar showMenuTrue" id="menuBtn" ref={menuPopUpRef}>
        <div className="navMenuBtn"><Link to="/dishes" className="linkToHide">Dishes</Link></div>
        <div className="navMenuBtn"><Link to="/about" className="linkToHide">About Us</Link></div>
        <div className="navMenuBtn"><Link to="/contacts" className="linkToHide">Contacts</Link></div>
      </div>
    );
  }

  function openMenu() {
    setShowMenu((prev) => true);
  }

  useEffect(() => {
    const closeDropDown = (e) => {
      if (
        e.target !== menuBtnRef.current
        && e.target !== menuPopUpRef.current
      ) {
        setShowMenu((prev) => false);
      }
    };

    document.addEventListener('click', closeDropDown);
    return () => document.removeEventListener('click', closeDropDown);
  }, []);

  function showMap() {
    const mapEl = document.getElementsByClassName('mapImg');
    console.log(mapEl);
    if (!mapEl[0].classList.contains('mapShowed')) {
      mapEl[0].classList.add('mapShowed');
    }
  }


  return (
    <div>

      <div className="nav">
        <img src="/images/logo.png" alt="" className="navLogo" />
        <div className="buttons">
          <button ref={menuBtnRef} className="menuBtn navBtn" onClick={() => openMenu()}>
            Menu
            {showMenu ? printMenu() : null }
          </button>
        </div>
        <FontAwesomeIcon icon={faMapLocation} className="navIcon" onClick={() => showOrHideMap()} />
        <div className="navMap falseShow" id="xMarkNav">
          <div className="contentNav">
            <h1>Coffee House</h1>
            <h3>You can find us:</h3>
            <p className="forStyling">3, Kirochnaya street</p>
            <p>Saint-Petersburg</p>
            <div>
            <MapContainer id="map" center={[59.94390977732626, 30.350782805398286]} zoom={16} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[59.94390977732626, 30.350782805398286]}>
      <Popup>
        You can find our Restaurant here
      </Popup>
    </Marker>
  </MapContainer>
            </div>
            <p className="navEmail">coffeehouse@gmail.com</p>
            <p className="forStyling">Working hours</p>
            <p>Mon - Sun from 13:00 to 23:30</p>
          </div>
          <FontAwesomeIcon icon={faXmark} onClick={() => showOrHideMap()} className="xMarkNav" />
        </div>
      </div>

      <Outlet />
      <footer>© 2022 Coffee Hause</footer>
    </div>
  );
}
