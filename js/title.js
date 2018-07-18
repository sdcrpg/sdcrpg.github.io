if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = ["U ", "U n ", " U n d ", " U n d o ", " U n d o x ", " U n d o x a ", " U n d o x a b ", " U n d o x a b l ", " U n d o x a b l e ", " U n d o x a b l ", " U n d o x a b ", " U n d o x a b ", " U n d o x a ", " U n d o x ", " U n d o ", " U n d ", " U n ", " U "];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
