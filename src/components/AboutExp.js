import React from 'react'
import styled from 'styled-components'

const SectionTitleGroup = styled.div`
    position: absolute;
    padding: 50px 0px 0px 0px;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    color: rgba(72,72,72);
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
    transform: scale(1.05,1.05);
    }  
    @media (max-width: 992px){
        left:0px;
        top:620px;   
    }
`

const SectionTitle = styled.h1`
    position: relative;
    top: -40px;
    left: 220px;
    color:rgba(0,0,0,0.75);
    font-size: 30px;
    line-height:1.2;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 600px){
        font-size: 30px;
        top: -40px;   
    }
`
const BlackLine =  styled.div`
  width: 200px;
  color: black;
  border: 0.5px solid rgba(72,72,72,0.75);
  z-index: 100;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
  }
`

const AboutExp = props =>(
    <SectionTitleGroup>
        <BlackLine></BlackLine>
        <SectionTitle>{props.title}</SectionTitle>
    </SectionTitleGroup>
)

export default AboutExp