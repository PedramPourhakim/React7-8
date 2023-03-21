import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'
import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';
import { TestContext } from './testContext';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       title:"Pedram Pourhakim"
//     }
//     // this.handleSetTitle = this.handleSetTitle.bind(this)
//   }

//   handleSetTitle = () =>{
//     this.setState({
//       title:"God Is With Me"
//     })
//   }
//   // handleSetTitle(){
//   //   this.setState({
//   //     title:"I Have No Limitations"
//   //   })
//   // }
//     render(){
//       return(
        // <div className="main">
        //   <Hello title={this.state.title}/>
        //   <Timer handleSetTitle={this.handleSetTitle}/>
        // </div>
//       )
//     }
//   }

const App = ()=>{
  const [title , setTitle] = 
  useState("Pedram Pourhakim");
  const [isLight , setIsLight] = 
  useState(false);
  const [timeArr , setTimeArr] = 
  useState([]);

  useEffect(()=>{//فقط برای اولین بار که صفحه رندر میشود اجرا میشود
    console.log("useEffect");
    return ()=>{

    }
  },[isLight])//اگر isLight تغییر کرد دوباره دستور بالارا اجرا کن
  // const handleSetTitle = ()=>{
  //   setTitle("I Have No Limitations")
  // }
  const handleSetIsLight = ()=>{
    setIsLight(!isLight)
  }
  return(
    <TestContext.Provider value={{
      timeArr,
      setTimeArr
      }}>
    <div className="main" 
    style={{background:isLight ? "white": "black" }}>
    <Hello title={title}/>
    <Timer 
    isLight={isLight}
     handleSetIsLight={handleSetIsLight}/>
        <TimeList/>
  </div>
  </TestContext.Provider>
  )
}
export default App;