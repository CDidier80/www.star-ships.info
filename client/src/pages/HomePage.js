import React, { useState, useEffect } from 'react'
import "../styles/STARWARS/starwarsfont.css"
import imageUrls from '../imageUrls';
import video from "../starwarsmontage.mp4"
import falcon from "../styles/falconBlurred.png"
console.log(falcon)
const { innerHeight, innerWidth } = window 
let hyperspaceDimension = innerHeight > innerWidth ? innerHeight : innerWidth
let halfHSD = hyperspaceDimension / 2
let leftAdjustment = innerWidth / 2 * -1
let topAdjustment = innerHeight / 2 * -1

let homeStyles = {
  homepageWrapper: {
    overflowX: "hidden",
    overflowY: "hidden",
    backgroundColor: "black",
  },

  loadingWrapper: {
    top: "0", 
    left: "0",
    width: "100vw", 
    height: "100vh",
    backgroundColor: "black",
    textAlign: "center",
    opacity: "1"
    
  },

  navBar: {
    textAlign: "center", 
    backgroundColor: "black", 
    width: '100%', 
    minHeight: "100px",
    margin: "0",
    fontSize: "45px",
    paddingTop: "13px",
    paddingBottom: "10px",
    boxShadow: "0 2px 2px yellow"
  },

  title: {
    margin: "0",
    paddingTop: "10px", 
    color: "yellow"
  },

  shipGrid: {
    position: "relative",
    margin: "auto",
    width: "90%",
    top: "28px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gridGap: "1.8rem",
    backgroundColor: "rgba(0,0,0,.5)",
    padding: "10px",
    marginBottom: "28px"
  },

  shipSquares: {
    position: "relative",
    width: "150px",
    height: "150px",
    padding: "4px",
    overflow: "hidden",
    textAlign: "center",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover",
    borderRadius: "10px",
    boxShadow: "0px 0px 9px white",
    opacity: "0.8"
  },

  Links: {
    display: "block",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    width: "100%",
    margin: "0 auto",
    fontSize: "16px",
    color: "white",
    backgroundColor: "rgba(0,0,0,.3)",
    textDecoration: "none",
  },

  video: {
    height: "75vh",
    maxWidth: "1350px",
    position: 'fixed',
    top: "130px", 
    opacity: "1",
    filter: "grayscale(20%)",
  },

}

let loadingStyles = {

  loadingTextWrapper: {
    position: "absolute", 
    zIndex: "100",
    left: "50%", 
    top: "50%", 
    width: "30vw",
    height: "10vw",
    transform: "translate(-50%, -50%)", 
    animation: "pulse 2s infinite",
    WebkitAnimation: "pulse 2s infinite",
    backgroundImage: `url(${falcon})`,
    backgroundSize: "cover",
    animation: "pulse 2s infinite",
    WebkitAnimation: "pulse 2s infinite",
    
  },
  loading: {
    // position: "absolute", 
    lineHeight: "10vw",
    zIndex: "100",
    color: "#B3FCFF",
    fontSize: `4vw`,
    fontFamily: 'Bebas Neue',
    textAlign: "center",
    textShadow: "0 0 5px rgba(202,228,225,0.92), 0 0 11px rgba(30,132,242,0.52), 0 0 19px rgba(30,132,242,0.92), 0 0 31px rgba(30,132,242,0.78), 0 0 51px rgba(30,132,242,0.92)",

  },

  wrap: {
    position: "absolute",
    width: hyperspaceDimension,
    height: hyperspaceDimension,
    left: leftAdjustment,
    top: topAdjustment
  },
  
  wallRight: {
    transform: `rotateY(90deg) translateZ(${halfHSD}px)`,
    WebkitTransform: `rotateY(90deg) translateZ(${halfHSD}px)`,
    MozTransform:`rotateY(90deg) translateZ(${halfHSD}px)`,
    MsTransform:`rotateY(90deg) translateZ(${halfHSD}px)`,
    OTransform:`rotateY(90deg) translateZ(${halfHSD}px)`,
  },

  wallLeft: {
    transform: `rotateY(-90deg) translateZ(${halfHSD}px)`,
    WebkitTransform: `rotateY(-90deg) translateZ(${halfHSD}px)`,
    MozTransform:`rotateY(-90deg) translateZ(${halfHSD}px)`,
    MsTransform:`rotateY(-90deg) translateZ(${halfHSD}px)`,
    OTransform:`rotateY(-90deg) translateZ(${halfHSD}px)`,
  },

  wallTop: {
    transform: `rotateX(90deg) translateZ(${halfHSD}px)`,
    WebkitTransform: `rotateX(90deg) translateZ(${halfHSD}px)`,
    MozTransform:`rotateX(90deg) translateZ(${halfHSD}px)`,
    MsTransform:`rotateX(90deg) translateZ(${halfHSD}px)`,
    OTransform:`rotateX(90deg) translateZ(${halfHSD}px)`,
  },

  wallBottom: {
    transform: `rotateX(-90deg) translateZ(${halfHSD}px)`,
    WebkitTransform: `rotateX(-90deg) translateZ(${halfHSD}px)`,
    MozTransform:`rotateX(-90deg) translateZ(${halfHSD}px)`,
    MsTransform:`rotateX(-90deg) translateZ(${halfHSD}px)`,
    OTransform:`rotateX(-90deg) translateZ(${halfHSD}px)`,
  },

  wallBack: {
    transform: `rotateX(180deg) translateZ(${halfHSD}px)`,
    WebkitTransform: `rotateX(180deg) translateZ(${halfHSD}px)`,
    MozTransform:`rotateX(180deg) translateZ(${halfHSD}px)`,
    MsTransform:`rotateX(180deg) translateZ(${halfHSD}px)`,
    OTransform:`rotateX(180deg) translateZ(${halfHSD}px)`,
  }
}

