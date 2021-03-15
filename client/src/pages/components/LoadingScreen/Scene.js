import Walls from "./Walls"
import React, { useEffect, useState } from 'react'

const Scene = () => {

    const [staticMounted, setStaticMounted] = useState(true)
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        let mounted = true
        setTimeout(() => mounted && setStaticMounted(false), 4000)
        return () => (mounted = false)
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
