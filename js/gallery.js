$(document).ready(function (){
  //Start Varibles
  var allB      =   $("#all"),
      logoB     =   $("#logo"),
      graphicB  =   $("#graphic"),
      printB    =   $("#print");
  //End Varibles
  //Start Functions
  $("#all").css("color", "#dc0041");
  //End Functions
  allB.click(function (){
    $(this).css("color", "#dc0041");
    $(this).siblings().css("color", "#333");

  });
  logoB.click(function (){
    $(this).css("color", "#dc0041");
    $(this).siblings().css("color", "#333");

  });
  graphicB.click(function (){
    $(this).css("color", "#dc0041");
    $(this).siblings().css("color", "#333");
  });
  printB.click(function (){
    $(this).css("color", "#dc0041");
    $(this).siblings().css("color", "#333");
  });
});
