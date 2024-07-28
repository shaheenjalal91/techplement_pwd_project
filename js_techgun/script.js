// let age=prompt("Enter your age", 20);
// confirm("Are you sure you want to proceed?");
// if(age>18){
//     document.write(`You are an adult and your age is ${age}`);
// }else{
//     alert("You are a kid");
// }






//string manupilation
// let str="shaheen";
// console.log(`hi ${str}`);







//creating a fxn which will write the table of any number
// function mul_table(num){  //here 12 is parameter
//     for(let i=1;i<=10;i++ ){
//        document.write(`${num} x ${i} = ${num*i}`);
//        document.write("<br>");
//     }
//     document.write("<br>");
// }
// mul_table(2); //here 2 is argument and 5 is also argument
// mul_table(5);


//creating a fxn to add two numbers
/*function add(a,b){
   document.write(`${a} + ${b} = ${a+b}`);
   document.write("<br>");
}
add(2,3);
add(2,9);*/


//now I want to create a fxn where user can use any number of arguments like if he wants to add 2, 1 or any numbers
//then I can use arguments
//arguments is a kind of array
/*function sum(){//do not write parameters as we do not know how many arguments the user will use
    if(arguments.length==0){
        //means the user has not entered any number as arguments so the length of the argument array is 0
        console.log("No argument passed");
    }else{
        let sum=0;
        for(let i=0; i<arguments.length; i++){
           sum+=arguments[i];
        }
        console.log(sum);
    }
}
sum(1,2,3,4,5);//so now the user can use any number of arguments using arguments array*/


//variable definded inside function is called local variable and the variable defined outside fxn is called global variable







//Ananoymus fxn
//these fxns do not have the name
//so for that we assign the fxn to a variable

// let x=function (){
//   document.write("fatima jaan is a tp player");
// };
// x();

//now if I want a fxn to run after some time
//then I can use setTimeout fxn in js


/*let x=function (){
console.log("fatima jaan is a tp player");
};
setTimeout(x,5000);*///here x is fxn name and 3000 is in milli seconds


//Immediately invoked fxn
//this means that the fxn must be used and finished and should not be there after use to take the memory
//for this we will just use anonymous fxn and will close it in brackets and at last I will use () and it is done.
/*(function (){
    console.log("hello world");
})();*/






//object
/*let person={
    Firstname: 'Shaheen',
    Lastname: 'Jalal',
    Age: '24',
    Education: 'LPU',
};
console.log(person.Lastname);
console.log(person.Age);
//now if I want to print the whole object
console.log(person);
//now if I want to delete the age from the object
delete person.Age;
console.log(person);
//if I want to change the value of let it be age
person.Age='88';
console.log(person);
//now I will use advanced for loop in js
for(let key in person){
     console.log(key+ ":"+person[key]);
}*/



//Video: 27
//we can create a method inside object also
/*let person={
    Firstname: 'Shaheen',
    Lastname: 'Jalal',
    /*sayHello: function (){
       console.log("hello");
    }
   //or we can do it this way also:
   sayHello (){
    console.log("hello");
   }
};
person.sayHello()*/




//video 30
//generating random numbers
/*let x=Math.random(); //will generate number bw 0 and 1
console.log(x);*/
//now if I do not want decimal numbers than I can Math.floor and multiply with 10 so that I can get the number from 0 to 9
/*let x=Math.floor(Math.random()*10); //the max limit is always the number multiplied minus 1
console.log(x);*/
//now if I want the random number from 30 to 100
// let x=Math.floor(Math.random()*101) +30;
//console.log(x);

//eg: if I have to get the random number bw 15 and 25
// let x=Math.floor(Math.random()*(25-15))+15;
// console.log(x);

//now let us put it inside a fxn
// function getRandom(min,max){
//    let x=Math.floor(Math.random()*(max-min))+min;
//    return x;
// }
// console.log(getRandom(15,25));


//video 31
//date object
// let x=new Date();
// console.log(x);


//video 33
//we used to create method like this:
/*let person={
    name: "shaheen",
    age: 23
};
console.log(person.age);*/

//but now we will use new keyword for this
/*var person = new Object;
person.name="shaheen";
person.age=23;
console.log(person.name);*/


