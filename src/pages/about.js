import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"
import styled from 'styled-components'
import AboutMe from "../components/AboutMe"
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
    <div className = "AboutMe">
    <AboutMe      
      image={require('../images/wallpaper2.jpg')}
      title="Shannon Yuna Koh"
      text="UX/UI Designer" />
    </div>

    <div className = "AboutExperience">
    <AboutExperience      
      title1="Experiences & Skills"
      title2="UX/UI Designer"
      text1="Estée Lauder Companies | 2018 - present"
      text2="Designed the user interface of the custom software for the packaging innovation department." 
      
      title2="Web Intern"
      text1="Visual Arts Press | 2016 - 2017"
      text2="Designed interactive prototype and wireframe of new SVA.edu and its customer management system." />
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
