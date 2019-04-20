import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
        transform: translateX(40px)
    };
    @media (max-width: 992px){
        &:hover{
        transform: translateX(10px)
    }
    }
`

const SectionTitle = styled.h1`
    color:rgba(0,0,0,0.75);
    font-size: 60px;
    margin: 0;
    line-height:1.2;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 992px){
        font-size: 40px;
    };
    @media (max-width: 640px){
        font-size: 36px;
    };    
`

const SectionText = styled.p`
    color:rgba(0,0,0,0.5);
    line-height: 1.4;
`

const BlackLine =  styled.div`
  position: absolute;
  width: 200px;
  color: black;
  border: 0.5px solid rgba(0,0,0,0.75);
  z-index: 100;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
  }
`

const AboutMe = props =>(
    <div className = "About_1">
    <div className = "AboutBaby" >
    <img src={require('../images/me.jpg')} alt="" />
    </div>
    <div className = "AboutLabel">
    <AboutMe   
        title="Shannon Yuna Koh"
        text="UX/UI Designer" />
    </div>  
    </div>    
    <SectionGroup>
        <BlackLine></BlackLine>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
    </SectionGroup>
)

export default AboutMe