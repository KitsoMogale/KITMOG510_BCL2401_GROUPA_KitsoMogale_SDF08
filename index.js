let svg = document.getElementById("svg");
let svg2 = document.getElementById("svg2");
let divbar = document.getElementById("divbar");

svg.addEventListener("click",function(){
    divbar.style.display = "inline";
    svg2.style.display = "inline";
    
})

svg2.addEventListener("click" ,function(){
    divbar.style.display = "none";
    svg2.style.display ="none";
})