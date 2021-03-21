import React, {Component} from "react";
import Camera, {FACING_MODES, IMAGE_TYPES} from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import {Link} from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

class WebcamMain extends Component {
    constructor() {
        super();

        this.cropperRef = React.createRef(null);

        this.state = {
            photo: null,
            croppedPhoto: null,
            cropped: false,
            cropper: null,
            cropData: null
        };
    }

    onTakePhoto(dataUri) {
        // Do stuff with the photo...
        this.setState({photo: dataUri});
    }

    onCameraError(error) {
        console.error("onCameraError", error);
    }

    onCameraStart(stream) {
        console.log("onCameraStart");
    }

    onCameraStop() {
        console.log("onCameraStop");
    }

    reset = () => {
        this.setState({photo: null});
    };

    // onTakePhoto = (dataUri) => {
    //     // Do stuff with the dataUri photo...
    //     this.setState({photo: dataUri})
    // }

    onCrop = () => {
        const imageElement = this.cropperRef && this.cropperRef.current;
        const cropper = imageElement && imageElement.cropper;
        // console.log(cropper.getCroppedCanvas().toDataURL());

        // this.setState({croppedPhoto: cropper.getCroppedCanvas().toDataURL()});
    };

    submitCrop = () => {
        if (typeof this.state.cropper !== "undefined") {
            this.setState({cropData: this.state.cropper.getCroppedCanvas().toDataURL(), cropped: true})
        }
    };

    render() {
        console.log(navigator);

        return (
            <div>
                {this.state.photo ? (
                    <div>
                        <div>
                            {!this.state.cropped ? <Cropper
                                src={this.state.photo}
                                style={{height: 400, width: "100%", border: "1px solid yellow"}}
                                // Cropper.js options
                                initialAspectRatio={4 / 3}
                                aspectRatio={4 / 3}
                                guides={false}
                                crop={this.onCrop}
                                // dragMode={"move"}
                                modal={false}
                                ref={this.cropperRef}
                                onInitialized={(instance) => {
                                    this.setState({cropper: instance})
                                }}
                            /> : false}

                            {/* <img src={this.state.croppedPhoto} alt={this.state.photo.name} /> */}
                            <img src={this.state.cropData} alt={"cropped"} />
                        </div>

                        <button onClick={this.submitCrop}>Looks good!</button>
                        <div>
                            <button onClick={this.reset}>Retake?</button>
                        </div>
                    </div>
                ) : (
                        <Camera
                            onTakePhoto={(dataUri) => {
                                this.onTakePhoto(dataUri);
                            }}
                            onCameraError={(error) => {
                                this.onCameraError(error);
                            }}
                            // idealFacingMode={FACING_MODES.ENVIRONMENT}
                            idealResolution={{width: 800, height: 600}}
                            //   imageType = {IMAGE_TYPES.JPG}
                            //   imageCompression = {0.97}
                            isMaxResolution={true}
                            //   isImageMirror = {false}
                            //   isSilentMode = {true}
                            //   isDisplayStartCameraError = {true}
                            isFullscreen={false}
                            //   sizeFactor = {1}
                            onCameraStart={(stream) => {
                                this.onCameraStart(stream);
                            }}
                            onCameraStop={() => {
                                this.onCameraStop();
                            }}
                        />
                    )}
            </div>
        );
    }
}

export default WebcamMain;
