import { Component } from "react";

export default class ProfileClass extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Zaineb boubker",
      bio: "An enigma wandering through the chaos, drawn to beauty in all its forms, art, and fleeting moments of silence.  Always observing, rarely seen, and never truly known.",
      imgSrc: "./images/zaineb.jpg",
      profession: "LifeSurviver",
    };
  }
  render() {
    return (
      <div>
        <h1> {this.state.fullName} </h1>
        <p> {this.state.bio} </p>
        <img src={this.state.imgSrc} alt="" width="400px" />
        <h5> {this.state.profession} </h5>
      </div>
    );
  }
}
