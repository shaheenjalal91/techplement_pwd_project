
//Hands on practice
//ok so lets get started
//I am starting from blank
//So at first I wrote: npm init -y and the json file will be installed
//in the json file there was a index.js so I have created it
//Now let me install express also: npm i express
//so I have installed express, now I will use that as I am used to 

// const express = require('express');
// const app = express();
// const path=require('path');


//also what we are going to hit, we are going to hit ejs which will be in view engine
//so I will create a folder views and in that I will create index.ejs file
// app.set("view engine", "ejs");  //install npm i ejs
// //then we make json understanding format
// app.use(express.json());
// app.use(express.urlencoded( {extended:true} ));
// app.use(express.static(path.join(__dirname,"public"))); //telling this code to find all types of static files in public folder, so I have created three folders inside public folder and require path at top otherwise there will come an error

//creating a route or api we can say

// app.get('/', function(req,res){
//     res.send("working");
// });
// app.listen(3000);

//Now I will install nodemon again as this is a new project and nodemon is not installed here:  npm i -g nodemon
//and :   npx nodemon index.js

//ok till now everything is going good
//Now I want to show index.ejs so I will make slight change and that will be I will change res.send to res.render
// app.get('/', function(req,res){
//     res.render("index");
// });
// app.listen(3000);





//now we will start with the project 
//the project will be notes saver web app
//we will create notes and it will get saved in that web app

//first I will add tailwind to my index.ejs
//and I am adding some div and form in those div on index.ejs


//now writting the clean code and double slashing the other code at top
const express = require('express');
const app = express();
const path=require('path');
const fs = require('fs');


app.set("view engine", "ejs");  
app.use(express.json());
app.use(express.urlencoded( {extended:true} ));
app.use(express.static(path.join(__dirname,"public")));


app.get('/', function(req,res){
    //I will create a  fs.readdir  which means files directory and It will check for the path and will check if there are files or not
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files : files}); //this means when fs.readdir runs then it will render the data of files and now we will go to index.ejs and will run a foreach loop
    });
});


//creating route when user clicks on read more 
app.get('/file/:filename', function(req,res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8",  function(err, filedata){ //utf-8 converts the data in english otherwise I will see the buffer format means in hexadecimal
          res.render("show", {filename: req.params.filename, filedata: filedata}); //so I want to display a route on another page where user can see the read more so I will create another show.ejs for that
    });
});


//crreating route for the edit button
app.get('/files/:filename', function(req,res){
    res.render('edit', {filename: req.params.filename});//so we will create now a page edit therefore edit.ejs

});

//after updating name or we can say posting a name
//crreating route for the edit button
app.post('/edit', function(req,res){
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect("/");
    });
});

//jab user waha data submit karega toh woh yaha aayega
app.post("/create", function(req,res){
    //lets check is it working or not
    //console.log(req.body);
   //ab mai chahta hu jab woh kuch b like title mai like node is not working toh woh dikhe nodeisnotworking.txt
   //toh mai iske liye split method use karuga toh remove spaces and yeh files creating mai likhuga mai
   fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, function(err){
         res.redirect("/");  //means after creating the file it will route the user to home page
   });
});
app.listen(1000);




