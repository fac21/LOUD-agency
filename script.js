const hambLinks = document.getElementById("nav-links");
//I used const here because Jackson said var is outdated and this id won't change

function hamburgerMenu(){
    //I used a ternary operator here because it could be done in one line with very simple logic:
    //if the current css style of the nav links is block, then assign it to none, and if it isn't then assign it to block
    //this will just toggle between displaying the links and not displaying them!
    hambLinks.style.display === "block"? hambLinks.style.display = "none" : hambLinks.style.display = "block"
}


hamburgerMenu();




// Index of current slide

let currentIndexOfSlides,slides;
function startOfSlideshow(){
    currentIndexOfSlides = 0;
    slides=document.getElementsByClassName("slide");
    slides[currentIndexOfSlides].style.opacity=1;

}

//Start slideshow

startOfSlideshow();
function addSlides(n) {
    slideMover(currentIndexOfSlides+n);
}

// Move to a specific slide

function slideMover(n){
    let i;
    let current,next;
    let slideMoverAnimation={
          forCurrent:"",
          forNext:""
    };

    if(n>currentIndexOfSlides) {
        if(n >= slides.length){n=0;}
        slideMoverAnimation.forCurrent="moveCurrentSlideLeft";
        slideMoverAnimation.forNext="moveNextSlideLeft";
    }else if(n<currentIndexOfSlides){
        if(n<0){n=slides.length-1;}
        slideMoverAnimation.forCurrent="moveCurrentSlideRight";
        slideMoverAnimation.forNext="movePrevSlideRight";
    }

    if(n!=currentIndexOfSlides){
        next = slides[n];
        current=slides[currentIndexOfSlides];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "slide";
            slides[i].style.opacity=0;
        }
        current.classList.add(slideMoverAnimation.forCurrent);
        next.classList.add(slideMoverAnimation.forNext);
        currentIndexOfSlides=n;

    }

}

//Move slides using left and right button on the keyboard

window.addEventListener('keyup', (event) => {
    if(event.which == 37){
        slideMover(currentIndexOfSlides - 1);
    }else if(event.which == 39){
        slideMover(currentIndexOfSlides + 1);
    }
});

//Timer for automatically playing slides

let timer=null;
function timerStart(){
    timer=setInterval(function () {
        addSlides(1) ;
    },2000);
}
timerStart();

//Switch button for play/pause of slides

function switchPlayPause() {
    let switchBtnPlayPause=document.getElementById("playPause");
    if(timer==null){
        timerStart();

    }else{
        clearInterval(timer);
        timer=null;

    }
}
