import React from "react";
import ReactDOM from "react-dom/client";

//Basic Rendering
/*const App=()=>{
  return(
    <>
    <h1>Welcome</h1>
    <h2>This is heading-2</h2>
    </>
    
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

const Sample=()=>{
  const name="azar";
  const age=20;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>You age is::{age}</p>
      <p>Today data is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)
