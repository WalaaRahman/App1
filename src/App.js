import { Component } from 'react';
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Parent from './Components/Parent/Parent.jsx';
import './App.css';
import Products from './Components/Products/Products.js';
import Layout from './Components/Layout/Layout.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Notfound from './Components/Notfound/Notfound.jsx';


let routers = createBrowserRouter([
  {path:'',element:<Layout/>,
    children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'*',element:<Notfound/>},
      
    ]
  }])

export default class App extends Component {
//  constructor(){
//   // console.log("App Constructor");
// super();
//  }

  state = {
    products: [
      { id: 1, count: 0, code: 12345, name: 'Toshiba', price: 50000, onSale: false },
      { id: 2, count: 0, code: 235, name: 'Samsung', price: 50000, onSale: true },
      { id: 3, count: 0, code: 345, name: 'Nokia', price: 50000, onSale: false },
      { id: 4, count: 0, code: 564, name: 'Apple', price: 50000, onSale: true },
      { id: 5, count: 0, code: 965, name: 'Dell', price: 50000, onSale: false },
      { id: 6, count: 0, code: 58768, name: 'Lenovo', price: 50000, onSale: true },
      { id: 7, count: 0, code: 965, name: 'Dell', price: 50000, onSale: false },
      { id: 8, count: 0, code: 58768, name: 'Lenovo', price: 50000, onSale: true }

    ]


  }

  deleteProduct = (productID) => {
    console.log(productID);
    //Deep Copy
    let myProducts = [...this.state.products];
    //Update copy by Filter Method
    myProducts = myProducts.filter((product) => product.id !== productID);
    //Update State---> setState
    this.setState({ products: myProducts })
  }
  updateProduct = (productIndex, step) => {
    //Deep Copy
    let myProducts = [...this.state.products];
    if(step === -1 && myProducts[productIndex].count === 0){
      console.log("-1");
    }
    else{
      // console.log("+");
       //Update copy 
    myProducts[productIndex].count += step;
   
    //Update State---> setState
    this.setState({ products: myProducts })
    }
   


  }

 
  render() {
    return <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  }

}

// export default App;