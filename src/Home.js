import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/webcam">
                <button>Take a photo</button>
                </Link>
            </div>
        )
    }
}
