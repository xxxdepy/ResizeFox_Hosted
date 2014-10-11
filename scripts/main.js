
$(document).ready(function(){


    // UI STYLES
	window.onload = function(){
	    var footerHeight = $('#bottom-menu').height();
	    var headerHeight = $('.top-header').height();

	    $('.false-height').css({'height':footerHeight});
	    $('body').css({'top': headerHeight});

	    // set the height of the main area
    };

    // Show name if clicked on the image name bar.
    $('#image-container .image-name').on('click', function(){
    	var text = $(this).children('span').text();
    	alert("Title: \n" + text);
    });


    // FILE SELECTION
    $('.select-img').on('click', function(){
    	$('#img_selected').click();
    });

    // On change
    $('#img_selected').on('change', function(){
    	var file = document.getElementById('img_selected');
    	var fileName = file.files[0].name;
    	$('.image-name span').text(fileName);
    });

});