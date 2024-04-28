import { Component } from 'react';
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Parent from './Components/Parent/Parent.jsx';
import './App.css';

export default class App extends Component {

  state={
    products:[
        {id:1,code:12345,name:'Toshiba',price:50000,onSale:false},
        {id:2,code:235,name:'Samsung',price:50000,onSale:true},
        {id:3,code:345,name:'Nokia',price:50000,onSale:false},
        {id:4,code:564,name:'Apple',price:50000,onSale:true},
        {id:5,code:965,name:'Dell',price:50000,onSale:false},
        {id:6,code:58768,name:'Lenovo',price:50000,onSale:true},
        {id:7,code:965,name:'Dell',price:50000,onSale:false},
        {id:8,code:58768,name:'Lenovo',price:50000,onSale:true}

    ]
    
   
}

deleteProduct =(productID)=> {
  console.log(productID);
  //Deep Copy
  let myProducts=[...this.state.products];
  //Update copy by Filter Method
  myProducts = myProducts.filter((product)=> product.id !== productID);
  //Update State---> setState
  this.setState({products:myProducts})
      }
render(){
  return(

    <>
  <Home/>
  <About/>
  <Parent delete={this.deleteProduct} products={this.state.products}/>
  </>
  )
}
 
}

// export default App;