// import React from "react";
// import "./App.css";
// import PureComponent from './Components/PureComponent'
// import RegularComponent from './Components/RegularComponent'

// /**
//  * TODO: Please import the `RegularComponent` and `PureComponent`
//  */
// class App extends React.Component {
//   /**
//    * TODO: Please add a state to this component, the key is `name` and the initial value is `John`
//    */

//   state = {
//     name: 'John',
//     count: 0,
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* TODO: Please update the value of state `name` to `John` */}
//         <button
//           onClick={() => {
//             this.setState({
//               name: 'John',
//               count: this.state.count + 1
//             })
//           }}
//         >
//           Update state
//         </button>
//         <p>{this.state.count}</p>
//         <PureComponent name={this.state.name} />
//         <RegularComponent name={this.state.name} />
//         {/* 
//           TODO: Please attach the `RegularComponent` and `PureComponent` here
//         */}
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react';
import './App.css';
import ButtonCounter from './Components/ButtonCounter';

class App extends React.Component {
  state = {
    show: false,
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App" >
        <button onClick={this.handleShow}>{this.state.show ? 'Hide Counter' : 'Show Counter'}</button>
        <p>{this.state.show && <ButtonCounter />}</p>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react'
// import TextBox from './Components/TextBox';

// class App extends React.Component {

//   render() {
//     return (
//       <TextBox />
//     )
//   }
// }

// export default App;