//video 34
//till now we used to create an object and give it the properties like person and its name and age etc
//but now we will not do that
//we will create object constructor function
/*function student(name,school,age,residence){
  this.firstname=name;
  this.school_name=school;
  this.My_age=age;
  this.Resident_of=residence;
}
var std1=new student("shaheen","DPS",24,"Khalmulla");//and we will be passing arguments when we create the instance using new
console.log(std1);
//similarly I can create many instance for many students and now I do not need to create object of each student separately
var std2=new student("Shahid","WCM",26,"Khalmulla");
//console.log(std2);
//now I want to add some differenet property to std2 only and that should not make any change in our fxn
std2.nationality="Saudi";
//console.log(std2);
//even I can add a fxn in my std2 also and that will not make any change in my fxn
std2.name=function(){
    return this.firstname+" Jalal";
}
console.log(std2.name());*/



//video 35
//object prototypes
//Prototypes are a powerful and very flexible feature of JavaScript,
//making it possible to reuse code and combine objects. In particular they support a version of inheritance




//video 36
//nested objects
//means creating object inside object
/*var std={
    name : "shaheen",
    class : "12th",
    personalInfo : {
        address : "Khalmulla Nagbal",
        Street : "Peer Colony",
        education : {
            highestQualification : "bachelors",
            College: "LPU",
        }
    }
};*/
//console.log(std);    //this will give us whole object and the nested objects inside it
//if I want to print a personalInfo object only
//console.log(std.personalInfo);
//now if I want to print the college name only
//console.log(std.personalInfo.education.College);




//video 37
//hoisting
//if we declare a fxn or var before defining it then js automatically takes it upward before declaring the var or fxn and this
//is called hoisting in js
//eg:
/*hello();
function hello(){
    console.log("hello world");
}*/
//so according to common sense it should say fxn is not defined but it will run it

//now we will do it for var
// var x;
// console.log(x); //so what will happen here, we assign the value of var after the declaration
//so var automatically put x=undefined until it do not see value of x and will print it at console.log(x)
//but this is not with let and const
//they will show error
//x=7;


//video 38
//DOM(Document Object Model)
//DOM is an API used for manipulating html and XML documents therefore to add, remove or modify parts of documents
//when a web page is loaded the browser creates a DOM of page
//the main root of the page is document
//like it creates a tree, document has html and then html has head and body and so on.
//so in DOM, all html elements like head, body etc are treated as objects


//video 39
//Select an element by ID
//we will do this on index.html only
//writing here for theory
//I will create list in index.html for understanding
//let elm1 = document.getElementById("me");
//console.log(elm1);
//now I want to get the element only then I can use InnerHTML for that
//console.log(elm1.innerHTML); //this is to get the element
//now if I want to set the element
//elm1.innerHTML = "Parinda"; //it will change shaheen to parinda here we can use h1 or paragraph anything inside ""


//video 40
//select an element by class name
//let elm=document.getElementsByClassName("others");
//to get them
//console.log(elm);
//now if I want to set them
//elm.innerHTML="JALAL"; //but this will not change them coz now elm is here representing more than one element
//which makes it a kind of array or collection
//console.log(elm.length);
//so we will need for loop
/*for(let i=0; i<elm.length; i++){
     //elm.innerHTML="JALAL";  this will also not work
     //do this 
     elm[i].innerHTML="JALAL";
}*/



//video 41
//select element by tag name
//let elm=document.getElementsByTagName("h1"); //when we are wroking with single object than at that time we will use element not elements
//since h1 here are multiple so elm is here like an array
//for(let i=0; i<elm.length; i++){
    //elm[i].innerHTML="Good Bye"; //so all h1 text will change to Good Bye //setting
    //console.log(elm[i]);  //getting
//}

//now I want to change the elements inside a div only
//first we need to select the root of div
//then we will select the elements of div and div being as root at that time
       /*let elm1=document.getElementById("div1");
       let elm2=elm1.getElementsByTagName("h1");
       for(let i=0; i<elm2.length; i++){
           elm2[i].innerHTML="BOOKS"; //this will change the heading inside div1 only
       }*/



//video 42
//query selector  //this is the most powerful selector
    /*let elm=document.querySelectorAll("p.intro"); //so I will change the para with class intro, also elm is an array cox there are multiple elements
       for(let i=0; i<elm.length; i++){
           elm[i].innerHTML="CHANGED"; 
       }*/




