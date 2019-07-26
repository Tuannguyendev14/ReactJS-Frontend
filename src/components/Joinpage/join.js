import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Index extends Component {

    state = {
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        age: '',
        job: '',
        createdAt: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onClear = () => {
        this.setState({
            id: '',
            id_member: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            gender: '',
            age: '',
            job: '',
            createdAt: '',
            id_event: ''
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        var { id, id_member, name, email, phone, address, gender, age, job } = this.state;
        var { match } = this.props;

        var member = {
            id_member: id_member,
            name: name,
            email: email,
            phone: phone,
            address: address,
            gender: gender,
            age: age,
            job: job,
            createdAt: new Date()
        }
        this.props.onSubmit(member);

        var register_detail = {
            id: id,
            id_event: match.params.id,
            id_member: id_member,
            member_name: name

        }

        this.props.onSubmit_Detail(register_detail);
        alert("You have registed sucessfully");
        // history.goBack();
        this.onClear();
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            console.log(id);
        }
    }

    render() {

        var { post, auth, authEmail } = this.props;

        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-xl" style={{ float: 'left', marginLeft: '-420px', width: '900px' }}>
                    <div className="modal-content" style={{ background: '#fff0fa' }}>
                        <div className="modal-header" style={{ background: '#fff7f3' }}>
                            <center>
                                <h2 className="modal-title" style={{ marginLeft: '150px' }}>Registration for</h2>
                                <h2 style={{ marginLeft: '150px', color: 'red' }}> {post.event_name} </h2>
                            </center>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="col-xs-0 col-sm-0 col-md-0 col-lg-2" />

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">
                                <form className="contact-form" onSubmit={this.onSubmit} >
                                    <input type="hidden" name="id_event" />
                                    <input type="text" placeholder="Your name" id="name" defaultValue={auth.firstName} onChange={this.onChange} required />
                                    <input type="email" placeholder="Your e-mail" id="email" defaultValue={authEmail.email} onChange={this.onChange} required />
                                    <input type="number" placeholder="Phone number" id="phone" defaultValue={auth.phoneNumber} onChange={this.onChange} required />
                                    <input type="text" placeholder="Address" id="address" onChange={this.onChange} required />
                                    <input type="text" placeholder="Age" id="age" onChange={this.onChange} required />
                                    <input type="text" placeholder="Job" id="job" onChange={this.onChange} required />
                                    <select id="gender" className="form-control" onChange={this.onChange} className="gender" required>
                                        <option></option>
                                        <option value={1} >Male</option>
                                        <option value={2}>Female</option>
                                    </select>
                                    <button type="button" style={{ marginLeft: '70px' }} className="site-btn" data-dismiss="modal">Close</button>
                                    <button style={{ marginLeft: '40px' }} type="submit" className="site-btn">Post now</button>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer" />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.profile,
        authEmail: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (member) => {
            dispatch(actions.actAddMemberRequest(member));
        },
        onSubmit_Detail: (register_detail) => {
            dispatch(actions.actAddRegisterDetailRequest(register_detail));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);