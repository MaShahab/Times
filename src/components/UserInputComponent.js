// eslint-disable-next-line no-unused-vars
import React,{Component} from "react";
import '../styles/mainStyle.css';

class UserInput extends Component{
    constructor(props){
        super(props);
        this.state={userTime: 0};
        this.state={userInput: 0}
    }
    render() {
        return (
            <div style={{direction: "rtl", textAlign: "center", fontSize: "40px",position:"static"}}>
                <p id="countdown">Countdown (شمارش معکوس)</p>
                <input type="number" id="input"/>
                <input type="button" onClick={() => this.userInput()} id="myBtn" value="شمارش"/>

                <p id={"Pid"} style={{color:"white",opacity:0}}>{this.state.userInput}</p>
                <p id={"finish_message"} style={{color:"white",fontFamily:"calibri,sans",opacity:0}}>تمام</p>
                <input id="rstBtn" type="button" onClick={()=>this.resetCount()} value="شروع دوباره"/>
                <input id="reset" type="button" onClick={()=>this.resetZero()} value="ریست"/>

            </div>
        )
    }
    userInput(){
        document.getElementById("myBtn").disabled=true;
        document.getElementById("Pid").style.color="black";
        document.getElementById("Pid").style.opacity=1;
        var x = document.getElementById("input").value;
        this.setState({userInput:x});
        // console.log(x)
    }

    countDownTime(){
        document.getElementById("rstBtn").disabled=true;
        document.getElementById("reset").disabled=true;
        var i;
        i= this.state.userInput;
        this.setState({userInput: i-1});
        // console.log(this.state.userInput);
        if (this.state.userInput>1){
            document.getElementById("reset").disabled=false;
        }
        if (this.state.userInput===0){
            this.componentWillUnmount();
            document.getElementById("finish_message").style.color="red";
            document.getElementById("finish_message").style.opacity=1;
            document.getElementById("rstBtn").disabled=false;
            document.getElementById("finish_message").style.opacity=1;
        }
    }

    resetCount(){
        document.getElementById("finish_message").style.opacity=0;
        var x = document.getElementById("input").value;
        this.setState({userInput:x});
        this.componentDidMount();
    }

    resetZero(){
        this.componentWillUnmount();
        this.setState({userInput:1});
        this.componentDidMount()
    }

    componentDidMount() {
        this.interval= setInterval(()=>this.countDownTime(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}

export default UserInput