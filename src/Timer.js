import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'

var interval
class Timer extends React.Component{
    constructor(){
      super();
      this.state = {
        time: new Date().toLocaleTimeString()
      }
    }
    componentDidMount(){ //یک کاری را برای اولین برا وقتی کامپوننت تو ساخته شد انجام میدهم
         interval = setInterval(() => {
            this.setState({
              time:new Date().toLocaleTimeString()
            })
          }, 1000);
    }
    componentDidUpdate(){ //هر بار که صفحه رندر شد یک کاری انجام میدهم
        if(this.state.time== "8:39:59 PM"){
            clearInterval(interval);
        }
    }
    componentWillUnmount(){//هرموقع یک کامپوننت بسته شد شما یک کاری را که قبلا انجام دادی میتوانی کنسلش کنی و یا هرکاری که میخوای میتونی رقم بزنی
        console.log();
    }
    render(){
      return(
        <h2 className="timer">
            It Is : {this.state.time}
        </h2>
      )
    }
  }
  export default Timer;