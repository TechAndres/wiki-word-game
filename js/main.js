function startMouseover(){
  $("#start-button").mouseover(function(){
        $(this).html("ready");
  $(this).css({"background-color":"#BDE517",border:"5px solid #D1FF17"});
  $(this).click(function(){ $(this).css({border:"5px solid #D1FF17"})});
});
}


function startMouseOut(){
  $("#start-button").mouseout(function(){
          $(this).html("start");
          $(this).css({"background-color":"#FFB404",border:"5px solid #FFB404"});

      });
}

function clickButtonStart(){
  $("#start-button").click(function(){
      $("#start").fadeTo(1500, 0 ,function(){
         $("#start").hide();
         $("#start-count").css("display","block");
         $("#start-count").prepend("<img id='theImg' src='./images/go.gif'/>");
         setTimeout(function() {
              $("#theImg").hide();
              $("#start-count").hide();
              $("#board-game").show();
              setBoardGame();
            },
              2100);
       });
    })
}

function clickButtonBack(){
  $("#back-button").click(function(){
               $("#start").css("opacity","1");
               $("#start").show();
                 $("#board-game").css("display","none");
 });
}

function setBoardGame(){
  $("#board-image").animate( {"top":"10px"},function(){
      setTimeout(function(){
        $("#board-image").css({"transform":"rotate(20deg)"});
        $("#board-image").css({"transition":"all 1s"});
        $("#board-image").animate({"top":"-280px"});
        setTimeout(
            function()
            {
              $("#board-image").css({"transform":"rotate(-12deg)"});
              setTimeout(
                    function()
                    {
                      $("#board-image").css({"transform":"rotate(-0)"});
                    }, 320);
            }, 320);
      } ,450)
      }
    );
}



$(document).ready(function(){
            startMouseover();
            startMouseOut();
            clickButtonStart();
            clickButtonBack();

})
