// See notes on App.js in React-Router context, <Switch> and <Route> below 

import React, { Component, useState, useEffect } from 'react'
import {Route, Switch} from 'react-router-dom'
import './styles/App.css';
import HomePage from './pages/HomePage'
import StarshipPage from './pages/StarshipPage.js'


// let appStyles = {
//   video: {
//     width: "500px",
//     "zIndex": "100"
//   }
// }


function App(props) {
  return (
    <div className="app">
      <Switch>
        <Route exact path={"/"}    component={(props) => <HomePage     {...props} />} />
        <Route path={'/starships'} component={(props) => <StarshipPage {...props} />} />
      </Switch>
    </div>
  )
}

export default App
