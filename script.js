var x = document.querySelectorAll("a");
var i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(){
        window.history.pushState("", "", this.href);
    });
}