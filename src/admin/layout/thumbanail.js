import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Thumbanail extends Component {

    render() {
        var {match} = this.props;
        var url = match.url;

        return (
            <div className="col-md-6 col-lg-4 my-padding-bottom-19 my-filter-object my-booking-purpose">
                <div className="my-frame">
                    <div className="my-padding-bottom-12 my-filter-target">
                        <h2>{this.props.name}</h2>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="my-padding-right-8 my-padding-bottom-8 news-content">
                            <Link to={`${url}/${this.props.name}`} >
                                <span className="glyphicon glyphicon-eye-open "> Detail</span>
                            </Link>
                        </div>
                        <div className="my-padding-right-8 my-padding-bottom-8 news-content">
                            <Link to="/fwef" >
                                <span className="glyphicon glyphicon-edit"> Edit</span>
                            </Link>
                        </div>
                        <div className="my-padding-right-8 my-padding-bottom-8 news-content">
                            <Link to="/fwef" >
                                <span className="glyphicon glyphicon-trash"> Delete</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}