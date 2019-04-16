import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import AboutMe from "../components/AboutMe"
import AboutDetail from "../components/AboutDetail"


const ExperienceBg = styled.div`
  margin: 150px 0px 150px 150px;
  padding-top: 40px;
  width: 600px;
  height: 600px;
  background-color: rgba(0,0,0,0.15);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
      transform: scale(1.05,1.05);
      box-shadow: 0 30px 60px rgba(0,0,0,0.25)
  }
`

const EducationBg = styled.div`
  margin: 150px 0px 150px 550px;
  padding-top: 40px;
  width: 600px;
  height: 740px;
  background-color: rgba(0,0,0,0.15);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
      transform: scale(1.05,1.05);
      box-shadow: 0 30px 60px rgba(0,0,0,0.25)
  }
`
const Line = styled.div`
  width: 520px;
  margin: 0px auto 40px auto;
  color: white;
  border: 0.5px solid rgba(255,255,255,0.5);
  z-index: 100;
`


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = "AboutMe">
    <AboutMe      
      image={require('../images/wallpaper2.jpg')}
      title="Shannon Yuna Koh"
      text="UX/UI Designer" />
    </div>

    <ExperienceBg>
      {staticdata.experience.map(cell => (
        <AboutDetail
          title2= {cell.title2}
          detail1= {cell.detail1}
          detail2= {cell.detail2}
        />
      ))}
    </ExperienceBg>

    <EducationBg>
    <div className="EducationAchievement">
      <div>
        {staticdata.education.map(cell => (
        <AboutDetail
          title2= {cell.title2}
          detail1= {cell.detail1}
          detail2= {cell.detail2}
        />
      ))}
      </div>
      <Line></Line>
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
    </EducationBg>

  </Layout>
)


export default AboutPage
