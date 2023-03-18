import React from 'react';
import ReactDOM from 'react-dom/client';

class Timer extends React.Component{
  render(){
    return(
      <h2>
          it is {new Date().toLocaleTimeString()}
      </h2>
    )
  }
}
class Hello extends React.Component{
  render(){
    return(
      <h1>سلام</h1>
    )
  }
}

class App extends React.Component {
  render(){
    return(
      <div>
        <Hello/>
        <Timer/>
      </div>
    )
  }
}

// let elem = new App()
const tick =()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // elem.render()
  <App/>
);
}
setInterval(()=>{
  tick();
},1000)


