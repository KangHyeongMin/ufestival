$(document).ready(function(){
// 여기 아래부터 function 쓰기
        
        
    // Main 배경 이미지 누르면 컨텐츠 소개로 넘어감
    $('#start').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space0").offset().top
        }, 1000);
    });
    
    
    // 상단바에서 각 항목 클릭하면 스크롤
    $('#li0').click(function(){
        $('html, body').animate({
            scrollTop: $(".bgimage").offset().top
        }, 1000);
    });
    
    $('#li1').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space1").offset().top
        }, 1000);
    });
    
    $('#li3').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space2").offset().top
        }, 1000);
    });

    $('#li4').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space3").offset().top
        }, 1000);
    });

    $('#li6').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space4").offset().top
        }, 1000);
    });

    $('#li5').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space5").offset().top
        }, 1000);
    });

    $('#li2').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space6").offset().top
        }, 1000);
    });
    
    
    
    // 상단바에서 마우스 올리면 색깔 바뀌는 기능
    $(".over-color").mouseover(function(){
        $(this).css("color", "grey");
    });
    $(".over-color").mouseleave(function(){
        $(this).css("color", "white");
    });
    
     $('.picture').mouseover(function() {
        $(this).animate({opacity: 0.5}, 1);
      });
    $('.picture').mouseout(function() {
        $(this).animate({opacity: 1}, 1);
      });
    
   
    
    
    // 이미지 6개 있는 곳에서 각 이미지 누르면 스크롤
    $('#picture1').click(function(){
        $('html, body').animate({
            
            scrollTop: $(".empty_space1").offset().top
        }, 1000);
    });
    
    $('#picture3').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space2").offset().top
        }, 1000);
    });

    $('#picture6').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space3").offset().top
        }, 1000);
    });

    $('#picture4').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space5").offset().top
        }, 1000);
    });
    
    $('#picture2').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space6").offset().top
        }, 1000);
    });

    $('#picture5').click(function(){
        $('html, body').animate({
            scrollTop: $(".empty_space4").offset().top
        }, 1000);
    });
    
    

//Progress Bar
    // Set the date we're counting down to
    var countDownDate = new Date("May 24, 2017 00:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get todays date and time
      var now = new Date().getTime();
    
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("Count-Display").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("Count-Display").innerHTML = "EXPIRED";
      }
    }, 1000);
    

   
    // 위로 가기 버튼
    $(window).scroll(function(){
        if( $(this).scrollTop() > 350){
            $('.gotop').fadeIn();
        }
        else{
            $('.gotop').fadeOut();
        }
    });

    $('.gotop').click(function(){
        $('html, body').animate({
            scrollTop: $('.empty_space0').offset().top
        }, 500);
    });
    

    
    
    
    
    
    
    
    
// Ready function 닫는 곳
});

