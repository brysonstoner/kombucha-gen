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



class Map extends React.Component {
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
          <Button className="generateButton" onClick={this.toggle}>{this.props.buttonLabel}Where to get Kombucha</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="getStarted">
            <ModalHeader toggle={this.toggle}>
            <div className="modalTitle">
            Let Someone Else Make it For You!
            </div>
            </ModalHeader>
            <ModalBody className="modalContent">
                <div className="modalContent">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1VbNF5kqPvqkMiqCVgefes1wLb0l3UPO7" width="965" height="500" className="theMap"></iframe>
                </div>  
            </ModalBody>
            <ModalFooter>
              <Button color="light" onClick={this.toggle}>Go Get it!</Button>{' '}
              {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

  export default Map;