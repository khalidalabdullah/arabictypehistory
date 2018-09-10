// Art initialization
// Khalid Alabdullah
// 25 May 2018

var art = function () {
    
    var init = function (){
        art.settings = new Object();
		art.settings.sizeScale = 0.3;
    };
    
    return {
        init: init
    };
    
}();

$(window).load(function() {
    art.init();
});
