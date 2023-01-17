let photoNum = 1;
slideShow (photoNum);

function nextPrev(n){
    slideShow(photoNum += n);
}

function slideShow(n){
    let slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) photoNum = 1;
    if (n < 1) photoNum = slides.length;
    for (i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[photoNum - 1].style.display = "block";

}