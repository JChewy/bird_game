# 'Flappy Bird Reborn'
#
# last update: 2014.04.16.
#
# * referenced codevinsky's tutorials:
#
#  - http://codevinsky.ghost.io/phaser-2-0-tutorial-flappy-bird-part-1/
#  - http://codevinsky.ghost.io/phaser-2-0-tutorial-flappy-bird-part-2/
#  - http://codevinsky.ghost.io/phaser-2-0-tutorial-flappy-bird-part-3/
#  - http://codevinsky.ghost.io/phaser-2-0-tutorial-flappy-bird-part-4/
#  - http://codevinsky.ghost.io/phaser-2-0-tutorial-flappy-bird-part-5/
#
# //= require_tree .

# Main Game class
#
class @Game
  # constants
  GAME_WIDTH = 288
  GAME_HEIGHT = 505

  # setup the game
  @setup = ->
    # game states
    game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game')
    game.state.add('boot', States.Boot)
    game.state.add('preload', States.Preload)
    game.state.add('menu', States.Menu)
    game.state.add('play', States.Play)

    # start
    game.state.start('boot')

