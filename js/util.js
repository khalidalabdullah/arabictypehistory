// Art utilities
// Khalid Alabdullah
// 25 May 2018

art.util = function () {
	
	var setStyle = function(item){
		item.style.shadowColor = new Color(0,0,0);
		item.style.shadowBlur = 12;
		item.style.shadowOffset = new Point(13,13);
	};
	
	return {
		setStyle: setStyle
	}
}();