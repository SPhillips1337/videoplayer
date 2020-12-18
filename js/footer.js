	
	(function(window, document){
		var $ = function(selector,context){return(context||document).querySelector(selector)};

		var video  = $("video"), container = document.getElementById("videoContainer"), domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
			
		var fullscreen = function(elem) {
			var prefix;
			// Mozilla and webkit intialise fullscreen slightly differently
			for ( var i = -1, len = domPrefixes.length; ++i < len; ) {
	         		prefix = domPrefixes[i].toLowerCase();
			  
			  if ( elem[prefix + 'EnterFullScreen'] ) {
	            // Webkit uses EnterFullScreen for video
				return prefix + 'EnterFullScreen';
				break;
	          } else if( elem[prefix + 'RequestFullScreen'] ) {
				// Mozilla uses RequestFullScreen for all elements and webkit uses it for non video elements
				return prefix + 'RequestFullScreen';
				break;
			  }
	        }
	
			return false;
		};
		
		// Will return fullscreen method as a string if supported e.g. "mozRequestFullScreen" || false;
		var fullScreenVideoeo = fullscreen(document.createElement("video"));
		
		// Webkit uses "requestFullScreen" for non video elements
		var fullscreenother = fullscreen(document.createElement("iframe"));

		if(!fullscreen) {
			alert("Fullscreen won't work, please make sure you're using a browser that supports it and you have enabled the feature");
			return;
		}
		
		// Should add prefixed events for potential ms/o or unprefixed support too
		video.addEventListener("webkitfullscreenchange",function(){
			console.log(document.webkitIsFullScreen);
		}, false);
		video.addEventListener("mozfullscreenchange",function(){
			console.log(document.mozFullScreen);
		}, false);
/*
		$("#fullScreenVideo").addEventListener("click", function(){
			// The test returns a string so we can easily call it on a click event
			video[fullScreenVideoeo]();
		}, false);
*/
		$("#fullScreenVideo").addEventListener("click", function(){
			// container fullscreen and non video elements in webkit use request over enter
			jQuery('#cancelFullScreenVideoContainer').show();
			container[fullscreenother]();
		}, false);

		$("#cancelFullScreenVideo").addEventListener("click", function(){
			// cancels fullscreen viewing, and displays the fullscreen button again
			jQuery('#cancelFullScreenVideoContainer').hide();

			if ( document['webkitCancelFullScreen'] ){
				document.webkitCancelFullScreen();
			}
			else{
				document.mozCancelFullScreen();
			}

		}, false);

		$("#viewPlaylist").addEventListener("click", function(){
			// shows and hides the playlist
			if(jQuery('#playlistContainer').css('display')=='none'){
				jQuery('#playlistContainer').show();
			}
			else{
				jQuery('#playlistContainer').hide();
			}

		}, false);

		$("#hideNav").addEventListener("click", function(){
			// shows and hides the playlist
			if(jQuery('#navigationContainer').css('display')=='none'){
				jQuery('#fullScreenVideo').show();
				jQuery('#navigationContainer').show();
				jQuery("#hideNavContainer").css('top','192px');
			}
			else{
				jQuery('#fullScreenVideo').hide();
				jQuery('#playlistContainer').hide();
				jQuery('#navigationContainer').hide();
				jQuery("#hideNavContainer").css('top','0px');
			}

		}, false);



	})(this, this.document);