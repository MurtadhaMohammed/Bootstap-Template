$(function () {
    'use strict';

    //transparent navbar when scrolling
    $(window).scroll(function(){
         var navbar=$('.navbar');
         if($(window).scrollTop()>=navbar.height()){
             if(navbar.hasClass( "scrolled" )==false){
                 navbar.addClass('scrolled');
             }
          
         }else{
               navbar.removeClass('scrolled');
         }
    });

    // show tab
     $('#myTab a[href="#tab1"]').tab('show');
    

    //smooth secrolling
     $(document).on('click','.navbar a',function(){
            $('html,body').animate({
            scrollTop: $('.'+ $(this).data('value')).offset().top-$(this).height()
           },800);
           $("#textarea").select(); 

       });

});