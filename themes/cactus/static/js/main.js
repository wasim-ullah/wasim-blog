 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};

function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
$(document).ready(retina);


$(document).ready(function() {
	/* Progress Bar */
	var $progressBar = $("#page-progress");
	$(document).ready(function() {
	  var getMax = function() {
		return $(document).height() - $(window).height();
	  }
		
	  var getValue = function() {
		return $(window).scrollTop();
	  }
	
	  var max = getMax(), 
		  value, width;
		  
	  var getWidth = function() {
		value = getValue();            
		width = (value/max) * 100;
		width = width + "%";
		return width;
	  }
		  
	  var setWidth = function() {
		$progressBar.css({ opacity: 1, width: getWidth() });
		value = getValue();
		if (value > 600)
			$('#guide_toc nav').scrollLeft(value - 600)
	  }
	  
	  $(document).on("scroll", setWidth);
	  $(window).on("resize", function() {
		max = getMax();
		setWidth();
	  });
	});
	});
