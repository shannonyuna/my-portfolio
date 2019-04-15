import React from 'react'
import styled from 'styled-components'

const SectionBg = styled.div`
    width: 814px;
    height: 454px;
    background-color: rgba(0,0,0,0.15);

    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
        transform: scale(1.05,1.05);
        box-shadow: 0 30px 60px rgba(0,0,0,0.25c)
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px){
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h1`
    color:rgba(0,0,0,0.75);
    font-size: 60px;
    margin: 0;
    line-height:1.2;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    &:hover {
        color: transparent;
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: black;
    }

    @media (max-width: 720px){
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color:white;
`

const AboutMe = props =>(
    <SectionBg image = {props.image}>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionBg>
)

export default AboutMe