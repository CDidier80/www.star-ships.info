import { useShipStyles } from "./usePageStyles"
import React from 'react'


const Ship = (props) => {

    const {shipName, picture} = useShipStyles(props)

    return (
        <>
            <div className={shipName}>{props.name}</div>
            <div className={picture}></div>
        </>
    )
}

export default Ship
