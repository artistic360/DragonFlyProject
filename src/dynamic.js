$(document).ready(function(){

    



    $(".habitat-container h2").click(function(){
      if ($(".habitat-container .hidden-content").css("display") == "none"){
        $(".habitat-container .hidden-content").slideToggle("5000");
        $(".habitat-container .hidden-content").css("display", "block");
        $(".habitat-container .hidden-content").css("visibility", "visible");
      }
      else {
        $(".habitat-container .hidden-content").slideToggle("5000");
      }
    });

    $(".population-container h2").click(function(){
        if ($(".population-container .hidden-content").css("display") == "none"){
            $(".population-container .hidden-content").slideToggle("5000");
            $(".population-container .hidden-content").css("display", "block");
            $(".population-container .hidden-content").css("visibility", "visible");
          
        }
        else {
            $(".population-container .hidden-content").slideToggle("5000");
        }
  
        
      });


      $(".lifecycle-container h2").click(function(){
        if ($(".lifecycle-container .hidden-content").css("display") == "none"){
            $(".lifecycle-container .hidden-content").slideToggle("5000");
            $(".lifecycle-container .hidden-content").css("display", "block");
            $(".lifecycle-container .hidden-content").css("visibility", "visible");
        }
        else {
            $(".lifecycle-container .hidden-content").slideToggle("5000");
        }
  
        
      });


      $(".How-to-identify h3").click(function(){
        if ($(".How-to-identify .hidden-content").css("display") == "none"){
            $(".How-to-identify .hidden-content").slideToggle("5000");
            $(".How-to-identify .hidden-content").css("display", "block");
            $(".How-to-identify .hidden-content").css("visibility", "visible");
          
        }
        else {
            $(".How-to-identify .hidden-content").slideToggle("5000");
        }
  
        
      });


      $(".Threats h4").click(function(){
        if ($(".Threats .hidden-content").css("display") == "none"){
            $(".Threats .hidden-content").slideToggle("5000");
            $(".Threats .hidden-content").css("display", "block");
            $(".Threats .hidden-content").css("visibility", "visible");
          
        }
        else {
            $(".Threats .hidden-content").slideToggle("5000");
        }
  
        
      });


  });