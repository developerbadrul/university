import React from 'react'
import "./Services.css"

export default function Services (props) {
    const {img, name,number, city,describesion,Zila} =props
    return (
        <div className="student-item">
            <div>
            <h1>{img}</h1>
            <h1>{name}</h1>
            <h1>{number}</h1>
            <h1>{city}</h1>
            <h1>{Zila}</h1>
            <h1>{describesion}</h1>
            </div>
        </div>
    )
}

