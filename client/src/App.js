import LoadingScreen from './pages/components/LoadingScreen/LoadingScreen'
import {Route, Switch, withRouter} from 'react-router-dom'
import StarshipPage from './pages/StarshipPage.js'
import React, { useState, useEffect } from 'react'
import ApiClient from './Services/ApiClient'
import HomePage from './pages/HomePage'


const App = (props) => {

    const [loadingScreenMounted, setLoadingScreenMounted] = useState(false)
    const [starships, setStarships] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)


    const getShips = async (endpoint, appIsMounted) => {
        if (appIsMounted) {
            const response = await ApiClient.get(endpoint)
            return response.data.results
        }
    }


    const getAllShips = async (appIsMounted) => {
        let endpoints = ["/", "/?page=2", "/?page=3", "/?page=4"]
        try {
            const [ships1, ships2, ships3, ships4] = await Promise.all(
                endpoints.map(endpoint => 
                    getShips(endpoint, appIsMounted)
                )
            )
            setStarships([ ...ships1, ...ships2, ...ships3, ...ships4 ])
            setTimeout(() => {
                setLoaded(true)
                document.body.classList.add("loaded")
            }, 1500)
        } catch (error) {
            console.log({error})
            setLoaded(true)
            setError(true)
        }
    }


    useEffect(() => {
        let appIsMounted = true
        if (loadingScreenMounted && appIsMounted) {
            getAllShips(appIsMounted)
        }
        return () => appIsMounted = false
    }, [loaded, loadingScreenMounted]) 


    const propsApp = { className: "app" }
    
    const propsHome = {
        starships, 
        ...props,
        loaded,
    }

    const propsLoadingScreen = {
        setLoadingScreenMounted,
        loadingScreenMounted
    }


    return ( 
        
        !loaded ? <LoadingScreen {...propsLoadingScreen} /> :
            error ? <LoadingScreen error /> :
            <div {...propsApp} >
                <Switch>
                    <Route exact path="/">
                        <HomePage {...propsHome} />
                    </Route> 
                    <Route path='/starships'>
                        <StarshipPage {...props} /> 
                    </Route> 
                </Switch>
            </div>
    )
}

export default withRouter(App)