import React from 'react';
import axios from "axios";
import * as ACTIONS from './store/action';
import { connect } from "react-redux";
import './login.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch,Redirect  } from 'react-router-dom'; 


 class Login extends React.Component
 {  
  constructor(){
    super();
    this.state = {
        status : {}
    };
  }
        
  login = (event)=>{
  
    event.preventDefault();
    axios.post("http://localhost:8080/login",
                    {"email":this.refs.uname.value,
                     "pass":this.refs.upwd.value})
             .then((posRes)=>{
                console.log(posRes.data);
               if(posRes.data.length > 0)
              {
                this.props.login_success();
                this.props.set_profile(posRes.data[0].username);
                alert("login successfull");
               
                //window.localStorage.setItem("login_details",);
                //navigate to Dashboard
                this.props.history.push('/dashboard');
            
                
              }

              else
              { 
                this.props.login_failure();
                alert("login failed please try again");
              }

             },(errRes)=>{

               alert("server error");
        });
        this.refs.uname.value='';
        this.refs.upwd.value='';
      
};
     
    render()
    {

        return(<div>
            <div className="wrapper fadeInDown">
              <div id="formContent">
              
            
                <div className="fadeIn first">
                  <img src="https://cdn0.iconfinder.com/data/icons/follower/154/follower-man-user-login-round-512.png"    id="icon" alt="User Icon" ></img>
                
                </div>
       
            
                <form onSubmit={this.login}>
                  <input type="text" id="login" className="text fadeIn second" name="login" ref="uname" placeholder="login" required></input>
                  <input type="password" id="password" className="text fadeIn third" name="login"  ref="upwd" placeholder="password" required></input>
                  <input type="submit"  className="fadeIn fourth" value="Log In"></input>
                </form>
            
              
                <div id="formFooter">
                  Register Before Login   <NavLink to="/register" exact activeStyle={  {color:'red'}   }> Register</NavLink>
                </div>
            
              </div>
            </div></div> 
            )
    }
 }

 const receive = (state)=>{
  console.log(state);
  return{
    isauthenticated:state.is_authenticated,
    profile:state.profile
    
  }
};
const send = dispatch=>{
  return{
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    set_profile: (profile) => dispatch(ACTIONS.set_profile(profile))
  }
};
export default connect(receive,send)(Login);