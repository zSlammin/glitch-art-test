function onPageLoad(){
	console.log("Page loaded")
	Webcam.set({
		width: 640,
		height: 480,
		image_format: 'jpeg',
		jpeg_quality: 90,
	});
	Webcam.attach( 'my_camera' );
}
function takeSnapshot(){
	Webcam.snap( function(data_uri) {
				// display results in page
				var img = new Image();
				img.addEventListener("load", function() {
					mainCtx = $("#glitch-canvas")[0].getContext("2d");
					mainCtx.drawImage(img, 0, 0)
				})
				img.setAttribute("src", data_uri)
				Webcam.reset();
				$("#photo-studio").addClass("no-display");
				$('#glitch').removeClass("no-display");
				window.setInterval(glitchImage, 100);
	} );
}
function glitchImage(){
	console.log("image glitching")
	var canvas = $("#glitch-canvas")[0]
	var mainCtx = canvas.getContext("2d");
	//console.log(canvas.clientWidth + " " + canvas.clientHeight)
	var my_image_data = mainCtx.getImageData(0,0,canvas.clientWidth, canvas.clientHeight);
	//var parameters = {amount: $('#amount').val(), seed: $('#seed').val(), iterations: $('#iterations').val(), quality: $('#quality').val()}
	var amount = Math.floor(Math.random()*99);
	var seed = Math.floor(Math.random()*99);
	var parameters = {amount: amount, seed: seed, iterations: 1, quality: 90}
	glitch(my_image_data, parameters, function(image_data){
		console.log("put image data")
		mainCtx.putImageData(image_data, 0, 0);
	})
}