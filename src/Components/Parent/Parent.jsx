import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
  x;
    constructor(){
      super();
      console.log("parent Constructor");
    }
  render() {
    return (
 <>
 <div className="bg-dark p-4 text-center row">
{
    this.props.products.map((product,index)=><Child productIndex={index} key={product.id} update={this.props.update} delete={this.props.delete} productDetails={product}/>)
}

 </div>
 </>
    )
  }

  componentDidMount(){
    console.log("ComponentDidMount Parent");
    this.x= setInterval(()=>{console.log("Hello");},200)
  }
  componentDidUpdate(){
    console.log("ComponentDidUpdate Parent");

  }
  componentWillUnmount(){
    console.log("Unmount");
clearInterval(this.x);
  }
}
