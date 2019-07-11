import React, { Component, Fragment } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import Table from './table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class indexFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllFeedback();
    }

    onDelete = (id) => {
    this.props.onDeleteFeedback(id);
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName
        };
        this.props.onFilter(filter);
        this.setState({
            [name]: value
        });
    }

    render() {
        var { feedbacks, filter } = this.props;

        // if (filter.name) {
        // feedbacks = feedbacks.filter((feedback) => {
        // return post.event_name.toLowerCase().indexOf(filter.name) !== -1;
        // });
        // }

        var results = feedbacks.map((feedback, index) => {
            var result = null;
            if (feedbacks.length > 0) {
                result =
                    <Table key={index} index={index} feedback={feedback} onDelete={this.onDelete} />
            }
            return result;
        });

        return (
            <Fragment>
                <section id="container">
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 css">
                                    <h2 style={{color:'red'}}>Customer's feedbacks</h2><br />
                                    <table className="table table-striped table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Message</th>
                                                <th scope="col">Tool</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {results}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        feedbacks: state.feedbacks,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllFeedback: () => {
            dispatch(actions.actFetchFeedbackRequest());
        },
        onDeleteFeedback: (id) => {
        dispatch(actions.actDeleteFeedbackRequest(id));
        }
        // ,
        // onFilter: (filter) => {
        // dispatch(actions.filterPost(filter));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(indexFeedback);