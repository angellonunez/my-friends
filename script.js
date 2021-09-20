document.getElementById("dateInput").addEventListener("change", function() {
    var input = this.value;

    if (input == "1997-09-27") {
        window.open("angello.html", "_self");
    }   else if (input == "1997-11-12") {
        window.open("gabriel.html", "_self");
    }   else if (input == "1997-06-27") {
        window.open("gustavo.html", "_self");
    }   else if (input == "1997-09-01") {
        window.open("alonso.html", "_self");
    }   else {
        window.open("nobody.html", "_self");
    }
})