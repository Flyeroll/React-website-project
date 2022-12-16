import React, { useEffect, useState } from 'react';
import './style.css';
import uniqid from 'uniqid';

export default function firstPageReserv(props) {
  const [usersList, setUsersList] = useState(props.data3);
  const [usersListDisplay, setUsersListDisplay] = useState(props.data3);
  const [orderSumm, setOrderSumm] = useState(400);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedDish, setSelectedDish] = useState('');
  const [btnPopUpStatus, setBtnPopUpStatus] = useState(true);

  useEffect(() => {
    const newArr = [];
    for (let i = 0; i < 36; i++) {
      if (usersList[i].counter !== 0) {
        newArr.push(usersList[i]);
      }
    }

    setUsersListDisplay(() => newArr);
  }, [usersList]);

  useEffect(() => {
    let orderSumm = 0;
    for (let i = 0; i < usersListDisplay.length; i++) {
      const currentDishSumm = usersListDisplay[i].counter * usersListDisplay[i].price;
      orderSumm += currentDishSumm;
    }
    setOrderSumm(() => orderSumm);
  }, [usersListDisplay]);

  //  MINUS DISH
  function minusDish(elem) {
    const nameOfDish = elem.target.parentElement.parentElement.childNodes[0].textContent;
    setUsersListDisplay((prev) => {
      const newArr = prev.map((dish) => {
        let newEl;
        if (dish.counter !== 0 & nameOfDish === dish.name) {
          newEl = dish.counter - 1;
          printPopUp(elem);
          setSelectedDish(() => `- ${dish.price}$`);
        } else if (dish.counter === 0 & nameOfDish === dish.name) {
          newEl = 0;
        } else {
          newEl = dish.counter;
        }
        return { ...dish, counter: newEl };
      });
      return newArr;
    });
  }

  function printPopUp(dish) {
    const plusOrMinus = dish.target.innerHTML;
    setShowPopUp((prev) => !prev);

    setTimeout(() => {
      const elToColorise = document.querySelector('.DishPriceColor');
      if (plusOrMinus === '+') {
        elToColorise.classList.add('greenDishPrice');
      } else if (plusOrMinus === '-') {
        elToColorise.classList.add('redDishPrice');
      }
    }, 0);

    setTimeout(() => {
      setShowPopUp((prev) => !prev);
    }, 200);
  }

  // PLUS DISH
  function plusDish(elem) {
    const nameOfDish = elem.target.parentElement.parentElement.childNodes[0].textContent;
    setUsersListDisplay((prev) => {
      const newArr = prev.map((dish) => {
        let newEl;
        if (dish.counter !== 0 & nameOfDish === dish.name) {
          newEl = dish.counter++;
          printPopUp(elem);
          setSelectedDish(() => `+ ${dish.price}$`);
        } else if (dish.counter === 0 & nameOfDish === dish.name) {
          newEl = dish.counter++;
          printPopUp(elem);
          setSelectedDish(() => `+ ${dish.price}$`);
        } else {
          newEl = dish.counter;
        }
        return { ...dish, counter: newEl };
      });
      return newArr;
    });
  }

  return (
    <div className="allComponent">
      <h2 className="allComponentTitleFirstPage">Your Order</h2>
      <div className="contactFormMain">
        <div className="contactForm">
          <div className="contactFormList">
            {usersListDisplay.map((elem) => (
              <div className="contactFormLine" key={uniqid()}>
                <div className="contactFormLineName">{elem.name}</div>
                <div className="contactFormLineAmountBox">
                  <div className="contactFormLinePlusMinus" onClick={!showPopUp ? (elem) => minusDish(elem) : null}>-</div>
                  <div className="contactFormLineAmount">{elem.counter}</div>
                  <div className="contactFormLinePlusMinus" onClick={!showPopUp ? (elem) => plusDish(elem) : null}>+</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contactFormSecond">
          <h3>Your Total Check</h3>
          <h5>
            {orderSumm}
            $
          </h5>
          {showPopUp ? <h4 className="DishPriceColor">{selectedDish}</h4> : null}
          <h3>If your Order is correct please proceed</h3>
        </div>

      </div>
    </div>
  );
}
