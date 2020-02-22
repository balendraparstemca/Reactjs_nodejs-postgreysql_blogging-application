import React from 'react';
import Comment from './comment';
import axios from "axios";
import Updateblogs from './admin/blogedit';
import { connect } from "react-redux";

class Allpost extends React.Component
{

    constructor(props) {
        super(props);
        this.commentbox='';
        this.state={
          isComment:false,
          id:0,
          eid:0,
          category:[],
           blogs:[]
          
          
        }
       
       
      }

      componentDidMount()
      {
       //blogpost
     this.props.blogpost();

     console.log("check kro "+ this.props.myclick);
      }
  
    
   
   //newblog

   newblog = (event)=>{
  
    event.preventDefault();
    axios.post("http://localhost:8080/newblog",
                    {"title":this.refs.title.value,
                    "category":this.refs.category.value,
                    "body":this.refs.body.value,
                    "uid":this.props.profile})
             .then((posRes)=>{
            
                 console.log(posRes);
                 alert("your blog is posted");
                 this.props.blogpost();
               
              
           
             },(errRes)=>{

               alert("server error");
        });
        this.refs.title.value='';
        this.refs.body.value='';
        this.refs.category.value='';
      
};

  togglecomment(postid) {
      console.log(this.state.isComment);
      this.setState({ isComment: !this.state.isComment,
                        id:postid
                     });
       
        
      }

      handleLikes=(pid)=> {
      const uid='{'+ this.props.profile + '}';
       const data = { uid: uid, pid: pid }
         
       axios.post("http://localhost:8080/updatelikes",data)
                .then((posRes)=>{
                  console.log(posRes);
                this.props.blogpost();
                  
    
                },(errRes)=>{
                  console.log(errRes);
                  alert("server error");
           });



        }

        deletepost=(pid)=> {
          
           const data = {pid: pid}
             
           axios.post("http://localhost:8080/deleteblog",data)
                    .then((posRes)=>{
                      console.log(posRes);
                      alert("deleted blogs"+ pid);
                    this.props.blogpost();
                      
        
                    },(errRes)=>{
                      console.log(errRes);
                      alert("server error");
               });
    
    
    
            }

            editpost=(id)=>
            {
              this.setState({
                   eid:id
              })
            }

     render()
     {
      let optionItems = this.props.category.map((cat) =>
      <option key={cat.catname}>{cat.catname}</option>);
      const msec='';
      const d='';
      let blogitem=this.props.blogs.map((e,i)=>
      
     <div>
      <hr></hr>
     <span><h2>{e.title}</h2></span><span > {this.props.myblog ? <p><button type="button"  onClick={() => this.editpost(e.pid)} class="btn btn-default btn-sm"  data-toggle="modal" data-target="#myupdatemodel"> <span class="glyphicon glyphicon-edit"></span> Edit  </button> <button type="button" class="btn btn-default btn-sm" onClick={() => this.deletepost(e.pid)}> <span class="glyphicon glyphicon-trash"></span> Delete  </button></p>: ''}</span>
      <h5><span className="glyphicon glyphicon-time"></span> Post by {e.userid}, {e.date_created}.</h5>
     <h5><span className="label label-danger">{e.category}</span> </h5><br></br>
     <p>{e.body}</p>
     <p className="text-right"><h5><span><button onClick={this.props.isauthenticated ? () => this.handleLikes(e.pid) : () => this.props.history.push('/dashboard/login')}className="btn btn-danger"><i  className="fa fa-thumbs-up"></i> Like  <span class="badge">{e.likes}</span></button></span> <span><button className="btn btn-primary" onClick={() => this.togglecomment(i)}><i className="fa fa-comments" aria-hidden="true"> </i> Comment</button></span></h5></p>
      <br></br>
      <div>
      { this.state.isComment  && this.state.id==i ?  <Comment postid={e.pid} profile={this.props.profile}></Comment>  : ""} 
      </div>
      
       </div> 
       );

     

          return(<React.Fragment>
               <div className="col-sm-9">
                  <div className="row">
                  <div className="col-sm-2">
              <span><h4><small>RECENT POSTS</small></h4> </span> </div> 
                  <div className="col-sm-3"></div>
                
                  <div className="col-sm-3"></div>
                   
                  <div className="col-sm-2"></div>

                   <div className="col-sm-2">
                    <span> <button type="button" className="btn btn-info  newblog" data-toggle="modal" data-target="#myModal">   New Blog  </button></span>
                  </div>
                 
           
              
                </div>  <br></br>
                
                    {blogitem}
                 
                  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">
        <form className="form-horizontal" onSubmit={this.newblog}>
	<div className="form-group">
		<label for="name" className="col-sm-2 control-label">Title</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="title"  name="name" placeholder="Blog Title" required></input>
		</div>
	</div>
	<div className="form-group">
		<label for="email"  className="col-sm-2 control-label">Category</label>
		<div className="col-sm-10">
		 <select ref="category"  className="form-control" required>
                {optionItems}
      </select>
		</div>
	</div>
	<div className="form-group">
		<label for="message" className="col-sm-2 control-label">Blogs</label>
		<div className="col-sm-10">
			<textarea ref="body" className="form-control" rows="4" name="message" required></textarea>
		</div>
	</div>
	
	<div className="form-group">
		<div className="col-sm-10 col-sm-offset-2">
			<input id="submit" name="submit" type="submit" value="Send" className="btn btn-primary" required></input>
		</div>
	</div>
	<div className="form-group">
		<div className="col-sm-10 col-sm-offset-2">
		
		</div>
	</div>
</form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>

<Updateblogs pid={this.state.eid}></Updateblogs>
  
               </div>
          </React.Fragment>)
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
export default connect(receive)(Allpost);