var express = require("express")
var mysql = require("mysql")
var app = express()


var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'jeu'
  });
   
  con.connect();


app.use("/assets",express.static("public")) 

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    con.query("select * from matches",(err,rows,fields)=>{
        if(err) throw err
        res.render("index",{
            data:rows
        });
    })
})

app.listen(8080)