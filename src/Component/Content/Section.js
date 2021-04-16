import './Section.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router,    
} from "react-router-dom";
import Home from "./Home";
import Skills from './Skills';
import Contact from './Contact';
import About from './About';
import Form from './FormEntry';
class Section extends Component {
      render() {
        return (
          <Router>
            <div>             
              <ul className="header">
                <li><NavLink to="/home" activeClassName='activeClass'>Home</NavLink></li>
                <li><NavLink to="/skills" activeClassName='activeClass'>Skills</NavLink></li>
    <li><NavLink to="/form" activeClassName='activeClass'>Form Entry</NavLink></li>
                <li><NavLink to="/about" activeClassName='activeClass'>About</NavLink></li>
                <li><NavLink to="/contact" activeClassName='activeClass'>Contact</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/skills" component={Skills}/>
    <Route exact path="/form" component={Form}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/> 
              </div>
            </div>
          </Router>
        );
      }
    }

    export default Section;
