// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
import '../styles/mainStyle.css'

class TimeDate extends Component {
    constructor(props) {
        super(props);
        this.state = {zaman: new Date()};

    }

    render() {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var a = weekday[d.getDay()];

        var mydict = {'Sunday': 'یکشنبه', 'Monday': 'دو شنبه','Tuesday':'سه شنبه','Wednesday':'چهارشنبه','Thursday':'پنجشنبه','Friday':'جمعه','Saturday':'شنبه'};

        return (
            <div class="container">
                <p id="time">
                    <p style={{fontFamily:"Calibri, cursive",fontSize:"40px",color:"rgb(3, 69, 55)"}}><i>{this.state.zaman.toLocaleTimeString('uk')}</i></p>
                    ({mydict[a]}) &nbsp;
                    {a}
                </p>
                <div class="row" style={{position:"relative",textAlign:"center"}}>
                    <br/>
                    <div class="items col-4">
                        <p class="txts">(خورشیدی) Irani</p>
                        <p className="dates">{this.state.zaman.toLocaleDateString('fa-IR')}</p>
                        <hr/>

                    </div>
                    <div class="items col-4">
                        <p class="txts"> (میلادی) Gregorian</p>
                        <p className="dates">{this.state.zaman.toLocaleDateString('en')}</p>
                        <hr/>
                    </div>
                    <div class="items col-4-5">
                        <p className="txts">(قمری) Hijri</p>
                        <p className="dates">{this.state.zaman.toLocaleDateString('ar-SA')}</p>

                        <hr/>
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    tick() {
        this.setState({zaman: new Date()})
    }
}

export default TimeDate