import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import Generator from './generator.js';
import './generator.css';
import './background.css';
import './images/bottlelogo.png';
import { Parallax, Background } from 'react-parallax';
import ParallaxTest from './test.js';
import GeneratorPopup from './modal.js';

export default class Map extends Component {

    render() {
      return (
        <div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.8836417222583!2d-111.03855879003572!3d45.69330706668669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534544402c17d7ff%3A0x1c330baa4d0f6009!2sDean&#39;s+Zesty+Booch!5e0!3m2!1sen!2sus!4v1523461715239" width="600" height="450" frameborder="0" allowfullscreen></iframe> */}
          <iframe src="https://www.google.com/maps/d/embed?mid=130ML-iZG0C7VS74bKncp6L5KMa9HQFY8" width="500" height="400"></iframe>
        </div>
      )
    }
  }