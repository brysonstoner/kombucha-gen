import React, { Component } from 'react';
import './generator.css';

class Generator extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:""
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    var ingredients1 = ["orange", "lime", "lemon", "watermelon", "cherry", "grapefruit", "huckleberry", "strawberry", "pineapple", "peach", "rhubarb"];
    var ingredients2 = ["sage", "rosemary", "vanilla", "ginsing", "turnip", "wheatgrass", "mint", "lemongrass", "açai", "ginger", "beet juice"];
    
    var ingredOne = ingredients1[Math.floor(Math.random() * ingredients1.length)];
    var ingredTwo = ingredients2[Math.floor(Math.random() * ingredients2.length)];

    this.setState({
        name: "Why not try " + ingredOne + " with " + ingredTwo + "?"
    });
    console.log("Hey! Try this flavor combination: " + ingredOne + " and " + ingredTwo + ".");
    this.clickHandler = this.clickHandler.bind(this);
    }
  
  render() {
    return (
      <div className="genPopup">
        <button onClick={this.clickHandler} > Click Here to Generate a Flavor! </button>
        <br />
        <br />
        {this.state.name}
      </div>
    );
  }
}

export default Generator;