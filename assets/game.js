
var crystalScore = {
  randomnumber:0,
  red: 0,
  green: 0,
  white: 0,
  blue: 0,
  wins: 0,
  losses: 0,
  score: 0,
}

$(document).ready(function() {

function score() {
  if(crystalScore.score === crystalScore.randomnumber){
    crystalcount.wins++;
    $('#win').text(crystalcount.wins);
    newgame();

  }
  else if(crystalScore.score > crystalScore.randomnumber)
  {
    crystalcount.losses++;
    $('#losses').text(crystalcount.losses);
    newgame();
  }

}

function newgame(){
  crystalScore.randomnumber= Math.floor(Math.random()* 100)+ 1;
  $("#score").text(crystalScore.randomnumber);

  crystalScore.red = 0;
  crystalScore.green = 0;
  crystalScore.blue = 0;
  crystalScore.white = 0;
  crystalScore.count = 0;

}
//to generete randomnumberbtwn 18-120
  crystalcount.generatenumber = random();
  $(".value").text(crystalcount.generatenumber);

  $("#red").on("click", function() {          
    if(crystalcount.redcrystal==0){
   crystalcount.redcrystal=random(12,1);
     $("#redl").text($(this).text());
    }
    console.log(crystalcount.redcrystal);
    crystalcount.count=crystalcount.count+crystalcount.redcrystal;
    $("#yourScore").text(crystalcount.count);
    console.log(crystalcount.count);
    score();
    });
    $("#white").on("click", function() {
     if(crystalcount.whitecrystal==0){
    crystalcount.whitecrystal=random(12,1);
    $("#whitecrystal").text($(this).text());
     }
      console.log(crystalcount.whitecrystal);
      // console.log(crystalcount.count);
      crystalcount.count=crystalcount.count+crystalcount.whitecrystal;
      $("#yourScore").text(crystalcount.count);
      console.log(crystalcount.count);
      score();
    });
$("#blue").on("click", function() {

 if(crystalcount.bluecrystal==0) {
  crystalcount.bluecrystal=random(12,1);
  $("#bluecrystal").text($(this).text());
}
  console.log( crystalcount.bluecrystal);
  crystalcount.count=crystalcount.count+crystalcount.bluecrystal;
  $("#yourScore").text(crystalcount.count);
  console.log(crystalcount.count);
  score();
});
$("#green").on("click", function() {

 if(crystalcount.greencrystal==0) {

 crystalcount.greencrystal=random(12,1);
  $("#greencrystal").text($(this).text());
}
  console.log(crystalcount.greencrystal);
  crystalcount.count=crystalcount.count+crystalcount.greencrystal;
  $("#yourScore").text(crystalcount.count);
  console.log(crystalcount.count);
  score();
});

  
});
