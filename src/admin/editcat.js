import React from 'react';
import axios from "axios";
class Editcat extends React.Component
{
    constructor(props)
     {
        super(props) 
        this.state={
           catdetail:[]
        }
     }

     catetail=()=>
     {
         axios.post("http://localhost:8080/catdetail",{id:this.props.cid}).then((posRes)=>{
             console.log(posRes.data);
        
             this.setState({
                catdetail:posRes.data
             })
           
             
        
        
            },(errRes)=>{
        
            console.log(errRes);
            });
 
     }
   render()
   {   this.catetail();
       return(<React.Fragment>
            
<div className="modal fade" id="myupdatemodel" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
       <h4><center>EDIT  CATEGORY:{this.props.cid}</center></h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">
            {this.state.catdetail.map((e,i)=>
           
        <form className="form-horizontal">
	<div className="form-group">
		<label for="name" className="col-sm-3 control-label">Category Name:</label>
		<div className="col-sm-9">
			<input type="text" className="form-control" ref="titletwo"   value={e.catname} name="name" placeholder="category name" required></input>
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


export default Editcat;