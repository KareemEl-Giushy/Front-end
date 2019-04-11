$(document).ready(function (){
  //Start varebils
  var color = "#151515";
  //End varebils
  //Start Global Functions
  function changecolor(colo, coloh){
    $("nav ul li").css("color", colo);
    $("nav a").css("color", coloh);
  }
  //End Functions
  var clera = setInterval(function (){
    if(pageYOffset >= 200){
      $(".navy div.layer").css("transform", "scaleY(1)");
      changecolor(color, "#151515");
      $(".navbar-toggle").css("color", "rgb(21, 21, 21)");
      $("nav .navbar-collapse").addClass("bg-s");
      $(".swit_btn > h4").css("color", "rgb(21, 21, 21)");
      $("nav ul li").hover(function (){
        $(this).addClass("activey");
      },function (){
        $(this).removeClass("activey");
      });
    }
    if (pageYOffset == 0) {
        $(".navy div.layer").css("transform", "scaleY(0)");
        changecolor("#FFF", "#FFF");
        $(".navbar-toggle").css("color", "#FFF");
        $("nav .navbar-collapse").css("background-color", "transparent");
        $("nav .navbar-collapse").removeClass("bg-s");
        $(".swit_btn > h4").css("color", "#FFF");
    }
  }, 1);
  $(".navy ul a").smoothScroll(1);
  $(".top_btt").smoothScroll(1);
  AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
  });
});
