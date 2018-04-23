import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Generator from './generator.js';
import './background.css';

import './images/bottlelogo.jpg';
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
            About This App!
            </div>
            </ModalHeader>
            <ModalBody>
                <div className="infoModal">
                  Here will be a very nice looking bunch of words, with very nice CSS!  :)
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