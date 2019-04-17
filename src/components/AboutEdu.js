import React from 'react'
import styled from 'styled-components'

const SectionTitleGroup = styled.div`
    position: absolute;
    padding: 0px 0px 0px 0px;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    color: rgba(72,72,72);
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
    transform: scale(1.05,1.05);
    }
    @media (max-width: 992px){
        left:30px;
        top:1505px;
        width: 170px;   
    }
`

const SectionTitle = styled.h1`
    position:relative;
    left: 180px;
    width: 170px;
    color:rgba(0,0,0,0.75);
    font-size: 30px;
    line-height:1.2;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 992px){
        font-size: 30px;
        top: 0px;   
        left: 0px;
    }
`
const BlackLine =  styled.div`
    position: relative; 
    top: -70px;
    left: 380px;
    width: 180px;
    color: black;
    border: 0.5px solid rgba(72,72,72,0.75);
    z-index: 100;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 992px){
        left:200px;
        top: -70px;
        width: 170px;   
    }
`

const AboutExp = props =>(
    <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <BlackLine></BlackLine>
    </SectionTitleGroup>
)

export default AboutExp