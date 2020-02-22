import React from 'react';
import axios from "axios";
class Updateblogs extends React.Component
{
    constructor(props)
    {
         super(props)
         this.state={
            blogdetail:[]
           
            
        }
    }

    blogdetail=()=>
    {
        axios.post("http://localhost:8080/blogdetail",{pid:this.props.pid}).then((posRes)=>{
            console.log(posRes.data);
       
            this.setState({
               blogdetail:posRes.data
            })
          
            
       
       
           },(errRes)=>{
       
           console.log(errRes);
           });

    }

  

    render()
    {   this.blogdetail();
         return(<React.Fragment>

        
        
         <div className="modal fade" id="myupdatemodel" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
        <h4><center>Blog details of Blogid:{this.props.pid}</center></h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">
        { this.state.blogdetail.map((e,i)=>
        <form className="form-horizontal">
	<div className="form-group">
		<label for="name" className="col-sm-2 control-label">Title</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo" value={e.title}  name="name" placeholder="Blog Title" required></input>
		</div>
	</div>
	<div className="form-group">
		<label for="name" className="col-sm-2 control-label">category</label>
		<div className="col-sm-10">
			<input type="text" className="form-control" ref="titletwo" value={e.category}  name="name" placeholder="Blog Title" required></input>
		</div>
	</div>

	<div className="form-group">
		<label for="message" className="col-sm-2 control-label">Blogs</label>
		<div className="col-sm-10">
			<textarea ref="bodytwo" value={e.body} className="form-control" rows="4" name="message" required></textarea>
		</div>
	</div>

    <div className="form-group">
		<label for="message" className="col-sm-2 control-label">Likes</label>
		<div className="col-sm-3">
		<input type="number" value={e.likes} className="form-control" ></input>
		</div>
	</div>

    <div className="form-group">
		<label for="message" className="col-sm-2 control-label">posted By:</label>
		<div className="col-sm-10">
		<input type="text"  value={e.userid} className="form-control" ></input>
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

export default Updateblogs;