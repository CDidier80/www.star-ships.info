import React from 'react'
import falcon from "../../public/falconBlurred.png"

const Temp = () => { 

    const message = `
    The 3rd-party API that powers this site is temporarily down. Such issues are commonly resolved within a few days.
    Please check back later!
    `
    
    return (
        <div className="temp-page"> 
            <h1 className="title">STAR SHIPS</h1>
            <div className="text-box">
                <h3 className="temp-text" > 
                    {message}
                </h3>
                <h4>
                    - Collin Didier
                </h4>
            </div>
        </div>
    )
}

export default Temp