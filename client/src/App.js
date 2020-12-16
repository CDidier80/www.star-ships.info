import React, { Component, useState, useEffect } from 'react'
import {Route, Switch} from 'react-router-dom'
import './styles/App.css';
import HomePage from './pages/HomePage'
import StarshipPage from './pages/StarshipPage.js'

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
