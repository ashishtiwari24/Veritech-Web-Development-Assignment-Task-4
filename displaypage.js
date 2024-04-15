const  displaydetails=document.getElementById("display");
const displaydetails2=document.getElementById("display2");
const container=document.getElementsByClassName("Container5");
onload=function displayc1(){
    var t1=this.document.createElement("div");
    var d1=document.createElement("text");
    d1.innerHTML="School Friends";
    t1.classList.add("ttl");
    t1.appendChild(d1);
    displaydetails.appendChild(t1);
    var pa1=this.document.getElementById("pa1")
    var p1=document.createElement("p");
    p1.innerHTML="A slice-of-life show that explores the lives of 5 quirky school <br> teenagers who've just entered 11th Commerce, as they navigate <br> friendships, heartbreaks, peer pressures, importantly figuring out <br> who they really want to be.";
    p1.classList.add("para");
    pa1.appendChild(p1);
    displaydetails.appendChild(pa1);
   
    var i1=this.document.createElement("div");
    var img1=document.createElement("img");
    img1.src="./imagesshows/img1.jpg";
    img1.classList.add("imgs");
    i1.appendChild(img1);
    displaydetails.appendChild(i1);
    
    }
   

function url1(){
    window.location.href="page2showcontent.html";
}
function display1(event){
    url1();
}
function go(){
    window.location.href="https://www.amazon.in/minitv/tp/d885d807-6253-4c71-956e-ff2238d41947";
}
function url2(){
    window.location.href="page3showcontent.html";

}
function display2(event){
    url2();
}
function url3(){
    window.location.href="page4showcontent.html";
}
function display3(event){
    url3();
}
function url4(){
    window.location.href="page5showcontent.html";


}
function url5(){
    window.location.href="page6showcontent.html";

}

function url6(){
    window.location.href="page7showcontent.html";
}

function display4(event){
    url4();
}
function display5(event){
    url5();
}
function display6(event){
    url6();
}

