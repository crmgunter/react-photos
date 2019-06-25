import React, { Component } from 'react';
// import Webcam from 'react-webcam';
import Webcam from 'react-webcam';

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