//let obj={
    //url:"domjs.js"
    //console.log(obj.url)
//}


//let person={
    //age:25,
    //name:"ajay",
    //getAge:function(){console.log(this.age)}
    //getName:function(){console.log(this.name)}
//}

//person.getAge()
//person.getName()

//let document={
    //URL:25,
    //heads:"ajay",
    //getElementsByTagName:function(){console.log(this.age)}
    //getName:function(){console.log(this.name)}
//}

//person.getAge()
//person.getName()

//var heads=document.getElementsByTagName("h1")
//for(head of heads){
 //   head.style.color="green";
//}

//var hd=document.getElementById("one")
//hd.style.color="cyan"

//var hd1=document.getElementById("two")
//hd1.style.color="red"

//var lis=document.getElementsByClassName("lis");
//for(head of lis){
//    head.style.color="blue";
//}

//var dm=document.getElementById("dm")
//dm.textContent="DocumentObjectMethods"

//var h1=document.getElementById("one")
//alert(h1.textContent)

//var dm=document.getElementById("dm")
//dm.innerHTML="<em>DocumentObjectMethods</em>"

var lis=document.querySelectorAll("li")
lis.forEach(li=>li.style.color="cyan")

var ls=document.querySelectorAll(".lis")
ls.forEach(l=>l.style.color="green")

var hd=document.querySelector("#one")
hd.style.color="blue"

