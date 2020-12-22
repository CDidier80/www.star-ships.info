import React, { useState, useEffect } from 'react'
import "../styles/STARWARS/starwarsfont.css"
import imageUrls from '../imageUrls';
import video from "../starwarsmontage.mp4"
import falcon from "../styles/falconBlurred.png"
import { InView } from 'react-intersection-observer';
console.log(falcon)
const { innerHeight, innerWidth } = window 
let hyperspaceDimension = innerHeight > innerWidth ? innerHeight : innerWidth
let halfHSD = hyperspaceDimension / 2
let leftAdjustment = innerWidth / 2 * -1
let topAdjustment = innerHeight / 2 * -1


let loadingStyles = {

  loadingTextWrapper: {
    position: "absolute", 
    zIndex: "100",
    left: "50%", 
    top: "50%", 
    width: "30vw",
    height: "10vw",

    animation: "pulse 12s linear infinite",
    WebkitAnimation: "pulse 12s linear infinite ease-in-out",

    backgroundImage: `url(${falcon})`,
    backgroundSize: "cover",
    
  },
  loading: {

    lineHeight: "10vw",
    zIndex: "100",
    color: "#B3FCFF",
    fontSize: `4vw`,
    fontFamily: 'Bebas Neue',
    textAlign: "center",
    fontDisplay: "fallback",
    textShadow: "0 0 5px rgba(202,228,225,0.92), 0 0 11px rgba(30,132,242,0.52), 0 0 19px rgba(30,132,242,0.92), 0 0 31px rgba(30,132,242,0.78), 0 0 51px rgba(30,132,242,0.92)",
  },

  wrap: {
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
  const [inView, setInview] = useState(false)

    const starshipClick = (propsToPass) => {
    console.log(propsToPass)
    props.history.push("/starships", propsToPass)
  }

  if(props.pageIsLoaded) {
    return (

    <div className="">
      <video className="video" autoPlay loop muted src={video} type="video/mp4"> Your browser does not support the video tag.</video>
      <div className="titleBackground" >
        <h1 className="title">STAR SHIPS</h1>
        <p className="subtitle">Spacecraft of the Star Wars Saga</p>
      </div>
      <div className="shipGrid"> 
          { props.starships &&
          props.starships.map((starship, index) => { 
            let propsToPass = {
              imageNum: index,
              starship: starship
            }
            return (
              <div key={`index${index}`} style={{backgroundImage: `${imageUrls[index]}`}} className="grow shipSquares" onClick={() => starshipClick(propsToPass)}>
                <h3 className="shipLink">{starship.name}</h3>
              </div>
            )
          })}
      </div>

      <InView as="div" onChange={setInview}>
        {inView && 
          <div  className="footer" style={inView? {display: "block"}: {display: "none"}}> 
            <h1 className="collinText">Created by <a className="nameLink" href="https://www.linkedin.com/in/collin-didier/">Collin Didier</a></h1>
            <p className="proTitle">Software Engineer | Full Stack Web Developer</p>
            <a className="apiCredit" href="https://swapi.dev/">Powered by SWAPI API</a>
            <a className="githubLink" href="https://github.com/CDidier80/react-ajax-swapi">View this site on Github</a>

          </div>
        }
      </InView>
    </div>
    
  )

} else {
    return (
      <div> 
        <div style={loadingStyles.loadingTextWrapper}>
          <div className="loadingText" style={loadingStyles.loading}>Loading</div>
        </div>
        
        <div className="homepageLoadingWrapper">
          <div className="scene">
            <div className="wrap" style={loadingStyles.wrap}>
                <div className="wall wall-right"  style={loadingStyles.wallRight}>  </div>
                <div className="wall wall-left"   style={loadingStyles.wallLeft}>   </div>   
                <div className="wall wall-top"    style={loadingStyles.wallTop}>    </div>
                <div className="wall wall-bottom" style={loadingStyles.wallBottom}> </div> 
                <div className="wall wall-back"   style={loadingStyles.wallBack}>   </div>    
            </div>
            <div className="wrap" style={loadingStyles.wrap}>
                <div className="wall wall-right"  style={loadingStyles.wallRight}>  </div>
                <div className="wall wall-left"   style={loadingStyles.wallLeft}>   </div>   
                <div className="wall wall-top"    style={loadingStyles.wallTop}>    </div>
                <div className="wall wall-bottom" style={loadingStyles.wallBottom}> </div>   
                <div className="wall wall-back"   style={loadingStyles.wallBack}>   </div>    
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  export default HomePage
