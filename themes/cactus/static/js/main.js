// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
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





$('#toggle-box-checkbox').on('change', function(){
  if(this.checked){
    $('body').addClass('night');
  }else{
    $('body').removeClass('night');
  }
});





// run demo if in searchresult preview
function demo(){
    setInterval(function(){
      $("#toggle-box-checkbox").trigger('click');
    }, 1000);
}
if (document.location.pathname.indexOf('fullcpgrid')>-1){
  demo();
}
