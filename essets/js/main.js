let humburger = document.getElementById("humburger");
let nav = document.getElementById("nav");

humburger.onclick = function(){
    nav.classList.toggle("active")
    humburger.classList.toggle("active")
}