import React, {Component} from 'react';
import Camera, {FACING_MODES, IMAGE_TYPES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {Link} from 'react-router-dom'

class WebcamMain extends Component {
    state = {
        photo: null
    }

    onTakePhoto(dataUri) {
        // Do stuff with the photo...
        this.setState({photo: dataUri})
    }

    onCameraError(error) {
        console.error('onCameraError', error);
    }

    onCameraStart(stream) {
        console.log('onCameraStart');
    }

    onCameraStop() {
        console.log('onCameraStop');
    }

    reset = () => {
        this.setState({photo: null})
    }

    // onTakePhoto = (dataUri) => {
    //     // Do stuff with the dataUri photo...
    //     this.setState({photo: dataUri})
    // }

    render() {
        console.log(navigator)
        return (
            <div>
                {this.state.photo ?
                    <div>
                        <div><img src={this.state.photo} alt={this.state.photo.name} /></div>

                        <Link to="/profile">
                            <button>Looks good!</button>
                        </Link>
                        <div><button onClick={this.reset}>Retake?</button></div>
                    </div> : <Camera
                        onTakePhoto={(dataUri) => {this.onTakePhoto(dataUri);}}
                        onCameraError={(error) => {this.onCameraError(error);}}
                        // idealFacingMode={FACING_MODES.ENVIRONMENT}
                        idealResolution={{width: 800, height: 600}}
                        //   imageType = {IMAGE_TYPES.JPG}
                        //   imageCompression = {0.97}
                          isMaxResolution = {true}
                        //   isImageMirror = {false}
                        //   isSilentMode = {true}
                        //   isDisplayStartCameraError = {true}
                          isFullscreen = {true}
                        //   sizeFactor = {1}
                        onCameraStart={(stream) => {this.onCameraStart(stream);}}
                        onCameraStop={() => {this.onCameraStop();}}
                    />}
                
            </div >
        );
    }
}

export default WebcamMain;