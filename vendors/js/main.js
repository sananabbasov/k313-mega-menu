var button = document.getElementById("burgerNav")
var burgerNav = document.getElementById("navItems")

button.onclick = () =>{
   console.log(burgerNav);
   
    if (burgerNav.classList.contains("active")) {
        burgerNav.classList.remove("active")
    }else{
        burgerNav.className += " active"
    }

}