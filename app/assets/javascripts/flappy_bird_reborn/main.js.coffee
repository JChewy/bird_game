class @Game
  GAME_WIDTH = 800
  GAME_HEIGHT = 505


  @setup = ->

    game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game')
    game.state.add('boot', States.Boot)
    game.state.add('preload', States.Preload)
    game.state.add('menu', States.Menu)
    game.state.add('play', States.Play)

    game.state.start('boot')

