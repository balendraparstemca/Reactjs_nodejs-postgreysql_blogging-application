var express = require('express')
var router = express.Router();
var pool = require('./db');


/*
    POSTS ROUTES SECTION
*/
//login
router.get('/login', (req, res) => {
  pool.query(`select * from users where uname='${req.body.uname}' and upwd='${req.body.upwd}'`, (err,result) => {
	  if(err) throw err;
	  console.log(result);
      res.send(result);
  });
});

//select all user
router.get('/login', (req, res) => {
  pool.query(`select * from users`, (err,result) => {
	  if(err) throw err;
	  console.log(result);
      res.send(result);
  })
})

/*pool.query(
  "select * from student",
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);*/


module.export=router