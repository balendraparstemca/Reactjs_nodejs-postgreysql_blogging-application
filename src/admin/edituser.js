import React from'react';
import axios from "axios";
class Edituser extends React.Component
{
     constructor(props)
     {
        super(props) 
        this.state={
            userdetail:[]
        }
     }

     userdetail=()=>
     {
         axios.post("http://localhost:8080/userdetail",{uid:this.props.uid}).then((posRes)=>{
             console.log(posRes.data);
        
             this.setState({
                userdetail:posRes.data
             })
           
             
        
        
            },(errRes)=>{
        
            console.log(errRes);
            });
 
     }

    render()
    {
         this.userdetail();
        return(<React.Fragment>

<div className="modal fade" id="myupdatemodel" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
            <h4><center>EDIT USERID:{this.props.uid}</center></h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">
        { this.state.userdetail.map((e,i)=>

     
        <form className="form-horizontal">
	<div className="form-group">
		<label for="name" className="col-sm-2 control-label">username</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo" value={e.username}  name="name" placeholder="username" required></input>
		</div>
	</div>
    <div className="form-group">
		<label for="name" className="col-sm-2 control-label">email</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo" value={e.email}   name="name" placeholder="email" required></input>
		</div>
	</div>
    <div className="form-group">
		<label for="name" className="col-sm-2 control-label">date created</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo" value={e.date_created}   name="name" placeholder="date created" required></input>
		</div>
	</div>
	
	<div className="form-group">
		<div className="col-sm-10 col-sm-offset-2">
			<input id="submit" name="submit" type="submit" value="update" className="btn btn-primary" required></input>
		</div>
	</div>
	<div className="form-group">
		<div className="col-sm-10 col-sm-offset-2">
		
		</div>
	</div>
</form>
     )}
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

export default Edituser;