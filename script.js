document.getElementById("dateInput").addEventListener("change", function() {
    var input = this.value;
    console.log(input);

    if (input == "1997-11-12") {
        window.open("gabriel.html", "_blank");
    }})