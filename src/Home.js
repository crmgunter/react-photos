import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/webcam">
                <button>Take a photo with react-html5-camera-photo</button>
                </Link>
                <Link to="/react-webcam">
                <button>Take a photo with react-webcam</button>
                </Link>
            </div>
        )
    }
}
