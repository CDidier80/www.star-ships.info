import Walls from "./Walls"
import React, { useEffect, useState } from 'react'

const Scene = () => {

    const [staticMounted, setStaticMounted] = useState(true)


    useEffect(() => {
        setTimeout(() => setStaticMounted(false), 4000)
    }, [])

    return (
        <div className="hyperspace-wrapper">
            <div className="scene">
                {staticMounted && <Walls static />}
                <Walls />
                <Walls />
            </div>
        </div>
    )
}

export default Scene
