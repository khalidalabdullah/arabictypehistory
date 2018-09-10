// Art tool for transforming paper.js items
// Khalid Alabdullah
// 27 May 2018

art.toolTransformItem = function () {
    
    var activate = function () {
        var ti = new Tool();
        var selectedItem = null;
        var lastRotationPoint;
        
        ti.onMouseDown = function(event) {
            project.deselectAll();
            lastRotationPoint = event.point;
            var hitOptions = {
                segments: true,
                curves: true,
                fill: true,
                stroke: true,
                handles: true,
                symbolitem: true,
                pixel: true,
                tolerance: 3
            };
            var hitResult = project.hitTest(event.point, hitOptions);
            if(hitResult){
                selectedItem = hitResult.item.parent;
                selectedItem.selected = true;
                selectedItem.bringToFront();
            }
        };
        
        ti.onMouseDrag = function(event) {
            if(selectedItem){
                var a1 = lastRotationPoint.subtract(selectedItem.position).angle;
                var a2 = event.point.subtract(selectedItem.position).angle;
                var rotangle = a2 - a1;
                if(event.modifiers.control){ // scale
					if(rotangle >= 0){
                        selectedItem.scale(1.05);
                    }
                    else {
                        selectedItem.scale(1 / 1.05);
                    }
                }
                else if(event.modifiers.alt){ // rotate
                    selectedItem.rotate(rotangle);
                }
                else {
                    selectedItem.position.x += event.delta.x;
                    selectedItem.position.y += event.delta.y;
                }
                lastRotationPoint = event.point;
            }
        };
        
        ti.onKeyDown = function(event) {
            switch(event.key){
                case "delete":
                    selectedItem.selected = false;
                    selectedItem.remove();
                    selectedItem = null;
                    break;
				case "up":
					selectedItem.scale(1.05);
					break;
				case "down":
					selectedItem.scale(1 / 1.05);
					break;
            }
        };
        
        ti.activate();
    };
    
    return {
        activate: activate
    };
    
}();