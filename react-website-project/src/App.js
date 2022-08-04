import React, { Component } from 'react';
import './App.css';
import NavRoute from "./Components/routes/nav/nav.component"
import FirstRoute from "./Components/routes/nav/main/first.component"

import { Route, Routes} from "react-router-dom"

import DefaultRoute from "../src/Components/routes/nav/main/default.component"
class App extends Component {
  render() {
    return (
      <Routes>
          <Route path='/' element={<NavRoute />}>
            <Route path='default' element={<DefaultRoute/>}></Route>
            <Route path='first' element={<FirstRoute/>}></Route>
          </Route>
      </Routes>
    );
  }
}

export default App;
