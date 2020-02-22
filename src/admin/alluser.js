import React from 'react';
import axios from "axios";
import Edituser from "./edituser";
class Alluser extends React.Component
{  
    constructor(props)
      {
           super(props)

           this.state={
               user:[],
               id:0,
               isModel:false
           }
      }

      componentDidMount()
      {
       //blogpost
     this.alluser();
      }
    
      alluser=()=>
       {
        axios.get("http://localhost:8080/alluser").then((posRes)=>{
          console.log(posRes.data);
      
         this.setState({
        user:posRes.data,
        
    
      
         })
      
      
      },(errRes)=>{
      
      console.log(errRes);
      });
       }


       togglecomment(uid)
        {
   
        this.setState({   id:uid,
                         isModel:true
                         
                       });
          }

     render()
     {
          return(<React.Fragment>
              	<div className="panel-heading">
                  <h2>All the User</h2><span> <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#newuser">
         <span class="glyphicon glyphicon-plus"></span>  New user
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
            <th>username</th>
            <th>Email</th>
            <th>Date_created</th>
            <th>Edit</th>
            <th>Delete</th>
         
          </tr>
        </thead>
        <tbody>
        { this.state.user.map((e,i)=>
         <tr>
             <td>{i+1}</td>
         <td>{e.username}</td>
        
         <td>{e.email}</td>
         <td>{e.date_created}</td>
         <td> <button type="button"  onClick={() => this.togglecomment(e.uid)} class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myupdatemodel">
          <span class="glyphicon glyphicon-edit"></span> Edit
        </button></td>
        <td> <button type="button" class="btn btn-danger btn-sm">
          <span class="glyphicon glyphicon-edit"></span> Delete
        </button></td>
         </tr>
        
        )}
        </tbody>
        <tfoot>
          <tr>
             </tr>
        </tfoot>
      </table>

    </div>
  </div>
</div>

	</div>
  <Edituser uid={this.state.id}></Edituser>

  <div className="modal fade" id="newuser" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
            <h4><center>NEW USER</center></h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">
      

     
        <form className="form-horizontal">
	<div className="form-group">
		<label for="name" className="col-sm-2 control-label">username</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo"  name="name" placeholder="username" required></input>
		</div>
	</div>
    <div className="form-group">
		<label for="name" className="col-sm-2 control-label">email</label>
		<div className="col-sm-10">
			<input type="email" className="form-control" ref="titletwo"   name="name" placeholder="email" required></input>
		</div>
	</div>
  <div className="form-group">
		<label for="name" className="col-sm-2 control-label">passoword</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo"   name="name" placeholder="password" required></input>
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


export default Alluser;