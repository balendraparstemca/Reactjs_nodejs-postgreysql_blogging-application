import React from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom'; 
 class Register extends React.Component
 {
  constructor(){
    super();
    this.state = {
        status : {}
    };
  }
        
  register = (event)=>{
  
    event.preventDefault();
    axios.post("http://localhost:8080/register",
                    {"uname":this.refs.uname.value,
                    "email":this.refs.email.value,
                     "pass":this.refs.upwd.value})
             .then((posRes)=>{
              console.log(posRes);
               if(posRes.data.name==="error")
               {
                 alert(posRes.data.detail);
               }
               else
               {
                this.props.history.push('/login');
               }
                
            
               
               
                //window.localStorage.setItem("login_details",);
                //navigate to Dashboard
               
            
                
            

             },(errRes)=>{

               alert("server error");
        });
        this.refs.uname.value='';
        this.refs.email.value='';
        this.refs.upwd.value='';
      
};


     render()
     {
         return(<React.Fragment>
             <div className="wrapper fadeInDown">
              <div id="formContent">
              
            
                <div className="fadeIn first">
                  <h1>Registration Form</h1>
                </div>
       
            
                <form onSubmit={this.register}>
                <input type="text" id="login" className="text fadeIn second" name="login" ref="uname" placeholder="UserName" required></input>
                  <input type="email"  className="text fadeIn third" name="login"  ref="email" placeholder="email" required></input>
                
   
                  <input type="password" id="password" className="text fadeIn third" name="login"  ref="upwd" placeholder="password" required></input>
                  <input type="submit"  className="fadeIn fourth" value="Log In"></input>
                </form>
            
              
                <div id="formFooter">
                  Login If Already  Registered <NavLink to="/login" exact activeStyle={  {color:'red'}   }> Login</NavLink>
                </div>
            
            
              </div>
            </div>
               
                </React.Fragment>)
     }
 }

  export default Register;