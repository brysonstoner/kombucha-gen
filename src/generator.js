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
  }

  //the methods
  getFlavor1() {
    axios.post('/getFlavor1')
      .then(res => {
        const ingredsOne = res.data;
        axios.post('/getFlavor2')
          .then(res => {
            const ingredsTwo = res.data;
                      var ingredOne = ingredsOne[Math.floor(Math.random() * ingredsOne.length)];
                      var ingredTwo = ingredsTwo[Math.floor(Math.random() * ingredsTwo.length)];
            this.setState({
              name: "Why not try " + ingredOne + " with " + ingredTwo + "?"
            })
          })
        })
      }
    
  clickHandler() {
          this.getFlavor1()
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