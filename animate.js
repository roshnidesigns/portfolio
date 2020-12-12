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

///////////
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


///////////

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

