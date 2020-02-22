import React from 'react';
import './App.css';
import Header from './header';

import Allpost from './latestpost';
import Login from './login';
import Notfound from './notfound';
import { connect } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect  } from 'react-router-dom'; 
class Main extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      blogs:[],
      myblog:false
    }
  }
  componentDidMount()
  {
   //blogpost
 this.blogpost();
  }

  blogpost=()=>
   {
    axios.get("http://localhost:8080/allblogs").then((posRes)=>{
      console.log(posRes.data);
  
     this.setState({
      blogs:posRes.data,
      myblog:false

  
     })
  
  
  },(errRes)=>{
  
  console.log(errRes);
  });
   }

   blogpostbyid=(pid)=>
   {
    axios.post("http://localhost:8080/allblogsbycat",{"cid":pid}).then((posRes)=>{
      if(posRes.data.length>0)
      {
       console.log(posRes.data);
  
       this.setState({
       blogs:posRes.data,
       myblog:false
  
       })
    }
  
  
  },(errRes)=>{
  
  console.log(errRes);
  });

//alert(pid);
   }

   myblogpost=(pid)=>
   {
    axios.post("http://localhost:8080/myblog",{"uid":this.props.profile}).then((posRes)=>{
      if(posRes.data.length>0)
      {
       console.log(posRes.data);
  
       this.setState({
       blogs:posRes.data,
       myblog:true
  
       })
    }
  
  
  },(errRes)=>{
  
  console.log(errRes);
  });

//alert(pid);
   }
 
     
    render()
    { 
      let catitems= this.props.category.map((cat) =>
    <li   onClick={() => this. blogpostbyid(cat.catname)}> <a href="#">{cat.catname}</a></li>);
  
      const { match } = this.props;
    console.log(match);
        return(
             <React.Fragment> 
             
            <div class="container-fluid">
              <div class="row content">
                <div class="col-sm-3 sidenav">
                  <h4>Blog Categories</h4>
                  <ul class="nav nav-pills nav-inverse">
                    <li onClick={this.blogpost} class="active"><a href="#">All</a></li>
                    <li onClick={this.myblogpost}><a href="#">My Posted Blogs</a></li>
                    <hr></hr>
                   
                   {catitems}
                  </ul><br></br>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search Blog.."></input>
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">
                        <span class="glyphicon glyphicon-search"></span>
                      </button>
                    </span>
                  </div>
                </div>
            
                <Allpost blogpost={this.blogpost} blogs={this.state.blogs} myblog={this.state.myblog}></Allpost>
                </div>  
            </div>
              

              
              
            

            </React.Fragment> 
            
             )
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
 export default connect(receive) (Main);
