const hambLinks = document.getElementById("nav-links");
//I used const here because Jackson said var is outdated and this id won't change

function hamburgerMenu(){
    //I used a ternary operator here because it could be done in one line with very simple logic:
    //if the current css style of the nav links is block, then assign it to none, and if it isn't then assign it to block
    //this will just toggle between displaying the links and not displaying them!
    hambLinks.style.display === "flex"? hambLinks.style.display = "none" : hambLinks.style.display = "flex"
}
