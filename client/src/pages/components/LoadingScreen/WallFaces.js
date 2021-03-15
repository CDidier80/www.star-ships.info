import React from 'react'

const WallFaces = (props) => {


    const wallClass1 =  props.static ? "static-wall" : "wall"

    const wallArgs = [
        [ `${wallClass1} wall-bottom`, "X", "-90" ],
        [ `${wallClass1} wall-right`,  "Y", "90"  ],
        [ `${wallClass1} wall-left`,   "Y", "-90" ],
        [ `${wallClass1} wall-back`,   "X", "180" ],
        [ `${wallClass1} wall-top`,    "X", "90"  ],
    ]

    const [
        wallBottom, 
        wallRight, 
        wallLeft, 
        wallBack,
        wallTop, 
    ] = wallArgs.map(wall =>{
        const transformation = `rotate${wall[1]}(${wall[2]}deg) translateZ(500px)`
        return({
            className: wall[0],
            style: {
                transform:  transformation,
                OTransform: transformation,
                MsTransform: transformation,
                WebkitTransform:  transformation,
            }
        })
    })


    return (
        <>
            <div {...wallRight}>  </div>
            <div {...wallLeft}>   </div>   
            <div {...wallTop}>    </div>
            <div {...wallBottom}> </div> 
            <div {...wallBack}>   </div>    
        </>
    )
}

export default WallFaces
