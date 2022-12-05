// DISHES
import React, { useEffect, useState } from 'react';
import './first.css';
import { Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import Reservation from '../reservation/reservation';
import Data from '../../API/api.json';

export default function First() {
  const [initialArray, setinitialArray] = useState(Data);
  const [filteredArray, setFilteredArray] = useState(Data);

  // Categories
  const [filteredArrayBreakfast, setFilteredArrayBreakfast] = useState(Data);
  const [filteredArrayLunch, setFilteredArrayLunch] = useState(Data);
  const [filteredArrayPizza, setFilteredArrayPizza] = useState(Data);
  const [filteredArrayDinner, setFilteredArrayDinner] = useState(Data);
  const [filteredArrayDessert, setFilteredArrayDessert] = useState(Data);
  const [filteredArrayColdDrinks, setFilteredArrayColdDrinks] = useState(Data);
  const [showWarning, setShowWarning] = useState(false);
  const [showImage, setShowImage] = useState({ status: false, adress: '' });

  const [input, setInput] = useState('');

  // Final data with dishes here (Counter)
  const [counter, setCounter] = useState(Data);

  const [JPEGcode, setJPEGcode] = useState('');
  const [currentImage, setCurrentImage] = useState(1);

  // Reserve Button
  const [showReserve, setShowReserve] = useState(false);

  // Reserve window
  const [showReserveWindowToggler, setShowReserveWindowToggler] = useState(false);

  function filterArray(element) {
    setInput(() => element.target.value);
  }

  useEffect(() => {
    const adress = showImage.adress.nodeValue;
    if (adress !== undefined) {
      const part = adress.slice(14, adress.indexOf('j'));
      const indexOfLastDot = part.indexOf('.', (part.indexOf('.')) + 1);
      const endPart = `${part.slice(0, indexOfLastDot - 1)}${currentImage}`;
      setJPEGcode(() => endPart);
    }
  }, [currentImage]);

  useEffect(() => {
    const adress = showImage.adress.nodeValue;
    if (adress !== undefined) {
      const part = adress.slice(14, adress.indexOf('j'));
      const indexOfLastDot = part.indexOf('.', (part.indexOf('.')) + 1);
      const endPart = `${part.slice(0, indexOfLastDot - 1)}${currentImage}`;
      setJPEGcode(() => endPart);
    }
  }, [showImage.adress]);

  useEffect(() => {
    if (!showImage.status) {
      setCurrentImage(() => 1);
      setJPEGcode(() => '');
      setShowImage((prev) => ({ ...prev, adress: '' }));
    }
  }, [showImage.status]);

  useEffect(() => {
    // making copy of original data
    const searchResults = initialArray.filter((elem) => elem.name.toLowerCase().includes(input));
    const categBreakfast = searchResults.filter((elem) => elem.category === 'Breakfast');
    setFilteredArrayBreakfast(() => categBreakfast);

    const categLunch = searchResults.filter((elem) => elem.category === 'Lunch');
    setFilteredArrayLunch(() => categLunch);

    const categPizza = searchResults.filter((elem) => elem.category === 'Pizza');
    setFilteredArrayPizza(() => categPizza);

    const categDinner = searchResults.filter((elem) => elem.category === 'Dinner');
    setFilteredArrayDinner(() => categDinner);

    const categDessert = searchResults.filter((elem) => elem.category === 'Dessert');
    setFilteredArrayDessert(() => categDessert);

    const categColdDrinks = searchResults.filter((elem) => elem.category === 'Cold drinks');
    setFilteredArrayColdDrinks(() => categColdDrinks);

    setFilteredArray(() => searchResults);
  }, [input]);

  function plusDish(element) {
    const elementName = element.target.parentElement.parentElement.firstElementChild.innerHTML;

    setCounter((prev) => {
      const newObj = prev.map((elem) => {
        let newCount = elem.counter;
        if (elem.name === elementName) {
          newCount += 1;
        }

        return { ...elem, counter: newCount };
      });
      return newObj;
    });
    setShowReserve(() => true);
  }

  function minusDish(element) {
    const elementName = element.target.parentElement.parentElement.firstElementChild.innerHTML;
    let checkShowReserve = false;
    setCounter((prev) => {
      const newObj = prev.map((elem) => {
        let newCount = elem.counter;
        if (elem.name === elementName && newCount > 0) {
          newCount -= 1;
        }
        if (newCount !== 0) {
          checkShowReserve = true;
        }
        return { ...elem, counter: newCount };
      });
      return newObj;
    });

    setShowReserve(() => checkShowReserve);
  }

  function printCountPlus(prevEl) {
    let number = 0;

    const newCount = counter;
    newCount.forEach((elem) => {
      if (elem.id === prevEl.id) {
        number = elem.counter;
      }
    });
    return number;
  }

  function showPicture(elem) {
    if (showImage.status === false) {
      setShowImage(() => ({ status: true, adress: elem.target.attributes.src }));
    }
  }

  function nextImg() {
    setCurrentImage((prev) => {
      let prevNew;
      if (prev > 0 && prev !== 3) {
        prevNew = prev + 1;
      } else if (prev === 3) {
        prevNew = 3;
      }
      return prevNew;
    });
  }

  function prevImg() {
    setCurrentImage((prev) => {
      let prevNew;
      if (prev > 1 || prev === 3) {
        prevNew = prev - 1;
      } else {
        prevNew = prev;
      }
      return prevNew;
    });
  }

  function showLeftArrow() {
    return (
      <FontAwesomeIcon icon={faAngleLeft} className="fotoAngle fotoAngleLeft" onClick={() => prevImg()} />
    );
  }

  function showRightArrow() {
    return (
      <FontAwesomeIcon icon={faAngleRight} className="fotoAngle fotoAngleRight" onClick={() => nextImg()} />
    );
  }

  function pictureElement() {
    return (
      <div className="showedFoto">
        <div className="showedFotoContainer">
          {currentImage !== 1 ? showLeftArrow() : null }
          <img className="showedFoto" src={`${process.env.PUBLIC_URL}/images/fotos/${JPEGcode}.jpg`} alt="Dish" />
          {currentImage !== 3 ? showRightArrow() : null }
        </div>
      </div>
    );
  }

  function showReserveWindow() {
    setShowReserveWindowToggler((prev) => true);
  }

  function printReserveBtn() {
    return (
      <div className="inputFieldReserveBtn" onClick={(elem) => showReserveWindow()}>Reserve!</div>
    );
  }

  function closeReserveWindow(elem) {
    if (elem.target.classList.contains('xMarkReservation')) {
      setShowReserveWindowToggler(() => false);
    } else if (elem.target.classList.contains('reservBtnOk')) {
      setShowReserveWindowToggler(() => false);
    }
    if (
      !elem.target.classList.contains('showedFoto') &&
      !elem.target.classList.contains('fotoAngle') &&
      showImage.status === true
    ) {
      setShowImage(() => ({ status: false, adress: '' }));
    }
  }

  useEffect(() => {
    if (
      filteredArrayLunch.length === 0 &&
      filteredArrayPizza.length === 0 &&
      filteredArrayDinner.length === 0 &&
      filteredArrayDessert.length === 0 &&
      filteredArrayColdDrinks.length === 0 &&
      filteredArrayBreakfast.length === 0
    ) {
      setShowWarning(() => true);
    } else {
      setShowWarning(() => false);
    }
  },[filteredArrayBreakfast, filteredArrayLunch, filteredArrayPizza, filteredArrayDinner, filteredArrayDessert, filteredArrayColdDrinks]);

  return (
    <div className="componentFirst" onClick={(elem) => closeReserveWindow(elem)}>
      {showReserveWindowToggler ? <Reservation className="reservationTable" data2={counter} /> : null}
      {showImage.status ? pictureElement() : null }
      <div className="inputField">
        <input type="text" className="firstInput" id="dishesInput" onChange={(element) => filterArray(element)} />
        {showReserve ? printReserveBtn() : null }
      </div>
      {/* all Breakfasts */}
      {showWarning ? <h1 className="warningForInput">Nothing is found!</h1> : null }
      {filteredArrayBreakfast.length !== 0 ? <h1 className="categoryTitle">Breakfast</h1> : null }
      <div className="allDishes">

        {filteredArrayBreakfast.map((prev) => (
          <div className="dishFormMain" key={uniqid()}>
            <div key={prev.id} className="dishForm">
              <div key={prev.id} className="dishName">{prev.name}</div>
              <h6 className="dishDescription">{prev.description}</h6>
              <div className="dishBtnForm">
                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                <div className="dishFormCount">{printCountPlus(prev)}</div>
                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
              </div>
              <div className="dishPrice">
                {prev.price}
                {' '}
                <span>$</span>
              </div>
            </div>
            <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={(elem) => showPicture(elem)} />
          </div>
        ))}
      </div>

      {/* all Lunchs */}

      {filteredArrayLunch.length !== 0 ? <h1 className="categoryTitle">Lunch</h1> : null }
      <div className="allDishes">

        {filteredArrayLunch.map((prev) => (
          <div className="dishFormMain" key={uniqid()}>
            <div key={prev.id} className="dishForm">
              <div key={prev.id} className="dishName">{prev.name}</div>
              <h6 className="dishDescription">{prev.description}</h6>
              <div className="dishBtnForm">
                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                <div className="dishFormCount">{printCountPlus(prev)}</div>
                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
              </div>
              <div className="dishPrice">
                {prev.price}
                {' '}
                <span>$</span>
              </div>
            </div>
            <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={(elem) => showPicture(elem)} />
          </div>
        ))}
      </div>

      {/* all Pizzas */}

      {filteredArrayDinner.length !== 0 ? <h1 className="categoryTitle">Dinner</h1> : null }
      <div className="allDishes">

        {filteredArrayDinner.map((prev) => (
          <div className="dishFormMain" key={uniqid()}>
            <div key={prev.id} className="dishForm">
              <div key={prev.id} className="dishName">{prev.name}</div>
              <h6 className="dishDescription">{prev.description}</h6>
              <div className="dishBtnForm">
                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                <div className="dishFormCount">{printCountPlus(prev)}</div>
                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
              </div>
              <div className="dishPrice">
                {prev.price}
                {' '}
                <span>$</span>
              </div>
            </div>
            <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={(elem) => showPicture(elem)} />
          </div>
        ))}
      </div>

      {/* all Dinners */}

      {filteredArrayPizza.length !== 0 ? <h1 className="categoryTitle">Pizza</h1> : null }
      <div className="allDishes">

        {filteredArrayPizza.map((prev) => (
          <div className="dishFormMain" key={uniqid()}>
            <div key={prev.id} className="dishForm">
              <div key={prev.id} className="dishName">{prev.name}</div>
              <h6 className="dishDescription">{prev.description}</h6>
              <div className="dishBtnForm">
                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                <div className="dishFormCount">{printCountPlus(prev)}</div>
                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
              </div>
              <div className="dishPrice">
                {prev.price}
                {' '}
                <span>$</span>
              </div>
            </div>
            <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={(elem) => showPicture(elem)} />
          </div>
        ))}
      </div>

      {/* all Desserts */}

      {filteredArrayDessert.length !== 0 ? <h1 className="categoryTitle">Desserts</h1> : null }
      <div className="allDishes">

        {filteredArrayDessert.map((prev) => (
          <div className="dishFormMain" key={uniqid()}>
            <div key={prev.id} className="dishForm">
              <div key={prev.id} className="dishName">{prev.name}</div>
              <h6 className="dishDescription">{prev.description}</h6>
              <div className="dishBtnForm">
                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                <div className="dishFormCount">{printCountPlus(prev)}</div>
                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
              </div>
              <div className="dishPrice">
                {prev.price}
                {' '}
                <span>$</span>
              </div>
            </div>
            <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={(elem) => showPicture(elem)} />
          </div>
        ))}
      </div>

      {/* all ColdDrinkss */}

      {filteredArrayColdDrinks.length !== 0 ? <h1 className="categoryTitle">Cold Drinks</h1> : null }
      <div className="allDishes">

        {filteredArrayColdDrinks.map((prev) => (
          <div className="dishFormMain" key={uniqid()}>
            <div key={prev.id} className="dishForm">
              <div key={prev.id} className="dishName">{prev.name}</div>
              <h6 className="dishDescription">{prev.description}</h6>
              <div className="dishBtnForm">
                <div className="dishBtnMinus dishBtn" onClick={(element) => minusDish(element)}>-</div>
                <div className="dishFormCount">{printCountPlus(prev)}</div>
                <div className="dishBtnPlus dishBtn" onClick={(element) => plusDish(element)}>+</div>
              </div>
              <div className="dishPrice">
                {prev.price}
                {' '}
                <span>$</span>
              </div>
            </div>
            <img className="dishImg" src={`${require(`../../../../public/images/fotos/${prev.id}.1.jpg`)}`} alt="Dish" onClick={(elem) => showPicture(elem)} />
          </div>
        ))}
      </div>
      {showReserve ? <Outlet /> : null}
    </div>
  );
}
