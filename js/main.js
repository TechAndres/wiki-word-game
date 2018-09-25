$(document).ready(function(){
          $("#start-button").mouseover(function(){
                $(this).html("ready");
          $(this).css({"background-color":"#D1FF17",border:"5px solid #D1FF17"});

          });

          $("#start-button").mouseout(function(){
                  $(this).html("start");
                  $(this).css({"background-color":"#FFB404",border:"5px solid #FFB404"});

              });

          $("#start-button").click(function(){
              $("#start").fadeTo(1500, 0 ,function(){
                 $("#start").css("display","none");
                 $("#full-game").css("display","block");
                 $("#full-game").prepend("<img id='theImg' src='./images/go.gif'/>");
                 setTimeout(function() { $("#theImg").hide(1000)}, 2100);
               });

           $("#back-button").click(function(){
                        $("#start").css("display","block");
                        $("#start").css("opacity","1");
                          $("#full-game").css("display","none");
          });
        })
  })
