import React, { Component } from 'react';
// import Webcam from 'react-webcam';
import Webcam from '@cliener/react-webcam';
import adapter from 'webrtc-adapter';

class ReactWebcam extends Component {
    render() {
        const videoConstraints = {
            facingMode: "user"
          };

        return (
            <div>
                <Webcam videoConstraints={videoConstraints}/>
            </div>
        );
    }
}

export default ReactWebcam;