var game = new Phaser.Game(800, 405, Phaser.AUTO, 'game');

game.state.add('boot', BootState);
game.state.add('preload', Preload);
game.state.add('menu', MenuState);
game.state.add('play', PlayState);
game.state.start('boot');

