let express = require("express");
let bodyparser = require("body-parser");
let cors = require("cors");
var pool = require('./db');
//var indexRouter = require('./route');
let app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname, 'public')));

//login
app.post('/login', (req, res) => {
  pool.query(`select * from users where email='${req.body.email}' and pass='${req.body.pass}'`, (err,result) => {
	  if(err) throw err;
	  console.log(result.rows.length);
      res.send(result.rows);
  });
});
//insert registration
app.post('/register', (req, res) => {
  pool.query(`INSERT INTO users(username, email, pass, date_created) VALUES('${req.body.uname}', '${req.body.email}', '${req.body.pass}', NOW())`, (err,result) => {
	  if(err) {
		  res.send(err);
	  }
	  console.log(result);
      res.send(result);
  });
});
//category
app.get('/category', (req, res) => {
  pool.query(`select * from blog_category`, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	  console.log(result);
      res.send(result.rows);
	  }
  })
})
//all user

app.get('/alluser', (req, res) => {
  pool.query(`select * from users`, (err,result) => {
	  if(err) throw err;
	  console.log(result);
      res.send(result.rows);
  })
})

//newblog
app.post('/newblog', (req, res) => {
	console.log(req.body);
  pool.query(`INSERT INTO posts(title,category,body,userid,date_created) VALUES ('${req.body.title}', '${req.body.category}', '${req.body.body}', '${req.body.uid}', NOW())`, (err,result) => {
	  if(err) {
		  res.send(err);
	  }
	  console.log(result);
      res.send(result);
  });
});
//all blog
app.get('/allblogs', (req, res) => {
  pool.query(`select * from posts order by pid asc`, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	 // console.log(result);
      res.send(result.rows);
	  }
  })
})
//all blog by category
app.post('/allblogsbycat', (req, res) => {
  pool.query(`select * from posts  where category='${req.body.cid}' `, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	 // console.log(result);
      res.send(result.rows);
	  }
  })
})
//fetch comments
app.post('/comments', (req, res) => {
  pool.query(`select * from comments where post_id=${req.body.pid}`, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	 // console.log(result);
      res.send(result.rows);
	  }
  })
})
//category detail of one
app.post('/catdetail', (req, res) => {
  pool.query(`select * from blog_category where id=${req.body.id}`, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	 // console.log(result);
      res.send(result.rows);
	  }
  })
})

//user detail

app.post('/userdetail', (req, res) => {
  pool.query(`select * from users  where uid=${req.body.uid}`, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	 // console.log(result);
      res.send(result.rows);
	  }
  })
})

///insert comments
app.post('/insertcomment', (req, res) => {
	console.log(req.body);
  pool.query(`INSERT INTO comments(post_id,user_id,blog_comment,date_created) VALUES(${req.body.postid},'${req.body.uid}','${req.body.comment}', NOW())`, (err,result) => {
	  if(err) {
		  res.send(err);
	  }
	  console.log(result);
      res.send(result);
  });
});


//update likes
app.post('/updatelikes', (req, res) => {
	console.log(req.body);
  pool.query(`UPDATE posts SET like_user ='${req.body.uid}', likes = likes + 1  WHERE  pid = ${req.body.pid}`, (err,result) => {
	  if(err) {
		  res.send(err);
	  }
	  console.log(result);
      res.send(result);
  });
});

//select blog_detail
app.post('/blogdetail', (req, res) => {
  pool.query(`select * from posts where pid=${req.body.pid}`, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	 // console.log(result);
      res.send(result.rows);
	  }
  })
})
//
app.post('/myblog', (req, res) => {
  pool.query(`select * from posts where userid='${req.body.uid}'`, (err,result) => {
	  if(err) 
	  {
		  res.send(err);
	  }
	  else
	  {
	 // console.log(result);
      res.send(result.rows);
	  }
  })
})
//
app.post('/deleteblog', (req, res) => {
  pool.query(`delete from comments where post_id=${req.body.pid}`, (err,result) => {
	  if(err)
	  {
		  res.send(err);
	  }
	  else
	  {
	    pool.query(`delete from posts where pid=${req.body.pid}`, (err,result) => { 
		
		        if(err) res.send(err)
				 else{
					 
					 res.send(result);
				 }
		});
	  }
  })
})

app.post('/deletecat', (req, res) => {
  pool.query(`delete from blog_category where id=${req.body.id}`, (err,result) => {
	  if(err)
	  {
		   res.send(err);
		   
	  }
		 
	 else
	 {
					 
			res.send(result);
	 }
	
	  
  })
})



app.listen(8080);
console.log("server listening the port no.8080");
