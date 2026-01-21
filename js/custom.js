$(function(){var randNum1=Math.floor((Math.random()*20)+456);var randNum2=Math.floor((Math.random()*20)+356);$("span.randomNumber").text(randNum1);$("span.randomNumber2").text(randNum2);$(".btn").on("click",function(event){event.preventDefault();var goTo=$(this).attr('rel');if(goTo=='submitForm'){$('form').submit();}else{var currentSection=parseInt(goTo)-1;$(".step"+currentSection).fadeOut('fast',function(){$(".step"+goTo).fadeIn('normal');});if(currentSection==3){run_loading_run_1('1000');run_loading_run_2('2200');run_loading_run_3('3300');run_loading_run_4('4400');run_loading_run_5('5550');}}});function run_loading_run_1(time_delay){timeoutID1=window.setTimeout(run_loading_1,time_delay);}
function run_loading_1(){$('.number1').fadeIn();}
function run_loading_run_2(time_delay){timeoutID2=window.setTimeout(run_loading_2,time_delay);}
function run_loading_2(){$('.number2').fadeIn();}
function run_loading_run_3(time_delay){timeoutID3=window.setTimeout(run_loading_3,time_delay);}
function run_loading_3(){$('.number3').fadeIn();}
function run_loading_run_4(time_delay){timeoutID4=window.setTimeout(run_loading_4,time_delay);}
function run_loading_4(){$('.number4').fadeIn();}
function run_loading_run_5(time_delay){timeoutID5=window.setTimeout(run_loading_5,time_delay);}
function run_loading_5(){$('.loading').fadeOut();$('a.btnBig').fadeIn();}});$(window).load(function(){if($(window).width()>768){setInterval(function(){$("body").animate({"background-position":"center +=1px"},1);},20);}});