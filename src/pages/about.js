import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutCard from "../components/AboutCard";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell";
import styled from 'styled-components';
import AboutExperience from "../components/AboutExperience"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-tranform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.p`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
 
  @media (max-width: 800px){
    grid-template-columns: repeat(1,1fr)
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = "AboutExperience">
    <AboutExperience       
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
    </div>
    
    <div className= "About_1">
    <div className="AboutCards">
      <div className="AboutCardGroup">
        <AboutCard 
        title="React for Designers"
        text1="12 sections"
        text2="shannon"
        image={require('../images/wallpaper.jpg')}
        />
        <AboutCard
        title="React for Designers"
        text1="12 sections"
        text2="shannon"
        image={require('../images/wallpaper.jpg')}
        />
        <AboutCard
        title="React for Designers"
        text1="12 sections"
        text2="shannon"
        image={require('../images/wallpaper.jpg')}
        />
        <AboutCard
        title="React for Designers"
        text1="12 sections"
        text2="shannon"
        image={require('../images/wallpaper.jpg')}
        />
      </div>
    </div>
  </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />


    <SectionCaption>12 sections - 5 hours</SectionCaption>
    <SectionCellGroup>
        {staticdata.cells.map(cell => (
        <Cell 
          title= {cell.title}
          image= {cell.image}
        />
        ))}
    </SectionCellGroup>
  </Layout>
)


export default AboutPage
