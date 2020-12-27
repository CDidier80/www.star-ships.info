import React from 'react'
import imageUrls from '../imageUrls';
import { NavLink } from 'react-router-dom';
import "../styles/STARWARS/starwarsfont.css"
import backgroundImages from "../imageUrls"

function StarshipPage (props) {

  const randomIndex = Math.floor(Math.random() * backgroundImages.length)
  const { state } = props.history.location
  const {name, manufacturer, cost_in_credits, length, crew, passengers, starship_class } = state.starship
  const { imageNum } = state
  const cost = cost_in_credits.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  
  const infoArray = [
    ["Starship Class", starship_class], 
    ["Crew Size", crew], 
    ["Passenger Capacity", passengers], 
    ["Production Cost (credits)", cost], 
    ["Manufacturer", manufacturer], 
    ["Longest Dimension (m)", length]
  ]

  const divMultiplier = name.length * 24
  // const { innerWidth } = window 
  // const iwi = String(innerWidth)

  // let result = innerWidth < 1000 ? "4.5vw" : "20px"
  // console.log(typeof iwi)

  let starshipStyles = {

    appContentWrapper: {
      margin: "0 auto",
      width: "100%",
      minHeight: "100vh",
      overflowX: "hidden",
      overflowY: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative"
    },

    pageBackgroundImg : {
      position: "absolute",
      minWidth: "100vw", 
      minHeight: "100vh",
      zIndex: "-100",
      left: "0",
      right: "0",
      bottom: "0",
      top: "0",
      overflowX: "hidden", 
      overflowY: "visible", 
      backgroundImage: `url(${backgroundImages[randomIndex]})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },

    picture: {
      margin: "0 auto",
      minHeight: "400px",
      minWidth: "265px",
      maxHeight: "600px",
      width: "78%",
      maxWidth: "1100px",
      marginTop: "2vh",
      marginBottom: "2vh",
      boxShadow: "0px 0px 15px white",
      backgroundImage: `${imageUrls[props.history.location.state.imageNum]}`,
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: "1px white solid",
      borderRadius: "5px"
    }, 

    shipName: {
      margin: "0 auto",
      maxWidth: `${divMultiplier}px`,
      textAlign: "center",
      display: "block", 
      marginTop: "40px",
      marginBottom: "20px",
      color: "black",
      fontSize: "60px", 
      fontFamily: 'Bebas Neue',
      borderRadius: "4px", 
      "padding": "10px", 
      textShadow: "0 0 10px white, 0 0 20px #faffa3, 0 0 30px #f9ff8f, 0 0 40px #f9ff80, 0 0 50px #f8ff6b, 0 0 60px #f7ff61, 0 0 70px #f6ff4d"
    },


  }

  return (
    <div style={starshipStyles.pageBackgroundImg}>
      <main className="appContentWrapper" style={starshipStyles.appContentWrapper}>
        <NavLink className="returnLink" style={starshipStyles.returnLink} to="/">Return</NavLink>
        <div className="shipName" style={starshipStyles.shipName}>{name}</div>
        <div style={starshipStyles.picture}></div>
        <div className="detailWrapper">
          {infoArray.map((element, index) => (        
              <div key={index} className="textWrapper" style={starshipStyles.textWrapper}>
                <h3 className='shipDetail'>{element[0]}</h3>
                <p className="dataPoint">{element[1]}</p>
              </div>
              )) 
          }
        </div>
      </main>
    </div>

  )
}

export default StarshipPage;



