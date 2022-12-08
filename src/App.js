/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavRoute from './Components/routes/nav/nav.component';
import FirstRoute from './Components/routes/nav/main/first.component';
import ThirdRoute from './Components/routes/nav/main/third.component';
import ReservationRoute from './Components/routes/nav/main/reservation.component';

import AboutRoute from './Components/routes/nav/main/default.component';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<NavRoute />}>
          <Route path="about" element={<AboutRoute />} />
          <Route path="dishes" element={<FirstRoute />}>
            <Route path="reservation" element={<ReservationRoute />}>
              <Route path="firstStep" />
            </Route>
          </Route>
          <Route path="contacts" element={<ThirdRoute />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
