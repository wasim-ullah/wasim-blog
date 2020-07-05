// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.

switch_style();
var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain;
function switch_style ( dark )
{
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
	  
    set_cookie( style_cookie_name, css_title, style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{

    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}
//****************************************************************************************************************
 
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
