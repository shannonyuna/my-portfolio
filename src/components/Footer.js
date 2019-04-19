import React from "react"
import { Link } from "gatsby"
import './HeaderFooter.css'



class Footer extends React.Component {
    render() {
      return (
        <div className = "FooterGroup">
        <div className = "Email"> 
            <a href="mailto:shannon.y.koh@gmail.com" >Email</a>
        </div>
        <div className = "LinkedIn"> 
            <a href="https://www.linkedin.com/in/shannon-koh/" >LinkedIn</a>
        </div>        
        <Link className = "Resume" to="/">
            <p>Resume</p>
        </Link>
    </div>
      )
    }
  }

export default Footer
