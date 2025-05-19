function copyToClipboard(element) {
	var clipboard = new Clipboard(".copy-letter-button." + element);

	clipboard.on("success", function (e) {
		jQuery("#" + element + "-success")
			.slideDown(400)
			.delay(2000)
			.slideUp(600);
		clipboard.destroy();
	});

	clipboard.on("error", function (e) {
		console.log(e);
		clipboard.destroy();
	});
}
