import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, NavLink, Switch,Redirect,withRouter  } from 'react-router-dom'; 
class Header extends React.Component
{
  constructor(props){
    super();
    this.state = {
        status : {}
    };
  }
 

  
  logout=()=>
  {
    this.props.history.push('/');
  }
     
  
    render()
    {   let catitems= this.props.category.map((cat) =>
      <li><a href="#">{cat.catname}</a></li>);
         return( <header> 
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
         <a className="navbar-brand" href="#">{this.props.isauthenticated}</a>
        <NavLink to="/home" exact activeStyle={  {color:'red'}   }>  <a href=''  className="navbar-brand"> MyBlog</a></NavLink>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Category <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      {catitems}
                    
                      
                    </ul>
                  </li>
                  <li><a href="#">About</a></li>
                  <li><NavLink to="/contact" exact activeStyle={  {color:'red'}   }>Contact </NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span>  { this.props.isauthenticated  ?  this.props.profile : "guest"} </a></li>
                  <li>{ this.props.isauthenticated  ?  <button  onClick={this.logout} className="btn btn-danger"><span className="glyphicon glyphicon-log-out"></span>Logout</button> : <NavLink to="/login" exact activeStyle={  {color:'red'}   }><span className="glyphicon glyphicon-log-in"></span> Login</NavLink>}  </li>
                </ul>
              </div>
            </div>
          </nav>
       </header> )
    }
}

const receive = (state)=>{
  console.log(state);
  return{
    isauthenticated:state.is_authenticated,
    profile:state.profile,
    category:state.category
    
  }
};

export default withRouter(connect(receive)(Header));
