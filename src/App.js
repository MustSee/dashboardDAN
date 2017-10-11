import React from 'react';
import logo from './logo.svg';
import './App.css';

import {myOrganisation} from './requests.js';


// Main component class
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: null
    }
  }

  componentWillMount() {
   console.log("This will mount");
 }

  // It's the best place to perform network and AJAX calls.
  // Any DOM interactions should always happen in this phase not inside the render method.
  componentDidMount() {
    console.log("This did mount");

    // function param
    var organisationID = "orga_18c5168b-a5c6-4585-8284-71771abe434b";

    var req = myOrganisation(organisationID);
    // ! If I don't use ES6 syntax, this is undefined
    req.onValue(results => {
      console.log(this);
      // Convert received Object in Array
      // Because : Objects are not valid as a React child
      // for older browser compability : Object.keys(map).map((key) => map[key]);
      var arrayResults = Object.values(results);
      this.setState({tab: arrayResults});
    });
  }

 componentWillUnmount() {
   console.log("This will unmount");
 }

 componentDidUpdate() {

 }
//Neither props nor state should should be modified inside this function.
  render() {
    console.log("I am just rendering like a boss");
    console.log(this.state.tab);

    this.list =
    this.state.tab ?
    this.state.tab.map((item, index)=> {
      // Remove the null and boolean values
      if (item !== null && typeof item !== 'boolean') {
        return <li key={index}>
                {item}
              </li>
      } else {
        // Expected to return a value at the end of arrow function  array-callback-return
        return '';
      }
    })
    : <div></div>


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ol>{this.list}</ol>
      </div>
    );
  }
}

export default App;
