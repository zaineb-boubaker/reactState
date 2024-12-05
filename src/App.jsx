import React, { Component } from "react";
import "./App.css";
import ProfileClass from "./components/profileClass/ProfileClass";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleimg = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div id="test">
        <button onClick={this.handleimg}>
          {this.state.show ? "HIDE" : "SHOW"}
        </button>
        {this.state.show ? <ProfileClass /> : "ENZEL AAL BUTTON"}
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import ProfileClass from "./components/profileClass/ProfileClass";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false,
//     };
//     handleimg = () {
//       this.setState({ show: !this.state.show });

//     }
//   }

//   render() {
//     return (
//       <div id="test">
//         <button onClick={handleimg}> {show ? "HIDE" : "SHOW"} </button>
//         {this.state.show ? <ProfileClass /> : "ENZEL AAL BUTTON"}
//       </div>
//     );
//   }
// }

// export default App;
