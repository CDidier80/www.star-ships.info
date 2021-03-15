import React from 'react'
import "./errorScreen.css"

const ErrorScreen = () => { 

    const message = `
    The 3rd-party API that powers this site is temporarily down. Such issues are commonly resolved within a few days.
    Please check back later!
    `
    
    return (
        <div className="temp-page"> 
            <div className="text-box">
                <h1 className="title error-title">STAR SHIPS</h1>
                <h3 className="temp-text" > 
                    {message}
                </h3>
                <h4 className="temp-text top-margin">
                    - Collin Didier
                </h4>
            </div>
        </div>
    )
}

export default ErrorScreen