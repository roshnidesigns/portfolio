document.getElementById("name").addEventListener("click", function myfunction () {
    var name = document.getElementById("name");

        if (name.innerHTML === "Roshni?") {
            name.innerHTML = "means Light!💡";
            name.classList.remove("name");
            name.classList.add("name-toggle");
        }
        else if (name.innerHTML === "means Light!💡") {
            name.innerHTML = "Roshni?";
            name.classList.remove("name-toggle");
            name.classList.add("name");
        }

    }
)