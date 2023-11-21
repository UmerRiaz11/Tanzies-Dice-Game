import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor : props.isHeld ? "green" : "white"
    }
    return (
        <div className="shadow" 
        style={styles}
        onClick={props.diceHold}
        >
            <h2>{props.value}</h2>
        </div>
    )
}