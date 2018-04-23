import React, { Component } from 'react';
import './generator.css';
import './images/headerFooter.png';
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form, FormGroup, Label, Input, FormText, Modal
} from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';

class Generator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      arr1: null,
      arr2: null,
      initialized: false
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.getFlavor1 = this.getFlavor1.bind(this);
    this.getFlavor2 = this.getFlavor2.bind(this);
  }

  //the methods
  /*
    getFlavor1() {
      axios.post('/getFlavor1', {
        result: this.state.ingredOne,
        // flavor1: this.state.flavor1,
      }).then((res) => {
          // this.setstate
          return (res.data.flavorname);
          this.setState(
            {arr1: res.data.flavorname, 
              initialized: true})
        //wtf am I doing?
        // toggle() { 
        // result: this.state.flavor1
        // }
      })
    }
  */

  getFlavor1() {
    axios.post('/getFlavor1')
      .then(res => {
        console.log(res, "first");
        const ingredOne = res.data;
        console.log(ingredOne, "w flavname");
        return ingredOne;
        console.log(ingredOne, "ingredOne")
      })
  }

  getFlavor2() {
    axios.post('/getFlavor2', {
      result: this.state.ingredTwo,
    }).then((res) => {
      this.setstate
      return (res.data.flavorname);
      this.setState(
        {
          arr2: res.data.flavorname,
          initialized: true
        })
      //thenwhat??
    })
  }

  clickHandler() {
    // this.getFlavor1 = this.getFlavor1.bind(this);
    // this.getFlavor2 = this.getFlavor2.bind(this);
    // this.getFlavor1()
    this.getFlavor1();
    this.getFlavor2();

    var ingredOne = this.state.ingredOne;
    var ingredTwo = this.state.ingredTwo;
    // var ingredients1 = [this.getFlavor1()]
    // var ingredients2 = [this.getFlavor2()]
    console.log(ingredOne);
    console.log(ingredTwo);

    // var ingredients1 = ["orange", "lime", "lemon", "watermelon", "cherry", "grapefruit", "huckleberry", "strawberry", "pineapple", "peach", "rhubarb"];
    // var ingredients2 = ["sage", "rosemary", "vanilla", "ginsing", "turnip", "wheatgrass", "mint", "lemongrass", "açai", "ginger", "beet juice"];
    if (this.state.initialized) {
      ingredOne = this.state.arr1[Math.floor(Math.random() * this.state.arr1.length)];
    }
    // var ingredTwo = ingredients2[Math.floor(Math.random() * ingredients2.length)];
    this.setState({
      name: "Why not try " + ingredOne + " with " + ingredTwo + "?"
    });
    console.log("Hey! Try this flavor combination: " + ingredOne + " and " + ingredTwo + ".");
    this.clickHandler = this.clickHandler.bind(this);
    // console.log(ingredOne);
    // console.log(ingredTwo);
  }

  render() {
    if (this.state.initialized) { console.log(this.state) }
    return (
      <div>
        <Button className="generateButton" onClick={this.clickHandler} > Click Here to Generate a Flavor! </Button>
        <br />
        <br />
        <div className="genText">
          {this.state.name}
        </div>
      </div>
    );
  }
}

export default Generator;