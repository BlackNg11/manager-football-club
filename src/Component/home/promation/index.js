import React from 'react';

import PromationAnimation from './Animation';
import Enroll from './Enroll';

const Promation = () => (
  <div className = "promotion_wrapper" style={{background: '#fff'}}>
    <div className="container">
      <PromationAnimation />
      <Enroll />
    </div>
  </div>
);

export default Promation;
