onEvent("start_button", "click", function (){
  setScreen("game_screen"); 
});
var score = 0;
var lives = 3; 
onEvent("babyice", "click", function() {
  setPosition("babyice", randomNumber(20,280), randomNumber(240, 350)); 
  score = score +1; 
  setText("total_score", score); 
  if (score == 17) {
    setScreen("win_screen"); 
    playSound("Audience_Applause-Matthiew11-1206899159.mp3", false);
  }
});

onEvent("candyland", "click", function(){
  lives = lives - 1; 
  setText("lives_label", lives); 
  if (lives == 0){
    setScreen("lose_screen"); 
  }
});
onEvent("play_again", "click", function(event) {
  setScreen("background");
  setText("total_score", 0);
  lives = 3;
  setText("lives_label", lives); 
});
onEvent("play_again_win", "click", function(event) {
  setScreen("background");
  setText("total_score", 0);
  lives = 3;
  setText("lives_label", lives);
});
