import React from "react"
import styled from 'styled-components'
import pdf from '../images/shannonkoh_resume.pdf'
import './HeaderFooter.css'

const WhiteLine = styled.div`
  height: 150px;
  border: 0.5px solid rgba(0,0,0, 0.1);
  z-index: 100;
  @media (max-width: 640px){
    }
`

const CopyRight = styled.p`
    font-size: 0.8em;
    text-align: center;
    color: rgba(72,72,72)
`

class Footer extends React.Component {
    render() {
      return (
        <div>
        <CopyRight><p>© 2019 Shannon Yuna Koh</p></CopyRight>
        <div className = "FooterGroup">
        <div className = "Email"> 
            <a href="mailto:shannon.y.koh@gmail.com" >Email</a>
        </div>
        <WhiteLine />
        <div className = "LinkedIn"> 
            <a href="https://www.linkedin.com/in/shannon-koh/" >LinkedIn</a>
        </div>   
        <WhiteLine />             
        <div className="Resume">
            <a href={pdf}>Resume</a>
        </div>
        </div>
        </div>
      )
    }
  }

export default Footer
