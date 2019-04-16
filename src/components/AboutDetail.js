import React from 'react'
import styled from 'styled-components'

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0px 0px 40px 40px;
    margin: 0;
    max-width: 400px;
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
    line-height: 1.5;
`

const AboutDetail = props =>(
    <SectionTitleGroup> 
        <Title2>{props.title2}</Title2>
        <Detail1>{props.detail1}</Detail1>
        <Detail2>{props.detail2}</Detail2>
    </SectionTitleGroup>
)

export default AboutDetail