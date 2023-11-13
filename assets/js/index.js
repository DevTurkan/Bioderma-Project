function showHideMenu(){
let menu = document.getElementById('menu');
        if(!menu.classList.contains("nav__active")){
            menu.classList.add("nav__active")
        }
        else{
            menu.classList.remove ("nav__active")
        }
}