import React, { Component } from 'react';

export default class Control extends Component {
    render() {
        return (
            <div>
                <input type="text" className="form-control" name="filterName" placeholder="Filter ...." style={{ borderRadius: '18px', background: '#f0f0f0', fontSize: '20px' }} />
            </div>
        );
    }
}