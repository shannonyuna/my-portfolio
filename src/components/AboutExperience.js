import React from 'react'
import styled from 'styled-components'

const SectionBg = styled.div`
    width: 600px;
    height: 800px;
    background-color: rgba(0,0,0,0.15);
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
        transform: scale(1.05,1.05);
        box-shadow: 0 30px 60px rgba(0,0,0,0.25c)
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 40px;
    margin: 0;
    max-width: 350px;
`

const Title1 = styled.h2`
    color:rgba(0,0,0,0.75);
    margin: 0;
    font-size: 24px;
    padding-bottom: 50px;
`

const Title2 = styled.h3`
    color:rgba(0,0,0,0.75);
    margin: 0;
    padding-bottom: 10px;
    font-weight: 100;
`

const Detail1 = styled.p`
    color:rgba(0,0,0,0.75);
    margin: 0;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 14px;
`
const Detail2 = styled.p`
    color:rgba(0,0,0,0.5);
    margin: 0;
    font-size: 14px;
`

const AboutExperience = props =>(
    <SectionBg>
        <SectionTitleGroup>
            <Title1>{props.title1}</Title1>  
            <Title2>{props.title2}</Title2>
            <Detail1>{props.text1}</Detail1>
            <Detail2>{props.text2}</Detail2>
        </SectionTitleGroup>
    </SectionBg>
)

export default AboutExperience