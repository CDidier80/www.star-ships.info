import React, { useState, useEffect } from 'react'
import {Route, Switch} from 'react-router-dom'
import ApiClient from './Services/ApiClient'
import './styles/Loading.css';
import HomePage from './pages/HomePage'
import StarshipPage from './pages/StarshipPage.js'

function App() {

  const [pageIsLoaded, changeLoadedBoolean] = useState(false)
  const [starships, loadStarships] = useState([])
  

  const loadedStyle = {
    minWidth: "650px",
    maxWidth: "1350px",
    backgroundColor: "black"
  }

  const loadingStyle = {
    minWidth: "650px",
    backgroundColor: "black"
  }

  useEffect(() => {
    console.log("useEffect reached")
    const getShips = async () => {
      const responsePage1 = await ApiClient.get("/")
      const responsePage2 = await ApiClient.get("/?page=2")
      const responsePage3 = await ApiClient.get("/?page=3")
      const responsePage4 = await ApiClient.get("/?page=4")
      const combinedShipArray = [...responsePage1.data.results, ...responsePage2.data.results,
        ...responsePage3.data.results, ...responsePage4.data.results
      ]
      console.log("combined ship array: ", combinedShipArray)
      loadStarships(combinedShipArray)
      if (!pageIsLoaded) {
        changeLoadedBoolean(true)
        document.body.classList.add("loaded")
      }
    }
    getShips()
    console.log(pageIsLoaded)
  }, []) 

  return (
    <div className="app" styles={pageIsLoaded ? loadedStyle : loadingStyle }>
      <Switch>
        <Route exact path={"/"} component={
          (props) => <HomePage {...props} starships={starships} pageIsLoaded={pageIsLoaded}/>} 
        />
        <Route path={'/starships'} component={
          (props) => <StarshipPage {...props} />} 
          />
      </Switch>
    </div>
  )
}

export default App
