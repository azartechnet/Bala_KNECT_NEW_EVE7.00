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

/*const Sample=()=>{
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
r1.render(<Sample/>)*/

//React without JSX
/*const myelem1=React.createElement("h1",null,"welcome")
const myelem2=React.createElement("p",null,"This is paragraph")
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(React.createElement("div",null,myelem1,myelem2))*/

//Login Form

/*const Login=()=>{
  return(
    <>
     <form>
      <label>UserName</label>
      <input type="text"/>
      <label>Password</label>
      <input type="password"/>
      <input type="submit" value="Login"/>
     </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Login/>)*/

//React List
/*const MyElem=()=>{
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ul>
      <ol>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Conditional Rendering

/*const x=20
let text=""
if(x>10)
{
  text="x is greater than 10"
}
else
{
  text="x is less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Nested if else,else if ladder,switch statement
/*import './index.css';
const App=()=>{
  return(
    <>
      <h1>Welcome</h1>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Function Components

/*function Sample()
{
  return(
    <div>
      <h1>This is Function Components</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/
//class component

/*class Sample extends React.Component
{
  render()
  {
    return(
      <h1>Welcome</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Components

/*function Greeting()
{
  const name="azar";
  return(
    <div style={{textAlign:'center',marginTop:'50px',backgroundColor:'green'}}>
        <h1>Hello,{name}</h1>
        <p>Welcome to React Function1</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//using onClick()
/*function SimpleButton()
{
  function showMessage()
  {
    alert("Button was clicked")
  }
  return(
    <div style={{textAlign:'center'}}>
      <button onClick={showMessage}>ClickHere</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//Function Component props

/*function Sample(props)
{
  return(
    <div>
      <h1>Hello,{props.name}{props.age}</h1>
      <p>This is paragraph</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="25"/>)*/

//component in component

/*function Component1()
{
  return(
    <div>
      <h1>Hello</h1>
      <p>Component1</p>
      <Component2/>
    </div>
  )
}
function Component2()
{
  return(
    <h1>This is Component2</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//Constructor using Super

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:25}
  }
  render()
  {
    return(
      <div>
        <h1>Hello{this.state.name}{this.state.age}</h1>
        <p>Welcome</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor using props

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:props.name,age:props.age}
  }
  render()
  {
    return(
      <div>
        <h1>Welcome{this.props.name}{this.props.age}</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Another

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Events

/*function Football()
{
  const shoot=()=>{
    alert("Goal")
  }
  return(
    <>
      <button onClick={shoot}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Arguments passing

/*function Football()
{
  const shoot=(year)=>{
    alert(`Goal in ${year}`)
  }
  return(
    <>
       <button onClick={()=>shoot(2002)}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>Missed</h1>
}
function MadeGoal()
{
  return<h1>MadeGoal</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return<MadeGoal/>
  }
  else
  {
    return<MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
// r1.render(<Football isGoal={true}/>)
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Toyota"]
  return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car b1={car}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React using Keys

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
   const cars=[
    {id:1,name:"BMW"},
    {id:2,name:"Audi"},
    {id:3,name:"Toyota"}
   ]
   return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car id={car.id} name={car.name}/>)}
      </ul>
    </div>
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//destructuring props

/*function Car({id,name})
{
  return<li>{id}{name}</li>
}
function Garage()
{
   const cars=[
    {id:1,name:"BMW"},
    {id:2,name:"Audi"},
    {id:3,name:"Toyota"}
    ]
    return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car key={car.id} id={car.id} name={car.name}/>)}
      </ul>
    </div>
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//Destructuring state

/*class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id, name: props.name };
  }
  render() {
    const { id, name } = this.state;
    return <li>{id} {name}</li>;
  }
}
function Garage() {
  const cars = [
    { id: 1, name: "BMW" },
    { id: 2, name: "Audi" },
    { id: 3, name: "Toyota" }
  ];
  return (
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} id={car.id} name={car.name} />
        ))}
      </ul>
    </div>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Garage />);*/

//Destructuring in arrays

/*function Skills()
{
  const skills=["HTML","CSS","JS","React"]
  const [skill1,skill2,skill3,skill4]=skills;
  return(
    <div>
      <h1>My Skills</h1>
      <ul>
        <li>{skill1}</li>
        <li>{skill2}</li>
        <li>{skill3}</li>
        <li>{skill4}</li>
      </ul>
    </div>
  )

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//class component Mounting Lifecycle method
/*class MyComponent extends React.Component {
  constructor(props)
  {
    super(props);
    console.log("Constructor called")
  }
  componentDidMount()
  {
    console.log("Component Did Mount called")
  }
  render() {
    console.log("Render method called")
    return <h1>Welcome to React Lifecycle Methods</h1>;
  }
}

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<MyComponent />);*/

//class component Updating Lifecycle method

/*class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor called");
  }
  
  componentDidMount() {
    console.log("Component Did Mount called");
  }
  componentDidUpdate() {
    console.log("Component Did Update called");
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("Render method called");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<MyComponent />);*/

//class component Unmounting Lifecycle method

/*class Child extends React.Component {

  componentWillUnmount(){
    console.log("Child Component is unmounting")
  }
  render() {
    return <h1>This is Child Component</h1>;
  }
}
const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Child />);*/

//React Hooks

import { useState,useEffect } from "react";

/*function Counter()
{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("azar");
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <h2>Name:{name}</h2>
      <button onClick={()=>setName("ReactJS")}>Change Name</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//useEffect Hook

/*function Counter()
{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    document.title=`Count is ${count}`
  },[count])
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Another program for useState
/*function Welcome()
{
  const [name,setName]=useState("azar");
  return(
    <div>
      <h2>Welcome,{name}</h2>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome/>);*/

//Another program for useEffect

/*function Time()
{
  const [ctime,setCtime]=useState(new Date().toLocaleTimeString());
  const UpdateTime=()=>{
    setCtime(new Date().toLocaleTimeString())
  }
  useEffect(()=>{
    const timer=setInterval(UpdateTime,1000);
    return()=>{
      clearInterval(timer)
    }
  },[])
  return(
    <div>
      <h1>{ctime}</h1>

    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Time/>)*/

//Another program for useContext