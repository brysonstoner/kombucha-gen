import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import Generator from './generator.js';
import './generator.css';
import './background.css';
import './weather.css';
import './images/bottlelogo.jpg';
import { Parallax, Background } from 'react-parallax';
import ParallaxTest from './test.js';
import GeneratorPopup from './modal.js';
import Info from './infomodal.js';
import HowToMake from './howtomake.js';
import Map from './map.js';
import Weather from './weather.js';

export default class App extends Component {
  render() {
    return (
      <div className="Background">
        <div className="Weather">
        < Weather />
        <div className="Placeholder" />
        < ParallaxTest />
        <div className="Generator">
          < GeneratorPopup /> < Info /> < HowToMake /> < Map />
        </div>
        </div>
      </div>
    )
  }
}