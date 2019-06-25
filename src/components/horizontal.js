import React, { Component } from 'react';


export default class Horizontal extends Component {

    render() {
        return (
            <div>
                <div className="progress">
                    <div className="progress-bar progress-bar-success" role="progressbar" style={{ width: '40%' }}>
                        <a href="#">Donate cloters</a>
                    </div>
                    <div className="progress-bar progress-bar-warning" role="progressbar" style={{ width: '20%' }}>
                        <a href="#">Donate food</a>
                    </div>
                    <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '20%' }}>
                        <a href="#">Donate books </a>
                    </div>
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={50} aria-valuemin={0}
                        aria-valuemax={100} style={{ width: '20%' }}>
                        <a href="#">Donate money</a>
                    </div>
                </div>
                <br />
            </div>

        );
    }
}