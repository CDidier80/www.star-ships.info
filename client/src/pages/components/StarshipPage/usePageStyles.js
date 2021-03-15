import { createUseStyles } from "react-jss"
import { backgroundImages, imageUrls } from '../../../imageUrls'

const randomIndex = Math.floor(Math.random() * backgroundImages.length)


export const useStarshipPageStyles = createUseStyles(props => {
    return({
        appContentWrapper: {
            width: "100%",
            margin: "0 auto",
            minHeight: "100vh",
            overflowX: "hidden",
            overflowY: "hidden",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
    
        pageBackgroundImg : {
            zIndex: "-100",
            minWidth: "100vw", 
            minHeight: "100vh",
            overflowX: "hidden", 
            position: "absolute",
            overflowY: "visible", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            left: "0", right: "0", bottom: "0", top: "0",
            backgroundImage: `url(${backgroundImages[randomIndex]})`,
        },

        returnLink: {
            top: "22px",
            left: "22px",
            color: "black",
            zIndex: 1000,
            fontSize: "25px",
            position: "absolute",
            textDecoration: "none",
            fontFamily: "Bebas Neue",
            transition: "all .3s",
            textShadow:` 
                0 0 1px white, 
                0 0 2px #faffa3, 
                0 0 4px #f8ff6b`,
            "&:hover": {
                textShadow:` 
                    0 0 1px rgb(182, 234, 255), 
                    0 0 2px #a5fcff, 
                    0 0 5px #7effff`,
                transform: "scale(1.1)",
            },
        },

        "@media (max-width: 850px)": {
            returnLink: {
                fontSize: "3vw"
            }
        },

        "@media (max-width: 500px)": {
            returnLink: {
                fontSize: "14px",
                left: "12px",
                top: "12px",
            }
        }
    })
})


export const useShipStyles = ({name, imageNum}) => {

    const divMultiplier = name.length * 24
    return (createUseStyles({
        shipName: {
            color: "black",
            padding: "10px", 
            fontSize: "60px", 
            display: "block", 
            margin: "0 auto",
            marginTop: "40px",
            borderRadius: "4px", 
            textAlign: "center",
            marginBottom: "20px",
            MozBorderRadius: "4px",
            fontFamily: 'Bebas Neue',
            WebkitBorderRadius: "4px",
            maxWidth: `${divMultiplier}px`,
            textShadow: `0 0 10px white, 
                        0 0 20px #faffa3, 
                        0 0 30px #f9ff8f, 
                        0 0 40px #f9ff80, 
                        0 0 50px #f8ff6b, 
                        0 0 60px #f7ff61, 
                        0 0 70px #f6ff4d`
        },
        picture: {
            width: "78%",
            margin: "0 auto",
            marginTop: "2vh",
            minHeight: "400px",
            maxWidth: "1100px",
            minWidth: "265px",
            maxHeight: "600px",
            marginBottom: "2vh",
            borderRadius: "5px",
            MozBorderRadius: "5px",
            backgroundSize: "cover", 
            border: "1px white solid",
            WebkitBorderRadius: "5px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0px 0px 15px white",
            WebkitBoxShadow: "0px 0px 15px white",
            backgroundImage: `${imageUrls[imageNum]}`,
        }, 
    }))()
}



export const useShipDetailsStyles = createUseStyles(props => {
    return({
        detailWrapper: {
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            backgroundColor: "rgba(0,0,0,.8)",
            boxShadow: "0px 0px 15px white",
            margin: "0 auto 60px auto",
            borderRadius: "5px",
            display: "-ms-grid",
            gridGap: "1.8rem",
            maxWidth: "1100px",
            minWidth: "245px",
            display: "grid",
            padding: "13px",
            width: "75%",
        },
        textWrapper: {
        },
        shipDetail: {
            width: "80%",
            color: "black",
            fontSize: "20px",
            textAlign: "left",
            paddingBottom: "2px",
            textShadow:` 
                0 0 1px white, 
                0 0 2px #faffa3, 
                0 0 4px #f8ff6b`,
            borderBottom: "1px yellow solid",
        },
        dataPoint: {
            color: "white",
            fontSize: "16px",
            textAlign: "left",
            paddingTop: "5px",

        },
        "@media (max-width: 850px)": {
            detailWrapper: {
                "grid-gap": "1rem",
                "grid-template-columns": "repeat(auto-fill, minmax(46%, 1fr))"
            }
        },
        "@media (max-width: 500px)": {
            dataPoint: {
                fontSize: "12px",
            },
            shipDetail: {
                fontSize: "16px"
            }
        }
    })
})