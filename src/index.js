import React from 'react';
import ReactDOM from 'react-dom/client';


const tick =()=>{
  const elem = (
    <div>
      <h1>تایمر</h1>
      <h2>
        It Is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);
}
setInterval(()=>{
  tick();
},1000)


