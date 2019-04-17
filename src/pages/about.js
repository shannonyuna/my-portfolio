import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import AboutMe from "../components/AboutMe"
import AboutDetail from "../components/AboutDetail"
import AboutExp from "../components/AboutExp"
import AboutEdu from "../components/AboutEdu"

const MeBg = styled.div`
  width: 600px;
  height: 300px;
  background-color: rgba(0,0,0,0.25);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: -100px;
  &:hover{
    transform: scale(1.05,1.05);
    box-shadow: 0 30px 60px rgba(0,0,0,0.25);
  }  
  @media (max-width: 600px){
    width: 350px;
  }
`

const AboutListBg = styled.div`
  margin: 0px 0px 0px 150px;
  padding-top: 40px;
  width: 480px;

  box-shadow: rgba(0,0,0,0.06) 0px 2px 4px 0px;
  border: 1px solid rgba(0,0,0, 0.1);
  border-radius: 3px;
  color: rgba(72,72,72);

  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
      transform: scale(1.05,1.05);
      box-shadow: 0 30px 60px rgba(0,0,0,0.25)
  }
  .ExperienceContent{
    height: 580px;
  }
  .EducationContent{
    height: 740px;
  }

  @media (max-width: 992px){
    margin: 0px 0px 0px 2ç0px;    
    width: 350px;
    .ExperienceContent{
      height: 690px;   
    }
    .EducationContent{
      height:770px;
    }  
  }
`

const WhiteLine = styled.div`
  width: 400px;
  margin: 0px auto 40px auto;
  border: 0.5px solid rgba(255,255,255,0.5);
  z-index: 100;
  @media (max-width: 600px){
      width: 350px;
    }
`


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = "AboutMe">
    <MeBg>
    <div className = "AboutLabel">
    <AboutMe      
      title="Shannon Yuna Koh"
      text="UX/UI Designer" />
    </div>  
    </MeBg>

    <div className= "AboutExpLayout">
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
      <div className = "AboutExp">
      <AboutExp     
        title="Experience" />
      </div> 
    </div>
  
  <div className="AboutEduLayout">
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
    <div className = "AboutEdu">
      <AboutEdu     
        title="Education & Achievements" />
    </div> 
    </div>
  </div>
  </Layout>
)


export default AboutPage
