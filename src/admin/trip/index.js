import React, { Component } from 'react';
import Aside from './../aside'
import Header from './../header'



export default class indexTrip extends Component {

    render() {
        return (
            <body>
                <section id="container" >
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <div className="container" style={{ marginTop: '20px', fontFamily: 'initial', fontSize: '18px' }}>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                <form action="Insert.php" method="POST" role="form" encType="multipart/form-data">
                                    <div className="page-header clearfix">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <h2 style={{ fontFamily: 'time new roman', color:'#0d3dec', fontSize:'40px', fontWeight:'bold' }}>Manage status</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-sm-4  ">
                                            <label> Tên sản phẩm </label>
                                        </div>
                                        <div className="  col-sm-7  ">
                                            <input type="text" className="form-control" name="txtName" placeholder="Nhập tên sản phẩm" required /><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="  col-sm-4  ">
                                            <label> Mã sản phẩm </label>
                                        </div>
                                        <div className=" col-sm-7  ">
                                            <input type="text" className="form-control" name="code" placeholder="Nhập mã sản phẩm" required /><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-sm-4  ">
                                            <label> Chọn hình ảnh sản phẩm </label>
                                        </div>
                                        <div className=" col-sm-7  7">
                                            <input type="file" name="fileUpload" id="input" />
                                            <span style={{ color: 'red' }}>{/*?php   $notimage; ?*/}</span><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-sm-4  4">
                                            <br /><label> Số lượng sản phẩm </label>
                                        </div>
                                        <div className="  col-sm-7 ">
                                            <br /><input type="number" className="form-control" name="txtNumber" placeholder="Nhập số lượng sản phẩm" required /><br />
                                            <img src />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-sm-4  ">
                                            <label> Giá sản phẩm </label>
                                        </div>
                                        <div className="  col-sm-7  ">
                                            <input type="number" className="form-control" name="txtPrice" placeholder="Nhập giá sản phẩm" min={20000} required /><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="  col-sm-4  ">
                                            <br /><label> Mô tả sản phẩm </label>
                                        </div>
                                        <div className=" col-sm-7  ">
                                            <br /><textarea className="form-control" rows={3} name="txtDescript" defaultValue={""} /><br />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="  col-sm-4  ">
                                        </div>
                                        <div className=" col-sm-2 ">
                                            <button className="btn btn-primary btn-lg btn-block" type="submit" name="addProduct">Add </button>
                                        </div>
                                        <div className="  col-sm-2 ">
                                            <button className="btn btn-primary	 btn-lg btn-block" type="reset" value="Reset">Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    
                </section>





            </body >
        );
    }


}