//video 43
//Traversing elements in js
//traversing means accessing siblings or parent of the element chosen or we can say it is an indirect selection
//like I will show you an eg where I will access the parent of the element
/*let elm=document.getElementById("lissst");
       let elm2=elm.parentElement;
       console.log(elm2);*/

//Similarly if I want to access the other elements like siblings of prev or next elements of the selected element we can do that as well




//video 44
//changing the HTML using innerHTML
/*let elm=document.getElementById("me");
      //console.log(me);   //getting
      //now we will set
      elm.innerHTML="JALAL";  //setting*/



//video 45
//create and append element in js
/*let elm=document.getElementById("lec45"); //getting the element by Id first
      let h1=document.createElement('h1'); //creating an element from our side that we will append latter on to elem
      let text=document.createTextNode("This is a h1 tag");
      //now I will put some text in h1 by appending text to h1
      h1.appendChild(text);
     //now I will append h1 in elm
     elm.appendChild(h1); //so this will change "this is a p tag" to "this is a h1 tag"*/



     /*let elm=document.getElementById("lec45"); //getting the element by Id first
     let h1=document.createElement('h1'); //creating an element from our side that we will append latter on to elem
     //if I want to add class to h1, we do not need to go anywhere we can do it here only
     h1.className='h1_class';
     //we can add ID also 
     h1.id='h1_id';
     let text=document.createTextNode("This is a h1 tag"); 
     //or we can add it like this also
     /*h1.textContent="COntent adding here";*/
     //now I will put some text in h1 by appending text to h1
     //h1.appendChild(text);
    //now I will append h1 in elm
    //elm.appendChild(h1); //so this will change "this is a p tag" to "this is a h1 tag*/



    //eg: add another list 5 in ul
          //now I need to add list5
      //first I will provide id to ul
      /*let elm=document.getElementById("listss");
      //now we will create element list 5
      let item=document.createElement("li");
      //now we need to add some content to li
      item.textContent="list5";
      //now we will append the item to elm
      elm.appendChild(item);*/




