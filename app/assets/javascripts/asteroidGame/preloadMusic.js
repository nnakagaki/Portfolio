Asteroids.Music.gameAudio1 = new Audio("assets/test.mp3");
Asteroids.Music.gameAudio2 = new Audio("assets/the-island-madeon-remix.mp3");
Asteroids.Music.menuAudio = new Audio("assets/menu.mp3");

Asteroids.Music.menuAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
