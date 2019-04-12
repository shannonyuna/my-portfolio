import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell";
import styled from 'styled-components'

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React apps </h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to poopee</Link>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" alt=""  />
          <img src={require('../images/logo-figma.png')} width="50"  alt="" />
          <img src={require('../images/logo-studio.png')} width="50"  alt="" />
          <img src={require('../images/logo-framer.png')} width="50"  alt="" />
          <img src={require('../images/logo-react.png')} width="50"  alt="" />
          <img src={require('../images/logo-swift.png')} width="50"  alt="" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
        title="React for Designers"
        text="12 sections"
        image={require('../images/wallpaper.jpg')}
        />
        <Card 
        title="React for Designers"
        text="12 sections"
        image={require('../images/wallpaper.jpg')}
        />
        <Card 
        title="React for Designers"
        text="12 sections"
        image={require('../images/wallpaper.jpg')}
        />
        <Card 
        title="React for Designers"
        text="12 sections"
        image={require('../images/wallpaper.jpg')}
        />
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

export default IndexPage

