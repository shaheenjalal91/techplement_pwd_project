//video1
//fundamentals of js
 
//foreach
/*
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val+" Hello");
});
*/


//map
//means creating exactly the same lenght of array but we want something else in that array using elements of prev arr
/*
var newArr = arr.map(function(val){
    return val+13;
});
console.log(newArr);
*/



//filter
//if I want elements from original array but I want only those elements which follow some condition
/*
var newArr2 = arr.filter(function(val){
   if(val>=3){
       return true; //here true will let the value to get added in our new array
   }else{
       return false;
   }
});
console.log(newArr2);
*/



//find
/*
var target = 3;
var newArr3 = arr.find(function(val){
   if(target==val){
       return true;
   }else{
    return;
   }
});
console.log(newArr3);
*/



//indexof
//console.log(arr.indexOf(2));



//object
/*
var student={
    name:"shaheen",
    age: "24",
    State: "Kashmir"
}
console.log(student.age);
//if I do not want anyone to change the data of the object then I can use freeze
Object.freeze(student);
//now If I change any value here still it will show me the prev data only
student.age="34";
*/

//function are basically objects in js
//so we can also find the length of functions
//length of the fxn is number of parameters used in that fxn
/*
function fxn(a,b,x){
  
}
console.log(fxn.length);
*/




//await
/*
var blob = await fetch('https://randomuser.me/api/');
var res = await blob.json();
console.log(res);
*/



//synchronous data and asynchronous data
//Asynchronous code allows the program to be executed immediately whereas the synchronous code will block further execution of 
//the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger
//picture you realize that it may lead to delaying the User Interface.
//so we have two stack main stack and side stack
//we put all synchronous code in main stack and asynchronous in side stack
//once the main stack has executed the whole synch code then it will take async code in main stack and will execute them
/*
async function abcd(){ //we used async for this fxn coz we are using fetch in this fxn and fetch is by nature async coz we do not know what will the code come after fetching it from third party whehter that will run or not and whether we will get the code or not
    var blob= await fetch('https://randomuser.me/api/'); 
   var ans= await blob.json();
   console.log(ans.results);
}
abcd();
*/








//Intro to NodeJs
//First of all we should be knowing that we can not use js to create backend then what should we do?
//we will use js to make backend, but how?
//google chrome has its engine E8 which is written in c++ and can be used to create backend therefore server side
//but we are writting code in js, how will we do it if chromes engine is using c++
//we will wrap our js code on chrome engine and it will automatically understand it in c++ language
//and this wrapping js on chrome engine and creating a runtime environment for backend is called nodeJs
//so we can say that NodeJs is Javascript runtime environment or library for running web applications outside the client's browser

//now we need to install NodeJs and npm
//without nodeJs we would not be able to use js to make server side therefore backend
//npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, 
//and many organizations use npm to manage private development as well.
//in simple words npm is like github where coders or developers share their code/packages and anyone can download it and use it
//now I will need json package and I will install it from terminal which you can see at the top
//in that I will write npm init and I have deleted the index.html as I do not need it
//in that we will write npm init  and package.json will be installed
//For Node. js projects, the package. json file provides a simplified way to manage a project's metadata and dependencies. The file
//ensures a project always has current information about the libraries and tools it needs to work correctly.

//now I will create a file in script.js
//for that I will need a code of line first which will understand that I will be creating a file
/*
const fs = require('fs');
fs.writeFile("hey.text","hey bud, how are you", function(err){
   if(err){
       console.error(err);
   }else{
    console.log("done");
   }
});
*/
//once we are done with here
//I will go to terminal and there I will write   node script.js
//if I do not write node at first it would not run coz it is converting js to backend understanding
//if we check now there would have been a file created hey.text
//Now if I want to add further data in my file then I will use appendFile and all the other things will remain same
//const fs=require('fs');
/*
fs.appendFile("hey.text"," and the answer will be I am excellent", function(err){
   if(err){
      console.error(err);
   }else{
      console.log(done);
   }
});
*/
//now if I want to rename the file
/*
fs.rename("hey.text","I am changed", function(err){
   if(err){
      console.error(err);
   }else{
      console.log("done");
   }
});
*/

//now if I want to copy the file
/*
fs.copyFile("hello.text","./copied/new.text", function(err){
   if(err){
    console.error(err);
   }else{
    console.log("done");
   }
});
*/


