var planet = require('./planet');

module.exports = function(scene){
  //Create a single planet(cube) for now;
  scene.add( planet(0, 1, 0, 'red'));
  scene.add( planet(0, -1, 0, 'red'));
  scene.add( planet(0, 3, 0, 'red'));
}
