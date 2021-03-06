var postId = '1';
$(function() {
	// initialize kudos
	$("figure.kudoable").kudoable();
	// check to see if user has already kudod
	// fyi cookies do not work when you are viewing this as a file
	if ($.cookie(postId) == 'true') {
		// make kudo already kudod
		$("figure.kudoable").removeClass("animate").addClass("complete");
		// your server would take care of the proper kudos count, but because this is a
		// static page, we need to set it here so it doesn't become -1 when you remove
		// the kudos after a reload
		$(".num").html(1);
	}
	// when kudoing
	$("figure.kudo").bind("kudo:active", function(e) {
		console.log("kudoing active");
	});
	// when not kudoing
	$("figure.kudo").bind("kudo:inactive", function(e) {
		console.log("kudoing inactive");
	});
	// after kudo'd
	$("figure.kudo").bind("kudo:added", function(e) {
		var element = $(this);
		// ajax'y stuff or whatever you want
		console.log("Kodo'd:", element.data('id'), ":)");
		// set cookie so user cannot kudo again for 7 days
		$.cookie(postId, 'true', {
			expires: 7
		});
	});
	// after removing a kudo
	$("figure.kudo").bind("kudo:removed", function(e) {
		var element = $(this);
		// ajax'y stuff or whatever you want
		console.log("Un-Kudo'd:", element.data('id'), ":(");
		// remove cookie
		$.removeCookie(postId);
	});
});