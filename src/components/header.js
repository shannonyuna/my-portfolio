import Link  from 'gatsby-link'
import React from 'react'
import './Header.css'
// import StripeCheckout from 'react-stripe-checkout'


class Header extends React.Component {
  constructor(props){
    super (props)

    this.state = {
      hasScrolled : false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}

handlePurchase = (token) =>{
  const amount = 5000
  const description = "My awesome product"

  const bodyObject = {
    tokenId: token.id,
    email: token.email,
    name: token.name,
    description,
    amount
  }

  fetch('http://localhost:9000/stripe-charge', {
    method:'POST',
    body: JSON.stringify(bodyObject)
  })
}
  render() {
    return (
      <div className = {this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className = "HeaderGroup">
          <Link to="/" className = "Shannon"><img src={require('../images/logo-shannon.png')} width ="150" alt=""/></Link>
          <Link className = "About" to="/about">
            <img src={require('../images/about.svg')} width ="35" alt=""/>
          </Link>
          <Link className = "More" to="/more" >
          <img src={require('../images/more.svg')} width ="35" alt=""/>
          </Link>
          {/* <StripeCheckout
            amount={5000}
            token={this.handlePurchase}
            stripeKey={'pk_test_iG01ddpO7vjF0lqN8WwCUsKO00D9aTWTx1'
}>
            <button>Buy</button>
          </StripeCheckout> */}
        </div>
      </div>
    )
  }
}

export default Header
