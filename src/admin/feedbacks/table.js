import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Table extends Component {

    onDelete = (id) => {
        var { feedback } = this.props;
        if (confirm('Are you sure to delete ?')) { //eslint-disable-line
            this.props.onDelete(id);
            alert(feedback.subject + ' has successfully been deleted');
        }
    }

    render() {
        var { feedback, index } = this.props;

        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{feedback.user_name}</td>
                <td>{feedback.email}</td>
                <td scope="col">{feedback.subject}</td>

                <td className="text-center">
                    <Link to={`/showFeed/${feedback.id}`}>
                        <button type="button" className="btn btn-success btn-xs" style={{marginRight: '16px'}}><span
                            className="glyphicon glyphicon-eye-open">Detail</span></button>
                    </Link>
                    <button type="button" className="btn btn-danger btn-xs" onClick={() => this.onDelete(feedback.id)} >    Delete </button>

                </td>
            </tr>
        );
    }
}