import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  state = {
    hiScore : 0
  } 
  render () {
    return  (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="/" className="navbar-brand" id="brand">
                Clicky Game!
              </a>
              <h4 className="nav navbar-text navbar-center">Click an image to begin!</h4> 
              <h4 className="nav navbar-text navbar-right">Score: {this.props.score} | Top Score: {this.props.hiScore}</h4> 
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

export default Nav;