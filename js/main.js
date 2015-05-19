var dataCollected = 0.0;
var movies = 0;

$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();
	})
    
    $.get("http://ipinfo.io", function (response) {
    document.getElementById('info-about-you').innerHTML = "You are in " + response.region;
    document.getElementById('more-info-about-you').innerHTML = "In the city of " + response.city;
    document.getElementById('more-more-info-about-you').innerHTML = "With a postal code of " +  response.postal;
         }, "jsonp");
    
    window.setInterval(function(){
    dataCollected = dataCollected + 0.4;
    movies = movies + 100;
    document.getElementById('intro-info').innerHTML = "Since you have been on this page, " + dataCollected.toFixed(1) + " terabytes of data have been collected by the <b>NSA</b>. This is equal to over " + movies + " HD movies.The <b>NSA</b> says it needs this data to prevent another <b>9/11</b>, but how helpful has it really been. They take data right from <b>Google, Apple</b> and <b>Facebook</b>. They even monitor emails and phone calls.";
    }, 1000);
    
    

});