const HomePage = (props) => {

  const starshipClick = (propsToPass) => {
    console.log(propsToPass)
    props.history.push("/starships", propsToPass)
  }

  if(props.pageIsLoaded) {
    return (

    <div className="homepageWrapper" style={homeStyles.homepageWrapper}>
      <div className="navBar" style={homeStyles.navBar}>
        <h1 className="title" style={homeStyles.title}>STAR SHIPS</h1>
      </div>
      <video style={homeStyles.video} autoPlay loop muted src={video} type="video/mp4"> Your browser does not support the video tag.</video>
      <div style={homeStyles.shipGrid}> 
          { props.starships &&
          props.starships.map((starship, index) => { 
            let propsToPass = {
              imageNum: index,
              starship: starship
            }
            const styleForSquares = {...homeStyles.shipSquares, backgroundImage: `${imageUrls[index]}`}
            return (
              <div key={`index${index}`} style={styleForSquares} className="grow" onClick={() => starshipClick(propsToPass)}>
                <h3 className="shipLink" style={homeStyles.Links}>{starship.name}</h3>
              </div>
            )
          })}
      </div>
    </div>

  )

} else {
    return (
      <div> 
        <div style={loadingStyles.loadingTextWrapper}>
          <div className="loadingText" style={loadingStyles.loading}>Loading</div>
        </div>
        
        <div className="homepageWrapper" style={homeStyles.loadingWrapper}>
          <div className="scene">
            <div className="wrap" style={loadingStyles.wrap}>
                <div className="wall wall-right" style={loadingStyles.wallRight}></div>
                <div className="wall wall-left" style={loadingStyles.wallLeft}></div>   
                <div className="wall wall-top" style={loadingStyles.wallTop}></div>
                <div className="wall wall-bottom" style={loadingStyles.wallBottom}></div> 
                <div className="wall wall-back" style={loadingStyles.wallBack}></div>    
            </div>
            <div className="wrap" style={loadingStyles.wrap}>
                <div className="wall wall-right"   style={loadingStyles.wallRight}></div>
                <div className="wall wall-left"   style={loadingStyles.wallLeft}></div>   
                <div className="wall wall-top"    style={loadingStyles.wallTop}></div>
                <div className="wall wall-bottom" style={loadingStyles.wallBottom}></div>   
                <div className="wall wall-back"   style={loadingStyles.wallBack}></div>    
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  export default HomePage
