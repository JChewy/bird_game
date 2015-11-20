

function BootState() {
}

BootState.prototype = {
  preload: function() {
    this.load.image('background', './states/assets/background.png');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};
