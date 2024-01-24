function ucitajHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("header").innerHTML = this.responseText;
    }
    xhttp.open("GET", "partials/header.html");
    xhttp.send();
}

function ucitajFooter() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("footer").innerHTML = this.responseText;
    }
    xhttp.open("GET", "partials/footer.html");
    xhttp.send();
}


ucitajHeader();

ucitajFooter();
