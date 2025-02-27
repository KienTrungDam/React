import React from "react";
import attack from "./Images/attack.png";
import defend from "./Images/defend.png";
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefend = this.handleDefend.bind(this);
        this.state = {
            count: 0,
            gameStatus: "",
            lastPlay: "",
        };
    }
    handleAttack = () => {
        //alert("Attack clicked");
        this.setState((previousState) => {
            let newCount = previousState.count + Math.round(Math.random() * 10);
            return{
                count: newCount,
                gameStatus: newCount >= 10 ? "Attack Win" : previousState.gameStatus,
                lastPlay: "Attack",
            };
        });
    }
    handleDefend = () => {
        //alert("Defend clicked"); 
        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return{
                count: newCount,
                gameStatus: newCount <= -10 ? "Defend Lost" : previousState.gameStatus,
                lastPlay: "Defend"
            };
        });
    }
    handleReset = () => {
        //alert("Defend clicked"); 
        this.setState((previousState) => {
            return{
                count: 0
            };
        });
    }
    handleRandomPlay = () => {
        let playMode = Math.round(Math.random());
        if (playMode == 0) {
          this.handleAttack();
        } else {
          this.handleDefence();
        }
      };
    render(){
        return(
            <div className="row text-center text-white">
                <h1>Game Score: {this.state.count}</h1>
                <p>You win at +20 points and lose at -20 points</p>
                <p>Last play: {this.state.lastPlay}</p>
                <h3>Game Status: {this.state.gameStatus}</h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img src={attack} alt="" onClick={this.handleAttack} className="p-4 rounded" style={{width:"100%", cursor: "pointer", border: "1px solid green"}}/>
                </div>
                <div className="col-6 col-md-3 ">
                    <img src={defend} alt="" onClick={this.handleDefend} className="p-4 rounded" style={{width:"100%", cursor: "pointer", border: "1px solid red"}}/>
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
                    <br />
                    <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}