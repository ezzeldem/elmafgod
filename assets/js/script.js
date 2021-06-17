$(document).ready(function(){
    




    
    //menu in tablet and phonne
    $('.devo-nav .bars-icon i').click(function(){
        $('.devo-nav .menu-nav').addClass('open-menu');
        $('.overlay-menu').show();
        $('body , html').addClass('devo-hidden');
    });
    $('.devo-nav .menu-nav .devo-exit , .overlay-menu').click(function(){
        $('.devo-nav .menu-nav').removeClass('open-menu');
        $('.overlay-menu').hide();
        $('body , html').removeClass('devo-hidden');
    });
    


    // toggle password
    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
          
         $(".log-in-button").click(function() {
      
        if (input.attr("type") == "text") {
          input.attr("type", "password");
        } else {
          input.attr("type", "password");
        }
      }); 
          


      // niceSelect
      $('select').niceSelect();
      
      // dropify
      $('.dropify').dropify();
      


        //   checkbox-box

  $(".checkbox-box .pretty input").click(function () {
    $(this)
      .parent()
      .addClass("checkbox-checked")
      .siblings()
      .removeClass("checkbox-checked");
  });


});