//now I will remove/delete hey.txt
/*
fs.unlink("hey.text", function(err){
   if(err){
       console.error(err);
   }else{
      console.log("removed");
   }
});
*/

//now if I want to remove the folder like I have folder "copied"
//but remember there are two things
//one is removing empty folder and another is removing a folder which has something inside it at that time we have to use recursive

//removing empty folder
//rmdir means removing directory or we can use 'rm' only as well that will also work everytime
/*
fs.rmdir("./copied", function(err){
    if(err){
       console.error(err);
    }else{
      console.log("removed folder");
    }
});
*/
//and the folder is removed successfully

//now if I had to remove a folder which has something inside it
// /fs.rmdir("./myfolder",{recursive: true}, function(err){   //here recursive keeps removing until the whole folder is empty even the folder itself
//     if(err){
//       console.error(err);
//     }else{
//       console.log("removed");
//     }
// });
//and the whole folder with its file will be removed


//now I will learn how I can create a folder/directory coz I have already learnt how to make file
//trying it myself
//there are many other things we can do as well
//we can make folder by two types: synchronously as well as asynchronously which will not run without stopping the other code from running and executing
/*
fs.mkdir("./makingfolder",{recursive: true}, function(err){
     if(err){
       console.error(err);
     }else{
      console.log("Folder created");
     }
});
*/
//and the folder is ready with the name makingfolder
//by default it was async

//now if I want to create async folder
//The fs.mkdirSync method creates a directory synchronously. This method is blocking, meaning the program waits until the directory is created before continuing.
/*
fs.mkdirSync("./makingfolder2",{recursive: true}, function(err){
   if(err){
     console.error(err);
   }else{
    console.log("Folder created");
   }
});
*/
//now I will add a file to makingfolder directory
/*
fs.writeFile("./makingfolder/hey.text","hey bud, how are you", function(err){
   if(err){
       console.error(err);
   }else{
    console.log("done");
   }
});
*/



//now we will learn a very important concept which is http and https
//first I will create a server of my own
/*
const http = require('http');
const server = http.createServer(function(req,res){   //req is request and res is response
    res.end("Hello brother, server is created");
});
server.listen(3000);
*/
//now if I open my terminal and check the server will start and on any browser if I write url as:  localhost:3000 I will reach to my server








//video3
//npm (node package manager) like I already said people can download packages from it like github or playstore
//things which are already installed in core node js are called modules and the one we download from our side are called packages that we download from npm
//now I will install some package from npm and then I will learn how to unistall that as well
//go to npm -> search -> one-liner-joke -> go to terminal -> npm install one-liner-joke and then you can check in your package.json a dependency would have been added from that package
//to uninstall -> just write this in terminal -> npm uninstall one-liner-joke
//but I will keep that ;-)

//now if I want a particular version of some package then I will simply do this
//we can simply write i for install not u for uninstall
// npm i accessibility@2.0.9       //here 2.0.9 is the version

//now the question is what is dependencies and dev dependencies
//if we see node modules something is installed what is its use?
//actually it download and keeps the code or dependencies we can say for the packages that we installed to run them
//we did not actually download them but it downloads them coz the packages themselves are dependent on some dependencies or code
//so dependencies means packages and packages ki dependencies
//devdependencies means the dependencies which are needed at the development time but are not needed once the app or software is deployed



//now we will learn about script
//this is one the most important topic to cover
//if you check in package.json there is script
//script test is there also start is there and these scripts gets installed at the time of node installation and the operating system keeps them in their table
//now if I write npm test in my terminal I will see the text that is written in the script for test
//Now I have created my own script "chacha" and I have put some text inside it
//Now I write npm run but it does not run 
//since the operating system does not know anything as such so to make OS understand that I have made it and you have to run it
//write: npm run chacha 
//and it will run 







//video 4
//Now we will study Express.js Framework
//first of all we should know that expressJs is a framework or we can say it is a package of npm
//so what basically a framework means
//framework means steps to follow irrespective of how you do those steps but the sequence will remain the same and this is 
//what we call a framework
//so expressjs starts working once it receives the request from the user or anyother computer or database
//so from request to delivering the data all work is done by the expressjs
//It's a layer built on the top of the Node js
//It is used to build a single page, multipage, and hybrid web application

