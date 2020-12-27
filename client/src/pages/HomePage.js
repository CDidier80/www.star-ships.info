import React from 'react'
import video from "../starwarsmontage.mp4"
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import "../styles/STARWARS/starwarsfont.css"
import ShipGrid from './components/ShipGrid';

const HomePage = (props) => {

  
    return (!props.pageIsLoaded ? <LoadingScreen /> : 
        <div>
          <video className="video" autoPlay loop muted src={video} type="video/mp4"> Your browser does not support the video tag.</video>
          <div className="titleBackground" >
            <h1 className="title">STAR SHIPS</h1>
            <p className="subtitle">Spacecraft of the Star Wars Saga</p>
          </div>
          <ShipGrid {...props} />
          <Footer />
        </div>
    )
}

  export default HomePage
