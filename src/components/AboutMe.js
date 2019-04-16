import React from 'react'
import styled from 'styled-components'

const SectionTitleGroup = styled.div`
    position:relative;
    top: 75px;
`

const SectionTitle = styled.h1`
    color:rgba(0,0,0,0.75);
    font-size: 60px;
    margin: 0;
    line-height:1.2;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 720px){
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color:rgba(0,0,0,0.5);
    line-height: 1.4;
`

const AboutMe = props =>(
    <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
)

export default AboutMe