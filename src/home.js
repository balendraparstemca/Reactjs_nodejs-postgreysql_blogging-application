import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import Bdetail from './blog_detail';
import { BrowserRouter as Router, Route, Link, NavLink, Switch,Redirect,withRouter  } from 'react-router-dom';

class Home extends React.Component
{

    render()
    {    let blogItem = this.props.blog.map((e) =>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="panel panel-default">
            <div className="panel-body">
                <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" className="img-thumbnail img-responsive"></img>
                <p className="text-muted">By <span className="glyphicon glyphicon-user" aria-hidden="true"></span>{e.userid} | <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> {Date(e.date_created)}</p>
                <h3>{e.title}</h3>
    <p>{e.body.substring(0, Math.min((e.body.length), 360))}[...]</p>

    <NavLink to={'/blog/'+ e.pid} exact activeStyle={  {color:'red'}   }><button className="btn btn-danger">Read more...</button></NavLink>
            </div>
        </div>
    </div>);

          
         return(<React.Fragment>
            <div> 

<section className="container">
	<div className="jumbotron">
    <div className="container">
 
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
     
        <div className="carousel-inner" role="listbox">
            <div className="item active">
                <img src="https://email.uplers.com/blog/wp-content/uploads/2016/09/Slider-and-Rotating-Banners-for-email.gif" alt="Chania"></img>
                <div className="carousel-caption">
                    <h3>Header of Slide 1</h3>
                    <p>Details of Slide 1. Lorem Ipsum Blah Blah Blah....</p>
                </div>
            </div>
            <div className="item">
                <img src="https://kriscarr.com/wp-content/uploads/2019/01/MedBundle-blogbanner-gif.gif" alt="Chania"></img>
                <div className="carousel-caption">
                    <h3>Header of Slide 2</h3>
                    <p>Details of Slide 2. Lorem Ipsum Blah Blah Blah....</p>
                </div>
            </div>
            <div className="item">
                <img src="http://allpoints.ph/wp-content/uploads/2013/10/banner.jpg" alt="Flower"></img>
                <div className="carousel-caption">
                    <h3>Header of Slide3</h3>
                    <p>Details of Slide 3. Lorem Ipsum Blah Blah Blah....</p>
                </div>
            </div>
        </div>
       
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="fa fa-angle-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="fa fa-angle-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
    </div>
</div>
	</div>
</section>

<div className="container">
	<div className="col-sm-6 col-md-8 col-lg-8">
		<div className="row">
			
			
		
		{ blogItem }
			
		
		</div>
		<hr></hr>
		<div>
			<nav aria-label="...">
				<ul className="pager">
					<li className="previous"><a href="#"><span aria-hidden="true">←</span> Older Posts</a></li>
					<li className="next disabled"><a href="#">Newer Posts<span aria-hidden="true">→</span></a></li>
				</ul>
			</nav>
		</div>

	</div>

	<div className="col-sm-6 col-md-4 col-lg-4">
		<div className="panel panel-default">
			<div className="panel-body">

				<h4 className="text-center">Search for Posts!</h4>
				<form role="Form" method="GET" action="" accept-charset="UTF-8">
					<div className="form-group">
						<div className="input-group">
							<input className="form-control" type="text" name="search" placeholder="Search..." required/>
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
							</span>
						</div>
					</div>
				</form>

				<h4 className="text-center">About me!</h4>
				<img src="https://s3.amazonaws.com/myblog--flask-bucket/photos/comicavatar_500x500.jpg" alt="" className="img-thumbnail img-responsive"></img>
				<h5 className="text-center">Victor Santiago</h5>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

				<h4 className="text-center">Popular Posts!</h4>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<img src="https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" className="img-thumbnail img-responsive"></img>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h5>Images by pexels.com</h5>
						<p className="text-muted"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> Jan/21/2018</p>
					</div>
				</div>
				<hr></hr>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<img src="https://images.pexels.com/photos/34601/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb" alt="" className="img-thumbnail img-responsive"></img>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h5>Images by pexels.com</h5>
						<p className="text-muted"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> Jan/21/2018</p>
					</div>
				</div>
				<hr></hr>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<img src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" className="img-thumbnail img-responsive"></img>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h5>Images by pexels.com</h5>
						<p className="text-muted"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> Jan/21/2018</p>
					</div>
				</div>
				<hr></hr>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<img src="https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" className="img-thumbnail img-responsive"></img>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h5>Images by pexels.com</h5>
						<p className="text-muted"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> Jan/21/2018</p>
					</div>
				</div>
				<hr></hr>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<img src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" className="img-thumbnail img-responsive"></img>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h5>Images by pexels.com</h5>
						<p className="text-muted"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> Jan/21/2018</p>
					</div>
				</div>
				<hr></hr>

				<h4 className="text-center">Our Newsletter!</h4>
				<form role="Form" method="GET" action="" accept-charset="UTF-8">
					<div className="form-group">
						<div className="input-group">
							<input className="form-control" type="text" name="search" placeholder=" sign up for our newsletter..." required/>
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit">Sign up</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

</div>  </React.Fragment>);
    }
}
const receive = (state)=>{
    console.log(state);
    return{
      isauthenticated:state.is_authenticated,
      profile:state.profile,
      category:state.category,
      blog:state.blog
      
    }
  };
 
  export default connect(receive)(Home);