import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Generator from './generator.js';
import './generator.css';
import './background.css';
import './images/bottlelogo.jpg';
import { Parallax, Background } from 'react-parallax';
import ParallaxTest from './test.js';



class HowToMake extends React.Component {
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
        <div className="popup">
          <Button className="generateButton" onClick={this.toggle}>{this.props.buttonLabel}Get Your First Batch Started</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>
            <div className="modalTitle">
            How to get started
            </div>
            </ModalHeader>
            <ModalBody>
                <div>
                  Some nice instructions will be here!
                </div>  
            </ModalBody>
            <ModalFooter>
              <Button color="light" onClick={this.toggle}>Nice!</Button>{' '}
              {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

  export default HowToMake;