import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter } from "react-router-dom"



import DateWindow from "./Components/main/reservation/date_component/date"



ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <DateWindow />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
