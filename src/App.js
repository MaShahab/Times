// eslint-disable-next-line no-unused-vars
import React,{Component} from "react";
import TimeDate from "./components/TimeDateComponent";
import UserInput from "./components/UserInputComponent";
import Clock from "./components/ClockComponent";
import background from '../src/images/background.jpg'
import '../src/styles/mainStyle.css'
import Stopwatch from "./components/StopwatchComponent";
import PersianNumber from "./components/PersianNumComponent";
import loadingProgress from "../src/images/amc_loading.gif"

class firstComponent extends Component{
  render(){
      let p = new Promise((resolve , reject) =>{
          setTimeout(() =>{
              resolve()
          },800)
      });

      p.then( ()=>{
          console.log("salam");
          let a = document.getElementById("loading_division");
          // a.style.cssText = "transition: all 2s; display: none";
          a.style.transition="opacity 1s";
          a.style.opacity="0";

          let b = document.getElementById("loading_division");
          b.style.zIndex="-1";
      });
    return(
        <div>
            <div id="loading_division">
                <img src={loadingProgress} id="loading" alt="sdfds"/>
            </div>
            <img id="backgroundImage" src={background}/>
            <Clock/>
          <TimeDate/>
          <div class="container">
              <div class="row" style={{position:"relative",textAlign:"center"}}>
                  <div className="col-6 items" id="countdownDiv">
                      <UserInput/>
                  </div>
                  <div className="col-6 items" style={{marginBottom:"10%"}}>
                      <Stopwatch/>
                  </div>
              </div>
          </div>
        </div>
    )
  }
}


export default firstComponent