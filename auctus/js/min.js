$(document).ready(function(){
  
  
  $(".header-bar").on("click", function(){
    $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
  });
  
  
  $(".manu-close, .offcanvas-overylay").on("click", function(){
    $(".offcanvas-manu, .offcanvas-overylay").removeClass(".active");  
  });
  
 
  
      
  });