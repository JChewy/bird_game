  
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
 preload: function(){
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.asset = this.add.sprite(this.width/2, this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.asset);

    this.load.image('background', './states/assets/background.png');
    this.load.image('ground', './states/assets/ground.png');
    this.load.image('title', './states/assets/title.png');
    this.load.image('startButton', './states/assets/start-button.png');
    this.load.image('pipe', './states/assets/tube1.png', 54, 320, 2);
    this.load.image('ball', './states/assets/pangball.png');
    this.load.spritesheet('bird', './states/assets/bird.png', 34, 24, 3);
    this.load.image('orlando', './states/assets/orlandos.png'); 
    this.load.image('scoreboard', './states/assets/scoreboard.png'); 
    this.load.image('gameover', './states/assets/gameover.png'); 

},
  create: function() {
    this.asset.cropEnabled = false;

          var counter = 0;
      var text = 0;
      //counter
      function updateCounter() {
        counter++;
        text.setText('Distance: ' + counter + "m");
      }

      text = game.add.text(game.world.centerX, game.world.centerY, 'Distance: 0m', { font: "40px Arial", fill: "white", align: "center" });
      text.anchor.setTo(0.5, 0.5);
      game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);

  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

