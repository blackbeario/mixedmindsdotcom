jQuery(function($){
  $(document).ready(function(){
  
  function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 479) {
            console.log("screen width is less than 480");                 
        }
        else if (windowSize <= 719) {
            console.log("screen width is less than 720 but greater than or equal to 480");
        }
        else if (windowSize <= 959) {
            console.log("screen width is less than 960 but greater than or equal to 720");
        }
        else if (windowSize >= 960) {
            console.log("screen width is greater than or equal to 960");
            
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
      
    //superFish
    $(function() { 
      $("#main-menu > ul.menu").superfish({
        delay: 100,
        autoArrows: false,
        dropShadows: false,
        animation: {opacity:'show', height:'show'},
        speed: 'fast'
      });
    });
    
    // social stuff
    $('#sharer').click(function () {
      $('#header-social').animate({
        width: "115px",
        height: "30px"       
        }, 250);
    });
    
    // portfolio hover slickery
    // note: using live() vs the livequery plugin would work, but doesn't provide the hoverIntent capability by default
		$('.view-portfolio-samples .views-row').livequery(function(){ 
		  // replace href of title
      var anchor            
      $('.portfolio_title').each(function(){ 
      	// get the id of the next div
        anchor = $(this).next().attr("id");
        // set the href as the id of the next div
        $(this).find('a').attr('href', '#' + anchor);
      });
      // use the helper function hover to bind a mouseover and mouseout event 
    	$(this).click(function() { 
    	  $(this).toggleClass('active');
    	  $(this).find('.thumby').toggleClass('active');
    		$(this).find('.portfolio_title').toggleClass('active');
    		$(this).siblings().find('.popper').hide();
    		$(this).siblings().removeClass('active');
    		$(this).siblings().find('.portfolio_title').removeClass('active');
    		$(this).siblings().find('.thumby').removeClass('active');	    
    		$(this).find('.popper').slideToggle(200);	
    		$('html,body').animate({scrollTop: $(this).offset().top},'slow');
    		if ($('.thumby').is(':hidden')){
      		$(this).find('.thumby').slideToggle(200);
      		$(this).siblings().find('.thumby').hide();
    		}
    	}); 
    });
    	
  }); // end doc ready
}); // end function