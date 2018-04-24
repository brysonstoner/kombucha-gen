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
    // this.getFlavor2 = this.getFlavor2.bind(this);
  }

  //the methods
  getFlavor1() {
    axios.post('/getFlavor1')
      .then(res => {
        const ingredsOne = res.data;
        axios.post('/getFlavor2')
          .then(res => {
            const ingredsTwo = res.data;
            console.log(ingredTwo, "ingredientsTwo");
                      var ingredOne = ingredsOne[Math.floor(Math.random() * ingredsOne.length)];
                      var ingredTwo = ingredsTwo[Math.floor(Math.random() * ingredsTwo.length)];
            this.setState({
              name: "Why not try " + ingredOne + " with " + ingredTwo + "?"
              // return ingredientsOne;
              // return ingredientsTwo;
            })
          })
        })
      }
    
  // getFlavor2() {
  //   axios.post('/getFlavor2')
  //     .then(res => {
  //       const ingredientsTwo = res.data;
  //       console.log(ingredientsTwo, "ingredientsTwo");
  //       return ingredientsTwo;
  //     })
  // }
  clickHandler() {
          this.getFlavor1()
    //         .then()
    // this.getFlavor2();
          // // console.log(ingredientsOne, "1");
          // // console.log(ingredientsTwo, "2");

          // if (this.state.initialized) {
          // var ingredOne = ingredients1[Math.floor(Math.random() * ingredients1.length)];
          // }
          // var ingredTwo = ingredients2[Math.floor(Math.random() * ingredients2.length)];
          // this.setState({
          //   // name: "Why not try " + ingredOne + " with " + ingredTwo + "?"
          // });
          // // console.log("Hey! Try this flavor combination: " + ingredOne + " and " + ingredTwo + ".");
          // this.clickHandler = this.clickHandler.bind(this);
          //     // var ingredOne = ingredients1[Math.floor(Math.random() * ingredients1.length)];
          //     // var ingredTwo = ingredients2[Math.floor(Math.random() * ingredients2.length)];
          // console.log("catch me outside");
        }

  render() {
          if(this.state.initialized) { console.log(this.state) }
    return(
      <div>
        <Button className="generateButton" onClick={this.clickHandler} > Click Here to Generate a Flavor! </Button>
        <br />
        <br />
        <div className="genText">
          {this.state.name}
        </div>
      </div >
    );
  }
}

export default Generator;



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


    // var ingredOne = this.state.ingredOne;
    // var ingredTwo = this.state.ingredTwo;
    // var ingredients1 = [this.getFlavor1()]
    // var ingredients2 = [this.getFlavor2()]
// let ingredOne = ingredientsOne;
// let ingredTwo = ingredientsTwo;
// console.log(ingredOne, "ingredOne");
// console.log(ingredTwo, "ingredTwo");


    // var ingredients1 = ["orange", "lime", "lemon", "watermelon", "cherry", "grapefruit", "huckleberry", "strawberry", "pineapple", "peach", "rhubarb"];
    // var ingredients2 = ["sage", "rosemary", "vanilla", "ginsing", "turnip", "wheatgrass", "mint", "lemongrass", "açai", "ginger", "beet juice"];
    // this.getFlavor1 = this.getFlavor1.bind(this);
    // this.getFlavor2 = this.getFlavor2.bind(this);
    // this.getFlavor1()
  //former code below
  // {
  //   axios.post('/getFlavor2', {
  //     result: this.state.ingredTwo,
  //   }).then((res) => {
  //     this.setstate
  //     return (res.data.flavorname);
  //     this.setState(
  //       {
  //         arr2: res.data.flavorname,
  //         initialized: true
  //       })
  //     //thenwhat??
  //   })
  // }

