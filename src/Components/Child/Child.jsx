import React, { Component } from 'react'

export default class Child extends Component {
    
    render() {
        //distructing props object
        let {id,count,code,name,onSale,price}=this.props.productDetails;
        return (
            <>
            <div className="col-md-3 ">
                <div className="bg-white text-dark position-relative mb-4 p-2">
                   <h4>Child</h4>
                   <h2>Count: {count}</h2>
                   <h2>Code: {code}</h2>
                   <h2>Name: {name}</h2>
                   <h2>Price: {price} LE</h2>
                   {onSale?
                    <h2 className='position-absolute top-0 end-0 bg-danger text-white'>Sale</h2>

                   :''}
                    <button onClick={()=> this.props.delete(id)} className='btn btn-outline-danger btn-sm w-100 mb-3 py-2'>Delete</button>
                </div>
            </div>


            </>
            )
    }
}
