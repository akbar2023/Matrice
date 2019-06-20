$(document).ready(function(){

    // Slect rects
    // $("rect").click(function(){
    //     $(this).toggleClass("fillOrange");
    //   });

    let fills = "fillGreen fillBlue fillRuby fillSky fillBerry";

    $("#reset").click(function(){
      $("circle").removeClass(fills + " fillOrange");
      $("rect").removeClass(fills + " fillOrange");
    });
    
    $("#colored").click(function(){
      $("circle").addClass("fillGreen");
      $(".carre1").addClass("fillBlue");
      $(".carre2").addClass("fillRuby");
      $(".carre3").addClass("fillOrange");
      $(".carre4").addClass("fillSky");
      $(".carre5").addClass("fillBerry");
    });

    $("circle").click(function(){
        $(this).removeClass("fillBlue fillOrange");
        $(this).toggleClass("fillGreen");
      });

    $("#losange").click(function(){
        // $(".losChild").removeClass("fillGreen");
        $(this).toggleClass("fillOrange");

        if($(this).hasClass("fillOrange")){
          $(".losChild").removeClass(fills);
          $(".losChild").addClass("fillOrange");
        }else{
          $(".losChild").removeClass("fillGreen fillBlue fillOrange");
        }

    });

    $(".carre1").click(function(){
        $(this).toggleClass("fillBlue");

        if( $(this).hasClass('fillBlue') ){
          $(".carre1Child").addClass('fillBlue');
          $(".carre1Child").removeClass('fillGreen fillOrange');

        }else{
          $(".carre1Child").removeClass('fillBlue fillGreen');
        }
    });

    $(".carre2").click(function(){
      $(this).toggleClass("fillRuby");
      
      if( $(this).hasClass('fillRuby') ){
        $(".carre2Child").addClass('fillRuby');
        $(".carre2Child").removeClass('fillGreen fillOrange');

      }else{
        $(".carre2Child").removeClass('fillRuby fillGreen');
      }
    });


    $(".carre4").click(function(){
      $(this).toggleClass("fillSky");
      
      if( $(this).hasClass('fillSky') ){
        $(".carre4Child").addClass('fillSky');
        $(".carre4Child").removeClass('fillGreen fillOrange');

      }else{
        $(".carre4Child").removeClass('fillSky fillGreen');
      }
    });
    
    
    $(".carre5").click(function(){
      $(this).toggleClass("fillBerry");
      
      if( $(this).hasClass('fillBerry') ){
        $(".carre5Child").addClass('fillBerry');
        $(".carre5Child").removeClass('fillGreen fillOrange');

      }else{
        $(".carre5Child").removeClass('fillBerry fillGreen');
      }
    });

  
}); /* End script jquery */