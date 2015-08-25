(function(){
	
	var addEvent = function(elem, type, callback){
	    
		if(elem.addEventListener){
		    addEvent = function(elem, type, callback){
				elem.addEventListener(type, callback, false);
			}
		}
		else{
		    addEvent = function(elem, type, callback){
				elem.attachEvent(type, callback);
			}
		}
		
		addEvent(elem, type, callback);
		
	}
	
	var doc = document;
	
	var menuButton = doc.getElementById("menu");
	var menu = doc.getElementById("h-nav");
	var menuLinks = menu.getElementsByTagName("a");
	menu.className = "hidden";	
	
	function closeMenu(){
	    menu.className = "hidden";
	}
	
	var len = menuLinks.length;
	for(var a=0; a < len; a++){
	    addEvent(menuLinks[a], "click", closeMenu);
	}
	
	addEvent(menuButton, "click", function(e){
		if(menu.className === "hidden"){
			menu.className = "show";
		}
		else{
			menu.className = "hidden";
		}
	})
	
}());