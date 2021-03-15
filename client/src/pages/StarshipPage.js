import { useStarshipPageStyles } from "./components/StarshipPage/usePageStyles"
import ShipDetails from "./components/StarshipPage/ShipDetails"
import Ship from "./components/StarshipPage/Ship"
import "../styles/STARWARS/starwarsfont.css"
import { NavLink } from 'react-router-dom'
import React from 'react'

const StarshipPage = (props) => {

    const { state } = props.history.location
    const { name } = state.starship
    const { imageNum } = state


    const classes = useStarshipPageStyles()

    const propsNavlink = {
        className: classes.returnLink,
        to: "/"
    }

    const propsShip = { name, imageNum }

    return (
        <div className={classes.pageBackgroundImg}>
        <main className={classes.appContentWrapper} >
            <NavLink {...propsNavlink} > Return </NavLink>
            <Ship {...propsShip} />
            <ShipDetails {...props} />
        </main>
        </div>
    )
}

export default StarshipPage;



