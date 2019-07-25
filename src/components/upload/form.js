import React, { Component } from 'react';
// import { storage } from 'firebase';
import { storage } from './../../Config/fire';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
    }

    handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    onSubmit = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) *100 );
                this.setState({progress});
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                });
            });
    }

    render() {
        return (
            <div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <br /><br /><br />
                    <center>
                        <progress value={this.state.progress} max="100" />

                    </center>

                    <div className='row'>

                        <div className="col-xs-0 col-sm-0 col-md-0 col-lg-2"> </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-9 contact-section contact-info">
                            <form className="contact-form">

                                <div className="row">
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        <h3>Event image: </h3>
                                    </div>
                                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                        <input type="file" id="event_image" onChange={this.handleChange} required />
                                    </div>
                                </div>

                                <center>

                                    <button style={{ marginLeft: '-200px' }}   onSubmit={this.onSubmit}
                                        className="site-btn">Post now</button>
                                </center>
                                <br />
                            </form>
                        </div>

                    </div>

                    <center>
                        <img src={this.state.url || 'https://via.placeholder.com/400x350'} alt="tuan" height="350"
                            width="400" />
                    </center>
                </div>


            </div>
        );
    }
}

export default Form;