  
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

    this.load.image('background', 'assets/background_two.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('startButton', 'assets/start-button.png');
    this.load.image('pipe', 'assets/tube1.png', 54, 320, 2);
    this.load.image('ball', 'assets/pangball.png');
    this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
    this.load.image('orlando', 'assets/orlandos.png'); 
    this.load.image('scoreboard', 'assets/scoreboard.png'); 
    this.load.image('gameover', 'assets/gameover.png'); 

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

