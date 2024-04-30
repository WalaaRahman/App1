import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    
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
}
