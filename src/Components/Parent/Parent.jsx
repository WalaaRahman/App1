import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    
  render() {
    return (
 <>
 <div className="bg-dark p-4 text-center row">
{
    this.props.products.map((product)=><Child key={product.id} delete={this.props.delete} productDetails={product}/>)
}

 </div>
 </>
    )
  }
}
