import React from "react"
import { Link } from "gatsby"
import './footer.css'

class Footer extends React.Component {

  render() {
    return (
          <Link className = "More" to="/more/">
            <img src={require('../images/more.svg')} width ="35" alt=""/>
          </Link>
    )
  }
}

export default Footer