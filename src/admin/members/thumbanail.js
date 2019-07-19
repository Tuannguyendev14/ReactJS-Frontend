import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MemberThumbanail extends Component {

    onDelete = (id) => {
        var { member } = this.props;
        if (confirm('Are you sure to delete this member?')) { //eslint-disable-line
            this.props.onDelete(id);
            alert(member.name + ' has successfully been deleted');
        }
    }

    render() {
        var { member } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 my-padding-bottom-19   ">
                <div className="my-frame">
                    <div className="my-padding-bottom-12  ">
                        <h2 className="mr-bot">{member.name}</h2>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="my-padding-right-8 my-padding-bottom-8  ">
                            <Link to={`/showMember/${member.id}`}>
                                <button type="button" className="btn btn-success mr-10"><span
                                    className="glyphicon glyphicon-eye-open"> Detail</span></button>
                            </Link>
                        </div>
                         
                        <div className="my-padding-right-8 my-padding-bottom-8 ">
                            <Link to="/members">
                                <button type="button" className="btn btn-danger mr-10">
                                    <span className="glyphicon glyphicon-trash" onClick={() => this.onDelete(member.id)}> Delete</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}