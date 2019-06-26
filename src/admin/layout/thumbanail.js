import React, { Component } from 'react';



export default class Thumbanail extends Component {

render() {
return (
<div className="col-md-6 col-lg-4 my-padding-bottom-19 my-filter-object my-booking-purpose">
    <div className="my-frame">
        <div className="my-padding-bottom-12 my-filter-target">
            <h2>Co doi giam ngheo</h2>
        </div>
        <div className="d-flex flex-wrap">
            <div className="my-padding-right-8 my-padding-bottom-8 news-content">
                <a href=" ">
                    <span className="glyphicon glyphicon-eye-open "> Detail</span>
                </a>
            </div>
            <div className="my-padding-right-8 my-padding-bottom-8 news-content">
                <a href=" ">
                     <span className="glyphicon glyphicon-edit"> Edit</span>
                </a>
            </div>
            <div className="my-padding-right-8 my-padding-bottom-8 news-content">
                <a href=" ">
                     <span className="glyphicon glyphicon-trash"> Delete</span>
                </a>
            </div>
        </div>
    </div>
</div>
);
}


}