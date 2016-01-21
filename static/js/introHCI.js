'use strict';

$("#testjs").click(function(e) {
 	$('.jumbotron h1').text("Javascript is connected");
 	$(".jumbotron p").toggleClass("active");
 });

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $("#submitBtn").click(updateProject);
} 

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}