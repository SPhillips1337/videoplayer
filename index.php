<?php
include('include/config.php');
include('class/video.class.php');
// In BaseClass constructor
$Video = new Video();

?>
<!DOCTYPE html>
<html>
<head>
	<title>Video Player</title>

	<link rel="stylesheet" href="<?php echo $baseURL; ?>/Video/css/style.css" type="text/css" />
	<script type="text/javascript" src="<?php echo $baseURL; ?>/Video/js/jquery.min.js"></script>

	<script type="text/javascript">
	jQuery.noConflict();

	<?php
	echo $Video->getJSFilesArray($videoPath,$videoUrl);
	?>
	</script>
	<script type='text/javascript' src='<?php echo $baseURL; ?>/Video/js/main.js'></script>
	
</head>
<body id="body">
	<div id="fullScreenVideoButtonContainer">
		<!-- view fullscreen button, hides when viewing fullscreen -->
		<div id="fullScreenVideo">&nbsp;</div>
	</div>
	<!-- video container, used to move video and overlay buttons fullscreen together -->
	<div id="videoContainer"> 
		<div id="navigationContainer">
			<!-- cancel fullscreen button, displayed when video is fullscreen -->
			<div id="cancelFullScreenVideoContainer">
				<div id="cancelFullScreenVideo">&nbsp;</div>
			</div>
			<!-- video playlist next and previous navigationContainer buttons -->
			<div id="navigation"> 
				<div id="previousVideo">&nbsp;</div>
				<div id="nextVideo">&nbsp;</div>
				<!-- view playlist button -->
				<div id="viewPlaylist">&nbsp;</div>
			</div>
		</div>
		<div id="hideNavContainer"> 
			<!-- view playlist button -->
			<div id="hideNav">&nbsp;</div>
		</div>

		<!-- video playlist, initially this is hidden until user clicks on the playlist button -->
		<div id="playlistContainer">
			<?php
			echo $Video->getPlaylist($videoPath);
			?>
		</div>

           	<video id="video" width="100%" controls autoplay="autoplay">
            		<source id="sovideo" src=""></source>
		</video>
	</div> 
	<script type='text/javascript' src='<?php echo $baseURL; ?>/Video/js/footer.js'></script>
</body>
</html>
