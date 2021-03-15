import React from 'react'
import WallFaces from "./WallFaces"

const Walls = (props) => {

    const { innerHeight, innerWidth } = window 
    let hyperspaceDimension = innerHeight > innerWidth ? innerHeight : innerWidth
    let leftAdjustment = innerWidth / 2 * -1
    let topAdjustment = innerHeight / 2 * -1

    const propsWrap = {
        className: (props.static ? "static-wrap" : "wrap"),
        style: {
            width: hyperspaceDimension,
            height: hyperspaceDimension,
            left: leftAdjustment,
            top: topAdjustment
        }
    }

    return (
        <div {...propsWrap}>
            <WallFaces {...props} />
        </div>
    )
}

export default Walls
