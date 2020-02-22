import React from 'react';
import axios from "axios";
import Mytable from './table';
import Updateblogs from './blogedit';
class Allblogs extends React.Component
{
  constructor(props)
  {
     super(props)
    
     this.state={
         blogs:[],
         loader:true,
         id:0,
         ismodel:false
     }
  }
  componentDidMount()
  {
   //blogpost
 this.blogpost();
  }


  togglecomment(postid) {
   
    this.setState({   id:postid,
                    isModel:true
                     
                   });

                
     
      
    }

  blogpost=()=>
   {
    axios.get("http://localhost:8080/allblogs").then((posRes)=>{
      console.log(posRes.data);
  
     this.setState({
      blogs:posRes.data,
      loader:false

  
     })
  
  
  },(errRes)=>{
  
  console.log(errRes);
  });
   }


   deletepost=(pid)=> {
          
    const data = {pid: pid}
      
    axios.post("http://localhost:8080/deleteblog",data)
             .then((posRes)=>{
               console.log(posRes);
               alert("deleted blogs"+ pid);
               this.blogpost();
               
 
             },(errRes)=>{
               console.log(errRes);
               alert("server error");
        });



     }

     render()
     {  
         let tabledata=this.state.blogs.map((e,i)=>
         <tr><td>{i+1}</td>
             <td>{e.title}</td>
             <td>{e.body}</td>
             <td>{e.category}</td>
             <td>{e.userid}</td>
             <td>  <button type="button" class="btn btn-primary btn-sm">
         <span class="glyphicon glyphicon-thumbs-up"></span> Likes <span class="label label-default">{e.likes}</span>
       </button></td>
             <td> <button type="button" onClick={() => this.togglecomment(e.pid)} class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myupdatemodel">
         <span class="glyphicon glyphicon-edit"></span> Edit
       </button></td>
       <td> <button onClick={() => this.deletepost(e.pid)} type="button" class="btn btn-danger btn-sm">
         <span class="glyphicon glyphicon-edit"></span> Delete
       </button></td>
    
            </tr>
           
         
         );
         
         return(<React.Fragment>
              	<div className="panel-heading">
                  <h2>All the blogs</h2><span> <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#newblog">
         <span class="glyphicon glyphicon-plus"></span>  New Blog
       </button></span>
	</div>
	<div className="panel-body">
   

<div class="container">
  <div class="row">
    <div class="col-xs-10">
     
    <table summary="This table shows how to create responsive tables using Datatables' extended functionality" class="table table-bordered table-hover dt-responsive">
            <thead>
          <tr>
            <th>Sno</th>
            <th>Title</th>
            <th>blogs</th>
            <th>category</th>
            <th>posted by</th>
            <th>No of Likes</th>
            <th>edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        { this.state.loader ? <h6>Loading....</h6> : tabledata}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="8" class="text-center">------------------------------------</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</div>

	</div>
  <Updateblogs pid={this.state.id}></Updateblogs>
    
  <div className="modal fade" id="newblog" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
        <h4><center>new Blog</center></h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">
        
        <form className="form-horizontal">
	<div className="form-group">
		<label for="name" className="col-sm-2 control-label">Title</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo"   name="name" placeholder="Blog Title" required></input>
		</div>
	</div>
	<div className="form-group">
		<label for="name" className="col-sm-2 control-label">category</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo"  name="name" placeholder="Blog category" required></input>
		</div>
	</div>

	<div className="form-group">
		<label for="message" className="col-sm-2 control-label">Blogs</label>
		<div className="col-sm-10">
			<textarea ref="bodytwo"  className="form-control" rows="4" name="message" required></textarea>
		</div>
	</div>

    <div className="form-group">
		<label for="message" className="col-sm-2 control-label">Likes</label>
		<div className="col-sm-3">
		<input type="number" className="form-control" ></input>
		</div>
	</div>

    <div className="form-group">
		<label for="message" className="col-sm-2 control-label">posted By:</label>
		<div className="col-sm-10">
		<input type="text"   className="form-control" ></input>
		</div>
	</div>
	
	<div className="form-group">
		<div className="col-sm-10 col-sm-offset-2">
			<input id="submit" name="submit" type="submit" value="insert" className="btn btn-primary" required></input>
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
  
          </React.Fragment>)
     }

    
      
}


export default Allblogs;