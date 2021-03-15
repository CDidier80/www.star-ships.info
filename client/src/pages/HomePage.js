import "../styles/STARWARS/starwarsfont.css"
import ShipGrid from './components/ShipGrid'
import video from "../starwarsmontage.mp4"
import Footer from './components/Footer'
import Header from './components/Header'
import React from 'react'

const HomePage = (props) => {

    const propsVideo = {
        className: "video", 
        type: "video/mp4",
        playsInline: true,
        autoPlay: true,
        muted: true,
        loop: true,
        src: video,
    }

    return (
        <div>
            <video {...propsVideo}> Your browser does not support the video tag.</video>
            <Header />
            <ShipGrid {...props} />
            <Footer />
        </div>
    )
}

export default HomePage
