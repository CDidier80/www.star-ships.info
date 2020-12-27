import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';

const Footer = () => {
    const [inView, setInview] = useState(false)
    return (
        <InView as="div" onChange={setInview}>
        {inView && 
        <div  className="footer" style={inView? {display: "block"}: {display: "none"}}> 
            <h1 className="collinText">Created by <a className="nameLink" href="https://www.linkedin.com/in/collin-didier/">Collin Didier</a></h1>
            <p className="proTitle">Software Engineer | Full Stack Web Developer</p>
            <div className="outLinksWrapper">
            <div className="apiWrapper">
                <p className="linkSentence">Powered by 
                    <a className="apiLink" href="https://swapi.dev/" target="blank"> SWAPI API</a>
                </p>
            </div>
            <div className="githubWrapper">
                <p className="linkSentence">View project details on 
                    <a className="githubLink" href="https://github.com/CDidier80/www.star-ships.info" target="blank"> Github</a>
                </p>
            </div>
            </div>
        </div>
        }
    </InView>
    )
}

export default Footer