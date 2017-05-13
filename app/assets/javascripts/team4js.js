$('document').ready(function(){
    //function ClickDay(){
        $('.Day').click(function(){
            ClickDayOrNight('.JsNight');
            $('.Daydata').stop().slideDown("slow");
        });
        
    //function ClickNight(){
        $('.Night').click(function(){
            ClickDayOrNight('.JsDay');
            $('.Nightdata').stop().slideDown("slow");
        });
    
    //function ClickDaymain(){     //function ClickNightmain(){
        $('.Homebutton').click(function(){
            ClickHome();
            // document.getElementById("home").style.fontSize = 2;
        });
    
    $('.button_DM').click(function() {
        ScrollToClass('.daymap');
    });
    $('.button_DB').click(function() {
        ScrollToClass('.Dsizing');
    });
    $('.button_DL').click(function() {
        ScrollToClass('.d_lineup');
    });
    $('.button_NM').click(function() {
        ScrollToClass('.nightmap');
    });
    $('.button_NB').click(function() {
        ScrollToClass('.Nsizing');
    });
    $('.button_NL').click(function() {
        ScrollToClass('.n_lineup');
    });
});

function ClickDayOrNight(str){
    $(str).stop().animate({
        height : 0 
    }, 700);
    $('.DayNightLogo' ).stop().hide(0);
    $('.navbar').stop().show("slow");
}

function ClickHome(){
    $('.JsNight, .JsDay').stop().animate({
        height : "44vh",
    }, 700);
    $('.Daydata').stop().hide(0);
    $('.DayNightLogo').stop().show(200);
    $('.Nightdata').stop().hide(0);
}

function ScrollToClass(str){
    $('html, body').stop().animate({
      scrollTop : $(str).offset().top
    }, 1000);
}

