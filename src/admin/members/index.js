import React, { Component, Fragment } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import MemberThumbanail from './thumbanail';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class indexMember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllMembers();
    }

    onDelete = (id) => {
        this.props.onDeleteMember(id);
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

        var { members, filter } = this.props;

        if (filter.name) {
            members = members.filter((member) => {
                return member.name.toLowerCase().indexOf(filter.name) !== -1;
            });
        }

        var results = members.map((member, index) => {
            var result = null;
            if (members.length > 0) {
                result = <MemberThumbanail key={index} index={index}
                    member={member} onDelete={this.onDelete} />
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
                        <center>
                            <h1>List of Members</h1>
                        </center><br />
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
                            <div className="col-xs-11 col-sm-11 col-md-11 col-lg-8">
                                <input type="text" className="form-control  " placeholder="Filter ...."
                                    style={{ borderRadius: '18px', background: '#f0f0f0', fontSize: '20px' }}
                                    value={this.state.filterName} onChange={this.onChange} name="filterName"
                                />
                            </div>
                        </div>
                        <div className="row">
                            {results}
                        </div>

                    </section>

                </section>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        members: state.members,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllMembers: () => {
            dispatch(actions.actFetchMembersRequest());
        },
        onDeleteMember: (id) => {
            dispatch(actions.actDeleteMemberRequest(id));
        },
        onFilter: (filter) => {
            dispatch(actions.filterPost(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(indexMember);