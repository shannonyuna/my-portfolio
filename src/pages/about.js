import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import Title from "../components/Title"
import AboutDetail from "../components/AboutDetail"
import AboutExp from "../components/AboutExp"
import AboutEdu from "../components/AboutEdu"

const AboutListBg = styled.div`
  margin: 0px 0px 0px 150px;
  padding-top: 40px;
  width: 480px;
  box-shadow: rgba(0,0,0,0.06) 0px 2px 4px 0px;
  border: 1px solid rgba(0,0,0, 0.3);
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
    margin: auto 0px;    
    
    .ExperienceContent{
      height: 690px;   
    }
    .EducationContent{
      height:770px;
    }  
  }
  @media (max-width: 640px){
    width: 350px; 
    
    .ExperienceContent{
      height: 660px;   
    }
    .EducationContent{
      height:770px;
    }  
  }
`

const WhiteLine = styled.div`
  width: 400px;
  margin: 0px auto 40px auto;
  border: 0.5px solid rgba(0,0,0,0.2);
  z-index: 100;
  @media (max-width: 640px){
      width: 300px;
    }
`


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = "AboutMe">
    <div className = "About_1">
    <div className = "AboutBaby" >
      <img src={require('../images/me.jpg')} alt="" />
    </div>
    <div className = "AboutLabel">
    <Title   
      title="Shannon Yuna Koh"
      text="UX/UI Designer" />
    </div>  
    </div>

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
      <div className= "AboutExp">
      <AboutExp     
        title="Experience"/>
      </div> 
    </div>
  
  <div className="AboutEduLayout">
    <div className = "AboutEdu">
      <AboutEdu     
        title="Education & Achievements" />
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
  </div>
  </Layout>
)


export default AboutPage
