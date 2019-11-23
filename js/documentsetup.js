// Art document object setup
// Khalid Alabdullah
// 25 May 2018
// testing for github, 23 Nov 2019

(function() {
    // Window resize response
    window.addEventListener("resize", function() {
        var cnv = document.getElementById("canvas");
        var w = window.innerWidth - 20;
        var h = window.innerHeight - 20;
        cnv.style.width = w + "px";
        cnv.style.height = h + "px";
        view.update();
    });
    
    // Mouse wheel zoom feature
    $('#canvas').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event){ 
		if (event.originalEvent.wheelDelta >= 0) {
			if(view.zoom>10)
			{
				return false;
			}
			view.zoom +=0.2;
		}
		else {
			if(view.zoom<1){
				return false;
			} 
			view.zoom -=0.2;
		}
	});
    
})();
