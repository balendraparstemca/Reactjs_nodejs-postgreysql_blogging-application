import React from 'react';
import axios from "axios";
import Editcat from './editcat';
class Allcategory extends React.Component
{
      constructor(props)
      {
           super(props)

           this.state={
               cat:[],
               id:0,
               ismodel:false
           }
      }

      componentDidMount()
      {
       //blogpost
     this.category();
      }
    
      category=()=>
       {
        axios.get("http://localhost:8080/category").then((posRes)=>{
          console.log(posRes.data);
      
         this.setState({
         cat:posRes.data,
        
    
      
         })
      
      
      },(errRes)=>{
      
      console.log(errRes);
      });
       }

       togglecomment(catid) {
   
        this.setState({   id:catid,
                        isModel:true
                         
                       });
    
                    
         
          
        }
     render()
     {
          return(<React.Fragment>
              	<div className="panel-heading">
                  <h2>All the blogs category</h2> <span> <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#newcat">
         <span class="glyphicon glyphicon-plus"></span>  New Category
       </button></span>
	</div>
	<div className="panel-body">
   

<div class="container">
  <div class="row">
    <div class="col-xs-10">
      <table summary="This table shows how to create responsive tables using Datatables' extended functionality" class="table table-bordered table-hover dt-responsive">
            <thead>
          <tr>
            <th>id</th>
            <th>category name</th>
            <th>Edit</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.cat.map((e,i)=>
             <tr>
     <td>{e.id}</td>
     <td>{e.catname}</td>
     <td> <button type="button" onClick={() => this.togglecomment(e.id)} class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myupdatemodel">
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
            <td colspan="5" class="text-center">Data retrieved.</td>
          </tr>
        </tfoot>
      </table>

    </div>
  </div>
</div>

	</div>
  <Editcat cid={this.state.id}></Editcat>
        
<div className="modal fade" id="newcat" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
       <h4><center>NEW  CATEGORY:</center></h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">
         
           
        <form className="form-horizontal">
	<div className="form-group">
		<label for="name" className="col-sm-3 control-label">Category Name:</label>
		<div className="col-sm-9">
			<input type="text" className="form-control" ref="titletwo"    name="name" placeholder="category name" required></input>
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


export default Allcategory;