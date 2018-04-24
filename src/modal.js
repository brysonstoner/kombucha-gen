import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Generator from './generator.js';
import './generator.css';
import './background.css';
import './images/bottlelogo.png';
import { Parallax, Background } from 'react-parallax';
import ParallaxTest from './test.js';
import AddFlavor from './addflavor.js';

class GeneratorPopup extends React.Component {
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
          <Button className="generateButton" onClick={this.toggle}>{this.props.buttonLabel}Try the Flavor Generator!</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader className="modalTitle" toggle={this.toggle}>
            <div className="modalTitle">
            Kombucha Flavor Generator
            </div>
            </ModalHeader>
            <ModalBody>
                <div>
                  < Generator />
                  <br />
                  < AddFlavor />
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
  
  export default GeneratorPopup;