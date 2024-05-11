import React, { useEffect, useState } from 'react'

export default function Products() {
    let [count , setCount] = useState(0);

   function changeCount(){
        setCount(Math.random());
    }
    
    // Component Did Mount
     useEffect(() => {
        
      console.log("Products Did Mount");

      return()=>{
        console.log("Products Unmount");
      }
    }, []);

    // Component Did Update
     useEffect(() => {
        //this condition to prevent calling this useEffect before any change in states
        if(count === 0)
            return;
      console.log("Products Did Update");
    }, [count]);
    
    
    return (
    <>
    <div>Products</div>
    <div>
        {count}
    </div>
    <button onClick={changeCount}>Change Number</button>
    </>
  )
}
