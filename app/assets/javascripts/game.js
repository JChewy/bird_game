var game = new Phaser.Game(288, 505, Phaser.AUTO, 'gameDiv');

game.state.add('boot', BootState);
game.state.add('preload', Preload);
game.state.add('menu', MenuState);
game.state.add('play', PlayState);
game.state.add('gameover', GameOver); 
game.state.start('boot');