import React from "react"
import { Link } from "gatsby"
import './MoreBtn.css'

class MoreBtn extends React.Component {

  render() {
    return (
      <div className="more-wrap">
          <Link className = "More" to="/more/">
            <button>
            <img src={require('../images/more.svg')} width ="35" fill="none" alt=""/>
            </button>
          </Link>
      </div>
    )
  }
}

export default MoreBtn