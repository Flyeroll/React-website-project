import React, { useEffect, useState } from 'react';
import './style.css';

export default function thirdPageReserv(props) {
  const [dataFromPicker, setDataFromPicker] = useState(props.dataFirdPage);

  return (
    <div className="thirdPage">
      <h1>Thanks for reservation!</h1>
      <h3 onClick={() => { console.log(dataFromPicker); }}>
        We are waiting for you
        {' '}
        {`${dataFromPicker.day}.${dataFromPicker.month + 1}.${dataFromPicker.year} in ${dataFromPicker.time}`}
      </h3>
    </div>
  );
}
