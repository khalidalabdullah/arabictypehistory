// Art paperjs initialization file
// Khalid Alabdullah
// 25 May 2018

(function() {
    paper.install(window);
    var canvas = document.getElementById("canvas");
    var w = window.innerWidth - 20;
    var h = window.innerHeight - 20;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    paper.setup(canvas);
})();
