$(document).ready(function() {
	$(".info").fadeIn("fast").fadeOut(2000);
	$(".alert").fadeIn("fast").fadeOut(2000);

	if (window.location.pathname == "/game") {
		$("#game").show(); 
	} else {
		setTimeout(function() { $("canvas").hide(); }, 5)
	}
});