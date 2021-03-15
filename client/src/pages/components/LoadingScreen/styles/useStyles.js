import falcon from "../../../../public/falconBlurred.png"
import { createUseStyles } from "react-jss"
import "./falconAnimation.css"


export const useBlackScreen = createUseStyles({
    blackScreen: {
        top: 0, bottom: 0, right: 0, left: 0,
        backgroundColor: "black",
        position: "absolute",
        width: "100vw", 
        height: "100vh",
    }
})


export const useLoadingPageStyles = createUseStyles({
    loadingPage: {
        top: 0, bottom: 0, right: 0, left: 0,
        position: "absolute",
        width: "100vw", 
        height: "100vh",
    }
})


export const useFalconStyles = createUseStyles(({error}) => {

    const fadeIn = error ?
        { animation: "fade-in 1s ease-in-out forwards" } :
        {}

    return ({
        falcon: {
            top: "50%", 
            left: "50%", 
            width: "30vw",
            zIndex: "100",
            height: "10vw",
            position: "absolute", 
            backgroundSize: "cover",
            backgroundImage: `url(${falcon})`,
            animation: "fly 12s linear infinite",
        },
        loadingText: {
            ...fadeIn,
            zIndex: "100",
            fontSize: `4vw`,
            color: "#B3FCFF",
            lineHeight: "10vw",
            textAlign: "center",
            fontDisplay: "fallback",
            fontFamily: 'Bebas Neue',
            textShadow: `0 0 5px rgba(202,228,225,0.92), 
                        0 0 11px rgba(30,132,242,0.52), 
                        0 0 19px rgba(30,132,242,0.92), 
                        0 0 31px rgba(30,132,242,0.78), 
                        0 0 51px rgba(30,132,242,0.92)`,
        }
    })
})

