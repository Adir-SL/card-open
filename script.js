var x = document.querySelectorAll("a");
var i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(){
        // alert(this.href);
        window.history.pushState("", "", this.href);
    });
}