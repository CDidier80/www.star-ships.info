import React, { Component, useState, useEffect } from 'react'
import "../styles/STARWARS/starwarsfont.css"
import imageUrls from '../imageUrls';
import ApiClient from '../Services/ApiClient'
import video from "../starwarsmontage.mp4"

let homeStyles = {
  homepageWrapper: {
    overflowX: "hidden",
    overflowY: "hidden",
    backgroundColor: "black"
  },

  loadingWrapper: {
    top: "0", 
    left: "0",
    width: "100vw", 
    height: "100vh",
    backgroundColor: "black",
  },

  loading: {
    color: "black",
    fontSize: "70px",
    position: "absolute", 
    fontFamily: 'Bebas Neue',
    left: "50%", 
    top: "50%", 
    transform: "translate(-50%, -50%)", 
    textShadow: "0 0 10px white, 0 0 20px #faffa3, 0 0 30px #f9ff8f, 0 0 40px #f9ff80, 0 0 50px #f8ff6b, 0 0 60px #f7ff61, 0 0 70px #f6ff4d",
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
    color: "yellow", 
    paddingTop: "10px", 
  },

  shipGrid: {
    position: "relative",
    "top": "28px",
    "display": "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    "gridGap": "1.8rem",
    width: "90%",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,.5)",
    padding: "10px"
  },

  shipSquares: {
    position: "relative",
    width: "150px",
    height: "150px",
    "backgroundColor": 'green',
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
    color: "white",
    backgroundColor: "rgba(0,0,0,.3)",
    "textDecoration": "none",
    fontSize: "16px",
    display: "block",
    width: "100%",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    margin: "0 auto"
  },

  video: {
    height: "75vh",
    position: 'fixed',
    top: "130px", 
    opacity: "1",
    filter: "grayscale(20%)",
  },

}


const Home = (props) => {

  const [starships, updateStarships] = useState([])
  const [pageIsLoaded, changeLoadedBoolean] = useState(false)

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
      console.log(combinedShipArray)
      updateStarships(combinedShipArray)
      if (!pageIsLoaded) {
        changeLoadedBoolean(true)
      }
    }
    getShips()
    console.log(pageIsLoaded)

  }, [pageIsLoaded]) 


  const starshipClick = (propsToPass) => {
    console.log(propsToPass)
    props.history.push("/starships", propsToPass)
  }

  
  if(pageIsLoaded) {
    return(

    <div className="homepageWrapper" style={homeStyles.homepageWrapper}>
      <div className="navBar" style={homeStyles.navBar}>
        <h1 className="title" style={homeStyles.title}>STAR SHIPS</h1>
      </div>
      <video style={homeStyles.video} autoPlay loop muted src={video} type="video/mp4"> Your browser does not support the video tag.</video>
      <div style={homeStyles.shipGrid}> 
          {starships.map((starship, index) => { 
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
      <div style={homeStyles.loadingWrapper}>
        <div style={homeStyles.loading}>Loading...</div>
      </div>
    )
  }




}


  export default Home
