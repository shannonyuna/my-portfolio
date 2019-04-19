import React from 'react'
import styled from 'styled-components'

const SectionTitleGroup = styled.div`
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    color: rgba(72,72,72);
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
        transform: translateX(-40px);
        @media (max-width: 992px){
        transform:translateX(20px);}
    }
`

const SectionTitle = styled.h1`
    position:relative;
    left: 0px;
    width: 170px;
    color:rgba(0,0,0,0.75);
    font-size: 30px;
    line-height:1.2;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 992px){
        font-size: 30px;
    }
`
const BlackLine =  styled.div`
    position: relative; 
    top: -70px;
    left: 200px;
    width: 200px;
    color: black;
    border: 0.5px solid rgba(72,72,72,0.75);
    z-index: 100;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 992px){
        left:200px;
        top: -70px;
    }
`

const AboutExp = props =>(
    <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <BlackLine></BlackLine>
    </SectionTitleGroup>
)

export default AboutExp