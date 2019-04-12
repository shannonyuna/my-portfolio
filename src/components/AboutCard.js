import React from 'react'
import './AboutCard.css'

const AboutCard = props => (
    <div className="AboutCard">
        <img src={props.image} alt=""/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)


export default AboutCard