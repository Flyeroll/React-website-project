import React, { Component } from 'react';
import './App.css';
import NavRoute from "./Components/routes/nav/nav.component"
import FirstRoute from "./Components/routes/nav/main/first.component"
import ThirdRoute from "./Components/routes/nav/main/third.component"
import ReservationRoute from "./Components/routes/nav/main/reservation.component"

import { Route, Routes} from "react-router-dom"

import AboutRoute from "../src/Components/routes/nav/main/default.component"
class App extends Component {
  render() {
    return (
      <Routes>
          <Route path='/' element={<NavRoute />}>
            <Route path='about' element={<AboutRoute/>}></Route>
            <Route path='dishes' element={<FirstRoute/>}>
              <Route path='reservation' element={<ReservationRoute/>}></Route>
            </Route>
            <Route path='contacts' element={<ThirdRoute/>}></Route>
            
          </Route>
      </Routes>
    );
  }
}

export default App;
