var word =[];
$("html").mousedown(function(e){ e.preventDefault(); });
    // word and prevent the select of the div

      // begining of the animation start when the arrow it on the button
function startMouseover(){
  $("#start-button").mouseover(function(){
        $(this).html("ready");
        $(this).css({"background-color":"#BDE517",border:"5px solid #D1FF17"});
        $(this).click(function(){ $(this).css({border:"5px solid #D1FF17"})});
        setTimeout(function(){
          $("#left-cono").show();
          $("#left-cono").animate({"bottom":"0px"});
          $("#right-cono").show();
          $("#right-cono").animate({"bottom":"0px"});
        },10);
      });
}
      // end

      // begining of the animation start when the arrow it off the button
function startMouseOut(){
  $("#start-button").mouseout(function(){
          $(this).html("start");
          $(this).css({"background-color":"#FFB404",border:"5px solid #FFB404"});
      });
}
    // end

    // begining of the animation  when click the button start
function clickButtonStart(){
  $("#start-button").click(function(){
    $("#start").prepend("<img id='confeti' src='./images/confeti.gif'/>");
    $("#confeti").show();
    $("#start").prepend("<img id='confeti2' src='./images/confeti.gif'/>");
    $("#confeti2").show();

      $("#start").fadeTo(1500, 0 ,function(){
         $("#start").hide();
         $("#start-count").css("display","block");
         $("#start-count").prepend("<img id='theImg' src='./images/go.gif'/>");
         setTimeout(function() {
              $("#theImg").hide();
              $("#row-index").css("background-image","none");
              $("#start-count").hide();
              $("#board-game").show();
              setBoardGame();
            },
              2100);
       });
    })
}

// end

// return to the index page when the button back is clickOn

function clickButtonBack(){
  $("#back-button").click(function(){
              $("#confeti").hide();
              $("#confeti2").hide();
               $("#start").css("opacity","1");
               $("#start").show();
                 $("#board-game").css("display","none");
                 $("#row-index").css("background-image","");
                 $("#background-image-board").hide();
                 location.reload();

 });
}

//end

function  boardGameAnimate(){
  $("#background-image-board").fadeIn(2000);
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
      } ,410)
      }
    );
}

function stageGameAnimate(){
      $("#screen-letter").animate({"bottom":"20px"});
      $("#girl-stage").animate({"bottom":"120px"});
      $("#delete-b").animate({"bottom":"361px"});
      $("#ok-b").animate({"bottom":"22%"});
      $("#abc-b").animate({"bottom":"361px"});
      $("#mix-b").animate({"bottom":"22%"});
}


function clickButtonOk(){
  $("#ok-b").click(function(){
    var wordjoin = word.join();
    var answers = ["A1,M,A,R,T,E","A,M,A1,R","A1,M,A,R","R,A,M,A1","A,M,A1,R,T,E","R,A1,M,A","A1,M,A","A,M,A1"];
    answers.forEach(function(rightw){
      if (wordjoin===rightw){
        $("#board-match").append(rightw);
        console.log('yes')
      }
    });
 });
}

function remove(array, element) {
   const index = array.indexOf(element);
   array.splice(index, 1);
}

function gameMatch1(){
   var letter_A = $("#letters").prepend("<img id='A' src='./images/A.png'/>").hide().fadeIn(1200);
    var letter_R = $("#letters").prepend("<img id='R' src='./images/R.png'/>").hide().fadeIn(1200);
    var letter_M = $("#letters").prepend("<img id='M' src='./images/M.png'/>").hide().fadeIn(1200);
    var letter_T = $("#letters").prepend("<img id='T' src='./images/T.png'/>").hide().fadeIn(1200);
    var letter_E = $("#letters").prepend("<img id='E' src='./images/E.png'/>").hide().fadeIn(1200);
    var letter_A1 = $("#letters").prepend("<img id='A1' src='./images/A.png'/>").hide().fadeIn(1200);


    function upLetter(id){
      $(`#${id}`).css({"position": "relative"});
      var clicks = 0;
        $(`#${id}`).click(function(){
          if(clicks == 0){
              let x = $(`#${id}`).detach();
              $("#letters-up").append(x);
              word.push(id);
              console.log(word);
            clicks++;
          }
          else{
            remove(word,id);
            let x = $(`#${id}`).detach();
             $("#letters").append(x);
            clicks--;
          }
        });
    }

    upLetter(`A`);
    upLetter(`R`);
    upLetter(`M`);
    upLetter(`A1`);
    upLetter(`T`);
    upLetter(`E`);
    clickButtonOk();



}

function deleteB(){
  $("#delete-b").click(function(){
    let pop = word.pop();
    let x1 = $(`#${pop}`).detach();
     $("#letters").append(x1);

});
}

function arrayAnswer(compare){
    answers = ["amarte","amar"];

}

function setBoardGame(){

      boardGameAnimate();
      stageGameAnimate();
      gameMatch1();
      deleteB();
      arrayAnswer();

}



$(document).ready(function(){

            startMouseover();
            startMouseOut();
            clickButtonStart();
            clickButtonBack();
})
