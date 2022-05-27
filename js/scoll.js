var elementPosition = $('#Top_bar').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#Top_bar').addClass("Top_bar-fixed");
              $("#Top_bar").removeClass("Top_bar");
        } else {
          $("#Top_bar").removeClass("Top_bar-fixed");
$("#Top_bar").addClass("Top_bar");
        }    
});
    