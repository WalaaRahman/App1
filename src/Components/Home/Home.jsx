import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    productName: 'Toshiba c3'
  }
  welcome() {
    return 'Welcome Back';
  }
  render() {

    return (
      <>
        <div className='text-center bg-primary'><i className='fas fa-home'></i>Home</div>
        <div className="text-center"><b>{this.welcome()}</b></div>
        <div className="">Product Name : {this.state.productName}</div>
      </>
    )
  }
}
