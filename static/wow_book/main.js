		$(function(){
			var bookOptions = {
				 height   : 500
				,width    : 1200
				,maxWidth : 1600
				,maxHeight : 800
				,scaleToFit: '.wowbook-book-container'
				,centeredWhenClosed : true
				,hardcovers : true
				,pageNumbers: false
				,toolbar : "lastLeft, left, right, lastRight, toc, zoomin, zoomout, slideshow, flipsound, fullscreen, thumbnails, download"
				,thumbnailsPosition : 'left'
				,responsiveHandleWidth : 100

				,container: window
				,containerPadding: "20px"
				,pdf: "http://localhost:8080/humaniq_report_16-18.pdf"
			};

			$('#report-book').wowBook( bookOptions ); // create the book
		});
