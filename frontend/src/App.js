import React, {Component} from 'react';
import Button from "@material-ui/core/Button"
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header/Header";


class App extends Component {
  
  render(){
    return (
      <div className="App">
            <div>
              <Header />
            </div>
      </div>
    );
  }  
}

export default App;