//video 46
//insert before an element in js
//just before this lecture we used append to add another element in our list and it got added at last position
//now if I want the element to be added at other 4 position, how would I do that
//for that I can use insert before
 //eg: add list 5 at first possition
        //first we will get the parent 
        /*let elm=document.getElementById("listss");
        //now we will create an element li
        let item=document.createElement("li");
        //now I will add some content in li
        item.textContent = "list5";
        //now I want this item to be at first position in list
        //for that I had to know the position of first element child
        let pos=elm.firstElementChild; //this is pointing to first li 
        //now I will add this before the first element child
        elm.insertBefore(item,pos);*/


        //now if I want it to add at 2nd positon
        //the only thing I need to do is
        //let pos=elm.firstElementChild.nextElementSibling;
        /*let elm=document.getElementById("listss");
     let item=document.createElement("li");
     item.textContent="list5";
     let pos=elm.firstElementChild.nextElementSibling;
     elm.insertBefore(item,pos);*/


     //similarly if on 3rd add one more nextElementSibling and so on


     //now if I want the element to add on top of my list I mean before my ul
     /*let elm=document.body; //selecting body as parent
     let item=document.createElement("h2"); //let it be a heading right now it can be anything
     item.textContent="I am outside the ul now";
     //now I need the position of ul and we already know its id so lets get the position of ul by its id
     let pos=document.getElementById("listss");
     elm.insertBefore(item,pos);*/




     //video 47
     //remove child element
     //to remove any element there must be its parent and if some element does not have parent then body itself is its parent
      //suppose I want to remove first li
          //first I need to get the parent which is ul here
          /*let elm=document.getElementById("listss");
          //now I will get the element which I want to remove and I want to remove the first child of parent
          let item=elm.firstElementChild;
          //now I will remove that
          elm.removeChild(item);*/


          //now If I want to remove the second element I will just do:
          //let item= elm.firstElementChild.nextElementSibling;
          /*let elm=document.getElementById("listss");
          let item=elm.firstElementChild.nextElementSibling;
          elm.removeChild(item);*/


          //now I want to remove whole ul
          /*let elm=document.getElementById("listss");
          document.body.removeChild(elm);*/





    //video 48
    //clone or copy element in js
    /*  let elm=document.getElementById("listss");
        let cloned_elm=elm.cloneNode(true); //if I do not write anything inside it then it will take it as false and would not copy the child elements like li of ul
        console.log(cloned_elm);  
        
    */

    //if I want to show the cloned one on page and not in console
    /*let elm=document.getElementById("listss");
    let cloned_item=elm.cloneNode(true);
    //but the ID will become same for both cloned and real one, so to change that
    cloned_item.id="listss2"
    //now I need to append that if I want it to show on the screen
    document.body.appendChild(cloned_item); */



    //video 49
    //replace element in js
    /*//now If I want to replace list2 with something different let that be listxyz
       //first selecting the parent 
       let elm=document.getElementById("listss");
       //now creating an element which is to be placed 
       let item=document.createElement("li");
       //adding some content in that
       item.textContent="listxyz";
       //now I need to know the position where I have to replace the list 2 with listxyz
       let pos=elm.firstElementChild.nextElementSibling; //this will target list2
       //now I will replace
       elm.replaceChild(item, pos);
       */




    //video 50
    //Insert Adjacent HTML in JavaScript
    //here we can do the same that we add li or para or whatever at differnt positioin to a div ul or anything



    //video 51
    // Change Attribute 
    //attributes are like font, color, size even id, class
    //I will create now a button and I will change the attribute of id
    //at first I will add an attribute
    /*//getting the parent first
    let elm=document.getElementById("btn");
    //now I will ad an attribute in btn
    elm.setAttribute("name","button1");
    //now if you will check console you will see there is another attribute name="button1"*/

    //now if I want to get the attribute but the attribute must be already there
    /*let elm=document.getElementById("btn");
    let val=elm.getAttribute("name");
    console.log(val);*/
    //if you want to remove the attribute just write remove at place of get and no need to write console also at that time




    //video 52
    //Change Inline Style in JavaScript
    /*  let elm=document.getElementById("btn");
        elm.style.cssText="background-color: red;  color: white;  border: 4px solid black";
    */



    //video 53
    //Get Computed CSS in JavaScript



    //video 54
    //Change CSS Classes in JavaScript
    /*
    //now if I want to get the class name of the box
    let elm=document.getElementById("box");
    //console.log(elm.className);
    //now if I want to add some else also in the class name which is dim right now
    //elm.className+=" dim";
    //now if I want to know all the class used for elm
    //console.log(elm.classList); //if we check in the console it will show as an array
    //now if I want to add class to list
    //elm.classList.add("passion"); //now class name will be color dim passion
    //now if I want to remove dim from class name
    elm.classList.remove("dim"); //class name will be now color passion
    //now if I want to replace color will dolar
    elm.classList.replace("color","dolar");
    //now if I want to check whether dolar exists in the class name or not
    console.log(elm.classList.contains("dolar"));
    //there is another property in js and that is toggle 
    //it will add the classname if it is not there and will remove if it is already there
    elm.classList.toggle("shaheen");
    */




    //video 55
    //Get Width and Height of Element in JavaScript
    /*
    let elm=document.getElementById("box");
        let width=elm.offsetWidth;
        let height=elm.offsetHeight;
        console.log(width,height);
        */




    //video 56
    //DOM Events in JavaScript
    //DOM events are actions that occur as a result of user action or as a result of state change of the elements of a DOM tree
    //there are many events that we can do and we check them on internet as well
    //some of them are
    //onClick event
    //<button onclick="btnClick()">Click me</button> //in body
    //
    /*function btnClick(){     //in script
        alert("You have clicked the button");
    }*/

    //this was called inline but I can do it using addEventListener also
    /*
        let elm=document.getElementById("btn");
        elm.addEventListener('click',function(){ //I can write the fxn separately also but I used anonymous fxn
            alert("You have clicked on button");
        });
        */

        //I can also use multiple event listener on single element like I will do here with button
        /*
        let elm=document.getElementById("btn");
        elm.addEventListener('click',function(){
            console.log("Mouse is there");
        });
        elm.addEventListener('mouseover',function(){
            console.log("Mouse is on it");
        });
        elm.addEventListener('mouseout',function(){
            console.log("Mouse is out");
        });
        */



    
    //video 57
    //Remove Event Listener in JavaScript

    //like from above eg if I want to remove mouseover event
    //and the important thing is fxn must not be an anonymous fxn
    //  elm.removeEventListener('mouseover',click1); //click1 will be the name of the fxn mouseover



    //video 58
    //Page Load Events in JavaScript
    /*The onload event occurs when an object has been loaded.
      onload is most often used within the <body> element to execute a script once a web page has completely loaded all
     content (including images, script files, CSS files, etc.).
     The onload event can be used to check the visitor's browser type and browser version, and load the proper version 
     of the web page based on the information.
     */


     //video 60
     //if I want to know what the user is doing on keyboard
      //I can do this to know any command that he is pressing
      /*window.addEventListener('keydown',checkKey); //we can use keyup as well
      function checkKey(event){
          console.log(event.key);
      }*/
     //now if you will check console you can see any keyword that I am pressing




     //video 61
     //Scroll Event in JavaScript

     //video 63
     //event bubling and event capturing
     //let us suppose I have a div in body and in div I have a button
     //then if I click on button which event should get hit first and for that we study this concept
     //if I click on button and I want that at first button event must get hit then div and then body, this is called event bubling
     //and its opposite is called event capturing
     /*
      //first I will select my div
        let d=document.getElementById("container");
        //now I will select my button
        let b=document.getElementById("btn");
        //now I will add the eventListner on button
        b.addEventListener('click',buttonClicked);//here buttonClicked is fxn and the third parameter we have not mentioned whether it is false or true so by default it takes that as false and that means event bubbling
        //similarly I will add event listener in div also
        d.addEventListener('click',divClicked);
        //and at last we will add event listener for our body as well
        document.body.addEventListener('click',bodyClicked);

        //now I will define all the fxns we used as parameters in event listener
        function buttonClicked(){
            console.log("button clicked");
        }
        function divClicked(){
            console.log("div clicked");
        }
        function bodyClicked(){
            console.log("body clicked");
        }
     */
    
        //now if I add true as parameter in all event listener then first body will be called then div and then button
        //if I want to stop at button only like if I clicked on button no other parent must be called
        //then for that I will add any variable in fxn of button and then I will add stop propagation 
        /*
        let d=document.getElementById("container");
        let b=document.getElementById("btn");
        b.addEventListener('click',buttonClicked);
        d.addEventListener('click',divClicked);
        document.body.addEventListener('click',bodyClicked);

        function buttonClicked(e){
            console.log("button clicked");
            e.stopPropagation();
        }
        function divClicked(){
            console.log("div clicked");
        }
        function bodyClicked(){
            console.log("body clicked");
        }
        */



        //video 64
        //Prevent Default in JavaScript
        //eg I will create a link and I do not want user to go directly on the link on one click
        /*
         let l=document.getElementById("lnk");
      //now I will to add a event listener
      l.addEventListener('click',function (e){
        console.log("link is clicked");
        e.preventDefault();
      });
      */
     //we actually use it when we want the user to do something else before he reaches to the link after click
     //similarly I can do it with form as well
     //for body
     /*
     <form action="" id="frm">
        <input type="text">
        <input type="submit">
    </form>
    */
     /*
     let f=document.getElementById("frm");
        f.addEventListener('submit', function(e){
            console.log("text is added");
            e.preventDefault();
        });
        */





        //video 65
        //so we are done with DOM
        //now we will start BOM(Browser Object Model)
        //BOM is used to interact with the browser
        /*
        //any object or fxn or var(not let or const) if we use in javascript becomes the properties of the window
        //eg
        var s="hello";
        //console.log(s);
        // I can call it like this is well
        console.log(window.s); //it still runs
        //similarly I can create fxns as well and can call them using window
        */

        /*
         function call(){
            console.log("hello");
        }
        //call();
        window.call();
        */




        //video 66
        //Window Object in JavaScript
        //there are inner and outer height and width
        //innner means for window with which we are working and outer means whole screen
        /*
         console.log(window.innerWidth);
       console.log(window.innerHeight);
       console.log(window.outerWidth);
       console.log(window.outerHeight);
       */

       //now we will learn how to make a popup window when user comes to out site like an add comes on the screeen to click on 
       /*
        let b=document.getElementById("btn");
      let b2=document.getElementById("close");

      let url="https://www.google.com";
      let features="width=500,height=500";
      let win;

      b.addEventListener('click',function(){
        win=window.open(url,'google',features);
      });
      b2.addEventListener('click',function(){
        win().close;
      });
      */



      //video 67
      //Time out and Time Interval in JavaScript






    











    










