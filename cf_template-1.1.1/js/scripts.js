//Facebook share button
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Google Maps
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: {lat: 51.2866665, lng: -0.3762054}
	});

	var marker = new google.maps.Marker({
		position: map .getCenter(),
		icon: {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 5
		},
		draggable: true,
		map: map,
		title: 'My Gaff'
	});
}

//will not run until the web page is fully loaded
$(document).ready(function() {

	//Smooth Scrolling
	var $root = $('html, body');
      $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
          scrollTop: $(href).offset().top
        }, 500, function () {
          window.location.hash = href;
        });
        return false;
      });

    //Stellar
    $.stellar();

    //Tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    $('.form-control').css('background-color', '#d3e8ff')

    $('#message-box').on('keyup', function() {
    	var charCount = $('#message-box').val().length; //length of content of text are set to a variable
    	console.log('charCount'); //making sure variable is set to right value
    	$('#char-count').html(charCount); //showing a running character count to the user
    	if(charCount>50) {
    		$('#char-count').css('color', 'red');
    	} else {
    		$('#char-count').css('color', 'white');
    	}
        if(charCount === "0")
            $('#char-count').hide();
    });

    $('#submit-button') .on('click', function() {
    	var comment = $('#message-box').val();
    	console.log('comment');
    	if(comment === "") {
    		$('#message-box').css('border', '2px solid red');
    	} else {
    		$('#message-box').hide();
    		$('#char-count').hide();
    		$('#visible-comment').html(comment);
    	}
    	return false;
    });

    //work section
    for(var i = 0; i < works.length; ++i) {
    	$('#previous-work').append("\
    		<div class='col-md-3 col-xs-6' id='work-1'>\
    			<a href=" + works[i].url + " class='work-img'>\
          			<img src='" + works[i].pic + "' class='work-image' class='img-responsive'>\
          			<span class='info'><p class='proj-title'>" + works[i].title + "</p></span>\
          		</a>\
        	</div>\
        ");
        var images = $('#previous-work img');
        if (i%2 === 0) {
        	$(images[i]).css("border", "2px solid DodgerBlue");
        } else {
        	$(images[i]).css("border", "2px solid salmon");
        };
    };

    $(".work-img").mouseenter( function() {
    	$(".info", this).show();
    }).mouseleave(function(){
    	$(".info", this).hide();
    });
});