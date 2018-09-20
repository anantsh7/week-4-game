var crystalScore = {
  randomnumber: 0,
  red: 0,
  green: 0,
  white: 0,
  blue: 0,
  wins: 0,
  losses: 0,
  score: 0,
}

$(document).ready(function () {

  function score() {
    if (crystalScore.score === crystalScore.randomnumber) {
      crystalScore.wins++;
      $('#win').text(crystalScore.wins);
      newgame();

    } else if (crystalScore.score > crystalScore.randomnumber) {
      crystalScore.losses++;
      $('#losses').text(crystalScore.losses);
      newgame();
    }

  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function newgame() {
    crystalScore.randomnumber = getRandomInt(1, 100);
    $("#score").text(crystalScore.randomnumber);

    crystalScore.red = 0;
    crystalScore.green = 0;
    crystalScore.blue = 0;
    crystalScore.white = 0;
    crystalScore.count = 0;

  }
  
  crystalScore.randomnumber = getRandomInt(1, 100);
  $("#score").text(crystalScore.randomnumber);

  $("#red").on("click", function () {
    if (crystalScore.red === 0) {
      crystalScore.red = getRandomInt(1, 20);
      $("#red").text($(this).text());
    }
    crystalScore.score = crystalScore.score + crystalScore.red;
    $("#yourScore").text(crystalScore.score);
    score();
  });
  $("#white").on("click", function () {
    if (crystalScore.white === 0) {
      crystalScore.white = getRandomInt(1, 20);
      $("#white").text($(this).text());
    }
    crystalScore.score = crystalScore.score + crystalScore.white;
    $("#yourScore").text(crystalScore.score);
    score();
  });
  $("#blue").on("click", function () {
    if (crystalScore.blue === 0) {
      crystalScore.blue = getRandomInt(1, 20);
      $("#blue").text($(this).text());
    }
    crystalScore.score = crystalScore.score + crystalScore.blue;
    $("#yourScore").text(crystalScore.score);
    score();
  });
  $("#green").on("click", function () {
    if (crystalScore.green == 0) {
      crystalScore.green = getRandomInt(1, 20);
      $("#green").text($(this).text());
    }
    crystalScore.score = crystalScore.score + crystalScore.green;
    $("#yourScore").text(crystalScore.score);
    score();
  });


});