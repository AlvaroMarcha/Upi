// JavaScript Document

//Vars
var menu=document.getElementById("nav-links");
var open=document.getElementById("button").value;
var header=document.getElementsByTagName("header");

var hidde=document.getElementById("hidde");
var fOpen=document.getElementById("contactB").value;

//Functions to Menu Responsive
function openMenu(){
    menu.style.opacity="1";
    menu.style.zIndex="1";
    menu.style.display="block";
    header[0].style.height="100vh";
    
    open=true;

}

function closeMenu(){
    menu.style.opacity="0";
    menu.style.zIndex="-1";
    header[0].style.height="170px";

    open=false;

}

function toggleMenu(){
    if(open){
        closeMenu();
    }else{
        openMenu();

    }

}


/* Footer menu contact */
var forContact=document.getElementById("for-contact");

function openContact(){
    forContact.style.width="40%";
    forContact.style.height="600px";
    hidde.style.opacity="1";
    hidde.style.zIndex="11";
    hidde.style.display="block";

    fOpen=false;

}

function closeContact(){
    forContact.style.width="50%";
    forContact.style.height="60px";
    hidde.style.zIndex="-1";
    hidde.style.opacity="0";
    hidde.style.display="none";
    
    fOpen=true;

}


function toggleContact(){

    if(!fOpen){
        closeContact();
    }else{
        openContact();

    }

}

