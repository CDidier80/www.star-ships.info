import { useFalconStyles } from "./styles/useStyles"
import React from 'react'

const Falcon = ({error}) => {

    const { falcon: fClass, loadingText } = useFalconStyles(error)
 
    const falconText = error ? "Error" : "Loading"

    return (
        <div className={fClass} >
            <div className={loadingText} > {falconText} </div>
        </div>
    )
}

export default Falcon
