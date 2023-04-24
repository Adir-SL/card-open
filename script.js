var Anchors = document.getElementsByTagName("a");

for (var i = 0; i < Anchors.length ; i++) {
    Anchors[i].addEventListener("click", 
        function (event) {
            // event.preventDefault();
            window.history.pushState("","", Anchors[i].href);
        }, 
        false);
}