import React from 'react';
import Header from './header';
import Main from './main';
import Login from './login';
import Register from './register';
import Home from './home';
import Contact from './contact';
import Myadmin from './admin/myadmin';
import Bdetail from './blog_detail';
import axios from "axios";

import Notfound from './notfound';
import { connect } from "react-redux";
import * as ACTIONS from './store/action';
import { BrowserRouter as Router, Route, Link, NavLink, Switch,Redirect  } from 'react-router-dom';  
class Routes extends React.Component
{ 
  constructor(props)
  {
     super(props)
     this.state={
       category:[],
       blog:[]

     }
  }

  componentDidMount()
  {
   axios.get("http://localhost:8080/category").then((posRes)=>{
     console.log(" category from route"+ posRes.data);
     this.setState({
       category:posRes.data
     })
   
      this.props.set_category(this.state.category);


    },(errRes)=>{

    console.log(errRes);
    });

 //blogpost

    axios.get("http://localhost:8080/allblogs").then((posRes)=>{
      console.log(posRes.data);

    this.setState({
      blogs:posRes.data

    })
    this.props.set_allpost(posRes.data);


    },(errRes)=>{

    console.log(errRes);
    });
  }

 
     
    render()
    {
       console.log()

        return(
            <React.Fragment> 

     <Router>

     <Header> </Header>
   
         
       <Switch>
            <div>
                <Route exact to path="/" component={Home}/>
                <Route exact to path="/home" component={Home}/>
                <Route exact to path="/login" component={Login}/>
                <Route exact to path="/logout" component={Login}/>
                <Route exact to path="/register" component={Register}/>
                <Route exact to path="/contact" component={Contact}/>
                <Route exact to path="/admin" component={Myadmin}/>
               
                <Route path="/blog/:id" component={Bdetail} />  
                <Route path="/dashboard" render = {() => ( this.props.isauthenticated ?  (<Main />) : ( <Redirect to="/login" />))}/>
               
                
                
			  
            </div>
      </Switch>
           
     </Router>
     <footer class="navbar-inverse">
	<div class="container-fluid text-center">
		<p class="text-muted">© Copyright 2019. All Rights Reserved.</p>
	</div>
</footer>
     </React.Fragment> 
        )
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
const send = dispatch=>{
  return{
    set_category: (cat) => dispatch(ACTIONS.set_category(cat)),
    set_allpost: (post) => dispatch(ACTIONS.set_allpost(post)),
    
  }
};

  export default connect(receive,send)(Routes);
