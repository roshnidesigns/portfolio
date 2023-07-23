$(document).ready(function(){
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
    })
})

function setClipboard(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var tooltip = document.getElementById("myTooltip");
tooltip.innerHTML = "Mail Copied!";
}
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}



  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  } 
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
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  

  var myVar;
  function myFunction() {
    var quotes = [
      "I'm an engineer turned designer :0",
      "My highest sleep record- 18 hrs😴",
      "I possess story telling super power :D",
      "I 🤎 dark coffee.",
      "Love at first sight- Bentley ❤",
      "I can’t remain idle 💃",
      "Roshni ~ Light ~ ⚡️",
      "My current read📖 Don't Make Me Think",
      "Mystery/Thriller is my fav 📖"
    ]
    var random = Math.floor(Math.random() * (quotes.length));
    var quotenum =random+1
    document.getElementById("quotenum").innerHTML = quotenum + "";
    document.getElementById("quote").innerHTML = quotes[random];
    myVar = setTimeout(showPage, 1500);

    var link = document.getElementById("link-rp");
    link.setAttribute("href", "https://roshnidesigns.github.io/");

  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }


