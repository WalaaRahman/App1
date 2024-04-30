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
                   <div className='row'>
                   <div className='col-xl-1'></div>
                   <div className='col-xl-4'>
                   <h2>Count:</h2>
                   <h2>Code: </h2>
                   <h2>Name:</h2>
                   <h2>Price:</h2>
                   </div>
                   <div className='col-xl-6'>
                   <h2 className='text-success'>{count}</h2>
                   <h2>{code}</h2>
                   <h2>{name}</h2>
                   <h2>{price} LE</h2>
                   </div>
                   </div>
               
                   {onSale?
                    <h2 className='position-absolute top-0 end-0 bg-danger text-white'>Sale</h2>

                   :''}
                    <button onClick={()=> this.props.delete(id)} className='btn btn-outline-danger btn-sm w-100 mb-3 py-2'>Delete</button>
                    <button onClick={()=> this.props.update(this.props.productIndex , 1)} className='btn btn-outline-success btn-sm w-100 mb-3 py-2'>+</button>
                    <button onClick={()=> this.props.update(this.props.productIndex , -1)} className='btn btn-outline-success btn-sm w-100 mb-3 py-2'>-</button>
                </div>
            </div>


            </>
            )
    }
}