//so in simple words:  Express JS is a framework based on Node JS which is used for building web applications using approaches and principles of Node JS's event-driven architecture

//so lets get started with ExpressJs
//first we will install the framework or package ExpressJs
//go to npm -> search for Express -> get the installation code (npm i express) and write it in terminal and enter
//after the installation
//now there will be a read me code get that
/* 
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4000)
*/

//now I will explain what we did
//first we will get all the packages of express
// const express = require('express');
//now we will store those all powers of express package in a const app, why we used name app cox mostly expressjs is used to create web applications
//const app=express(); //we wrote it as a fxn coz express is currently working as a fxn
//now, we will create some routes
//so what basically a route is:  route is anything after the domain name 
//eg: we write youtube.com which is a domain name but do we know there is always /  by default which means a route
//so anything written after the / is route
/*
app.get("/", function(req,res){
     res.send("Allah is the great");
});
*/
//similarly we can create many routes as well which will led to another pages
/*
app.get("/profile", function(req, res){
     res.get("and Mohammad SAW is our beloved profet");
});
*/
//but now we have to select a port number so that it can run otherwise we would not see any result coming and then run it
// app.listen(5000);
//but the thing is at sometime if I want to change some text that would come on page but I would not be able to see that if I just change and refresh the page it will still show me the same
//this is coz the server is running for the prev text and it would not refresh or stop by itself we have to do that
//so to avoid that, clear the terminal and I will install a package:   npm i nodemon -g
//now we will never need to install this package
//now I will always write npx nodemon script.js
//now if I make any changes now the server will itself restart and the changes will be made

//so till now we have learnt setting up basic application and how does routing work

//now we will study
//Middleware
//Middleware is software that lies between an operating system and the applications running on it.
//Middlewares request aur response ke beech mein communication handle karta hai. Socho ise ek chowkidaar ki 
//tarah jo gate ke andar jaane se pehle aur baahar aane se pehle sab cheezein check karta hai.
//Toh, Middlewares ka basic kaam hai request aur response ke beech mein aane wali cheezon ko control karna,
//jaise authentication, logging, data validation, etc.

//now I will show you the use of middleware
/*
const express = require('express');
const app = express();

//using middleware this time
app.use(function(req,res,next){
    console.log("middleware chala");
    next(); //if I do not use this then request will not move forward and you will not see the result
});
app.get("/", function(req,res){
    res.send("I am good");
});
app.listen(5000);
*/
//in short mainey ab app ko depend kr diya h middleware p jab tak woh next nahe karega tab tk result samne nahe aayega
//even mai aik say zyada middleware b laga skta hu matlb usko aik say zyada permision lene padege tab woh chalega
//let us take the same code and I will add another one more route /about eg
/*
const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("middleware chala");
    next(); 
});
app.use(function(req,res,next){
   console.log("middleware aik baar aur chala");
   next(); 
});

app.get("/", function(req,res){
    res.send("I am good");
});
app.get("/about", function(req,res){
   res.send("about wala page khula");
});
app.listen(5000);
*/






//video 5
//in this video we will learn how we can handle backend process of forms and making sure that the data coming from any frontend
//library, framework, or templating engines and we can handle it
//so first I will install a package :  cookie-parser

//so now there is a concept of session and cookie
//eg: when I first time go on instagram I had to login first so that I can use the app and can checkout the things on it
//so at that time the instagram gives me a kind of string and tells me whenever you open the app the string will be attached to me
//this string is a cookie which means the cookie stores my login data and the previous identity of me
//and when I was using the app the connectivity was made bw me and the instagram and this is called session
//if I change the string or instagram changed that the cookie will be finished and the session will be overs
//now again I would have to repeat the same those things


//now I will explain a concept
//when we have some data I want it in Json format which is easy to understand for the user
//so I will use a middleware first
//app.use(express.json());
//now I converted the data in json format but it will go on network as blub means the json data will be there in binary 
//and where someone will get that on backend he has to convert it in understandable language
//app.use(express.urlencoded({extended: true}));
//and this is how data is being transfered in forms






//video 6
//I will be creating a project1
////video 6
//so before we will start with a mini backend project today I will learn multiple things
//first I will initialize a project with npm
//express intall
//let us follow these two steps first
//I will go to terminal and will write there:   npm init -y
//so after doing this a package.json will be there for us which will tell us what data and scripts are there for us 
//now installing express.js
//go to terminal -> npm i express

