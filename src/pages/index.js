import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import AboutMe from "../components/AboutMe"


const AboutListBg = styled.div`
  margin: 0px 0px 0px 150px;
  width: 600px;
  height: 800px;
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

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = "AboutMe">
    <div className= "AboutExpLayout">
      <div className="ExperienceBox">
        <AboutListBg>
        </AboutListBg>
      </div>
      <div className = "AboutLabel">
      <AboutMe   
      title="Customizing Kiosk"
      text="Software UI/UX" />
      </div>  
    </div>
  </div>
  </Layout>
)


export default HomePage
