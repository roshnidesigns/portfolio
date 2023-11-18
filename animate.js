$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('nav').toggleClass('active')
  })
})

document.getElementById("medium").addEventListener("click", callMedium);
function callMedium() {
  document.getElementById("medium").href = "https://roshniscribbles.medium.com/";
}


document.getElementById("twitter").addEventListener("click", callTwitter);
function callTwitter() {
  document.getElementById("twitter").href = "https://twitter.com/galwhodesigns";
}

document.getElementById("linkedin").addEventListener("click", callLinkedin);
function callLinkedin() {
  document.getElementById("linkedin").href = "https://www.linkedin.com/in/roshnionin/";
}

document.getElementById("insta").addEventListener("click", callInsta);
function callInsta() {
  document.getElementById("insta").href = "https://www.instagram.com/roshni.create/";
}





// carousal
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
// loader
var myVar;
function myFunction() {
  var quotes = [
    "I'm an engineer turned designer 👩🏽‍🎓",
    "My highest sleep record is 18 hrs 😴",
    "I possess story telling super power 🪄",
    "I ❤ dark coffee",
    "Love at first sight ~ Bentley ❤",
    "I can’t remain idle 💃",
    "Roshni ~ Light ~ ⚡️",
    "My current read ~ The Book Thief 📖",
    "Mystery/Thriller is my fav 💀"
  ]
  var random = Math.floor(Math.random() * (quotes.length));
  var quotenum = random + 1
  document.getElementById("quotenum").innerHTML = quotenum + "";
  document.getElementById("quote").innerHTML = quotes[random];
  myVar = setTimeout(showPage, 1500);

  var link = document.getElementById("link-rp");
  link.setAttribute("href", index.html);

}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


