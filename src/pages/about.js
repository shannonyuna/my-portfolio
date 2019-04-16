import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import AboutMe from "../components/AboutMe"
import AboutDetail from "../components/AboutDetail"

const MeBg = styled.div`
  width: 600px;
  height: 300px;
  background-color: rgba(0,0,0,0.15);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: -100px;
  &:hover{
    transform: scale(1.05,1.05);
    box-shadow: 0 30px 60px rgba(0,0,0,0.25)
  }  
`

const AboutListBg = styled.div`
  margin: 150px 0px 150px 0px;
  padding-top: 40px;
  width: 500px;
  background-color: rgba(0,0,0,0.15);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
      transform: scale(1.05,1.05);
      box-shadow: 0 30px 60px rgba(0,0,0,0.25)
  }
  @media (max-width: 1060px){
  }
  @media (max-width: 720px){
    height: 680px;
  }
  .ExperienceContent{
    height: 600px;
  }
  .EducationContent{
    height: 760px;
  }
`

const WhiteLine = styled.div`
  width: 520px;
  margin: 0px auto 40px auto;
  border: 0.5px solid rgba(255,255,255,0.5);
  z-index: 100;
`

const BlackLine =  styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  width: 200px;
  color: black;
  border: 0.5px solid rgba(0,0,0,0.75);
  z-index: 100;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
  }
`


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = "AboutMe">
    <MeBg>
    <div className = "AboutLabel">
    <BlackLine></BlackLine>
    <AboutMe      
      title="Shannon Yuna Koh"
      text="UX/UI Designer" />
    </div>  
    </MeBg>

    <div className="ExperienceBox">
      <AboutListBg>
        <div className="ExperienceContent">
        {staticdata.experience.map(cell => (
          <AboutDetail
            title2= {cell.title2}
            detail1= {cell.detail1}
            detail2= {cell.detail2}
          />
        ))}
        </div>  
      </AboutListBg>
    </div>

    <div className="EducationBox">
      <AboutListBg>
      <div className="EducationContent">
          <div>
            {staticdata.education.map(cell => (
            <AboutDetail
              title2= {cell.title2}
              detail1= {cell.detail1}
              detail2= {cell.detail2}
            />
          ))}
          </div>
          <WhiteLine></WhiteLine>
          <div>
          {staticdata.achievement.map(cell => (
            <AboutDetail
              title2= {cell.title2}
              detail1= {cell.detail1}
              detail2= {cell.detail2}
            />
          ))}
          </div>
        </div>
        </AboutListBg>
      </div>
  </div>
  </Layout>
)


export default AboutPage
