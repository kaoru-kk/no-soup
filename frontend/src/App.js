import React, {Component} from 'react';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import './App.css';
import Navbar from './router/Navbar';
import About from "./router/About"
import Home from "./router/Home"

class App extends Component {
  render(){
    return (
      <div className="App">
          <Router>
            <div>
              <Navbar /> <hr />
  
              <Route exact path="/" component={Home} />
              <Route path="/About" render={ () => <About name={"TOM"} />} />
            </div>
          </Router>
      </div>
    );
  }  
  }

export default App;
