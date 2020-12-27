import React from 'react'
import { imageUrls } from '../../imageUrls';

const ShipGrid = (props) => {

    const starshipClick = (propsToPass) => {
        props.history.push("/starships", propsToPass)
        }

    const nameReformat = (name) => {
        const splitName = name.split(" ")
        let titleCasedString = ""
        splitName.forEach((word) => {
            // corrects mispelling from SWAPI 
            if (word.includes("frigte")) {
                word = word.replace("frigte", "Frigate")
            }
            // title case all words
            const titleCasedWord = word.replace(word.charAt(0), word.charAt(0).toUpperCase())
            titleCasedString += titleCasedWord + " "
        })
        return titleCasedString
    }

    return (
        <div className="shipGrid"> 
            { props.starships &&
                props.starships.map((starship, index) => { 
                let propsToPass = {
                    imageNum: index,
                    starship: starship
                }
                const starshipName = nameReformat(starship.name)
                return (
                    <div 
                        key={`index${index}`} 
                        style={{backgroundImage: `${imageUrls[index]}`}} 
                        className="grow shipSquares" 
                        onClick={() => starshipClick(propsToPass)}
                    >
                    <h3 className="shipLink">{starshipName}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ShipGrid
