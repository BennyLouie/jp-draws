import React from 'react'
import Header from './Header'
import Cart from './Cart'

export default class DisplayCart extends React.Component {

  render(){
    return(
      <>
        <Header resetSpecs={this.props.resetSpecs} specs={this.props.specs} specsMethod={this.props.specsMethod} logOut={this.props.logOut} user={this.props.user}/>
        <Cart cart={this.props.cart}/>
      </>
    )
  }
}
