var main = function () {
	 "use strict";
	 $(".comment-input button").on("click", function (event) {
	 var $new_comment = $("<p>");
	 //haalt text uit de input van .comment-input
	 var comment_text = $(".comment-input input").val();
	 $new_comment.text("this is a new comment");
	 //Append voegt nieuwe regel toe aan .comments $new_comment is de variabele die erin gaat> 
	 //$ want JQuery type
	 $new_comment.text(comment_text);

	 $(".comments").append($new_comment);
	 	};});

$(document).ready(main);



// Notificatie
// var main = function () {
//  "use strict";
//  window.alert("hello world!");
// };

// $(document).ready(main);