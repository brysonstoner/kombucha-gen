import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './test.css';

const ParallaxTest = () => (
  <div className="backgroundJar">
    <div className='insideBackgroundJar'>
    <Parallax
    //   blur={10}
      bgImage={require('./images/longboochjar.png')}
      bgImageAlt="logo"
      strength={350}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div className="Placeholder" /> */}
      {/* < Placeholder /> */}
      {/* <div style={{ height: '200px', width: '90%' }} /> */}
    </Parallax>
    {/* <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./images/parallax2.jpg')}
      bgImageAlt="thing2"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '200px' }} />
    </Parallax> */}
    {/* <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
      </Background>
    </Parallax> */}
   </div> 
  </div>
);
export default ParallaxTest;