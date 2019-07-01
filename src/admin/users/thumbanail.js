import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Thumbanail extends Component {

render() {

return (
<div className="col-md-6 col-lg-4 my-padding-bottom-19 my-filter-object my-booking-purpose">
    <div className="my-frame">
        <div className="my-padding-bottom-12 my-filter-target">
            <h2>tuan</h2>
        </div>
        <div className="d-flex flex-wrap">
            <div className="my-padding-right-8 my-padding-bottom-8  ">
                <Link to="/lll">
                <button type="button" className="btn btn-success mr-10"><span
                        className="glyphicon glyphicon-eye-open">Detail</span></button>
                </Link>
            </div>
            <div className="my-padding-right-8 my-padding-bottom-8  ">
                <Link to="/fwef">
                <button type="button" className="btn btn-primary mr-10">
                    <span className="glyphicon glyphicon-edit">Edit</span></button>
                </Link>
            </div>
            <div className="my-padding-right-8 my-padding-bottom-8 ">
                <Link to="/fwef">
                <button type="button" className="btn btn-danger mr-10">
                    <span className="glyphicon glyphicon-trash">Delete</span></button>
                </Link>
            </div>
        </div>
    </div>
</div>
);
}


}