import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Generator from './generator.js';
import './background.css';

import './images/bottlelogo.png';
import { Parallax, Background } from 'react-parallax';
import ParallaxTest from './test.js';



class Info extends React.Component {

    constructor(props) {
      super(props);
      
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      return (
        <div>
          <Button className="generateButton" onClick={this.toggle}>{this.props.buttonLabel}Click Here For Info!</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>
            <div className="modalTitle">
            About BKR!
            </div>
            </ModalHeader>
            <ModalBody>
                <div id="aboutBKR">
                 <h2> Hello and welcome to the Bozeman Kombucha Resource!</h2>
                 <br />
                 <h4> This is an online resource for the kombucha enthusiast of any level.  Whether you're starting with just tea, sugar, and water, or are looking for a local establishment that will pour you some tasty 'booch, you've found the right place!</h4>
                 <br/>
                 <h4> Also included in this guide:</h4>
                  <h5>- Tired of making the same ol' flavor?  Try our flavor generator.</h5>
                  <h5>- Did you try something that turned out great?  Submit the flavor to our database!</h5>
                </div>  
            </ModalBody>
            <ModalFooter>
              <Button color="light" onClick={this.toggle}>Okay!</Button>{' '}
              {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default Info;