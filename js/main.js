
	var v_count = 0;

	function setVideo(video) {
		v_count = video;
		jQuery("#sovideo").attr("src", videos[video]);
		jQuery("#video").load();
		jQuery('#playlistContainer').hide();
	}

	jQuery(document).ready(function()
	{

		jQuery("#video").bind('ended', function () {
			v_count++;
			if (v_count >= videos.length-1)
				v_count = 0;
			jQuery("#sovideo").attr("src", videos[v_count]);
			jQuery("#video").load();
		});

		jQuery( "#previousVideo" ).click(function() {
			v_count--;

			if (v_count < 0 )
				v_count = videos.length-1;

			jQuery("#sovideo").attr("src", videos[v_count]);
			jQuery("#video").load();
		});

		jQuery( "#nextVideo" ).click(function() {
			v_count++;
		
			if (v_count >= videos.length)
				v_count = 0;

	
			jQuery("#sovideo").attr("src", videos[v_count]);
			jQuery("#video").load();
		});

		setVideo(0);
		
	});
