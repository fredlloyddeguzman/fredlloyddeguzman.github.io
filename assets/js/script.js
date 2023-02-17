var slideIndex = 0;
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  showSlides();
  
  function rotateImage(val) {
    let image = document.getElementById("image");
    if (image.style.webkitAnimationPlayState == "running") {
      image.style.webkitAnimationPlayState = "paused";
      val.innerHTML="Spin";
    } else {
      image.style.webkitAnimationPlayState = "running";
      val.innerHTML="Stop";
    }
  }