//so we would be learning 
/*
1. dynamic routing
2. setting up parsers for Form
3. setting up ejs for ejs page
4. setting up public static files
*/

//so lets start
//if I check package.json
//there is a main script.js which I have already made otherwise I had to made that
//so at first I will require express js which will handle the backend and the middlewares which will convert the data in understanable form
//form for the users at the frontend and for backend users which we already learnt in video5
//the next two lines are called setting up parsers for form
/*
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
//now we will setup our first route
app.get("/", function(req,res){
    //sending a response
    res.send("chal rha h");
});
//now giving response back
app.listen(3000, function(){  //I used fxn if the data is not loaded then it will call himself back 
    console.log("its running");
});
*/
//now I already know that I do not want to restart the server everytime I make any changes
//so use npx nodemon script.js



//now I will learn about ejs
//ejs is like html, the only difference is that in ejs we have some powers 
//eg: in html  <h2>2+2</h2>, I will get 2+2 on the screen but if I use ejs I will get 4
//so, lets first install the package of ejs : npm i ejs
//now we will setup ejs as a view engine
//and we will create folder with name "views" , the name is very important like script.js
//and now we will create a file in it with name index.ejs
//and the whole body will be same as like html
//change send to render and I have written a file name in it index and it will open it page chacha and it will look for it in views folder so create that first
//now open the terminal
/*
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    //res.send("chal rha h");
    res.render("index");
});
app.listen(3000, function(){  
    console.log("its running");
});
*/


//now we will study how we can work with html,css and js
//for that I will study know 
//setting up public static files
//I will add one more line now (app.use(express.static(path.join( __dirname , 'public')));)  
//this line means find all static files(therefore images, videos, js, stylesheets) in public folder
//then what is the use of path.join(__dirname)?
//actually __dirname is the path eg: /users/shaheen/Backend_project1 and when we say it join it with /public
//it will become  /users/shaheen/Backend_project1/public    and this is how they get access to this folder
//and this is the reason we are using path.join
//so I will require path also so we will add that line as well
//and I will create another folder public and in that I will add 3 more folders:
//images, javascripts, stylesheets
//now I will add the style.css to my stylesheets folder and I will link that on my index.ejs
/*
const express = require('express');
const app = express();
const path = require('path'); //line is added

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join( __dirname , 'public')));  //this line is added
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("index");
});
app.listen(3000, function(){  
    console.log("its running");
});
*/


//now I will use css tailwind,  Tailwind is a framework for CSS
//link it on your index.ejs :   <script src="https://cdn.tailwindcss.com"></script>
//this was all about it


//now I will learn about dynamic routing
//we know that there are many routes for which the domain name and many slashes are same 
//eg: route 1    instagram/login/shaheen    instagram/login/shahid      instagram/login/fatima
//so it is clear from the eg that most part of the route remains same so why should we make separate routes
//so here is where dynamic routing takes part

//first let me create a route of my own let it be like localhost:3000/shaheen/profile/LPU/CSE   let it be like a practice question as well
/*
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/shaheen/profile/LPU/CSE", function(req,res){
    res.send("It is working if you can see it");
});
app.listen(3000);
*/
//ok so I checked it and it is working fine
//but if you see I can do it for shaheen only, what about other names so here name shaheen is dynamic
//so we do not have to make big change, just put colon before shaheen and thats it nothing else needs to be done
/*
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/:shaheen/profile/LPU/CSE", function(req,res){
     res.send("Yes it is working");
});
app.listen(3000);
*/
//ok so I checked it and it is working completely fine
//now if I want that the name of that student of person should come on the website then I will add a one line in res.send
/*
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/:username/profile/LPU/CSE", function(req,res){
     res.send("Welcome "+req.params.username);
});
app.listen(3000);
*/

//Q: create a dynamic route which will take age, school, name as will print that to the user on screen itself
/*
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/:age/:school/:name", function(req,res){
    res.send("Welcome "+req.params.name+ " to our website, your age is "+req.params.age+ " and school name is "+req.params.school);
});
app.listen(3000);
*/


//video 7
//now we are ready for the project
//there will be another folder for it with name backend_project1






