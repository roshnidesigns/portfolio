var s = "is Light!⚡"; 

document.getElementById("name").addEventListener("click", function myfunction () {
    var name = document.getElementById("name");
        
    if (name.innerHTML === "Roshni?") {
        name.innerHTML = s;
        name.classList.remove("name");
        name.classList.add("name-toggle");
    }
    else if (name.innerHTML === s) {
        name.innerHTML = "Roshni?";
        name.classList.remove("name-toggle");
        name.classList.add("name");
    }

    }
)

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}