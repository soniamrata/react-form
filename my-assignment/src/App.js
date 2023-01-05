// import React from "react";
// import "./App.css";

  
// class App extends React.Component{
//   constructor(){
//       super();
//       this.state ={
//           Count:0
//       }
//   }
//   increaseCount(){
//     this.setState({
//       Count: this.state.Count +1
//     })
//   }
//   decreaseCount(){
//     this.setState({
//       Count: this.state.Count -1
//     })
//   }

// render() {
//   return(
//     <div className="ABC">
//       <h1>Assigment</h1>
//     <p> Count = {this.state.Count} </p>
//     <button onClick={
//       ()=>{
//         this.increaseCount();
//       }
//     }>+ Increase</button>
//     <button onClick={
//       () =>{
//         this.decreaseCount()
//       }
//     }>- Decrease</button>
    

//     </div>
//   )
// }
// }


// export default App

import React, { useState } from "react"
// import './productPage.css'


const ProductPage = () => {

    const [count, setCount] = useState(0)

    return <div >
        
        <h3> Products </h3>
        
        <p>Count = {count} </p>

        <div className="aalu">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>

    </div>
}

export default ProductPage