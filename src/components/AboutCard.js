import React from 'react'
import './AboutCard.css'

const AboutCard = props => (
    <div className="AboutCard">
        <img src={props.image} alt=""/>
        <h3>{props.title}</h3>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
    </div>
)


export default AboutCard