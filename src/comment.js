import React from 'react';
import axios from "axios";
class Comment extends React.Component
{  
   constructor(props)
   {
     super();
     this.state={
       total_comment:0,
       comment_item:[]

     }
   }

    fetch_comment=()=>
    {
      axios.post("http://localhost:8080/comments",{pid:this.props.postid}).then((posRes)=>{
      console.log(posRes.data);
  
     this.setState({
      total_comment:posRes.data.length,
      comment_item:posRes.data


     })


  },(errRes)=>{

  console.log(errRes);
  });
 
  }

   componentDidMount()
   {
      this.fetch_comment();
    
  }


  post_comment=(event)=>
  {
    event.preventDefault();
    axios.post("http://localhost:8080/insertcomment", {"comment":this.refs.comments.value,"postid":this.props.postid,"uid":this.props.profile})
             .then((posRes)=>{
            
                 console.log(posRes);
                 alert("comment is  blog is posted");
                
                 this.fetch_comment();
              
           
             },(errRes)=>{

               alert("server error");
        });
        this.refs.comments.value='';
     
  }

    render()
    {
      let comments=this.state.comment_item.map((e,i)=>
      <div><div class="col-sm-2 text-center">
      <img src="https://www.w3schools.com/bootstrap/bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar"></img>
    </div>
    <div class="col-sm-10">
      <h4>{e.user_id} <small>{ e.date_created }</small></h4>
    <p>{e.blog_comment}.</p>
      <br></br> <br></br> <br></br>
    </div></div>
      );
         return(<div> <h4>Leave a Comment: {this.props.postid}</h4>
            <form role="form" onSubmit={this.post_comment}>
              <div class="form-group">
                <textarea class="form-control"  ref="comments" rows="3" required></textarea>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            <br></br>
            
         <p><span class="badge"> {this.state.total_comment} </span> Comments:</p><br></br>
            
            <div class="row">
            {comments}
            
        </div></div>)
    }
}


export default Comment;