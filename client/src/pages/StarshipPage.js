import React, { Component, useState, useEffect } from 'react'
import "../styles/STARWARS/starwarsfont.css"
import imageUrls from '../imageUrls';
import { NavLink } from 'react-router-dom';


function StarshipPage (props) {
  console.log("props of Starship Page: ", props)
  const backgroundImages = [
    "https://wallpaperaccess.com/full/2137907.jpg", 
    "https://wallpaperaccess.com/full/1801913.jpg",
    "https://wallpaperaccess.com/full/1801954.jpg",
    "https://cdn.wallpapersafari.com/86/95/w4cHKy.jpg",
    "https://cutewallpaper.org/21/star-wars-space-wallpaper/ArtStation-Star-Wars-Batllefront-II-1920x1080-Wallpapers-.jpg"


]
  const randomIndex= Math.floor(Math.random() * backgroundImages.length)
  const {name, manufacturer, cost_in_credits, length, crew, passengers, starship_class} = props.history.location.state.starship
  const divMultiplier = name.length * 24

  let starshipStyles = {
    appContentWrapper: {
      margin: "0 auto",
      width: "100%",
      minHeight: "100vh",
      overflowX: "hidden",
      overflowY: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"

    },

    returnLink: {
      position: "absolute", 
      fontSize: "22px", 
      left: "22px", 
      top: "22px",
      color: "black",
      textShadow: "0 0 1px white, 0 0 2px #faffa3, 0 0 4px #f8ff6b",
      textDecoration: "none", 
      fontFamily: 'Bebas Neue',
    },

    picture: {
      margin: "0 auto",
      minHeight: "400px", 
      minWidth: "400px",
      maxHeight: "600px", 
      maxWidth: "600px",
      marginTop: "2vh",
      marginBottom: "2vh",
      boxShadow: "0px 0px 15px white",
      backgroundImage: `${imageUrls[props.history.location.state.imageNum]}`,
      backgroundSize: "cover", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: "1px white solid"
    }, 

    detailWrapper: {
      margin: "0 auto",
      width: "75%",
      backgroundColor: "rgba(0,0,0,.8)",
      padding: "13px",
      paddingTop: "4px",
      borderRadius: "5px", 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      "gridGap": "1.8rem",
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

    shipDetail: {
      color: "black",
      fontSize: "20px",
      alignText: "left",
      borderBottom: "1px yellow solid", 
      textShadow: "0 0 1px white, 0 0 2px #faffa3, 0 0 4px #f8ff6b"
    }, 
    
    dataPoint: {
      color: "white",
      fontSize: "16px",
      alignText: "left",
    }
  }
  const styleForWrapper = {...starshipStyles.appContentWrapper, backgroundImage: `url(${backgroundImages[randomIndex]})`}

  return (
    <main className="appContentWrapper" style={styleForWrapper}>
      <NavLink style={starshipStyles.returnLink} to="/">Return</NavLink>
      <div className="shipName" style={starshipStyles.shipName}>{name}</div>
      <div style={starshipStyles.picture}></div>

      <div style={starshipStyles.detailWrapper}>
        <div className="textWrapper" style={starshipStyles.textWrapper}>
          <h3 style={starshipStyles.shipDetail}>Starship Class</h3>
          <p style={starshipStyles.dataPoint}>{starship_class}</p>
        </div>
        <div className="textWrapper" style={starshipStyles.textWrapper}>
          <h3 style={starshipStyles.shipDetail}>Crew Size</h3>         
          <p style={starshipStyles.dataPoint}>{crew}</p>
        </div>
        <div className="textWrapper" style={starshipStyles.textWrapper}>
          <h3 style={starshipStyles.shipDetail}>Passenger Capacity</h3>         
          <p style={starshipStyles.dataPoint}>{passengers}</p>
        </div>
        <div className="textWrapper" style={starshipStyles.textWrapper}>
          <h3 style={starshipStyles.shipDetail}>Production Cost</h3>          
          <p style={starshipStyles.dataPoint}>{cost_in_credits}</p>
        </div>
        <div className="textWrapper" style={starshipStyles.textWrapper}>
          <h3 style={starshipStyles.shipDetail}>Manufacturer</h3>        
          <p style={starshipStyles.dataPoint}>{manufacturer}</p>
        </div>
        <div className="textWrapper" style={starshipStyles.textWrapper}>
          <h3 style={starshipStyles.shipDetail}>Longest Dimension</h3>        
          <p style={starshipStyles.dataPoint}>{length}</p>
        </div>
      </div>

  
    </main>
  )
}

export default StarshipPage;



