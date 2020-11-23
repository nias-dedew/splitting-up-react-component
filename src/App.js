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

class App extends React.Component {
  state = {
    counter: 0,
    showButton: false
  }

  IncrementItem = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  DecreamentItem = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  // toggleButton = () => {
  //   this.showButton ? "ShowButton" : "HideButton"
  // }

  render() {
    return (
      <div className="App" >
        <button onClick={this.toggleButton}>Click me!</button> <br />
        <button onClick={this.DecreamentItem}>-</button>
        <input className="InputNumber" value={this.state.counter} />
        <button onClick={this.IncrementItem}>+</button>
      </div>
    );
  }
}

export default App;