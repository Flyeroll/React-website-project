import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/nav-component/nav"

import { Route, Routes} from "react-router-dom"

import DefaultRoute from "../src/Components/routes/nav/main/default.component"
class App extends Component {
  render() {
    return (
      <Routes>
          <Route path='/' element={<Nav />}>
            <Route path='default' element={<DefaultRoute/>}></Route>
          </Route>
      </Routes>
    );
  }
}

export default App;
