var today = new Date();
var year = today.getFullYear();
var elYear = document.getElementById('copy');
elYear.innerHTML = "Copyright &copy;" + year + " All right reserved";

var nav = document.querySelector('nav');
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
})