$("document").ready(function(){$('.en').css('display', 'none');$('.ko').css('display', 'inline');$(".change_english").click(function(){$('.en').css('display', 'inline');$('.ko').css('display', 'none');});$(".change_korean").click(function(){$('.en').css('display', 'none');$('.ko').css('display', 'inline');});});
$("document").ready(function(){$(".about_img").click(function(){$("body").load("/index_poster.html body");});});var countDownDate=new Date("may 20, 2017 15:37:25").getTime();var x=setInterval(function(){var now = new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("demo").innerHTML="축제시작까지 "+days+"일 "+hours+"시 "+minutes+"분 "+seconds+"초 "+" 남았습니다☆";
if(distance<0){clearInterval(x);document.getElementById("demo").innerHTML="축제가 시작되었습니다!!";}document.getElementById("demo2").innerHTML=""+days+"d "+hours+"h "+minutes+"m "+seconds+"s "+" to the Festival☆";
if(distance<0){clearInterval(x);document.getElementById("demo2").innerHTML="Festival begin!!";}},1000);$(document).ready(function(){$('#button').click(function(){$('html, body').animate({scrollTop: $("#myDiv").offset().top},5000);});});
