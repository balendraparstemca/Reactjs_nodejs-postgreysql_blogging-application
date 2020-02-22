import React from 'react';
import "./admin.css";
import Mytable from './table';
import Dashboard from './dashboard';
import Alluser from './alluser';
import Allblogs from './allblogs';
import Allcategory from './allcategory';

import { BrowserRouter as Router, Route, Link, NavLink, Switch,Redirect  } from 'react-router-dom';  

class Myadmin  extends React.Component
{
    render()
    {
         return (<React.Fragment>
              <Router> 
            	<div className="container-fluid main-container">
  		<div className="col-md-2 sidebar">
  			<div className="row">
	
	<div className="absolute-wrapper"> </div>
	
	<div className="side-menu">
		<nav className="navbar navbar-default" role="navigation">
	
			<div className="side-menu-container">
				<ul className="nav navbar-nav">
               
					<li className="active"> <NavLink to="/admin/dashboard" exact activeStyle={  {color:'red'}   }><span className="glyphicon glyphicon-dashboard"></span> Dashboard </NavLink></li>
					<li><NavLink to="/admin/user" exact activeStyle={  {color:'red'}   }><span className="glyphicon glyphicon-user"></span> Users</NavLink></li>
					<li><NavLink to="/admin/blog" exact activeStyle={  {color:'red'}   }><span className="glyphicon glyphicon-user"></span> Blogs</NavLink></li>
				
                    <li><NavLink to="/admin/category" exact activeStyle={  {color:'red'}   }><span className="glyphicon glyphicon-cloud"></span> Category</NavLink></li>
				

				</ul>
			</div>
		</nav>

	</div>
</div>  		</div>
  		<div className="col-md-10 content">
  			  <div className="panel panel-default">
                <Switch>
            <div>
              
                <Route exact to path="/admin/" component={Dashboard}/>
                <Route exact to path="/admin/dashboard" component={Dashboard}/>
                <Route exact to path="/admin/user" component={Alluser}/>
                <Route exact to path="/admin/blog" component={Allblogs}/>
                <Route exact to path="/admin/category" component={Allcategory}/>
                
                
                
			  
            </div>
      </Switch>
           
            
         
</div>
  		</div>
        
  	</div>
       </Router>  
    
             </React.Fragment>)
    }



}


export default Myadmin;