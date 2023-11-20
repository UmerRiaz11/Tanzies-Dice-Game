import React from "react"

export default function Die(props) {
    return (
        <div className="shadow">
            <h2>{props.value}</h2>
        </div>
    )
}