import React from 'react';
import axios from "axios";
import Comment from "./comment";
import { connect } from "react-redux";

class Bdetail extends React.Component

{
    constructor(props)
    {
        super(props);
        this.state={
            blogdetail:[],
            isComment:false
        }
    }

    blogdetail=()=>
    {
        axios.post("http://localhost:8080/blogdetail",{pid:this.props.match.params.id}).then((posRes)=>{
            console.log(" category from route"+ posRes.data);
       
            this.setState({
               blogdetail:posRes.data
            })
          
            
       
       
           },(errRes)=>{
       
           console.log(errRes);
           });

    }

    componentDidMount()
  {  
   
    this.blogdetail();

}
    handleLikes=(pid)=> {
        const uid='{'+ this.props.profile + '}';
         const data = { uid: uid, pid: pid }
           
         axios.post("http://localhost:8080/updatelikes",data)
                  .then((posRes)=>{
                    console.log(posRes);
                  this.blogdetail();
                    
      
                  },(errRes)=>{
                    console.log(errRes);
                    alert("server error");
             });
  
  
  
          }

          togglecomment() {
            
            this.setState({ isComment: !this.state.isComment
                             
                           });
             
              
            }

    render()
    {
        let catitems= this.state.blogdetail.map((e) =>
        <div className="container">
    <div className="well"> 
        <div className="row">
             <div className="col-md-12">
    <div className="row hidden-md hidden-lg"><h1 className="text-center" > </h1></div>
                     
                 <div className="pull-left col-md-4 col-xs-12 thumb-contenido"><img className="center-block img-responsive" src='http://placehold.it/500x500' /></div>
                 <div className="">
         <h1  className="hidden-xs hidden-sm">{e.title}</h1>
                     <hr></hr>
    <small>{e.date_created}</small><br></br>
    <small><strong>{e.userid}</strong></small>
                     <hr></hr>
    <p className="text-justify">{e.body}</p></div>
             </div>
        </div>
        <p className="text-right"><h5><span><button onClick={this.props.isauthenticated ? () => this.handleLikes(e.pid) : () => this.props.history.push('/login')}className="btn btn-danger"><i  className="fa fa-thumbs-up"></i> Like  <span class="badge">{e.likes}</span></button></span> <span><button className="btn btn-primary" onClick={() => this.togglecomment()}><i className="fa fa-comments" aria-hidden="true"> </i> Comment</button></span></h5></p>
      <br></br>
      
     </div>
     <div>
     { this.state.isComment  ?  <Comment postid={e.pid} profile={this.props.profile}></Comment>  : ""} 
     </div>
     </div>
     
    )
       

         return(<React.Fragment>

         {catitems}



         </React.Fragment>);
    }

}

const receive = (state)=>{
    console.log(state);
    return{
      isauthenticated:state.is_authenticated,
      profile:state.profile
      
    }
  };

export default connect(receive) (Bdetail);