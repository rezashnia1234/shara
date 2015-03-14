/******************************************************/
/***************** PARALLAX SECTIONS ******************/
/******************************************************/
	var $window = $(window);
	var windowHeight = $window.height();
	var windowWidth = $window.width();
	
	$window.resize(function () {
		windowHeight = $window.height();
		windowWidth = $window.width();
	});
	
	jQuery.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});
		
		$window.resize(function () {
			$this.each(function(){
		  	    firstTop = $this.offset().top;
			});
		});
		
		$window.load(function(){
			$this.each(function(){
		  	    firstTop = $this.offset().top;
			}); 
		});
	 
	
		getHeight = function(jqo) {
			return jqo.outerHeight(true);
		};
		 
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		
		
		xpos = (50 * windowWidth)/1189;
		xpos = 100 - xpos + "%";
		/*
		if(windowWidth<1189 && windowWidth>700)
		{
			xpos = (50 * windowWidth)/1189;
			xpos = 100 - xpos + "%";
		}
		else if(windowWidth<700)
		{
			xpos = (50 * windowWidth)/1189;
			xpos = 100 - xpos - 10 + "%";
		}
		*/
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();
			alert();
			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}
				
				var Ypos = Math.round((firstTop - pos) * speedFactor);
				/*
				if(Ypos>0)
					Ypos = 0;
				$this.css('backgroundPosition', xpos + " " + Ypos + "px");
				*/
				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
				//$this.css('backgroundPosition', 50 + 15 + ((firstTop - pos) * speedFactor * 0.1)  + "% " + Math.round((firstTop - pos) * speedFactor) + "px");
				
			});
		}		
	
		$window.bind('scroll', update).resize(update);
		update();
	};

	$(document).ready(function() {
		// alert();
		$('.parallax_section').each(function(){
		   var $id = $(this).attr('id');
		   $('#'+$id + ".parallax_section").parallax("50%", 0.5);//0.2//-0.52
		   //$(this).click(function() {alert();});
		});
		// $('.parallax_section').click(function() {alert();});
	});
	//disable parallax for mobile
/******************************************************/
/***************** END PARALLAX SECTIONS **************/
/******************************************************/