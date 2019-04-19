import React from 'react'
import styled from 'styled-components'

const SectionTitleGroup = styled.div`
    padding: 50px 0px 0px 0px;
    color: rgba(72,72,72);
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
        transform: translateX(40px);
        @media (max-width: 992px){
        transform:translateX(-20px); 
    }
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
    @media (max-width: 992px){
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
`

const AboutExp = props =>(
    <SectionTitleGroup>
        <BlackLine></BlackLine>
        <SectionTitle>{props.title}</SectionTitle>
    </SectionTitleGroup>
)

export default AboutExp