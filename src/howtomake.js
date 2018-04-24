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
import './images/booch1.png';
import './images/booch2.png';
import './images/booch3.png';
import './images/booch4.png';
import './images/booch5.png';
import './images/booch6.png';
import './images/booch7.png';
import './images/booch8.png';
import './images/booch9.png';


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
            <div>
            How to get started
            </div>
            </ModalHeader>
            <ModalBody>
                <div className="howToMakeDiv">
                  Some nice instructions will be here!
                  <img src={ require ('./images/booch1.png') } />
                  <img src={ require ('./images/booch2.png') } />
                  <img src={ require ('./images/booch3.png') } />
                  <img src={ require ('./images/booch4.png') } />
                  <img src={ require ('./images/booch5.png') } />
                  <img src={ require ('./images/booch6.png') } />
                  <img src={ require ('./images/booch7.png') } />
                  <img src={ require ('./images/booch8.png') } />
                  <img src={ require ('./images/booch9.png') } />
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