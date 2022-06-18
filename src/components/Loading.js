import React from 'react';
import './Loading.scss';
import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
  return (
    <div className="loading-wrapper">
        <SpinnerDotted size={90} thickness={122} speed={136} color="rgba(57, 172, 158, 1)" />
    </div>
  )
}

export default Loading;
