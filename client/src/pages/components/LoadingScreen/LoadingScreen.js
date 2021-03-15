import ErrorScreen from '../ErrorScreen/ErrorScreen'
import { useBlackScreen, useLoadingPageStyles } from "./styles/useStyles"
import React, { useEffect } from 'react'
import Falcon from "./Falcon"
import './styles/loading.css'
import Scene from "./Scene"


const LoadingScreen = (props) => { 

    const {
        setLoadingScreenMounted: setLoaded, 
        loadingScreenMounted: loaded,
        error,
    } = props

    useEffect(() => setLoaded(true), [])

    const { blackScreen } = useBlackScreen()
    const { loadingPage } = useLoadingPageStyles()
    
    return ( !loaded ? <div className={blackScreen} ></div> :
        <div className={loadingPage}> 
            <Falcon error={error} />
            <Scene />
            { error && <ErrorScreen /> }
        </div>
    )
}

export default LoadingScreen