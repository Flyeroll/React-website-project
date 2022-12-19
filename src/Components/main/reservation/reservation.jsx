import React, { useEffect, useState, createContext } from 'react';
import './style.css';

import { faLineChart, faXmark } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FirstPage from './1_page_info/1_page_info';
import SecondPage from './2_page_client_info/2_page_client_info';
import ThirdPage from './3_page_time_table/3_page_time_table';

import { ThemeContext } from './Context';

export const showWindow = createContext();

export default function Reservation(props) {
  const [statusLine, setStatusLine] = useState(1);
  const [secondPageValidator, setSecondPageValidator] = useState(false);
  const [secondPageDataAndTime, setSecondPageDataAndTime] = useState('clear');

  useEffect(() => {
    if (statusLine === 1) {
      moveToFirstStep();
    } else if (statusLine === 2) {
      moveToSecondStep();
    } else if (statusLine === 3) {
      moveToThirdStep();
    }
  }, [statusLine]);

  function changeStatus(btn) {
    if (statusLine === 1) {
      setStatusLine(() => 2);
    } else if (statusLine === 2 & btn.target.classList.contains('reservBtnForward')) {
      setStatusLine(() => 3);
    } else if (statusLine === 2 & btn.target.classList.contains('reservBtnBack')) {
      setStatusLine(() => 1);
    } else if (statusLine === 3) {
      setStatusLine(() => 2);
      const thirdBtn = document.querySelector('.reserveThirdBall');
      setTimeout(() => {
        thirdBtn.classList.remove('black');
      }, 200);
    }
  }

  function moveToFirstStep() {
    const secondBtn = document.querySelector('.reserveSecondBall');
    const reserveLineBlack = document.getElementById('reserveLineBlack');
    reserveLineBlack.style = 'width:0px;';
    secondBtn.classList.remove('black');
  }
  function moveToSecondStep() {
    const secondBtn = document.querySelector('.reserveSecondBall');
    const reserveLineBlack = document.getElementById('reserveLineBlack');
    const currentWindowWidth = window.innerWidth;
    if (currentWindowWidth < 400) {
      reserveLineBlack.style = 'width:80px;';
    } else {
      reserveLineBlack.style = 'width:160px;';
    }
    setTimeout(() => {
      secondBtn.classList.add('black');
    }, 550);
  }
  function moveToThirdStep() {
    const thirdBtn = document.querySelector('.reserveThirdBall');
    const reserveLineBlack = document.getElementById('reserveLineBlack');
    const currentWindowWidth = window.innerWidth;
    if (currentWindowWidth < 400) {
      reserveLineBlack.style = 'width:145px;';
    } else {
      reserveLineBlack.style = 'width:310px;';
    }
    setTimeout(() => {
      thirdBtn.classList.add('black');
    }, 475);
  }

  function getValidatorFromSecondPage(secondPageValidator) {
    if (secondPageValidator === false) {
      setSecondPageValidator(() => false);
    } else {
      setSecondPageValidator(() => true);
    }
  }
  function changeSecondPageStatus(value) {
    setSecondPageValidator(() => value);
  }

  function checkIt() {

  }

  function recieveDateAndTimeFromDatePicker(date) {
    setSecondPageDataAndTime(() => (date));
  }

  return (
    <ThemeContext.Provider value={false}>
      <div className="mainDiv">
        <div className="reserveMainWindow">
          <FontAwesomeIcon icon={faXmark} className="xMarkNav xMarkReservation" />
          {statusLine === 1 ? <FirstPage data3={props.data2} /> : null}
          {statusLine === 2 ? <SecondPage dataForParent={changeSecondPageStatus} timeAndDate={recieveDateAndTimeFromDatePicker} /> : null}
          {statusLine === 3 ? <ThirdPage dataFirdPage={secondPageDataAndTime} /> : null}

          <div className="reserveBtnSection">
            {/* 1 page */}
            {statusLine === 1 ? <div className="reserveBtn reservBtnForward" onClick={(btn) => changeStatus(btn)}>continue</div> : null}

            {/* 2 page */}
            {statusLine === 2 ? <div className="reserveBtn reservBtnBack" onClick={(btn) => changeStatus(btn)}>back</div> : null}
            {statusLine === 2 ? <div className={(!secondPageValidator ? 'reserveBtn reservBtnForward reservBtnForwardLocked' : 'reserveBtn reservBtnForward')} onClick={(btn) => changeStatus(btn)}>continue</div> : null}
            {/* 3 page */}
            {statusLine === 3 ? <div className="reserveBtn reservBtnOk" onClick={(elem) => checkIt(elem)}>Ok !</div> : null}

          </div>
          <div className="reserveShape">
            <div className="reserveLine">
              <div className="reserveLineBlack" id="reserveLineBlack" />
              <div className="reserveFirstBall reserveBall" />
              <div className="reserveSecondBall reserveBall" />
              <div className="reserveThirdBall reserveBall" />
            </div>
          </div>

        </div>
      </div>
    </ThemeContext.Provider>
  );
}
