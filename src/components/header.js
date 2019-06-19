import React,{Component}from 'react';
import {Link} from 'react-router-dom';
 
export default class Header extends Component{


	render(){
		return (
			<div className="wapper">
                <div className="row fixtop">
                	<div className="row ">
                		<div id="header">
					        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 logo">
					           <a ><img src=" " className="img-responsive" alt="Image" /> </a>
					        </div>
					        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
					            <div className="row">
					                <div className="bar">
						                <a style={{width: '30%'}} href=" ">Store Locator <i className="glyphicon glyphicon-map-marker hvr-grow a" /></a>
						                <a style={{width: '40%'}} href=" ">My Account <i className="glyphicon glyphicon-user  hvr-grow a" /></a>
						                <a style={{width: '30%'}} href=" ">My Cart <i className="glyphicon glyphicon-shopping-cart  hvr-grow a1" /><i id="cart">0</i>
						                </a>
					                </div>
					            </div>
					            <div className="row">
					                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 offset-1">
					                    <div className="row">
					                        <div className="search">
					                            <div className="input-group">
					                                <input type="text" className="  search-query form-control" placeholder="Search" />
					                                <span className="input-group-btn">
						                                <button style={{float: 'left'}} className="btn btn-danger" type="button">
						                                    <span className=" glyphicon glyphicon-search" />
						                                </button>
					                                </span>
					                            </div>
					                        </div>
					                    </div>
					             
					                </div>
					            </div>
					        </div>
                        </div>
                	</div>
                	 <div style={{marginLeft: '5px', marginRight: '3px'}} className="row">
        <div className="row">
          <div className="row na1">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <nav style={{backgroundColor: 'aliceblue'}} className="navbar navbar-default" role="navigation">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <button style={{float: 'left', marginLeft: '12px'}} type="button" className="navbar-toggle glyphicon glyphicon-shopping-cart">
                  </button>
                  <button style={{float: 'left'}} type="button" className="navbar-toggle glyphicon glyphicon-user">
                  </button>
                  <button style={{float: 'left'}} type="button" className="navbar-toggle glyphicon glyphicon-map-marker">
                  </button>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                  <ul className="nav navbar-nav menu">
                    <li className="search2">
                      <div className="input-group">
                        <input style={{marginLeft: '5px'}} type="text" className="  search-query form-control" placeholder="Search" />
                        <span className="input-group-btn">
                          <button style={{marginRight: '5px'}} className="btn btn-danger" type="button">
                            <span className=" glyphicon glyphicon-search" />
                          </button>
                        </span>
                      </div>
                    </li>
                    <li className="menufull"><a href="javascript:void(0)">Thương Hiệu</a>
                      <div className="row">
                        <ul style={{width: '1050%'}} className="nav navbar-nav menu-sub-full">
                          <div className="row-fluid">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                              <li style={{width: '200%'}} className="media">
                                <div className="media-body">
                                  <ul className="unstyled">
                                    <li>
                                      <h4 href="#">Hãng Bán Chạy</h4>
                                    </li>
                                    <li><a href="#">Casio</a></li>
                                    <li><a href="#">Citizen</a></li>
                                    <li><a href="#">Seiko</a></li>
                                    <li><a href="#">Op</a></li>
                                    <li><a href="#">Sakagen</a></li>
                                    <li><a href="#">Op</a></li>
                                  </ul>
                                </div>
                              </li>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                              <li style={{width: '200%'}} className="media">
                                <div className="media-body">
                                  <ul className="unstyled">
                                    <li>
                                      <h4 href="#">Đồng Hồ Cao Cấp</h4>
                                    </li>
                                    <li><a href="#">Patek Philipe</a></li>
                                    <li><a href="#">Sarcar</a></li>
                                    <li><a href="#">Zenith</a></li>
                                    <li><a href="#">Rolex</a></li>
                                    <li><a href="#">Sakagen</a></li>
                                    <li><a href="#">Op</a></li>
                                  </ul>
                                </div>
                              </li>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                              <li style={{width: '200%'}} className="media">
                                <div className="media-body">
                                  <ul className="unstyled">
                                    <li>
                                      <h4 href="#">Đồng Hồ Thụy Sỹ</h4>
                                    </li>
                                    <li><a href="#">Oris</a></li>
                                    <li><a href="#">Titoni</a></li>
                                    <li><a href="#">Longines</a></li>
                                    <li><a href="#">CC Watches</a></li>
                                    <li><a href="#">Cover</a></li>
                                    <li><a href="#">Rado</a></li>
                                  </ul>
                                </div>
                              </li>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                              <li style={{width: '200%'}} className="media">
                                <div className="media-body">
                                  <ul className="unstyled">
                                    <li>
                                      <h4 href="#">Đồng Hồ Nhật</h4>
                                    </li>
                                    <li><a href="#">Casio</a></li>
                                    <li><a href="#">Citizen</a></li>
                                    <li><a href="#">Orients</a></li>
                                    <li><a href="#">Seiko</a></li>
                                  </ul>
                                </div>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </li>
                    <li><a href="#">Đồng Hồ Nam</a></li>
                    <li><a href="#">Đồng Hồ Nữ</a></li>
                    <li><a href="#">Đồng Hồ đôi</a></li>
                    <li className="menu2"><a href="#">Phụ kiện</a>
                      <ul className="nav navbar-nav menu-sub">
                        <li><a href="#">Dây Da ZRC</a></li>
                        <li><a href="#">Dây Da Hir</a></li>
                        <li><a href="#">Hộp Đồng Hồ</a></li>
                      </ul>
                    </li>
                    <li className="menu2"> <a>Liên Hệ</a>
                      {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a> */}
                      <ul className="nav navbar-nav menu-sub">
                        <li><a href="#">Thông Tin LH</a></li>
                        <li><a href="#">Góp ý</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>{/* /.navbar-collapse */}
          </div>
        </div>
      </div>

	      <div className="row">
	        {/* slide */}
	        <div style={{position: 'relative'}} id="contain">
	          <div id="myCarousel" className="carousel slide" data-ride="carousel">
	            {/* Indicators */}
	            {/* Wrapper for slides */}
	            <div style={{position: 'relative', marginTop: '170px'}} className="carousel-inner">
	              <div className="item active">
	                <img src="https://ividesign.com.vn/wp-content/uploads/2019/03/thiet-ke-noi-that-showroom-dep-1.jpg" className="d-block w-100" style={{width: '100%'}} />
	                <div className="carousel-caption">
	                  <h2>TISSOT TRADITION 5.5</h2>
	                </div>
	              </div>
	              <div className="item">
	                <img src="https://ividesign.com.vn/wp-content/uploads/2019/03/thiet-ke-noi-that-showroom-dep-1.jpg" className="d-block w-100" style={{width: '100%'}} />
	                <div className="carousel-caption">
	                  <h2>TISSOT CHRONO XL 3.5</h2>
	                </div>
	              </div>
	              <div className="item">
	                <img src="https://kientructhegioi.com/wp-content/uploads/2017/10/thiet-ke-cua-hang-thoi-trang-phong-cach-hien-dai-4.jpg" className="d-block w-100" style={{width: '100%'}} />
	                <div className="carousel-caption">
	                  <h2>TISSOT T-TOUCH</h2>
	                </div>
	              </div>
	              <div className="item">
	                <img src="image\slide4.jpg" className="d-block w-100" style={{width: '100%'}} />
	                <div className="carousel-caption">
	                  <h2>TISSOT T-RACE 2.5</h2>
	                </div>
	              </div>
	              <ol className="carousel-indicators ">
	                <li data-target="#myCarousel" data-slide-to={0} className="active" />
	                <li data-target="#myCarousel" data-slide-to={1} />
	                <li data-target="#myCarousel" data-slide-to={2} />
	                <li data-target="#myCarousel" data-slide-to={3} />
	              </ol>
	            </div>
	            {/* Left and right controls */}
	            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
	              <span className="glyphicon glyphicon-chevron-left" />
	              <span className="sr-only">Previous</span>
	            </a>
	            <a className="right carousel-control" href="#myCarousel" data-slide="next">
	              <span className="glyphicon glyphicon-chevron-right" />
	              <span className="sr-only">Next</span>
	            </a>
	          </div>
	        </div>
	        {/* slide */}
	      </div>


  				</div>
            </div>
		);
	}
		
	
}
  