$(function(){
    
    // Before Loading The Website

    $(window).on("load", function(){
        $(".scrolltop").click() ;
        $(".load").css("display", "none") ;
    }) ; 


    // Start Navbar Links
    
    $(".navbar .navbar-nav .nav-item, .work li").click(function(){
        $(this).addClass("active").siblings().removeClass('active') ; 
    });
    $(".navbar-brand").click(function(){
        $(".nav-item:first").addClass("active").siblings().removeClass('active') ;
    });
    
    // Justify Slider Height
    var wheight = $(window).outerHeight() ,
        uheight = $(".uppernav").innerHeight(),
        nheight = $(".navbar").innerHeight() ; 
    $(".slider, .carousel-item").height( wheight - ( uheight + nheight ) ) ; 
    
    // make shuffle photes
    $(".work .list-unstyled li").on("click", function(){
        var data = $(this).data('class') ; 
        console.log(data) ; 
        if(data === 'all'){
            $(".work .row .col-sm").css('opacity', 1) ; 
        }else{
            $(".work .row .col-sm").css("opacity", .2);
            $('.work .row .' + data).parent().css("opacity", 1) ; 
        }
    }) ;
    
    
    // Automatek Slide Down
     $("nav ul li a").click(function(){
         
         var des = $('.' + $(this).data('where') ) .offset().top;
         
         $("body, html").animate({
             scrollTop : des 
         }, 500) ; 
 
     }) ; 
    
    // Show Scroll To Top Button
    $(window).scroll(function(){ 
        if( $(this).scrollTop() > 600 ){
            $(".scrolltop").css("display", "block") ;
           }else{
            $(".scrolltop").css("display", "none") ;
           }
    }) ;
     // Press On It 
    $(".scrolltop").click(function(){
         $("body, html").animate({
             scrollTop : 0 
         }, 500) ; 
    }) ; 
    
    // Check Home Where Scroll Top equal to Zero
    $(window).scroll(function(){
        if( $(window).scrollTop() == 0 ){
            $("nav ul li a:first").parent().addClass("active").siblings().removeClass("active") ; 
        }
    }) ; 
    
    // Make Body PAdding Top Equal To Height Of Fixed Uppernav Bar 
    
    $("body").css({
        paddingTop : $(".uppernav").innerHeight()
    }) ; 
    
    // Change Themes 
    
    $(".tool ul li").click(function(){
        $("link[href *= 'theme']").attr('href', $(this).data('theme') ) ; 
    }) ;
    
    // Hide Tool Box
    
    $(".tool span").click(function(){
        
        var w = $(".tool").innerWidth() ; 
        
        $(".tool").animate({
            marginLeft  : -w
        }, 500) ;  
    });
  
    // Show the Tool Box
    
    $(".tool .open").click(function(){
        
        $(".tool").animate({
            marginLeft  : 0
        }, 500) ; 
    
    }) ;
    
    //Turn on NiceScroll Plugin 

    /*
        $("body").niceScroll({
            cursorcolor:"#10cab0",
            cursorwidth:"12px",
            zindex: 999999, 
            scrollspeed: 60, 
            mousescrollstep: 40
        });
    */
})  