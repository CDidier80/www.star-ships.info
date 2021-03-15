import React from 'react'
import { useShipDetailsStyles } from './usePageStyles'

const ShipDetails = (props) => {

    const {
        crew, 
        length, 
        passengers, 
        manufacturer, 
        starship_class, 
        cost_in_credits, 
    } = props.history.location.state.starship

    const cost = cost_in_credits.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    const infoArray = [
        ["Starship Class", starship_class], 
        ["Crew Size", crew], 
        ["Passenger Capacity", passengers], 
        ["Production Cost (credits)", cost], 
        ["Manufacturer", manufacturer], 
        ["Longest Dimension (m)", length]
    ]

    const { 
        dataPoint, 
        shipDetail,
        textWrapper, 
        detailWrapper
    } = useShipDetailsStyles()

    return (
        <div className={detailWrapper}>
            {infoArray.map((detail, index) => (        
                <div 
                    key={index} 
                    className={textWrapper}
                >
                    <h3 className={shipDetail}>{detail[0]}</h3>
                    <p className={dataPoint}>{detail[1]}</p>
                </div>
            ))}
        </div>
    )
}

export default ShipDetails
