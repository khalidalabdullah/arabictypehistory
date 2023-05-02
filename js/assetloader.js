// Art utilities
// Khalid Alabdullah
// 25 May 2018

art.assetLoader = function () {
	
	var loadImages = function(){
		$.ajax({
 			type: "POST",
 			url: "assets/samples/imagelist.json",
			dataType: 'text',
 			error: function(r, e){
				console.log(e);
			}
		}).done(function(data){
			var list = JSON.parse(data);
			var path = "assets/samples/";
			var imageWidth = view.size.width * 0.3;
			$.each(list.data, function(idx, item){
				var raster = new Raster(path + item.img);
				raster.onLoad = function () {
					raster.position.x = view.center.x + item.left * 10;
					raster.position.y = view.center.y + item.top * 10;
					raster.scale(imageWidth / raster.size.width);
					var rect = new Path.Rectangle({
						position: raster.position,
						width: raster.width,
						height: raster.height,
						fillColor: new Color(255,255,255),
						shadowColor: new Color(0,0,0,0.5),
						shadowBlur: 10,
						shadowOffset: new Point(3,3)
					});
					rect.scale(imageWidth / raster.size.width);
					rect.insertBelow(raster);
					var grp = new Group([rect, raster]);
				};
			});
			art.toolTransformItem.activate();
		});
	};
	
	return {
		loadImages: loadImages
	}
}();
