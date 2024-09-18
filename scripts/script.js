// ----------------------------------------------------------------------
const images = [
    { src: 'images/nature1.jpg', bgColor: '#f4dcd1' },
    { src: 'images/nature2.jpg', bgColor: '#e4c09f' },
    { src: 'images/nature3.jpg', bgColor: '#7bc4ef' },
    { src: 'images/nature4.jpg', bgColor: '#dfd6fb' },
    { src: 'images/nature5.jpg', bgColor: '#f1d4c7' },
    { src: 'images/nature6.jpg', bgColor: '#9cd9d4' },
    { src: 'images/nature7.jpg', bgColor: '#959a80' }
];
let slides = document.getElementsByClassName("slider__slide")
let navlinks = document.getElementsByClassName("slider__navlink")
let autoplay = '';
let currentSlide = 0;


nextSlide()
prevSlide()
AutoplaySlide()


function nextSlide(){
    document.getElementById("nav-button--next").addEventListener("click", ()=>{
        changeSlide(currentSlide + 1)
        resetAutoplay()
    });
}

function prevSlide(){
    document.getElementById("nav-button--prev").addEventListener("click", ()=>{
        changeSlide(currentSlide - 1)
        resetAutoplay()
    });
}

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {
        moveTo = 0;
    } else if (moveTo < 0) {
        moveTo = slides.length - 1;
    }

    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");

    currentSlide = moveTo;

    document.body.style.backgroundColor = images[currentSlide].bgColor;

}


function AutoplaySlide(){
    autoplay = setInterval(function (){
        changeSlide(currentSlide + 1);
    },5000)
}
function resetAutoplay(){
    clearInterval(autoplay);
    AutoplaySlide();
}

